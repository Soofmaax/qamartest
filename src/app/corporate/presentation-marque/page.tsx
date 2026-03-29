import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { CORPORATE_PRESENTATION_PAGE } from "@/lib/pageContent";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = CORPORATE_PRESENTATION_PAGE.seo;

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
      { name: "Présentation de marque", path: seo.path },
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
      name: "Présentation de marque",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function PresentationMarquePage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title={CORPORATE_PRESENTATION_PAGE.title}
      eyebrow={CORPORATE_PRESENTATION_PAGE.eyebrow}
      description={CORPORATE_PRESENTATION_PAGE.description}
      heroImage={CORPORATE_PRESENTATION_PAGE.heroImage}
      gallery={CORPORATE_PRESENTATION_PAGE.gallery}
    />
  );
}
