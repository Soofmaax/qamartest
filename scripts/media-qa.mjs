import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = process.argv[2] ?? "out";
const PUBLIC_DIR = path.resolve("public");
const MEDIA_EXTENSIONS = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".avif",
  ".mp4",
  ".mov",
  ".webm",
]);
const PORTFOLIO_BUDGET_BYTES = 300 * 1024;
const HERO_BUDGET_BYTES = 500 * 1024;
const VIDEO_BUDGET_BYTES = 7 * 1024 * 1024;
const ROOT_MEDIA_WARN_BYTES = 2 * 1024 * 1024;
const warnedMessages = [];

function fail(message) {
  const err = new Error(message);
  err.name = "MediaQaError";
  throw err;
}

async function fileExists(fullPath) {
  try {
    await fs.access(fullPath);
    return true;
  } catch (err) {
    if (err && typeof err === "object" && "code" in err && err.code === "ENOENT") {
      return false;
    }
    throw err;
  }
}

function normalizeBasePath(basePath) {
  return basePath.replace(/^\/+|\/+$/g, "");
}

async function detectOutPrefix() {
  const rootIndex = path.join(OUT_DIR, "index.html");
  if (await fileExists(rootIndex)) return "";

  const envBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  if (envBasePath) {
    const envIndex = path.join(OUT_DIR, envBasePath, "index.html");
    if (await fileExists(envIndex)) return envBasePath;
  }

  const entries = await fs.readdir(OUT_DIR, { withFileTypes: true });
  const candidates = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "_next") continue;

    const candidateIndex = path.join(OUT_DIR, entry.name, "index.html");
    if (await fileExists(candidateIndex)) candidates.push(entry.name);
  }

  if (candidates.length === 1) return candidates[0];

  fail(
    `Could not locate index.html in ${OUT_DIR} (checked root and ${candidates.length ? `candidates: ${candidates.join(", ")}` : "no candidates"}).`
  );
}

async function listFilesRecursive(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await listFilesRecursive(fullPath)));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

function extractTags(html, tagName) {
  const re = new RegExp(`<${tagName}\\b[^>]*>`, "gi");
  return html.match(re) ?? [];
}

function getAttr(tag, attr) {
  const re = new RegExp(`\\b${attr}=["']([^"']*)["']`, "i");
  const m = tag.match(re);
  return m?.[1] ?? null;
}

function isWhitespaceOnly(value) {
  return value.trim().length === 0;
}

function isPortfolioMedia(filePath) {
  return filePath.includes(`${path.sep}images${path.sep}portfolio${path.sep}`);
}

function isHeroCandidate(filePath) {
  return (
    filePath.includes(`${path.sep}images${path.sep}mariage${path.sep}`) ||
    filePath.includes(`${path.sep}images${path.sep}portfolio${path.sep}`)
  );
}

function isRawImport(filePath) {
  return filePath.includes(`${path.sep}raw-import${path.sep}`);
}

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function warn(message) {
  warnedMessages.push(message);
}

function checkHtml(html, relPath) {
  // Images must not have empty alt attributes.
  for (const tag of extractTags(html, "img")) {
    const alt = getAttr(tag, "alt");
    if (alt === null) continue;
    if (isWhitespaceOnly(alt)) {
      fail(`${relPath}: <img> has empty alt attribute (${tag})`);
    }
  }

  // YouTube iframes should have a descriptive title.
  for (const tag of extractTags(html, "iframe")) {
    const src = getAttr(tag, "src") ?? "";
    if (!src.includes("youtube.com") && !src.includes("youtube-nocookie.com")) continue;

    const title = getAttr(tag, "title");
    if (!title || isWhitespaceOnly(title)) {
      fail(`${relPath}: YouTube <iframe> missing title attribute (${tag})`);
    }
  }
}

async function collectReferencedPublicMedia(baseDir) {
  const htmlFiles = (await listFilesRecursive(baseDir)).filter((f) => f.endsWith(".html"));
  const referenced = new Set();

  for (const fullPath of htmlFiles) {
    const html = await fs.readFile(fullPath, "utf8");
    const attrRe = /\b(?:src|href|poster)=["']([^"']+)["']/gi;
    let match;

    while ((match = attrRe.exec(html)) !== null) {
      const value = match[1];
      if (!value.startsWith("/")) continue;
      if (value.startsWith("/_next/")) continue;
      referenced.add(value.split("?")[0]);
    }
  }

  return referenced;
}

async function checkPublicMedia(referencedPublicMedia) {
  if (!(await fileExists(PUBLIC_DIR))) return;

  const files = await listFilesRecursive(PUBLIC_DIR);

  for (const fullPath of files) {
    const ext = path.extname(fullPath).toLowerCase();

    if (!MEDIA_EXTENSIONS.has(ext)) continue;
    if (isRawImport(fullPath)) continue;

    const relPath = path.relative(PUBLIC_DIR, fullPath);
    const stat = await fs.stat(fullPath);

    if (ext === ".mp4" || ext === ".mov" || ext === ".webm") {
      if (stat.size > VIDEO_BUDGET_BYTES) {
        fail(
          `public/${relPath}: video is ${formatBytes(stat.size)} (limit ${formatBytes(VIDEO_BUDGET_BYTES)}). Compress it or replace with a lighter delivery format.`
        );
      }
      continue;
    }

    if (isPortfolioMedia(fullPath) && stat.size > PORTFOLIO_BUDGET_BYTES) {
      warn(
        `public/${relPath}: portfolio image is ${formatBytes(stat.size)} (target ${formatBytes(PORTFOLIO_BUDGET_BYTES)}). Export a web-sized WebP/AVIF asset.`
      );
    }

    const publicPath = `/${relPath.split(path.sep).join("/")}`;
    const isReferencedBySite = referencedPublicMedia.has(publicPath);

    if (isHeroCandidate(fullPath) && isReferencedBySite && stat.size > HERO_BUDGET_BYTES) {
      warn(
        `public/${relPath}: hero/gallery candidate is ${formatBytes(stat.size)} (target ${formatBytes(HERO_BUDGET_BYTES)}). Resize and recompress it.`
      );
    }

    if (ext === ".png" && stat.size > ROOT_MEDIA_WARN_BYTES) {
      if (isPortfolioMedia(fullPath) && !isReferencedBySite) {
        warn(
          `public/${relPath}: large portfolio PNG is ${formatBytes(stat.size)}. Convert photo-like PNG assets to WebP or AVIF before serving it on the site.`
        );
        continue;
      }

      fail(
        `public/${relPath}: large PNG photo detected at ${formatBytes(stat.size)}. Convert photo-like PNG assets to WebP or AVIF.`
      );
    }
  }
}

async function main() {
  const outPrefix = await detectOutPrefix();
  const baseDir = path.join(OUT_DIR, outPrefix);
  const referencedPublicMedia = await collectReferencedPublicMedia(baseDir);

  const files = (await listFilesRecursive(baseDir)).filter((f) => f.endsWith(".html"));

  if (files.length === 0) {
    fail(`No .html files found under ${baseDir}`);
  }

  for (const fullPath of files) {
    const relPath = path.relative(baseDir, fullPath);
    const html = await fs.readFile(fullPath, "utf8");
    checkHtml(html, relPath);
  }

  await checkPublicMedia(referencedPublicMedia);

  for (const message of warnedMessages) {
    // eslint-disable-next-line no-console
    console.warn(`Warning: ${message}`);
  }

  // eslint-disable-next-line no-console
  console.log(`Media QA passed for ${files.length} HTML files in ${baseDir}.`);
}

await main();
