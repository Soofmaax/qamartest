# Directed by Qamar · static site (Next.js export)

This repo contains a static-exported Next.js site (App Router) for **Directed by Qamar**.

## Requirements

- Node.js 22 (matches CI)
- npm (this repo uses `package-lock.json`)

## Development

```bash
npm ci
npm run dev
```

## CI checks (before opening/merging a PR)

```bash
npm run lint
npm run build
```

## GitHub Pages / preview build (static export)

This project uses `output: "export"` for preview deployments (e.g. GitHub Pages). The build outputs a static site into `./out`.

```bash
NEXT_PUBLIC_IS_PREVIEW=1 NEXT_PUBLIC_BASE_PATH="/<repo-name>" npm run build
```

Notes:
- `NEXT_PUBLIC_BASE_PATH` must match the GitHub Pages base path (usually `/<repo-name>`).
- `NEXT_PUBLIC_IS_PREVIEW=1` enables `noindex/nofollow` (via metadata + `robots.txt`) for preview deployments.
- In preview/static export mode, Next.js does not support runtime `headers()`/`redirects()`. This repo omits them entirely from `next.config.ts` when `NEXT_PUBLIC_IS_PREVIEW=1` to avoid build warnings.

## Production build (no basePath)

Production (directedbyqamar.com) should build without preview env vars:

```bash
npm run build
```

## SEO QA (optional)

`npm run seo:qa` validates the exported HTML in `./out`, so it must be run after a preview/static export build.

```bash
NEXT_PUBLIC_IS_PREVIEW=1 NEXT_PUBLIC_BASE_PATH="/<repo-name>" npm run build
npm run seo:qa
```

## Video (YouTube)

- `src/components/YouTubeEmbed.tsx`: lazy-loaded YouTube iframe (no iframe until click).
- `src/lib/videos.ts`: add entries to `SITE_VIDEOS` to:
  - generate `/video-sitemap.xml`
  - attach `VideoObject` JSON-LD on pages that pull a primary video via `getPrimaryVideoForPage(path)`

## Image alt text

- `src/lib/altText.ts`: `buildImageAlt(...)` helper.
- Gallery/portfolio components use it so future content updates mostly require only image URLs + titles.

## Project conventions (for maintainability)

See:
- `CONTRIBUTING.md` (conventions, structure, and rules for Next export)
- `AGENTS.md` (quick rules for AI-assisted changes)
- `SEO_TECH_CHECKLIST.md` (SEO tech checklist for migration)

## TODO (before/after next PRs)

- Provide final copy for "Mentions légales" and "CGV" pages (currently placeholders), then remove `noindex` and add them to the sitemap.
- Keep the social URLs in `src/components/SiteFooter.tsx` up to date.
- Keep Google review stats (`src/components/GoogleReviewsSection.tsx`) in sync with the Google Business Profile.

## Content backlog (non-code)

The dedicated SEO pages now exist for each service category. Remaining work is content-level:

- Refine copy (tone/duplication) and add a clear “process” section where relevant.
- Replace the placeholder gallery images with final selections.

Pages:
- `/corporate/portraits-professionnels/`
- `/corporate/reportages-entreprise/`
- `/corporate/presentation-marque/`
- `/corporate/films-institutionnels/`
- `/corporate/contenu-web-reseaux/`
- `/publicite-digitale/…` (service detail pages)