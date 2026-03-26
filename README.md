# Directed by Qamar — static site (Next.js export)

This repo contains a static-exported Next.js site (App Router) for **Directed by Qamar**.

## Development

```bash
npm install
npm run dev
```

## Production build (static export)

This project uses `output: "export"`, so the build outputs a static site into `./out`.

```bash
npm run build
```

## SEO QA (optional)

After building, you can run a small sanity check on the exported HTML:

```bash
npm run seo:qa
```

## Preview vs production indexing

`NEXT_PUBLIC_IS_PREVIEW=1` enables `noindex/nofollow` (via metadata + `robots.txt`) for preview deployments (e.g. GitHub Pages).

Production (directedbyqamar.com) should build without this env var.
