import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Films institutionnels | Corporate | Directed by Qamar",
  description:
    "Films institutionnels et vidéos corporate : conception, tournage, direction artistique, montage, versionnage. Pour votre site, LinkedIn et campagnes.",
  path: "/corporate/films-institutionnels/",
  image: "https://framerusercontent.com/images/20KvRVeMRpOdaABugVRinkkRuSY.png",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
});

export default function FilmsInstitutionnelsPage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Films institutionnels"
      eyebrow="Corporate"
      description="Un film corporate clair et premium pour raconter votre entreprise : message, valeurs, équipes, produit/service. Conçu pour votre site, LinkedIn, salons, campagnes et communication interne."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
          images: [
            "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
            "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
            "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
          ],
        },
      ]}
    />
  );
}
