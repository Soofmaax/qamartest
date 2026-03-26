import type { Metadata } from "next";
import { SITE_URL as STRUCTURED_DATA_SITE_URL } from "@/lib/structuredData";

// Single source of truth for the canonical site URL.
export const SITE_URL = STRUCTURED_DATA_SITE_URL;

export const DEFAULT_OG_IMAGE = {
  url: "https://framerusercontent.com/images/yRve70fy1dkrL8wzTIRucXzC1o.png",
  width: 1200,
  height: 630,
  alt: "Directed by Qamar",
};

type CreatePageMetadataInput = {
  title: string;
  description: string;
  /** Prefer providing `path` ("/mariage/") — kept for backwards-compat. */
  canonical?: string;
  /** Route path with leading and trailing slash ("/mariage/"). */
  path?: string;
  /** Absolute URL to an OG image. */
  image?: string;
};

function normalizePath(path: string) {
  let p = path.trim();
  if (!p.startsWith("/")) p = `/${p}`;
  if (!p.endsWith("/")) p = `${p}/`;
  return p;
}

export function createPageMetadata({
  title,
  description,
  canonical,
  path,
  image,
}: CreatePageMetadataInput): Metadata {
  const canonicalPath = normalizePath(canonical ?? path ?? "/");
  const url = new URL(canonicalPath, SITE_URL).toString();

  const openGraphImages: NonNullable<
    NonNullable<Metadata["openGraph"]>["images"]
  > = image
    ? [{ url: image, alt: title }]
    : [
        {
          url: DEFAULT_OG_IMAGE.url,
          width: DEFAULT_OG_IMAGE.width,
          height: DEFAULT_OG_IMAGE.height,
          alt: DEFAULT_OG_IMAGE.alt,
        },
      ];

  const twitterImages = image ? [image] : [DEFAULT_OG_IMAGE.url];

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      type: "website",
      title,
      description,
      url,
      images: openGraphImages,
      locale: "fr_FR",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: twitterImages,
    },
  };
}
