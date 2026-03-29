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
  title: "Reportages d’entreprise | Corporate | Directed by Qamar",
  description:
    "Reportage photo et vidéo en entreprise : équipes, locaux, savoir-faire, événements internes. Un storytelling authentique et premium.",
  path: "/corporate/reportages-entreprise/",
  image: "https://framerusercontent.com/images/DpaeyEJu9sJ7uvyF30lYwFOalYA.png",
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
      { name: "Reportages d’entreprise", path: seo.path },
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
      name: "Reportages d’entreprise",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

export default function ReportagesEntreprisePage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Reportages d’entreprise"
      eyebrow="Corporate"
      description="Montrez votre entreprise “en action” : équipes, locaux, savoir-faire, temps forts et événements internes. Un reportage authentique, esthétique et prêt à être utilisé sur votre site, vos réseaux et vos présentations."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
          images: [
            "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
            "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
            "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
          ],
        },
      ]}
    />
  );
}
