import type { Metadata } from "next";

import Link from "next/link";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { JsonLd } from "@/components/JsonLd";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";
import { PORTFOLIO_PROJECTS } from "@/lib/content";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildGraph,
  buildService,
  buildWebPage,
} from "@/lib/structuredData";

const seo = {
  title: "Photographe & vidéaste de mariage | Directed by Qamar",
  description:
    "Vidéaste et photographe de mariage à Paris. Une approche cinématique et élégante pour créer des souvenirs intemporels.",
  path: "/mariage/",
  image: "https://framerusercontent.com/images/6nk6lOJ0PhfmfG5ELflQRv3Mk.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const url = absoluteUrl(seo.path);
const webpageId = `${url}#webpage`;
const serviceId = `${url}#service`;

const structuredData = buildGraph([
  buildBreadcrumbList({
    path: seo.path,
    items: [
      { name: "Accueil", path: "/" },
      { name: "Mariage", path: seo.path },
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
      name: "Mariage",
      description: seo.description,
    }),
    "@id": serviceId,
    mainEntityOfPage: { "@id": webpageId },
  },
]);

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const lastPrestations = [
  {
    title: "Ninon",
    cover: "https://framerusercontent.com/images/aCW40boMagvmECJgfTGyeQNYAdk.jpg",
    images: [
      "https://framerusercontent.com/images/aCW40boMagvmECJgfTGyeQNYAdk.jpg",
      "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
    ],
  },
  {
    title: "Sokona",
    cover: "https://framerusercontent.com/images/CKNnTEwk1ePqVV3ppEpZJfaeY4.jpg",
    images: [
      "https://framerusercontent.com/images/CKNnTEwk1ePqVV3ppEpZJfaeY4.jpg",
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
    ],
  },
  {
    title: "Mauricien",
    cover: "https://framerusercontent.com/images/eLN6hbfMAa0S7m6HCAs4dE66c.jpg",
    images: [
      "https://framerusercontent.com/images/eLN6hbfMAa0S7m6HCAs4dE66c.jpg",
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    ],
  },
];

const formulas = [
  {
    title: "Photo",
    description: "Immortalisez votre journée avec des images élégantes et intemporelles.",
    bullets: [
      "Reportage complet du mariage : préparatifs, cérémonie, portraits, soirée",
      "Photos haut de gamme, lumière et composition maîtrisées",
      "Retouches professionnelles et travail des couleurs",
      "Remise rapide via galerie privée",
    ],
    href: "/contact/",
    cta: "En savoir plus",
  },
  {
    title: "Vidéo",
    description: "Revivez votre mariage comme un film.",
    bullets: [
      "Captation complète de votre journée avec sensibilité et style",
      "Direction artistique et accompagnement pour chaque plan",
      "Montage cinématique, étalonnage et retouches premium",
      "Livraison rapide via galerie privée ou version téléchargeable",
    ],
    href: "/contact/",
    cta: "En savoir plus",
  },
  {
    title: "Photo + Vidéo",
    description:
      "La formule complète pour une expérience immersive et cohérente.",
    bullets: [
      "Reportage complet combinant photos et vidéos",
      "Direction artistique globale pour un rendu harmonieux",
      "Couleurs, montage et retouches premium pour chaque support",
      "Galerie privée avec accès facile pour partager vos souvenirs",
    ],
    href: "/contact/",
    cta: "En savoir plus",
  },
];

export default function MariagePage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative h-[520px] w-full md:h-[650px]">
            <video
              className="absolute inset-0 hidden h-full w-full object-cover object-bottom md:block"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://framerusercontent.com/images/6nk6lOJ0PhfmfG5ELflQRv3Mk.jpg"
            >
              <source src={`${basePath}/videos/mariage.mp4`} type="video/mp4" />
            </video>

            <video
              className="absolute inset-0 h-full w-full object-cover object-bottom md:hidden"
              controls
              muted
              playsInline
              preload="metadata"
              poster="https://framerusercontent.com/images/6nk6lOJ0PhfmfG5ELflQRv3Mk.jpg"
            >
              <source src={`${basePath}/videos/mariage.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black/90" />

            <div className="relative z-[1] flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <h1 className="font-serif text-5xl tracking-wide text-white md:text-6xl">
                  Mariage
                </h1>
                <p className="text-[18px] text-white/80 md:text-[20px]">
                  fiançailles - Mariage - Shooting
                </p>
                <Link
                  href="/contact/"
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label="/mariage/:hero"
                  className="mt-5 w-fit rounded-lg bg-black/70 px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                >
                  reservations pour 2026 et 2027 ouvertes
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-4xl font-semibold text-white md:text-[64px]">
            Quand chaque instant devient héritage
          </h2>
          <div className="mt-6 grid gap-6 text-[18px] leading-relaxed text-[#ededed] md:grid-cols-2 md:text-[20px]">
            <p>
              En tant que vidéastes et photographes de mariage, notre rôle va bien
              au-delà de la simple captation d’images.
            </p>
            <p>
              Nous créons une expérience sur mesure, pensée pour révéler la beauté
              authentique de vos moments les plus précieux.
            </p>
            <p>
              En France comme à l’étranger, nous façonnons pour vous des souvenirs
              d’exception : des images qui ne se contentent pas d’être vues, mais
              qui se vivent et se ressentent.
            </p>
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="site-pad-x">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mes dernières prestations
            </h2>
          </div>

          <div className="mt-10 w-full">
            <ImageLightboxGallery items={lastPrestations} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Ce que vous obtenez
          </h2>
          <div className="mt-6 grid gap-6 text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Chaque mariage est unique, et chaque projet fait l’objet d’un devis
              personnalisé, adapté à vos besoins, votre lieu et le temps de
              présence souhaité.
            </p>
            <p>Je propose trois formules principales :</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {formulas.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-white/10 bg-black/40 p-6 transition-colors duration-200 hover:border-white/20 hover:bg-black/60"
              >
                <h3 className="font-serif text-3xl font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-4 text-[18px] text-[#ededed] md:text-[20px]">
                  {f.description}
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-[18px] text-[#ededed] md:text-[20px]">
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <Link
                  href={f.href}
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label={`/mariage/:formule:${f.title}`}
                  className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                >
                  {f.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mon portfolio
            </h2>
            <Link
              href="/portfolio/"
              data-ga-event="cta_click"
              data-ga-category="Navigation"
              data-ga-label="/mariage/:portfolio"
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mt-10">
            <ProjectsCarousel projects={PORTFOLIO_PROJECTS} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Votre expérience, étape par étape
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Premier échange", "Préparation", "Le Jour‑J", "Post‑production"].map(
              (title, idx) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-black/40 p-6 transition-colors duration-200 hover:border-white/20 hover:bg-black/60"
                >
                  <p className="font-serif text-4xl font-semibold text-white">
                    {idx + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[18px] text-[#ededed] md:text-[20px]">
                    {
                      [
                        "Par téléphone, visioconférence ou rencontre : on parle de vous, de votre histoire et de vos envies.",
                        "Repérage, conseils et anticipation des moments forts.",
                        "Je suis présent, discret et attentif à chaque instant important.",
                        "Sélection, montage, retouches et habillage cinématique.",
                      ][idx]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Prêt à immortaliser votre mariage ?
            </h2>
            <p className="text-[18px] text-[#ededed] md:text-[20px]">
              Les disponibilités sont limitées pour garantir une attention totale
              à chaque projet.
            </p>
            <Link
              href="/contact/"
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label="/mariage/:bottom"
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Vérifier mes disponibiltés
            </Link>
          </div>
        </section>

        <GoogleReviewsSection />
      </main>

      <SiteFooter />
    </div>
  );
}
