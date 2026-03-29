import type { Metadata } from "next";
import { DigitalAdsServicePage } from "@/components/DigitalAdsServicePage";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = {
  title:
    "Adaptation aux formats social media | Publicité digitale | Directed by Qamar",
  description:
    "Déclinaisons et optimisations pour Reels, TikTok, YouTube, Facebook Ads, LinkedIn : rythme, storytelling, durée, accroche visuelle.",
  path: "/publicite-digitale/adaptation-formats-social-media/",
  image: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
};

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
      title="Adaptation aux formats social media"
      eyebrow="Publicité digitale"
      description="Reels, TikTok, YouTube, Facebook Ads, LinkedIn… Chaque format est optimisé pour respecter les codes de la plateforme tout en maximisant l’impact : rythme, storytelling, durée, accroche visuelle."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
          images: [
            "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
            "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
            "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
          ],
        },
      ]}
    />
  );
}
