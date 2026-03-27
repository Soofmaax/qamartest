import fs from "node:fs/promises";
import path from "node:path";

const OUT_DIR = process.argv[2] ?? "out";

const pages = [
  { route: "/", file: "index.html" },
  { route: "/services/", file: path.join("services", "index.html") },
  { route: "/portfolio/", file: path.join("portfolio", "index.html") },
  { route: "/contact/", file: path.join("contact", "index.html") },
  { route: "/mariage/", file: path.join("mariage", "index.html") },
  { route: "/corporate/", file: path.join("corporate", "index.html") },
  { route: "/événementiel/", file: path.join("événementiel", "index.html") },
  {
    route: "/publicité-digitale/",
    file: path.join("publicité-digitale", "index.html"),
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

async function readOutFile(relPath) {
  const full = path.join(OUT_DIR, relPath);
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

async function main() {
  const preview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

  await checkSitemap();
  await checkRobots({ preview });
  await checkPages({ preview });

  // eslint-disable-next-line no-console
  console.log(
    `SEO QA passed for ${pages.length} pages in ${OUT_DIR}${preview ? " (preview)" : ""}.`
  );
}

await main();
