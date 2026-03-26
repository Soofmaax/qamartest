import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

const seo = {
  title: "Publicité digitale (photo & vidéo) | Directed by Qamar",
  description:
    "Contenus publicitaires photo/vidéo pour campagnes social ads : formats courts, storytelling, hooks, montage, déclinaisons 9:16, 1:1 et 16:9.",
  path: "/publicité-digitale/",
  image: "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
};

export const metadata: Metadata = createPageMetadata(seo);

export default function PubliciteDigitalePage() {
  return (
    <ServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      title="Publicité digitale"
      description="Des contenus impactants pensés pour la performance : conversions, visibilité, image de marque."
      introTitle="Contenus performants pour vos campagnes"
      introParagraphs={[
        "Création de contenus photo et vidéo pensés pour convertir : accroche rapide, rythme, mise en valeur produit et messages clairs.",
        "Déclinaisons multi-formats pour Meta, TikTok, YouTube Ads et votre site (landing pages, ecommerce).",
      ]}
      deliverables={[
        "Script / storyboard (selon besoin)",
        "Tournage + direction artistique",
        "Montage dynamique + étalonnage",
        "Déclinaisons 9:16 / 1:1 / 16:9",
      ]}
      faq={[
        {
          q: "Travaillez-vous avec une agence ?",
          a: "Oui, on collabore facilement avec agences (brief, allers-retours, exports et déclinaisons).",
        },
        {
          q: "Pouvez-vous fournir plusieurs hooks ?",
          a: "Oui. On peut livrer plusieurs versions d’intro/accroches pour A/B tests.",
        },
        {
          q: "Est-ce adapté à l’ecommerce ?",
          a: "Oui : contenu produit, UGC-style, packshots, vidéos démonstration et ads.",
        },
        {
          q: "Combien de formats livrés ?",
          a: "On prépare les exports nécessaires dès le départ : Reels/TikTok (9:16) + carré + horizontal si besoin.",
        },
      ]}
      heroImage="https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png"
      gallery={[
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      ]}
    />
  );
}
