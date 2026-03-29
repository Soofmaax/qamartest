import { ROUTES } from "@/lib/routes";

export type PortfolioProject = {
  title: string;
  cover: string;
  images: string[];
};

export type ServiceItem = {
  title: string;
  description: string;
  href: string;
  image: string;
  position?: string;
};

/** Shared project set used in the "Mon portfolio" carousel across multiple pages. */
export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    title: "Corporate",
    cover: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
    images: [
      "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
    ],
  },
  {
    title: "Événementiel",
    cover: "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
    images: [
      "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
      "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
      "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
    ],
  },
  {
    title: "Mariage",
    cover: "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
    images: [
      "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    ],
  },
  {
    title: "Publicité digitale",
    cover: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    images: [
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
      "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
    ],
  },
];

/** Shared service list used on /services/ and potentially other pages. */
export const SERVICES: ServiceItem[] = [
  {
    title: "Mariage",
    description:
      "Des images fortes, élégantes et intemporelles pour raconter l’un des plus beaux jours de votre vie.",
    href: ROUTES.mariage,
    image:
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
  },
  {
    title: "Corporate",
    description:
      "Mettre en valeur votre entreprise, votre ADN et vos équipes avec une production professionnelle sur-mesure.",
    href: ROUTES.corporate,
    image:
      "https://framerusercontent.com/images/qXcHje98qlsOMGT1CJEMgjZ7umM.jpg",
  },
  {
    title: "Publicité digitale",
    description:
      "Des contenus impactants pensés pour la performance : conversions, visibilité, image de marque.",
    href: ROUTES.publiciteDigitale,
    image:
      "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
    position: "object-left",
  },
  {
    title: "Événementiel",
    description:
      "Couverture photo/vidéo d’événements : conférences, lancements, soirées, festivals. Captation, contenus live et recap.",
    href: ROUTES.evenementiel,
    image:
      "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
  },
];
