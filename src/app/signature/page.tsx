import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ReferencesTicker } from "@/components/ReferencesTicker";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { REFERENCE_LOGOS } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Signature | Directed by Qamar",
  description:
    "Une approche photo et vidéo pensée pour le luxe : discrétion, direction artistique, cohérence, et livrables irréprochables.",
  path: "/signature/",
  image: "/images/portfolio/mariage/raw-import/ELHAD ET INASS/elhad-et-inass-01.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [
    { name: "Accueil", path: ROUTES.home },
    { name: "Signature", path: seo.path },
  ],
});

const pillars = [
  {
    title: "Discrétion",
    desc: "Présence maîtrisée, direction subtile. L’objectif : des images vraies, jamais forcées.",
  },
  {
    title: "Direction artistique",
    desc: "Lumière, composition, rythme. Une esthétique cohérente du début à la fin.",
  },
  {
    title: "Exécution",
    desc: "Un process fluide. Des livrables propres, calibrés et livrés avec exigence.",
  },
];

const proof = [
  { label: "Réponse", value: "48h" },
  { label: "Livraison", value: "Rapide" },
  { label: "Rendu", value: "Premium" },
  { label: "Approche", value: "Sur-mesure" },
];

const clients = ["Hôtel Dali", "Fitness Park", "UNESCO"];

export default function SignaturePage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative hero-height w-full overflow-hidden site-pad-x">
          <Image
            src={seo.image}
            alt="Signature Directed by Qamar"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={DARK_BLUR_DATA_URL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/45 to-black" />

          <div className="relative z-10 flex h-full flex-col justify-end gap-8 pb-16 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-[10px] font-light tracking-[0.22em] text-white/60 uppercase">
                Signature
              </p>
              <h1 className="mt-4 font-serif text-[44px] leading-none text-white md:text-[64px]">
                Une esthétique sobre.
                <br />
                Un rendu de luxe.
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-white/70 md:text-[20px]">
                Nous créons des images intemporelles, avec une attention obsessionnelle aux détails : lumière, matière, couleurs, rythme.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={ROUTES.portfolio}
                className="w-fit rounded-lg bg-black/70 px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
              >
                Voir le portfolio
              </Link>
              <Link
                href={ROUTES.contact}
                className="w-fit text-[11px] font-light tracking-[0.14em] text-white/55 uppercase hover:text-white/80"
              >
                Demander une disponibilité →
              </Link>
            </div>
          </div>
        </section>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Ce qui nous différencie
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
                Une expérience pensée comme du sur-mesure.
              </h2>
            </div>
            <p className="max-w-[420px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Des décisions simples. Une exécution rigoureuse. Une direction artistique constante.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="rounded-lg border border-white/10 bg-black p-8"
              >
                <p className="text-[10px] font-light tracking-[0.18em] text-white/45 uppercase">
                  Pilier
                </p>
                <p className="mt-4 font-serif text-2xl text-white">{p.title}</p>
                <p className="mt-4 text-[13px] font-light leading-relaxed text-white/55">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="grid grid-cols-2 gap-4 border border-white/10 p-6 md:grid-cols-4 md:p-8">
            {proof.map((p) => (
              <div key={p.label} className="rounded-lg border border-white/10 bg-black p-6">
                <p className="text-[10px] font-light tracking-[0.18em] text-white/45 uppercase">
                  {p.label}
                </p>
                <p className="mt-3 font-serif text-3xl text-white">{p.value}</p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Références
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
                Ils nous font confiance.
              </h2>
            </div>
            <p className="max-w-[420px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Sélection de collaborations. Liste complète sur demande.
            </p>
          </div>

          <div className="mt-10 grid gap-4 border border-white/10 p-6 md:grid-cols-3 md:p-8">
            {clients.map((c) => (
              <div key={c} className="rounded-lg border border-white/10 bg-black p-6">
                <p className="text-[10px] font-light tracking-[0.18em] text-white/45 uppercase">
                  Client
                </p>
                <p className="mt-3 font-serif text-2xl text-white">{c}</p>
              </div>
            ))}
          </div>

          <div className="relative mt-10">
            <ReferencesTicker logos={REFERENCE_LOGOS} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Un projet, une vision.
            </h2>
            <p className="text-[18px] font-light text-white/70 md:text-[20px]">
              Dites-nous ce que vous imaginez. On revient vers vous sous 48h.
            </p>
            <Link
              href={ROUTES.contact}
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Demander une disponibilité
            </Link>
          </div>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
