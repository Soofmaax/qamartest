import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = process.argv[2] ?? "out";

let OUT_PREFIX = "";

const pages = [
  { route: "/", file: "index.html" },
  { route: "/services/", file: path.join("services", "index.html") },
  { route: "/portfolio/", file: path.join("portfolio", "index.html") },
  { route: "/contact/", file: path.join("contact", "index.html") },
  { route: "/mariage/", file: path.join("mariage", "index.html") },

  { route: "/corporate/", file: path.join("corporate", "index.html") },
  {
    route: "/corporate/portraits-professionnels/",
    file: path.join("corporate", "portraits-professionnels", "index.html"),
  },
  {
    route: "/corporate/reportages-entreprise/",
    file: path.join("corporate", "reportages-entreprise", "index.html"),
  },
  {
    route: "/corporate/presentation-marque/",
    file: path.join("corporate", "presentation-marque", "index.html"),
  },
  {
    route: "/corporate/films-institutionnels/",
    file: path.join("corporate", "films-institutionnels", "index.html"),
  },
  {
    route: "/corporate/contenu-web-reseaux/",
    file: path.join("corporate", "contenu-web-reseaux", "index.html"),
  },

  { route: "/evenementiel/", file: path.join("evenementiel", "index.html") },

  { route: "/publicite-digitale/", file: path.join("publicite-digitale", "index.html") },
  {
    route: "/publicite-digitale/conception-brainstorming-marketing/",
    file: path.join(
      "publicite-digitale",
      "conception-brainstorming-marketing",
      "index.html"
    ),
  },
  {
    route: "/publicite-digitale/creation-photo-video-premium/",
    file: path.join("publicite-digitale", "creation-photo-video-premium", "index.html"),
  },
  {
    route: "/publicite-digitale/adaptation-formats-social-media/",
    file: path.join("publicite-digitale", "adaptation-formats-social-media", "index.html"),
  },
  {
    route: "/publicite-digitale/optimisation-conversions-branding/",
    file: path.join("publicite-digitale", "optimisation-conversions-branding", "index.html"),
  },
];

function fail(message) {
  const err = new Error(message);
  err.name = "SeoQaError";
  throw err;
}

function getFirstMatch(html, regex) {
  const match = html.match(regex);
  return match?.[1] ?? null;
}

function assertIncludes(haystack, needle, message) {
  if (!haystack.includes(needle)) fail(message);
}

function assertTruthy(value, message) {
  if (!value) fail(message);
}

function extractCanonicalHref(html) {
  // Handles: <link rel="canonical" href="..."> (any attribute order)
  const tag = getFirstMatch(html, /(<link\b[^>]*\brel=["']canonical["'][^>]*>)/i);
  if (!tag) return null;

  const href = getFirstMatch(tag, /\bhref=["']([^"']+)["']/i);
  return href;
}

function hasMetaTag(html, attrs) {
  // Very lightweight: check that a <meta ...> tag exists with all required substrings.
  const metas = html.match(/<meta\b[^>]*>/gi) ?? [];
  return metas.some((tag) =>
    attrs.every((attr) => tag.toLowerCase().includes(attr))
  );
}

function hasJsonLd(html) {
  return /<script\b[^>]*type=["']application\/ld\+json["'][^>]*>/i.test(html);
}

function normalizeBasePath(basePath) {
  return basePath.replace(/^\/+|\/+$/g, "");
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

async function detectOutPrefix() {
  const rootRobots = path.join(OUT_DIR, "robots.txt");
  if (await fileExists(rootRobots)) {
    // If the export is rooted at OUT_DIR, we should also have index.html there.
    // If not, it’s likely exported under a basePath folder.
    const rootIndex = path.join(OUT_DIR, "index.html");
    if (await fileExists(rootIndex)) return "";
  }

  const envBasePath = normalizeBasePath(process.env.NEXT_PUBLIC_BASE_PATH ?? "");
  if (envBasePath) {
    const envRobots = path.join(OUT_DIR, envBasePath, "robots.txt");
    if (await fileExists(envRobots)) return envBasePath;
  }

  const entries = await fs.readdir(OUT_DIR, { withFileTypes: true });
  const candidates = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    if (entry.name === "_next") continue;

    const candidateRobots = path.join(OUT_DIR, entry.name, "robots.txt");
    if (await fileExists(candidateRobots)) candidates.push(entry.name);
  }

  if (candidates.length === 1) return candidates[0];

  fail(
    `Could not locate robots.txt in ${OUT_DIR} (checked root and ${candidates.length ? `candidates: ${candidates.join(", ")}` : "no candidates"}).`
  );
}

async function readOutFile(relPath) {
  const full = path.join(OUT_DIR, OUT_PREFIX, relPath);
  return fs.readFile(full, "utf8");
}

async function checkSitemap() {
  const xml = await readOutFile("sitemap.xml");

  const expectedUrls = pages.map((p) => `https://www.directedbyqamar.com${p.route}`);
  for (const url of expectedUrls) {
    assertIncludes(xml, `<loc>${url}</loc>`, `sitemap.xml missing <loc>${url}</loc>`);
  }
}

async function checkRobots({ preview }) {
  const txt = await readOutFile("robots.txt");

  if (preview) {
    assertIncludes(txt, "User-agent:", "robots.txt missing User-agent");
    assertIncludes(txt, "Disallow: /", "preview robots.txt should disallow all");
    return;
  }

  assertIncludes(txt, "User-agent:", "robots.txt missing User-agent");
  assertIncludes(txt, "Allow: /", "robots.txt should allow /");
  assertIncludes(
    txt,
    "Sitemap: https://www.directedbyqamar.com/sitemap.xml",
    "robots.txt missing Sitemap"
  );
}

async function checkPages({ preview }) {
  for (const page of pages) {
    const html = await readOutFile(page.file);

    const canonical = extractCanonicalHref(html);
    assertTruthy(canonical, `${page.route}: missing canonical link tag`);
    if (!canonical.endsWith("/")) {
      fail(`${page.route}: canonical href must end with a trailing slash (got: ${canonical})`);
    }

    const hasOgTitle = hasMetaTag(html, ['property="og:title"', "content="]);
    const hasOgDesc = hasMetaTag(html, ['property="og:description"', "content="]);
    const hasOgImage = hasMetaTag(html, ['property="og:image"', "content="]);

    if (!hasOgTitle) fail(`${page.route}: missing og:title`);
    if (!hasOgDesc) fail(`${page.route}: missing og:description`);
    if (!hasOgImage) fail(`${page.route}: missing og:image`);

    const hasTwitterCard = hasMetaTag(html, ['name="twitter:card"', "content="]);
    if (!hasTwitterCard) fail(`${page.route}: missing twitter:card`);

    if (!hasJsonLd(html)) {
      fail(`${page.route}: missing JSON-LD <script type="application/ld+json">`);
    }

    if (preview) {
      const robotsTag = getFirstMatch(html, /(<meta\b[^>]*\bname=["']robots["'][^>]*>)/i);
      assertTruthy(robotsTag, `${page.route}: missing robots meta tag (preview build)`);

      const content = getFirstMatch(robotsTag, /\bcontent=["']([^"']+)["']/i) ?? "";
      const normalized = content.toLowerCase().replace(/\s+/g, "");

      if (!normalized.includes("noindex") || !normalized.includes("nofollow")) {
        fail(
          `${page.route}: robots meta should include noindex,nofollow in preview build (got: ${content})`
        );
      }
    }
  }
}

async function detectPreview() {
  if (process.env.NEXT_PUBLIC_IS_PREVIEW === "1") return true;

  // When running QA against a pre-built export, infer preview mode from robots.txt.
  const txt = await readOutFile("robots.txt");
  return /^\s*Disallow:\s*\/\s*$/im.test(txt);
}

async function main() {
  OUT_PREFIX = (await detectOutPrefix()) ?? "";

  const preview = await detectPreview();

  await checkSitemap();
  await checkRobots({ preview });
  await checkPages({ preview });

  // eslint-disable-next-line no-console
  console.log(
    `SEO QA passed for ${pages.length} pages in ${path.join(OUT_DIR, OUT_PREFIX)}${preview ? " (preview)" : ""}.`
  );
}

await main();
