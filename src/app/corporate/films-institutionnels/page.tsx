import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { CORPORATE_FILMS_PAGE } from "@/lib/pageContent";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = CORPORATE_FILMS_PAGE.seo;

export const metadata: Metadata = createPageMetadata(seo);

const url = absoluteUrl(seo.path);
const webpageId = `${url}#webpage`;
const serviceId = `${url}#service`;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: "/" },
      { name: "Corporate", path: "/corporate/" },
      { name: "Films institutionnels", path: seo.path },
    ],
  }),
  {
    ...buildWebPage({
      path: seo.path,
      name: seo.title,
      description: seo.description,
      imageUrl: seo.image,
    }),
    mainEntity: { "@id": serviceId },
  },
  {
    ...buildService({
      path: seo.path,
      name: "Films institutionnels",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function FilmsInstitutionnelsPage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title={CORPORATE_FILMS_PAGE.title}
      eyebrow={CORPORATE_FILMS_PAGE.eyebrow}
      description={CORPORATE_FILMS_PAGE.description}
      heroImage={CORPORATE_FILMS_PAGE.heroImage}
      gallery={CORPORATE_FILMS_PAGE.gallery}
    />
  );
}
