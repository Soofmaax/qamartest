import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Photographe & vidéaste corporate | Directed by Qamar",
  description:
    "Production photo et vidéo corporate à Paris : portraits, équipes, events, interviews, contenus marque. Direction artistique et livraison prête pour le web.",
  alternates: { canonical: "/corporate/" },
};

export default function CorporatePage() {
  return (
    <ServicePage
      title="Corporate"
      description="Mettre en valeur votre entreprise, votre ADN et vos équipes avec une production professionnelle sur-mesure."
      introTitle="Production corporate pour marques & entreprises"
      introParagraphs={[
        "Nous créons des visuels cohérents avec votre identité : portraits, reportages, contenus réseaux sociaux et films corporate.",
        "Objectif : valoriser votre expertise, votre culture d’entreprise et vos équipes avec un rendu premium.",
      ]}
      deliverables={[
        "Portraits corporate (studio ou sur site)",
        "Reportage entreprise / équipe / locaux",
        "Vidéo interview / témoignage client",
        "Livraison optimisée (site, LinkedIn, Reels)",
      ]}
      faq={[
        {
          q: "Intervenez-vous sur plusieurs sites ?",
          a: "Oui, on peut organiser un planning multi-sites sur une journée ou plusieurs jours selon le volume.",
        },
        {
          q: "Peut-on fournir une charte graphique ?",
          a: "Oui, et c’est idéal : on adapte le cadrage, les couleurs et le style au branding.",
        },
        {
          q: "Faites-vous des contenus pour LinkedIn ?",
          a: "Oui : portraits, reportages, interviews, formats courts verticaux et miniatures.",
        },
        {
          q: "Quels formats de livraison ?",
          a: "Photos en haute définition + versions web. Vidéos en 16:9, 1:1 et 9:16 selon besoin.",
        },
      ]}
      heroImage="https://framerusercontent.com/images/qXcHje98qlsOMGT1CJEMgjZ7umM.jpg"
      gallery={[
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
      ]}
    />
  );
}
