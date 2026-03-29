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
  title: "Portraits professionnels | Corporate | Directed by Qamar",
  description:
    "Portraits corporate pour dirigeants et équipes. Une image cohérente et premium pour votre marque, votre site et LinkedIn.",
  path: "/corporate/portraits-professionnels/",
  image: "https://framerusercontent.com/images/pCVT5Vo2hlSZzsO08dLr6cO0ZY.png",
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
      { name: "Portraits professionnels", path: seo.path },
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
      name: "Portraits professionnels",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function PortraitsProfessionnelsPage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Portraits professionnels"
      eyebrow="Corporate"
      description="Des portraits premium et cohérents pour dirigeants et équipes. Un rendu naturel, soigné et fidèle à votre image de marque — idéal pour votre site, LinkedIn, dossiers de presse et supports internes."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
          images: [
            "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
            "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
            "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
          ],
        },
      ]}
    />
  );
}
