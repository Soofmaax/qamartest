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

export type ReferenceLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

/** Shared project set used in the "Mon portfolio" carousel across multiple pages. */
export const REFERENCE_LOGOS: ReferenceLogo[] = [
  {
    src: "https://framerusercontent.com/images/WCk6aWdk3lcNK2YQ4jOZuMqrL8.png",
    width: 243,
    height: 30,
    alt: "PWF",
  },
  {
    src: "https://framerusercontent.com/images/hAQHQ3tidhNw5v9lqDPRy0by4Q.png",
    width: 197,
    height: 35,
    alt: "Group",
  },
  {
    src: "https://framerusercontent.com/images/PkZtUBhle6TenR3CV9mGcpJKQHk.png",
    width: 148,
    height: 30,
    alt: "Fitness Park",
  },
  {
    src: "https://framerusercontent.com/images/Kyt0tHHdYIDhl3RD2HCCBhrpiuc.png",
    width: 134,
    height: 34,
    alt: "UNESCO",
  },
  {
    src: "https://framerusercontent.com/images/fg88tcEcPzAeOIv7O1HBZbLYWfw.png",
    width: 108,
    height: 27,
    alt: "Canal+",
  },
  {
    src: "https://framerusercontent.com/images/DAfyAGHuflSzQsjykANU3SYhX0.png",
    width: 107,
    height: 30,
    alt: "Logo",
  },
  {
    src: "https://framerusercontent.com/images/t3a40zYxxocfwj5czXN2yGUnP5w.png",
    width: 80,
    height: 64,
    alt: "CNA",
  },
];

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

export const CORPORATE_SERVICES: ServiceItem[] = [
  {
    title: "Portraits professionnels",
    description:
      "Immortalisez votre savoir-faire, vos processus et la vie de votre structure avec un regard authentique et esthétique. Idéal pour valoriser vos équipes, vos coulisses ou vos événements internes.",
    image:
      "https://framerusercontent.com/images/pCVT5Vo2hlSZzsO08dLr6cO0ZY.png",
    href: ROUTES.corporatePortraits,
  },
  {
    title: "Reportages d’entreprise",
    description:
      "Immortalisez votre savoir-faire, vos processus et la vie de votre structure avec un regard authentique et esthétique. Idéal pour valoriser vos équipes, vos coulisses ou vos événements internes.",
    image:
      "https://framerusercontent.com/images/DpaeyEJu9sJ7uvyF30lYwFOalYA.png",
    href: ROUTES.corporateReportages,
  },
  {
    title: "Présentation de marque",
    description:
      "Une réalisation maîtrisée de A à Z : conception, tournage, direction artistique, montage et versionnage. Des contenus conçus pour vos campagnes internes, vos partenaires, vos investisseurs ou vos prises de parole officielles.",
    image:
      "https://framerusercontent.com/images/nut3VC3ToDuZY0i7oI2dVrJVfZY.png",
    href: ROUTES.corporatePresentationMarque,
  },
  {
    title: "Films institutionnels",
    description:
      "Une réalisation maîtrisée de A à Z : conception, tournage, direction artistique, montage et versionnage. Des contenus conçus pour vos campagnes internes, vos partenaires, vos investisseurs ou vos prises de parole officielles.",
    image:
      "https://framerusercontent.com/images/20KvRVeMRpOdaABugVRinkkRuSY.png",
    href: ROUTES.corporateFilmsInstitutionnels,
  },
  {
    title: "Contenu pour site web & réseaux",
    description:
      "Des productions régulières pour alimenter vos plateformes avec du contenu professionnel, dynamique et cohérent. Vous bénéficiez d’une stratégie visuelle complète, pensée pour renforcer votre présence digitale.",
    image:
      "https://framerusercontent.com/images/M0SeRW6OeuB11wv5Lb9k4tyIc.png",
    href: ROUTES.corporateContenuWebReseaux,
  },
];

export const DIGITAL_ADS_SERVICES: ServiceItem[] = [
  {
    title: "Conception & brainstorming marketing",
    description:
      "Des idées claires, des angles forts et une accroche qui retient l’attention. On prépare les messages, le rythme, et la structure pour produire des contenus efficaces.",
    image:
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    href: ROUTES.publiciteConception,
  },
  {
    title: "Création photo & vidéo premium",
    description:
      "Des visuels soigneusement réalisés, avec une direction artistique claire, un cadrage précis, et une esthétique moderne qui valorise votre produit ou service. Notre expertise permet de créer des contenus capables de rivaliser avec les codes des marques leaders.",
    image:
      "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
    href: ROUTES.publiciteCreationPremium,
  },
  {
    title: "Adaptation aux formats social media",
    description:
      "Reels, TikTok, YouTube, Facebook Ads, LinkedIn... Chaque format est optimisé pour respecter les codes de la plateforme tout en maximisant l’impact : rythme, storytelling, durée, accroche visuelle.",
    image:
      "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
    href: ROUTES.publiciteAdaptationFormats,
  },
  {
    title: "Optimisation pour conversions & branding",
    description:
      "Nous produisons des contenus capables de générer de vrais résultats concrets : une hausse mesurable des ventes, une amélioration des taux de clic, une augmentation de l’engagement ainsi qu’un renforcement durable de votre notoriété. Chaque visuel est pensé comme un levier de performance, conçu pour capter l’attention, transmettre votre valeur et inciter votre audience à passer à l’action. Chaque asset s’inscrit dans une logique publicitaire précise, où l’esthétique sert avant tout l’efficacité.",
    image:
      "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
    href: ROUTES.publiciteOptimisation,
  },
];
