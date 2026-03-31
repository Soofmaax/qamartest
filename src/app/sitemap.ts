import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  // Only indexable routes should be listed here (no "merci" / legal placeholders, etc.).
  const routes = [
    "/",
    "/services/",
    "/portfolio/",
    "/contact/",
    "/signature/",

    "/mariage/",
    "/mariage/karim-ines/",
    "/mariage/ninon-alexandre/",
    "/mariage/sokona-julien/",

    "/corporate/",
    "/corporate/portraits-professionnels/",
    "/corporate/reportages-entreprise/",
    "/corporate/presentation-marque/",
    "/corporate/films-institutionnels/",
    "/corporate/contenu-web-reseaux/",

    "/evenementiel/",

    "/publicite-digitale/",
    "/publicite-digitale/conception-brainstorming-marketing/",
    "/publicite-digitale/creation-photo-video-premium/",
    "/publicite-digitale/adaptation-formats-social-media/",
    "/publicite-digitale/optimisation-conversions-branding/",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
