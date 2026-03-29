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
  title: "Création photo & vidéo premium | Publicité digitale | Directed by Qamar",
  description:
    "Production photo et vidéo premium pour la publicité : direction artistique, cadrage, esthétique moderne, mise en valeur produit/service.",
  path: "/publicite-digitale/creation-photo-video-premium/",
  image: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
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
      { name: "Création photo & vidéo premium", path: seo.path },
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
      name: "Création photo & vidéo premium",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function CreationPhotoVideoPremiumPage() {
  return (
    <DigitalAdsServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Création photo & vidéo premium"
      eyebrow="Publicité digitale"
      description="Des visuels soigneusement réalisés, avec une direction artistique claire, un cadrage précis, et une esthétique moderne qui valorise votre produit ou service. Notre objectif : produire des assets capables de rivaliser avec les codes des marques leaders."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
          images: [
            "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
            "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
            "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
          ],
        },
      ]}
    />
  );
}
