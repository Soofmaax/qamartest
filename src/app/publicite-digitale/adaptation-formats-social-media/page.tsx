import type { Metadata } from "next";
import { DigitalAdsServicePage } from "@/components/DigitalAdsServicePage";
import { DIGITAL_ADS_FORMATS_PAGE } from "@/lib/pageContent";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = DIGITAL_ADS_FORMATS_PAGE.seo;

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
      { name: "Adaptation aux formats social media", path: seo.path },
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
      name: "Adaptation aux formats social media",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function AdaptationFormatsSocialMediaPage() {
  return (
    <DigitalAdsServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title={DIGITAL_ADS_FORMATS_PAGE.title}
      eyebrow={DIGITAL_ADS_FORMATS_PAGE.eyebrow}
      description={DIGITAL_ADS_FORMATS_PAGE.description}
      heroImage={DIGITAL_ADS_FORMATS_PAGE.heroImage}
      gallery={DIGITAL_ADS_FORMATS_PAGE.gallery}
    />
  );
}
