import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Corporate | Directed by Qamar",
};

export default function CorporatePage() {
  return (
    <ServicePage
      title="Corporate"
      description="Mettre en valeur votre entreprise, votre ADN et vos équipes avec une production professionnelle sur-mesure."
      heroImage="https://framerusercontent.com/images/qXcHje98qlsOMGT1CJEMgjZ7umM.jpg"
      gallery={[
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
      ]}
    />
  );
}
