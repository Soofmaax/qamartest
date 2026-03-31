import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";
import { SITE_VIDEOS } from "@/lib/videos";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

  if (isPreview) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap:
      SITE_VIDEOS.length > 0
        ? [`${SITE_URL}/sitemap.xml`, `${SITE_URL}/video-sitemap.xml`]
        : [`${SITE_URL}/sitemap.xml`],
  };
}
