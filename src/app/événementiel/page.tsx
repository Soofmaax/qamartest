import { ServicePage } from "@/components/ServicePage";

export const metadata = {
  title: "Événementiel | Directed by Qamar",
};

export default function EvenementielPage() {
  return (
    <ServicePage
      title="Événementiel"
      description="Des contenus photo/vidéo pensés pour capturer l’énergie d’un événement et valoriser votre marque."
      heroImage="https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg"
      gallery={[
        "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
        "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
      ]}
    />
  );
}
