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
  ];

  return routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
