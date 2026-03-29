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

## Tracking / Ads conversions (GTM, GA4, Google Ads, Meta)

This project uses **Google Tag Manager (GTM)** for Ads pixels/conversions and **GA4** for analytics.

### Environment variables

Configure these in your hosting provider (and locally via `.env.local` if needed):

- `NEXT_PUBLIC_GTM_ID` (example: `GTM-XXXXXXX`)
- `NEXT_PUBLIC_GA4_ID` (example: `G-XXXXXXXXXX`)
- `NEXT_PUBLIC_META_PIXEL_ID` (example: `1234567890`)

Notes:
- The Meta Pixel is injected via **GTM** (not hard-coded). `NEXT_PUBLIC_META_PIXEL_ID` is pushed to the `dataLayer` as `meta_pixel_id` so GTM can read it.

### Contact form conversion events

On successful submission of `/contact/`, the app pushes the following to `dataLayer`:

- `event: "contact_form_submitted"`
- `page: "/contact/"`
- `service: "..."` (only if selected)

The thank-you page (`/merci/`) pushes:

- `event: "contact_thank_you_view"`
- `page: "/merci/"`
- `service: "..."` (copied from query param)

### GTM setup (what to configure)

In GTM, create:

1) **Data Layer Variables**
- `service` (Data Layer variable name: `service`)
- (optional) `meta_pixel_id` (Data Layer variable name: `meta_pixel_id`)

2) **Triggers**
- Custom Event trigger: `contact_form_submitted`
- Custom Event trigger: `contact_thank_you_view`

You can fire Ads conversions on either event. Prefer using the thank-you event if you want to track only after the user reaches `/merci/`.

### Google Ads conversion

In GTM:
- Tag type: **Google Ads Conversion Tracking**
- Trigger: `contact_thank_you_view` (or `contact_form_submitted`)

Where to enter credentials:
- Conversion ID: in the tag field **Conversion ID**
- Conversion Label: in the tag field **Conversion Label**

### Meta Pixel (Lead event)

In GTM:
- Add a Meta Pixel base tag (or Custom HTML) using your **Pixel ID**
- Add an Event tag for **Lead**
- Trigger: `contact_thank_you_view` (or `contact_form_submitted`)

Where to enter the Pixel ID:
- In the Meta Pixel tag configuration (or in your Custom HTML snippet). You may also read `meta_pixel_id` from the dataLayer if you want environment-based switching.

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
