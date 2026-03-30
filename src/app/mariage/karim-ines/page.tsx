import type { Metadata } from "next";

import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { MARIAGE_PAGE_CONTENT } from "@/lib/pageContent";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Karim & Inès | Mariage destination | Directed by Qamar",
  description:
    "Un mariage destination à Marrakech : une lumière chaude, des textures et une narration cinématique.",
  path: "/mariage/karim-ines/",
  image: "/images/mariage/mariage-15.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [
    { name: "Accueil", path: ROUTES.home },
    { name: "Mariage", path: ROUTES.mariage },
    { name: "Karim & Inès", path: seo.path },
  ],
});

const gallery = [
  {
    title: "Karim & Inès",
    cover: "/images/mariage/mariage-15.jpg",
    images: [
      "/images/mariage/mariage-15.jpg",
      "/images/mariage/mariage-14.jpg",
      "/images/mariage/mariage-13.jpg",
      "/images/mariage/mariage-12.jpg",
      "/images/mariage/mariage-11.jpg",
      "/images/mariage/mariage-10.jpg",
    ],
  },
];

export default function KarimInesPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative hero-height w-full overflow-hidden site-pad-x">
          <Image
            src={seo.image}
            alt="Karim & Inès"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black" />

          <div className="relative z-10 flex h-full flex-col justify-end gap-8 pb-16 md:pb-20">
            <div className="max-w-3xl">
              <p className="text-[10px] font-light tracking-[0.22em] text-white/60 uppercase">
                Mariage destination · Récit
              </p>
              <h1 className="mt-4 font-serif text-[44px] leading-none text-white md:text-[64px]">
                Karim & Inès
              </h1>
              <p className="mt-6 text-[18px] leading-relaxed text-white/70 md:text-[20px]">
                Marrakech · Printemps 2024. Une lumière dorée, des matières, une atmosphère unique.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href={ROUTES.mariage}
                className="w-fit text-[11px] font-light tracking-[0.14em] text-white/55 uppercase hover:text-white/80"
              >
                Retour mariage →
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
                Le récit
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
                Un décor, une énergie, une signature.
              </h2>
            </div>
            <p className="max-w-[520px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Une narration cinématique, un rythme naturel, et une attention particulière aux détails : textures, lumière, mouvements.
            </p>
          </div>

          <div className="mt-10">
            <ImageLightboxGallery items={gallery} />
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Un mariage destination ?
            </h2>
            <p className="text-[18px] font-light text-white/70 md:text-[20px]">
              Partagez votre lieu et votre vision. On vous répond sous 48h.
            </p>
            <Link
              href={ROUTES.contact}
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Demander une disponibilité
            </Link>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Plus de mariages
          </h2>
          <p className="mt-4 text-[18px] font-light text-white/70 md:text-[20px]">
            Une sélection d’images récentes.
          </p>
          <div className="mt-10">
            <ImageLightboxGallery items={MARIAGE_PAGE_CONTENT.lastPrestations} />
          </div>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
