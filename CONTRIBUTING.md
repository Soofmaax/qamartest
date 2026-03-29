# Contributing

## Quick start

Requirements: Node.js 22 (matches CI) + npm.

```bash
npm ci
npm run dev
```

Before pushing / opening a PR:

```bash
npm run lint
npm run build
```

## Project structure

- `src/app/*`: Next.js App Router routes.
- `src/components/*`: reusable UI components.
- `src/lib/*`: SEO helpers, structured data, shared utilities.
- `scripts/*`: maintenance scripts (ex: `seo-qa.mjs`).

## Static export (GitHub Pages preview)

Preview builds use `output: "export"` and must stay fully static.

Rules:
- Don’t use server-only APIs in pages that must be statically exported:
  - `cookies()`, `headers()`, `draftMode()`, `unstable_noStore()`, etc.
- Avoid making pages `async` just to access `searchParams`.
- If you need to read query parameters (example: `?sent=1`), do it in a **client component**.

Special routes:
- `src/app/robots.ts` and `src/app/sitemap.ts` must include:

```ts
export const dynamic = "force-static";
```

## SEO QA

`npm run seo:qa` validates the exported HTML in `./out`, so it must be run after a preview/static export build.

## TypeScript & lint rules

- Keep `strict: true`.
- Don’t introduce `any`.
- Prefer `unknown` + refinement or proper types.

## SEO / metadata

- Metadata lives in each page and is generated via `createPageMetadata`.
- JSON-LD graphs are built via `buildWebPageGraph` / helpers in `src/lib/structuredData.ts`.
- Always keep canonical URLs with trailing slashes.

## Adding a new page

Checklist:
- Add `seo` object (`title`, `description`, `path`, `image`).
- `export const metadata = createPageMetadata(seo)`
- Add JSON-LD via `<JsonLd ... />`
- If it should appear in the sitemap, add the route to `src/app/sitemap.ts`.
