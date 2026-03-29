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

## TODO (corporate service detail pages)

When clicking "En savoir plus" on `/corporate/`, each service should land on a dedicated SEO page with richer content (Portraits professionnels, Reportages d’entreprise, Présentation de marque, Films institutionnels, Contenu pour site web & réseaux):

- Add a short section explaining the process (préparation, shooting, livraison, formats, délais).
- Add/replace the gallery images (you will provide the final images).

Pages:
- `/corporate/portraits-professionnels/`
- `/corporate/reportages-entreprise/`
- `/corporate/presentation-marque/`
- `/corporate/films-institutionnels/`
- `/corporate/contenu-web-reseaux/`