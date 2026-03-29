import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { CORPORATE_WEB_CONTENT_PAGE } from "@/lib/pageContent";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = CORPORATE_WEB_CONTENT_PAGE.seo;

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
      { name: "Contenu pour site web & réseaux", path: seo.path },
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
      name: "Contenu pour site web & réseaux",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function ContenuWebReseauxPage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title={CORPORATE_WEB_CONTENT_PAGE.title}
      eyebrow={CORPORATE_WEB_CONTENT_PAGE.eyebrow}
      description={CORPORATE_WEB_CONTENT_PAGE.description}
      heroImage={CORPORATE_WEB_CONTENT_PAGE.heroImage}
      gallery={CORPORATE_WEB_CONTENT_PAGE.gallery}
    />
  );
}
