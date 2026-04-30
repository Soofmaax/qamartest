

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

const RAW_MARIAGE_BASE = "/images/portfolio/mariage/raw-import/ELHAD ET INASS";

const RAW_MARIAGE_IMAGES = [
  `${RAW_MARIAGE_BASE}/elhad-et-inass-01.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-02.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-03.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-04.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-05.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-06.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-07.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-08.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-09.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-10.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-11.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-12.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-13.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-14.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-15.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-16.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-17.jpg`,
  `${RAW_MARIAGE_BASE}/elhad-et-inass-18.jpg`,
];

export const MARIAGE_PAGE_CONTENT: MariagePageContent = {
  seo: {
    title: "Photographe & vidéaste de mariage | Directed by Qamar",
    description:
      "Vidéaste et photographe de mariage à Paris. Une approche cinématique et élégante pour créer des souvenirs intemporels.",
    path: "/mariage/",
    image: RAW_MARIAGE_IMAGES[17],
  },
  lastPrestations: [
    {
      title: "Ninon & Alexandre · Vaux-le-Vicomte",
      cover: RAW_MARIAGE_IMAGES[17],
      images: [
        RAW_MARIAGE_IMAGES[17],
        RAW_MARIAGE_IMAGES[16],
        RAW_MARIAGE_IMAGES[15],
        RAW_MARIAGE_IMAGES[13],
        RAW_MARIAGE_IMAGES[12],
        RAW_MARIAGE_IMAGES[10],
      ],
    },
    {
      title: "Sokona & Julien · Île-de-France",
      cover: RAW_MARIAGE_IMAGES[9],
      images: [
        RAW_MARIAGE_IMAGES[9],
        RAW_MARIAGE_IMAGES[8],
        RAW_MARIAGE_IMAGES[7],
        RAW_MARIAGE_IMAGES[6],
        RAW_MARIAGE_IMAGES[5],
      ],
    },
    {
      title: "Karim & Inès · Marrakech",
      cover: RAW_MARIAGE_IMAGES[4],
      images: [
        RAW_MARIAGE_IMAGES[4],
        RAW_MARIAGE_IMAGES[3],
        RAW_MARIAGE_IMAGES[2],
        RAW_MARIAGE_IMAGES[1],
        RAW_MARIAGE_IMAGES[0],
        RAW_MARIAGE_IMAGES[11],
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
    image: "/images/portfolio/corporate/prefet/prefet-01.jpg",
  },
  title: "Portraits professionnels",
  eyebrow: "Corporate",
  description:
    "Des portraits premium et cohérents pour dirigeants et équipes. Un rendu naturel, soigné et fidèle à votre image de marque : idéal pour votre site, LinkedIn, dossiers de presse et supports internes.",
  heroImage: "/images/portfolio/corporate/prefet/prefet-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/corporate/prefet/prefet-01.jpg",
      images: [
        "/images/portfolio/corporate/prefet/prefet-01.jpg",
        "/images/portfolio/corporate/prefet/prefet-02.jpg",
        "/images/portfolio/corporate/prefet/prefet-03.jpg",
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
    image: "/images/portfolio/corporate/unesco/unesco-01.jpg",
  },
  title: "Reportages d’entreprise",
  eyebrow: "Corporate",
  description:
    "Montrez votre entreprise “en action” : équipes, locaux, savoir-faire, temps forts et événements internes. Un reportage authentique, esthétique et prêt à être utilisé sur votre site, vos réseaux et vos présentations.",
  heroImage: "/images/portfolio/corporate/unesco/unesco-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/corporate/unesco/unesco-01.jpg",
      images: [
        "/images/portfolio/corporate/unesco/unesco-01.jpg",
        "/images/portfolio/corporate/unesco/unesco-02.jpg",
        "/images/portfolio/corporate/unesco/unesco-03.jpg",
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
    image: "/images/portfolio/corporate/la-pommeraie/la-pommeraie-01.jpg",
  },
  title: "Présentation de marque",
  eyebrow: "Corporate",
  description:
    "Présentez votre marque avec des contenus à forte valeur : direction artistique, storytelling, tournage et montage. Idéal pour vos campagnes, pages “À propos”, decks partenaires/investisseurs et prises de parole officielles.",
  heroImage: "/images/portfolio/corporate/la-pommeraie/la-pommeraie-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/corporate/la-pommeraie/la-pommeraie-01.jpg",
      images: [
        "/images/portfolio/corporate/la-pommeraie/la-pommeraie-01.jpg",
        "/images/portfolio/corporate/la-pommeraie/la-pommeraie-02.jpg",
        "/images/portfolio/corporate/la-pommeraie/la-pommeraie-03.jpg",
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
    image: "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
  },
  title: "Films institutionnels",
  eyebrow: "Corporate",
  description:
    "Un film corporate clair et premium pour raconter votre entreprise : message, valeurs, équipes, produit/service. Conçu pour votre site, LinkedIn, salons, campagnes et communication interne.",
  heroImage: "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
      images: [
        "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
        "/images/portfolio/corporate/hotel-dali/hotel-dali-02.jpg",
        "/images/portfolio/corporate/hotel-dali/hotel-dali-03.jpg",
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
    image:
      "/images/portfolio/corporate/restaurant-le-jumeyrah/restaurant-le-jumeyrah-01.jpg",
  },
  title: "Contenu pour site web & réseaux",
  eyebrow: "Corporate",
  description:
    "Produisez du contenu régulier, dynamique et cohérent : photos, vidéos, formats courts et déclinaisons. Objectif : alimenter votre site et vos réseaux avec une identité visuelle forte et constante.",
  heroImage:
    "/images/portfolio/corporate/restaurant-le-jumeyrah/restaurant-le-jumeyrah-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover:
        "/images/portfolio/corporate/restaurant-le-jumeyrah/restaurant-le-jumeyrah-01.jpg",
      images: [
        "/images/portfolio/corporate/restaurant-le-jumeyrah/restaurant-le-jumeyrah-01.jpg",
        "/images/portfolio/corporate/restaurant-le-jumeyrah/restaurant-le-jumeyrah-02.jpg",
        "/images/portfolio/corporate/restaurant-le-jumeyrah/restaurant-le-jumeyrah-03.jpg",
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
    image: "/images/portfolio/shooting/sema-shooting/sema-shooting-01.jpg",
  },
  title: "Conception & brainstorming marketing",
  eyebrow: "Publicité digitale",
  description:
    "On pose les fondations de la performance : angles, messages, promesses, structure et rythme. L’objectif est de produire des contenus qui captent l’attention et rendent votre offre évidente.",
  heroImage: "/images/portfolio/shooting/sema-shooting/sema-shooting-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/shooting/sema-shooting/sema-shooting-01.jpg",
      images: [
        "/images/portfolio/shooting/sema-shooting/sema-shooting-01.jpg",
        "/images/portfolio/shooting/sema-shooting/sema-shooting-02.jpg",
        "/images/portfolio/shooting/sema-shooting/sema-shooting-03.jpg",
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
    image: "/images/portfolio/shooting/afro-french-touch/afro-french-touch-01.jpg",
  },
  title: "Création photo & vidéo premium",
  eyebrow: "Publicité digitale",
  description:
    "Des visuels soigneusement réalisés, avec une direction artistique claire, un cadrage précis, et une esthétique moderne qui valorise votre produit ou service. Notre objectif : produire des assets capables de rivaliser avec les codes des marques leaders.",
  heroImage: "/images/portfolio/shooting/afro-french-touch/afro-french-touch-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/shooting/afro-french-touch/afro-french-touch-01.jpg",
      images: [
        "/images/portfolio/shooting/afro-french-touch/afro-french-touch-01.jpg",
        "/images/portfolio/shooting/afro-french-touch/afro-french-touch-02.jpg",
        "/images/portfolio/shooting/afro-french-touch/afro-french-touch-03.jpg",
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
    image: "/images/portfolio/shooting/shining-sister/shining-sister-01.jpg",
  },
  title: "Adaptation aux formats social media",
  eyebrow: "Publicité digitale",
  description:
    "Reels, TikTok, YouTube, Facebook Ads, LinkedIn… Chaque format est optimisé pour respecter les codes de la plateforme tout en maximisant l’impact : rythme, storytelling, durée, accroche visuelle.",
  heroImage: "/images/portfolio/shooting/shining-sister/shining-sister-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/shooting/shining-sister/shining-sister-01.jpg",
      images: [
        "/images/portfolio/shooting/shining-sister/shining-sister-01.jpg",
        "/images/portfolio/shooting/shining-sister/shining-sister-02.jpg",
        "/images/portfolio/shooting/shining-sister/shining-sister-03.jpg",
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
    image: "/images/portfolio/shooting/que-pour-elle-saint-valentin/que-pour-elle-saint-valentin-01.jpg",
  },
  title: "Optimisation pour conversions & branding",
  eyebrow: "Publicité digitale",
  description:
    "Nous produisons des contenus capables de générer de vrais résultats concrets : une hausse mesurable des ventes, une amélioration des taux de clic, une augmentation de l’engagement ainsi qu’un renforcement durable de votre notoriété. Chaque visuel est pensé comme un levier de performance, conçu pour capter l’attention, transmettre votre valeur et inciter votre audience à passer à l’action.",
  heroImage: "/images/portfolio/shooting/que-pour-elle-saint-valentin/que-pour-elle-saint-valentin-01.jpg",
  gallery: [
    {
      title: "Exemples",
      cover: "/images/portfolio/shooting/que-pour-elle-saint-valentin/que-pour-elle-saint-valentin-01.jpg",
      images: [
        "/images/portfolio/shooting/que-pour-elle-saint-valentin/que-pour-elle-saint-valentin-01.jpg",
        "/images/portfolio/shooting/que-pour-elle-saint-valentin/que-pour-elle-saint-valentin-02.jpg",
        "/images/portfolio/shooting/que-pour-elle-saint-valentin/que-pour-elle-saint-valentin-03.jpg",
      ],
    },
  ],
};
