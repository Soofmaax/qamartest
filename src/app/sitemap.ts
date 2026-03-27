import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = [
    "/",
    "/services/",
    "/portfolio/",
    "/contact/",
    "/mariage/",
    "/corporate/",
    "/corporate/portraits-professionnels/",
    "/corporate/reportages-entreprise/",
    "/corporate/presentation-marque/",
    "/corporate/films-institutionnels/",
    "/corporate/contenu-web-reseaux/",
    "/événementiel/",
    "/publicité-digitale/",
    "/publicité-digitale/conception-brainstorming-marketing/",
    "/publicité-digitale/creation-photo-video-premium/",
    "/publicité-digitale/adaptation-formats-social-media/",
    "/publicité-digitale/optimisation-conversions-branding/",
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
