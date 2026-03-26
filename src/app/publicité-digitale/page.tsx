import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Publicité digitale | Directed by Qamar",
};

export default function PubliciteDigitalePage() {
  return (
    <ServicePage
      title="Publicité digitale"
      description="Des contenus impactants pensés pour la performance : conversions, visibilité, image de marque."
      heroImage="https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png"
      gallery={[
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      ]}
    />
  );
}
