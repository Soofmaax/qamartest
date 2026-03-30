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
import { CORPORATE_SERVICES, PORTFOLIO_PROJECTS, REFERENCE_LOGOS } from "@/lib/content";
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
  title: "Photographe & vidéaste corporate | Directed by Qamar",
  description:
    "Création de contenus photo et vidéo pour entreprises : image de marque, communication corporate, vidéos professionnelles et storytelling visuel.",
  path: "/corporate/",
  image: "https://framerusercontent.com/images/9MhLc1R5WqXjf2kyVHnU1AmNhXs.jpg",
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
      { name: "Corporate", path: seo.path },
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
      name: "Corporate",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);



export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative hero-height w-full">
            <Image
              src={seo.image}
              alt="Corporate"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              placeholder="blur"
              blurDataURL={DARK_BLUR_DATA_URL}
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black" />

            <div className="relative z-[1] flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <h1 className="font-serif text-5xl tracking-wide text-white md:text-6xl">
                  Corporate
                </h1>
                <p className="text-[18px] text-white/80 md:text-[20px]">
                  Créer de la valeur avec l’image
                </p>
                <Link
                  href={ROUTES.contact}
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label="/corporate/:hero"
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
              Une communication visuelle cohérente renforce votre identité, votre
              crédibilité et votre impact.
            </p>
            <p className="mt-6">
              Chez Directed by Qamar, chaque production est pensée pour refléter
              votre professionnalisme, renforcer la confiance de vos clients et
              mettre en lumière ce qui rend votre entreprise unique.
            </p>
          </div>
        </section>

        <section className="w-full bg-black">
          {CORPORATE_SERVICES.map((s) => (
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
                    data-ga-label={`/corporate/:service:${s.title}`}
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
              <ReferencesTicker logos={REFERENCE_LOGOS} durationSeconds={25} />
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
              data-ga-label="/corporate/:portfolio"
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
            Corporate
          </h2>
          <h3 className="mt-6 font-serif text-3xl font-semibold text-white md:text-[48px]">
            Une image forte attire plus que des regards : elle crée de la confiance.
          </h3>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Aujourd’hui, une entreprise avec une identité visuelle soignée
              convertit davantage, attire de meilleurs clients et se positionne
              comme un acteur crédible.
            </p>
            <p className="mt-6">Une vidéo professionnelle peut :</p>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Accroître le taux de rétention sur votre site</li>
              <li>Clarifier l’offre et les valeurs de votre entreprise</li>
              <li>Améliorer votre visibilité sur les réseaux</li>
              <li>Renforcer l’engagement de vos équipes</li>
              <li>Attirer des prospects plus qualifiés</li>
            </ul>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Pourquoi travailler avec Directed by Qamar ?
          </h2>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Aujourd’hui, une entreprise avec une identité visuelle soignée
              convertit davantage, attire de meilleurs clients et se positionne
              comme un acteur crédible.
            </p>
            <p className="mt-6">Une vidéo professionnelle peut :</p>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Direction artistique haut de gamme</li>
              <li>Une approche stratégique</li>
              <li>Accompagnement complet</li>
              <li>Des productions qui durent dans le temps</li>
              <li>Expertise dans la publicité digitale</li>
            </ul>

            <h3 className="mt-10 font-serif text-3xl font-semibold text-white">
              Pour qui ?
            </h3>
            <p className="mt-4">
              PME, startups, agences, directions marketing, entreprises ambitieuses
              souhaitant transmettre une image professionnelle et moderne.
            </p>

            <Link
              href={ROUTES.contact}
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label="/corporate/:devis"
              className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Demander un devis
            </Link>
          </div>
        </section>

        <GoogleReviewsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
