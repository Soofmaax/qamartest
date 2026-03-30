import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { SERVICES } from "@/lib/content";
import { createPageMetadata } from "@/lib/seo";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { ROUTES } from "@/lib/routes";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Services | Directed by Qamar",
  description:
    "Découvrez nos prestations photo & vidéo : mariage, corporate, événementiel et publicité digitale.",
  path: "/services/",
  image: "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [
    { name: "Accueil", path: ROUTES.home },
    { name: "Services", path: seo.path },
  ],
});

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative hero-height w-full overflow-hidden site-pad-x">
          <Image
            src={seo.image}
            alt="Services"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={DARK_BLUR_DATA_URL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/40 to-black" />

          <div className="relative z-10 flex h-full flex-col justify-end gap-6 pb-16 md:pb-20">
            <div className="max-w-2xl">
              <p className="text-[10px] font-light tracking-[0.22em] text-white/60 uppercase">
                Studio · Photo & Vidéo
              </p>
              <h1 className="mt-4 font-serif text-[44px] leading-none text-white md:text-[64px]">
                Collections.
              </h1>
              <p className="mt-6 text-[18px] leading-[23px] text-white/70 md:text-[20px]">
                Des productions sobres, précises, et pensées pour durer.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="#prestations"
                className="w-fit rounded-lg bg-black/70 px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
              >
                Voir les prestations
              </Link>
              <Link
                href={ROUTES.contact}
                className="w-fit text-[11px] font-light tracking-[0.14em] text-white/55 uppercase hover:text-white/80"
              >
                Me contacter →
              </Link>
            </div>
          </div>
        </section>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Notre méthode
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
                Une production simple, un rendu premium.
              </h2>
            </div>
            <p className="max-w-[420px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Réponse sous 48h. Devis clair. Livraison rapide. Un process pensé pour être fluide, du brief à la livraison.
            </p>
          </div>

          <div className="mt-10 grid gap-4 border border-white/10 p-6 md:grid-cols-3 md:p-8">
            {["Brief & moodboard", "Tournage maîtrisé", "Livraison premium"].map((t) => (
              <div key={t} className="rounded-lg border border-white/10 bg-black p-6">
                <p className="text-[11px] font-light tracking-[0.14em] text-white/55 uppercase">
                  {t}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <section id="prestations" className="w-full bg-black pb-16 md:pb-20">
          {SERVICES.map((s) => (
            <RevealOnScroll
              key={s.title}
              as="div"
              className="relative h-[300px] w-full overflow-hidden border-t border-white/10 md:h-[367px]"
            >
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="100vw"
                placeholder="blur"
                blurDataURL={DARK_BLUR_DATA_URL}
                className={`object-cover ${s.position ?? ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-black/0" />

              <div className="absolute inset-0 flex flex-col justify-center gap-[18px] site-pad-x md:gap-[22px]">
                <p className="text-[10px] font-light tracking-[0.22em] text-white/50 uppercase">
                  Collection
                </p>
                <h2 className="font-serif text-[28px] font-semibold text-white md:text-[36px]">
                  {s.title}
                </h2>
                <p className="w-full text-[18px] text-white/70 md:w-[60%] md:text-[20px] lg:w-[38%]">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="w-fit rounded-lg bg-black/70 px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                >
                  Découvrir
                </Link>
              </div>
            </RevealOnScroll>
          ))}
        </section>

        <RevealOnScroll as="section" className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Prêt à donner une nouvelle dimension à vos contenus ?
            </h2>
            <p className="text-[18px] font-light text-white/70 md:text-[20px]">
              Parlez-nous de votre besoin, on vous répond sous 48h.
            </p>
            <Link
              href={ROUTES.contact}
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Me contacter
            </Link>
          </div>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
