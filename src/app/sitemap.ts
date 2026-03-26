import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.directedbyqamar.com";
  const lastModified = new Date();

  const routes = [
    "/",
    "/services/",
    "/portfolio/",
    "/contact/",
    "/mariage/",
    "/corporate/",
    "/événementiel/",
    "/publicité-digitale/",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
