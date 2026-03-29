import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { ReferencesTicker } from "@/components/ReferencesTicker";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { PORTFOLIO_PROJECTS } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = {
  title: "Photographe & vidéaste publicité digitale | Directed by Qamar",
  description:
    "Des contenus publicitaires pensés pour performer : photo/vidéo premium, storytelling, hooks, formats Ads, et déclinaisons pour réseaux et site web.",
  path: "/publicite-digitale/",
  image: "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
};

export const metadata: Metadata = createPageMetadata(seo);

const url = absoluteUrl(seo.path);
const webpageId = `${url}#webpage`;
const serviceId = `${url}#service`;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: ROUTES.home },
      { name: "Publicité digitale", path: seo.path },
    ],
  }),
  {
    ...buildWebPage({
      path: seo.path,
      name: seo.title,
      description: seo.description,
      imageUrl: seo.image,
    }),
    mainEntity: { "@id": serviceId },
  },
  {
    ...buildService({
      path: seo.path,
      name: "Publicité digitale",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

const services = [
  {
    title: "Conception & brainstorming marketing",
    description:
      "Des idées claires, des angles forts et une accroche qui retient l’attention. On prépare les messages, le rythme, et la structure pour produire des contenus efficaces.",
    image: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    href: "/publicite-digitale/conception-brainstorming-marketing/",
  },
  {
    title: "Création photo & vidéo premium",
    description:
      "Des visuels soigneusement réalisés, avec une direction artistique claire, un cadrage précis, et une esthétique moderne qui valorise votre produit ou service. Notre expertise permet de créer des contenus capables de rivaliser avec les codes des marques leaders.",
    image: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
    href: "/publicite-digitale/creation-photo-video-premium/",
  },
  {
    title: "Adaptation aux formats social media",
    description:
      "Reels, TikTok, YouTube, Facebook Ads, LinkedIn... Chaque format est optimisé pour respecter les codes de la plateforme tout en maximisant l’impact : rythme, storytelling, durée, accroche visuelle.",
    image: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
    href: "/publicite-digitale/adaptation-formats-social-media/",
  },
  {
    title: "Optimisation pour conversions & branding",
    description:
      "Nous produisons des contenus capables de générer de vrais résultats concrets : une hausse mesurable des ventes, une amélioration des taux de clic, une augmentation de l’engagement ainsi qu’un renforcement durable de votre notoriété. Chaque visuel est pensé comme un levier de performance, conçu pour capter l’attention, transmettre votre valeur et inciter votre audience à passer à l’action. Chaque asset s’inscrit dans une logique publicitaire précise, où l’esthétique sert avant tout l’efficacité.",
    image: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
    href: "/publicite-digitale/optimisation-conversions-branding/",
  },
];

const referenceLogos = [
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

export default function PubliciteDigitalePage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative hero-height w-full">
            <Image
              src={seo.image}
              alt="Publicité digitale"
              fill
              priority
              sizes="100vw"
              placeholder="blur"
              blurDataURL={DARK_BLUR_DATA_URL}
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black" />

            <div className="relative z-[1] flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <h1 className="font-serif text-5xl tracking-wide text-white md:text-6xl">
                  Publicité digitale
                </h1>
                <p className="text-[18px] text-white/80 md:text-[20px]">
                  Des contenus pensés pour performer
                </p>
                <Link
                  href={ROUTES.contact}
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label="/publicite-digitale/:hero"
                  className="mt-5 w-fit rounded-lg bg-black/70 px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                >
                  Discuter de votre projet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="text-center font-serif text-3xl font-semibold text-white md:text-[48px]">
            Directed by Qamar
          </h2>
          <div className="mx-auto mt-6 max-w-4xl text-center text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Dans un environnement saturé d’informations, seules les images
              pertinentes, belles et stratégiquement pensées retiennent l’attention.
            </p>
            <p className="mt-6">
              Votre communication mérite des contenus publicitaires qui attirent,
              engagent et transforment. Chez Directed by Qamar, chaque production
              est conçue pour être performante et impactante, tout en renforçant
              l’identité de votre marque.
            </p>
          </div>
        </section>

        <section className="w-full bg-black">
          {services.map((s) => (
            <div key={s.title} className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image
                  src={s.image}
                  alt={s.title}
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/55 to-black" />

              <div className="relative mx-auto w-full max-w-6xl py-16 site-pad-x md:py-20">
                <div className="w-full md:w-[82%]">
                  <h3 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
                    {s.description}
                  </p>

                  <Link
                    href={s.href}
                    data-ga-event="cta_click"
                    data-ga-category="Navigation"
                    data-ga-label={`/publicite-digitale/:service:${s.title}`}
                    className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                Nos références
              </h2>
              <p className="mt-2 text-[18px] text-[#ededed] md:text-[20px]">
                Des collaborations qui parlent d’elles-mêmes.
              </p>
            </div>

            <div className="relative">
              <ReferencesTicker logos={referenceLogos} durationSeconds={25} />
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col gap-6 site-pad-x md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mon portfolio
            </h2>
            <Link
              href={ROUTES.portfolio}
              data-ga-event="cta_click"
              data-ga-category="Navigation"
              data-ga-label="/publicite-digitale/:portfolio"
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mt-10 site-pad-x">
            <ProjectsCarousel projects={PORTFOLIO_PROJECTS} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Pourquoi investir dans la publicité digitale ?
          </h2>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Aujourd’hui, les entreprises qui gagnent en visibilité sont celles
              qui maîtrisent leur communication et utilisent le bon contenu au bon
              moment.
            </p>

            <p className="mt-6">Un bon contenu publicitaire permet de :</p>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Attirer l’attention malgré la saturation</li>
              <li>Créer un lien émotionnel avec le public</li>
              <li>Communiquer votre valeur réelle</li>
              <li>Convertir sans paraître agressif</li>
              <li>Renforcer la crédibilité de votre marque</li>
              <li>Se démarquer des concurrents</li>
            </ul>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Pourquoi travailler avec Directed by Qamar ?
          </h2>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <ul className="list-disc space-y-2 pl-5">
              <li>Spécialisation en publicité digitale</li>
              <li>Production haut de gamme</li>
              <li>Stratégie + créativité</li>
              <li>Processus fluide et accompagnement complet</li>
              <li>Un créateur qui comprend les enjeux business</li>
            </ul>

            <h3 className="mt-10 font-serif text-3xl font-semibold text-white">
              Mon objectif
            </h3>
            <p className="mt-4">
              Créer des contenus publicitaires capables d’impulser une véritable
              dynamique de croissance. Des productions pensées pour stimuler les
              ventes, accroître la visibilité de votre marque et installer
              durablement votre notoriété. Chaque création vise à transformer
              l’attention en intérêt, puis l’intérêt en action, afin de positionner
              votre entreprise là où elle mérite d’être : au premier plan.
            </p>

            <div className="mt-10 flex flex-col gap-4 md:flex-row md:gap-10">
              <p className="font-serif text-3xl text-white">Ventes</p>
              <p className="font-serif text-3xl text-white">Visibilité</p>
              <p className="font-serif text-3xl text-white">Notoriété</p>
            </div>

            <Link
              href={ROUTES.contact}
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label="/publicite-digitale/:devis"
              className="mt-10 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Discuter de votre projet
            </Link>
          </div>
        </section>

        <GoogleReviewsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
