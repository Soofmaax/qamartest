# AGENTS (AI + humans)

## Non-negotiables

- Keep the site compatible with static export for GitHub Pages preview (`output: "export"`).
- Don’t introduce `any`.
- Don’t introduce server-only APIs into pages meant to be exported.

## Where to change things

- Page SEO: `createPageMetadata` in `src/lib/seo.ts` and `seo` objects inside each `src/app/**/page.tsx`.
- Structured data (JSON-LD): `src/lib/structuredData.ts` and `<JsonLd />` usage.
- Global layout / header / footer: `src/app/layout.tsx`, `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`.

## Next.js static export rules

- `src/app/robots.ts` and `src/app/sitemap.ts` must include:

```ts
export const dynamic = "force-static";
```

- If you need query params (ex: `?sent=1`), read them in a client component.
- If you must use `next/navigation` hooks that can trigger CSR bailouts, wrap the client component in `<Suspense>` or avoid those hooks.

## Commands

```bash
npm run lint
npm run build
npm run seo:qa
```
