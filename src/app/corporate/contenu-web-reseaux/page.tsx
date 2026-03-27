import type { Metadata } from "next";
import { CorporateServicePage } from "@/components/CorporateServicePage";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Contenu pour site web & réseaux | Corporate | Directed by Qamar",
  description:
    "Contenu régulier pour site web & réseaux : formats courts, photos, vidéos, déclinaisons. Une stratégie visuelle cohérente pour votre présence digitale.",
  path: "/corporate/contenu-web-reseaux/",
  image: "https://framerusercontent.com/images/M0SeRW6OeuB11wv5Lb9k4tyIc.png",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
});

export default function ContenuWebReseauxPage() {
  return (
    <CorporateServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Contenu pour site web & réseaux"
      eyebrow="Corporate"
      description="Produisez du contenu régulier, dynamique et cohérent : photos, vidéos, formats courts et déclinaisons. Objectif : alimenter votre site et vos réseaux avec une identité visuelle forte et constante."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
          images: [
            "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
            "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
            "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
          ],
        },
      ]}
    />
  );
}
