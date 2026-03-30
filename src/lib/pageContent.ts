

export type PageSeo = {
  title: string;
  description: string;
  path: string;
  image: string;
};

export type LightboxGalleryItem = {
  title: string;
  cover: string;
  images: string[];
};

export type ServiceDetailPageContent = {
  seo: PageSeo;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  gallery: LightboxGalleryItem[];
};

export type MariageFormula = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  cta: string;
};

export type MariagePageContent = {
  seo: PageSeo;
  lastPrestations: LightboxGalleryItem[];
  formulas: MariageFormula[];
};

export const MARIAGE_PAGE_CONTENT: MariagePageContent = {
  seo: {
    title: "Photographe & vidéaste de mariage | Directed by Qamar",
    description:
      "Vidéaste et photographe de mariage à Paris. Une approche cinématique et élégante pour créer des souvenirs intemporels.",
    path: "/mariage/",
    image: "/images/mariage/DSC09144.jpg",
  },
  lastPrestations: [
    {
      title: "Mariage",
      cover: "/images/mariage/DSC09144.jpg",
      images: [
        "/images/mariage/DSC09144.jpg",
        "/images/mariage/DSC09050.jpg",
        "/images/mariage/DSC08990.jpg",
        "/images/mariage/DSC05810.jpg",
        "/images/mariage/DSC04960.jpg",
        "/images/mariage/DSC02626.jpg",
      ],
    },
    {
      title: "Cérémonie",
      cover: "/images/mariage/DSC02221.jpg",
      images: [
        "/images/mariage/DSC02221.jpg",
        "/images/mariage/DSC02159.jpg",
        "/images/mariage/DSC02158.jpg",
        "/images/mariage/DSC02139.jpg",
        "/images/mariage/DSC01706.jpg",
      ],
    },
    {
      title: "Portraits",
      cover: "/images/mariage/DSC00152-Enhanced-NR.jpg",
      images: [
        "/images/mariage/DSC00152-Enhanced-NR.jpg",
        "/images/mariage/DSC00135-Enhanced-NR.jpg",
        "/images/mariage/DSC00119-Enhanced-NR.jpg",
        "/images/mariage/BLT05150.jpg",
        "/images/mariage/BLT04884.jpg",
        "/images/mariage/DSC02845-2.jpg",
      ],
    },
  ],
  formulas: [
    {
      title: "Capture",
      description: "Package · Photo",
      bullets: [
        "15 heures de présence",
        "Wedding shooting",
        "Retouche photo professionnelle",
        "Galerie photos en ligne",
        "Reportage photo premium",
        "Frais de déplacement hors Île-de-France",
      ],
      href: "/contact/",
      cta: "Appel découverte",
    },
    {
      title: "Émotion",
      description: "Package · Photo + Vidéo",
      bullets: [
        "15 heures de présence",
        "Moodboard",
        "Captation des vœux",
        "Film (environ 30 minutes)",
        "Étalonnage professionnel",
        "Frais de déplacement hors Île-de-France",
      ],
      href: "/contact/",
      cta: "Appel découverte",
    },
    {
      title: "Signature",
      description: "Package · Photo + Vidéo",
      bullets: [
        "15 heures de présence",
        "Wedding shooting",
        "Retouche photo professionnelle",
        "Galerie photos en ligne",
        "Film (environ 30 minutes)",
        "Captation des vœux",
        "Frais de déplacement hors Île-de-France",
      ],
      href: "/contact/",
      cta: "Appel découverte",
    },
  ],
};

export const CORPORATE_PORTRAITS_PAGE: ServiceDetailPageContent = {
  seo: {
    title: "Portraits professionnels | Corporate | Directed by Qamar",
    description:
      "Portraits corporate pour dirigeants et équipes. Une image cohérente et premium pour votre marque, votre site et LinkedIn.",
    path: "/corporate/portraits-professionnels/",
    image: "https://framerusercontent.com/images/pCVT5Vo2hlSZzsO08dLr6cO0ZY.png",
  },
  title: "Portraits professionnels",
  eyebrow: "Corporate",
  description:
    "Des portraits premium et cohérents pour dirigeants et équipes. Un rendu naturel, soigné et fidèle à votre image de marque — idéal pour votre site, LinkedIn, dossiers de presse et supports internes.",
  heroImage: "https://framerusercontent.com/images/pCVT5Vo2hlSZzsO08dLr6cO0ZY.png",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      images: [
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      ],
    },
  ],
};

export const CORPORATE_REPORTAGES_PAGE: ServiceDetailPageContent = {
  seo: {
    title: "Reportages d’entreprise | Corporate | Directed by Qamar",
    description:
      "Reportage photo et vidéo en entreprise : équipes, locaux, savoir-faire, événements internes. Un storytelling authentique et premium.",
    path: "/corporate/reportages-entreprise/",
    image: "https://framerusercontent.com/images/DpaeyEJu9sJ7uvyF30lYwFOalYA.png",
  },
  title: "Reportages d’entreprise",
  eyebrow: "Corporate",
  description:
    "Montrez votre entreprise “en action” : équipes, locaux, savoir-faire, temps forts et événements internes. Un reportage authentique, esthétique et prêt à être utilisé sur votre site, vos réseaux et vos présentations.",
  heroImage: "https://framerusercontent.com/images/DpaeyEJu9sJ7uvyF30lYwFOalYA.png",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
      images: [
        "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
        "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
        "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
      ],
    },
  ],
};

export const CORPORATE_PRESENTATION_PAGE: ServiceDetailPageContent = {
  seo: {
    title: "Présentation de marque | Corporate | Directed by Qamar",
    description:
      "Présenter votre marque avec une réalisation maîtrisée : direction artistique, tournage, montage, versionnage. Pour campagnes, investisseurs et prises de parole.",
    path: "/corporate/presentation-marque/",
    image: "https://framerusercontent.com/images/nut3VC3ToDuZY0i7oI2dVrJVfZY.png",
  },
  title: "Présentation de marque",
  eyebrow: "Corporate",
  description:
    "Présentez votre marque avec des contenus à forte valeur : direction artistique, storytelling, tournage et montage. Idéal pour vos campagnes, pages “À propos”, decks partenaires/investisseurs et prises de parole officielles.",
  heroImage: "https://framerusercontent.com/images/nut3VC3ToDuZY0i7oI2dVrJVfZY.png",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
      images: [
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      ],
    },
  ],
};

export const CORPORATE_FILMS_PAGE: ServiceDetailPageContent = {
  seo: {
    title: "Films institutionnels | Corporate | Directed by Qamar",
    description:
      "Films institutionnels et vidéos corporate : conception, tournage, direction artistique, montage, versionnage. Pour votre site, LinkedIn et campagnes.",
    path: "/corporate/films-institutionnels/",
    image: "https://framerusercontent.com/images/20KvRVeMRpOdaABugVRinkkRuSY.png",
  },
  title: "Films institutionnels",
  eyebrow: "Corporate",
  description:
    "Un film corporate clair et premium pour raconter votre entreprise : message, valeurs, équipes, produit/service. Conçu pour votre site, LinkedIn, salons, campagnes et communication interne.",
  heroImage: "https://framerusercontent.com/images/20KvRVeMRpOdaABugVRinkkRuSY.png",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      images: [
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
        "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      ],
    },
  ],
};

export const CORPORATE_WEB_CONTENT_PAGE: ServiceDetailPageContent = {
  seo: {
    title: "Contenu pour site web & réseaux | Corporate | Directed by Qamar",
    description:
      "Contenu régulier pour site web & réseaux : formats courts, photos, vidéos, déclinaisons. Une stratégie visuelle cohérente pour votre présence digitale.",
    path: "/corporate/contenu-web-reseaux/",
    image: "https://framerusercontent.com/images/M0SeRW6OeuB11wv5Lb9k4tyIc.png",
  },
  title: "Contenu pour site web & réseaux",
  eyebrow: "Corporate",
  description:
    "Produisez du contenu régulier, dynamique et cohérent : photos, vidéos, formats courts et déclinaisons. Objectif : alimenter votre site et vos réseaux avec une identité visuelle forte et constante.",
  heroImage: "https://framerusercontent.com/images/M0SeRW6OeuB11wv5Lb9k4tyIc.png",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      images: [
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      ],
    },
  ],
};

export const DIGITAL_ADS_CONCEPTION_PAGE: ServiceDetailPageContent = {
  seo: {
    title:
      "Conception & brainstorming marketing | Publicité digitale | Directed by Qamar",
    description:
      "Conception d’angles publicitaires, hooks et scripts. Une phase stratégique pour transformer votre message en contenus performants.",
    path: "/publicite-digitale/conception-brainstorming-marketing/",
    image: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
  },
  title: "Conception & brainstorming marketing",
  eyebrow: "Publicité digitale",
  description:
    "On pose les fondations de la performance : angles, messages, promesses, structure et rythme. L’objectif est de produire des contenus qui captent l’attention et rendent votre offre évidente.",
  heroImage: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      images: [
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      ],
    },
  ],
};

export const DIGITAL_ADS_PREMIUM_PAGE: ServiceDetailPageContent = {
  seo: {
    title: "Création photo & vidéo premium | Publicité digitale | Directed by Qamar",
    description:
      "Production photo et vidéo premium pour la publicité : direction artistique, cadrage, esthétique moderne, mise en valeur produit/service.",
    path: "/publicite-digitale/creation-photo-video-premium/",
    image: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
  },
  title: "Création photo & vidéo premium",
  eyebrow: "Publicité digitale",
  description:
    "Des visuels soigneusement réalisés, avec une direction artistique claire, un cadrage précis, et une esthétique moderne qui valorise votre produit ou service. Notre objectif : produire des assets capables de rivaliser avec les codes des marques leaders.",
  heroImage: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
      images: [
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      ],
    },
  ],
};

export const DIGITAL_ADS_FORMATS_PAGE: ServiceDetailPageContent = {
  seo: {
    title:
      "Adaptation aux formats social media | Publicité digitale | Directed by Qamar",
    description:
      "Déclinaisons et optimisations pour Reels, TikTok, YouTube, Facebook Ads, LinkedIn : rythme, storytelling, durée, accroche visuelle.",
    path: "/publicite-digitale/adaptation-formats-social-media/",
    image: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
  },
  title: "Adaptation aux formats social media",
  eyebrow: "Publicité digitale",
  description:
    "Reels, TikTok, YouTube, Facebook Ads, LinkedIn… Chaque format est optimisé pour respecter les codes de la plateforme tout en maximisant l’impact : rythme, storytelling, durée, accroche visuelle.",
  heroImage: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      images: [
        "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      ],
    },
  ],
};

export const DIGITAL_ADS_OPTIMISATION_PAGE: ServiceDetailPageContent = {
  seo: {
    title:
      "Optimisation conversions & branding | Publicité digitale | Directed by Qamar",
    description:
      "Des contenus publicitaires orientés performance : ventes, taux de clic, engagement et notoriété. L’esthétique au service de l’efficacité.",
    path: "/publicite-digitale/optimisation-conversions-branding/",
    image: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
  },
  title: "Optimisation pour conversions & branding",
  eyebrow: "Publicité digitale",
  description:
    "Nous produisons des contenus capables de générer de vrais résultats concrets : une hausse mesurable des ventes, une amélioration des taux de clic, une augmentation de l’engagement ainsi qu’un renforcement durable de votre notoriété. Chaque visuel est pensé comme un levier de performance, conçu pour capter l’attention, transmettre votre valeur et inciter votre audience à passer à l’action.",
  heroImage: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      images: [
        "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
        "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
        "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
      ],
    },
  ],
};


