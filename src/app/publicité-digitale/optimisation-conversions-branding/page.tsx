import type { Metadata } from "next";
import { DigitalAdsServicePage } from "@/components/DigitalAdsServicePage";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title:
    "Optimisation conversions & branding | Publicité digitale | Directed by Qamar",
  description:
    "Des contenus publicitaires orientés performance : ventes, taux de clic, engagement et notoriété. L’esthétique au service de l’efficacité.",
  path: "/publicité-digitale/optimisation-conversions-branding/",
  image: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
});

export default function OptimisationConversionsBrandingPage() {
  return (
    <DigitalAdsServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      structuredData={structuredData}
      title="Optimisation pour conversions & branding"
      eyebrow="Publicité digitale"
      description="Nous produisons des contenus capables de générer de vrais résultats concrets : une hausse mesurable des ventes, une amélioration des taux de clic, une augmentation de l’engagement ainsi qu’un renforcement durable de votre notoriété. Chaque visuel est pensé comme un levier de performance, conçu pour capter l’attention, transmettre votre valeur et inciter votre audience à passer à l’action."
      heroImage={seo.image}
      gallery={[
        {
          title: "Exemples",
          cover: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
          images: [
            "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
            "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
            "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
          ],
        },
      ]}
    />
  );
}
