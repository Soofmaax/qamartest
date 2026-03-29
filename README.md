# Directed by Qamar — static site (Next.js export)

This repo contains a static-exported Next.js site (App Router) for **Directed by Qamar**.

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
NEXT_PUBLIC_IS_PREVIEW=1 NEXT_PUBLIC_BASE_PATH=/REPO_NAME npm run build
```

Notes:
- `NEXT_PUBLIC_BASE_PATH` must match the GitHub Pages base path (usually `/<repo-name>`).
- `NEXT_PUBLIC_IS_PREVIEW=1` enables `noindex/nofollow` (via metadata + `robots.txt`) for preview deployments.

## Production build (no basePath)

Production (directedbyqamar.com) should build without preview env vars:

```bash
npm run build
```

## SEO QA (optional)

After building, you can run a small sanity check on the exported HTML:

```bash
npm run seo:qa
```

## Project conventions (for maintainability)

See:
- `CONTRIBUTING.md` (conventions, structure, and rules for Next export)
- `AGENTS.md` (quick rules for AI-assisted changes)

## TODO (content polish)

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