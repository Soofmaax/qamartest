import type { Metadata } from "next";
import { DigitalAdsServicePage } from "@/components/DigitalAdsServicePage";
import { DIGITAL_ADS_CONCEPTION_PAGE } from "@/lib/pageContent";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = DIGITAL_ADS_CONCEPTION_PAGE.seo;

export const metadata: Metadata = createPageMetadata(seo);

const url = absoluteUrl(seo.path);
const webpageId = `${url}#webpage`;
const serviceId = `${url}#service`;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: "/" },
      { name: "Publicité digitale", path: "/publicite-digitale/" },
      { name: "Conception & brainstorming marketing", path: seo.path },
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
      name: "Conception & brainstorming marketing",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function ConceptionBrainstormingMarketingPage() {
  return (
    <DigitalAdsServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title={DIGITAL_ADS_CONCEPTION_PAGE.title}
      eyebrow={DIGITAL_ADS_CONCEPTION_PAGE.eyebrow}
      description={DIGITAL_ADS_CONCEPTION_PAGE.description}
      heroImage={DIGITAL_ADS_CONCEPTION_PAGE.heroImage}
      gallery={DIGITAL_ADS_CONCEPTION_PAGE.gallery}
    />
  );
}
