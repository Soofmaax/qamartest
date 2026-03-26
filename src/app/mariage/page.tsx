import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Photographe & vidéaste mariage | Directed by Qamar",
  description:
    "Photographe et vidéaste mariage à Paris. Reportage photo/vidéo élégant, storytelling, montage, livraison optimisée pour le web et les réseaux.",
  alternates: { canonical: "/mariage/" },
};

export default function MariagePage() {
  return (
    <ServicePage
      title="Mariage"
      description="Des images fortes, élégantes et intemporelles pour raconter l’un des plus beaux jours de votre vie."
      introTitle="Photographe & vidéaste mariage"
      introParagraphs={[
        "Reportage photo et vidéo de mariage, en toute discrétion, avec une direction artistique soignée.",
        "De la préparation à la soirée, l’objectif : raconter votre journée avec des images naturelles, élégantes et intemporelles.",
      ]}
      deliverables={[
        "Reportage photo (sélection + retouches)",
        "Film de mariage (montage + étalonnage)",
        "Teaser vertical (Reels/TikTok) sur demande",
        "Galerie en ligne (partage invités)",
      ]}
      faq={[
        {
          q: "Combien de temps à l’avance réserver ?",
          a: "Le plus tôt possible, surtout pour la haute saison. Contactez-nous avec la date et le lieu pour vérifier la disponibilité.",
        },
        {
          q: "Vous vous déplacez en France ?",
          a: "Oui. Nous travaillons à Paris et nous nous déplaçons partout en France (et à l’étranger selon projet).",
        },
        {
          q: "Combien de temps pour recevoir les photos/vidéos ?",
          a: "Les délais dépendent du volume, mais on communique toujours une date de livraison claire dès le départ.",
        },
        {
          q: "Proposez-vous une séance engagement ?",
          a: "Oui, c’est une excellente option pour se mettre à l’aise avant le jour J.",
        },
      ]}
      heroImage="https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg"
      heroVideoSrc="/videos/mariage.mp4"
      gallery={[
        "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
      ]}
    />
  );
}
