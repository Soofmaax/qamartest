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
    "Conception & brainstorming marketing | Publicité digitale | Directed by Qamar",
  description:
    "Conception d’angles publicitaires, hooks et scripts. Une phase stratégique pour transformer votre message en contenus performants.",
  path: "/publicite-digitale/conception-brainstorming-marketing/",
  image: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
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
      title="Conception & brainstorming marketing"
      eyebrow="Publicité digitale"
      description="On pose les fondations de la performance : angles, messages, promesses, structure et rythme. L’objectif est de produire des contenus qui captent l’attention et rendent votre offre évidente."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
          images: [
            "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
            "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
            "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
          ],
        },
      ]}
    />
  );
}
