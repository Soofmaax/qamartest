import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = {
  title: "Présentation de marque | Corporate | Directed by Qamar",
  description:
    "Présenter votre marque avec une réalisation maîtrisée : direction artistique, tournage, montage, versionnage. Pour campagnes, investisseurs et prises de parole.",
  path: "/corporate/presentation-marque/",
  image: "https://framerusercontent.com/images/nut3VC3ToDuZY0i7oI2dVrJVfZY.png",
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
      title="Présentation de marque"
      eyebrow="Corporate"
      description="Présentez votre marque avec des contenus à forte valeur : direction artistique, storytelling, tournage et montage. Idéal pour vos campagnes, pages “À propos”, decks partenaires/investisseurs et prises de parole officielles."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
          images: [
            "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
            "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
            "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
          ],
        },
      ]}
    />
  );
}
