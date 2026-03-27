import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { createPageMetadata } from "@/lib/seo";

const seo = {
  title: "Photographe & vidéaste événementiel | Directed by Qamar",
  description:
    "Couverture photo/vidéo événementiel à Paris : conférences, lancements, soirées, festivals. Captation, montage, contenus live et recap.",
  path: "/événementiel/",
  image: "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

export default function EvenementielPage() {
  return (
    <ServicePage
      path={seo.path}
      seoTitle={seo.title}
      seoDescription={seo.description}
      title="Événementiel"
      description="Des contenus photo/vidéo pensés pour capturer l’énergie d’un événement et valoriser votre marque."
      introTitle="Couverture photo & vidéo événementielle"
      introParagraphs={[
        "Capturer l’ambiance, les moments clés et les intervenants, avec une livraison rapide et adaptée à la communication.",
        "Idéal pour conférences, lancements, soirées, activations et événements corporate.",
      ]}
      deliverables={[
        "Reportage photo (sélection + retouches)",
        "Aftermovie / recap vidéo",
        "Formats courts (Reels/TikTok) pour diffusion rapide",
        "Exports optimisés (web + réseaux)",
      ]}
      faq={[
        {
          q: "Livraison le jour même possible ?",
          a: "Oui, selon les contraintes on peut livrer une sélection express pour vos réseaux pendant ou juste après l’événement.",
        },
        {
          q: "Vous couvrez des conférences ?",
          a: "Oui : captation des prises de parole, photos des intervenants, et recap vidéo.",
        },
        {
          q: "Peut-on avoir des formats verticaux ?",
          a: "Oui, on prévoit des plans et des exports 9:16 pour Reels/TikTok.",
        },
        {
          q: "Combien de photos livrées ?",
          a: "Ça dépend de la durée et du contenu, mais le volume est défini clairement au devis.",
        },
      ]}
      heroImage="https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg"
      gallery={[
        "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
        "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
      ]}
    />
  );
}
