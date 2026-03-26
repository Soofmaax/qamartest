import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Reportages d’entreprise | Corporate | Directed by Qamar",
  description:
    "Reportage photo et vidéo en entreprise : équipes, locaux, savoir-faire, événements internes. Un storytelling authentique et premium.",
  path: "/corporate/reportages-entreprise/",
  image: "https://framerusercontent.com/images/DpaeyEJu9sJ7uvyF30lYwFOalYA.png",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
});

export default function ReportagesEntreprisePage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Reportages d’entreprise"
      eyebrow="Corporate"
      description="Immortalisez votre savoir-faire, vos processus et la vie de votre structure avec un regard authentique et esthétique. Idéal pour valoriser vos équipes, vos coulisses ou vos événements internes."
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
