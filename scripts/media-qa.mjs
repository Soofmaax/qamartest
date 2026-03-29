import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = process.argv[2] ?? "out";

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

async function main() {
  const outPrefix = await detectOutPrefix();
  const baseDir = path.join(OUT_DIR, outPrefix);

  const files = (await listFilesRecursive(baseDir)).filter((f) => f.endsWith(".html"));

  if (files.length === 0) {
    fail(`No .html files found under ${baseDir}`);
  }

  for (const fullPath of files) {
    const relPath = path.relative(baseDir, fullPath);
    const html = await fs.readFile(fullPath, "utf8");
    checkHtml(html, relPath);
  }

  // eslint-disable-next-line no-console
  console.log(`Media QA passed for ${files.length} HTML files in ${baseDir}.`);
}

await main();
