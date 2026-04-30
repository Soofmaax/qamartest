import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ReferencesTicker } from "@/components/ReferencesTicker";
import { RevealOnScroll } from "@/components/RevealOnScroll";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { TextCycler } from "@/components/TextCycler";
import { createPageMetadata } from "@/lib/seo";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { REFERENCE_LOGOS, SERVICES } from "@/lib/content";
import { ROUTES } from "@/lib/routes";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Photographe & vidéaste professionnel | Directed by Qamar",
  description:
    "Directed by Qamar est un studio de création visuelle basé à Paris. Photo & vidéo corporate, mariage, événementiel et contenus digitaux.",
  path: "/",
  image: "/images/portfolio/mariage/raw-import/ELHAD ET INASS/elhad-et-inass-01.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [{ name: "Accueil", path: ROUTES.home }],
});

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative hero-height w-full overflow-hidden site-pad-x">
          <Image
            src="/images/portfolio/mariage/raw-import/ELHAD ET INASS/elhad-et-inass-01.jpg"
            alt="Directed by Qamar"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            placeholder="blur"
            blurDataURL={DARK_BLUR_DATA_URL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-[34px] text-center">
            <div className="flex w-full flex-col items-center gap-[8px]">
              <p className="text-[10px] font-light tracking-[0.22em] text-white/60 uppercase">
                Studio photo & vidéo · Paris
              </p>
              <h1 className="font-serif text-[42px] leading-none text-white sm:text-[54px] md:text-[64px]">
                <span className="block">Directed by Qamar</span>
                <TextCycler
                  items={[
                    "Photo.",
                    "Vidéo.",
                    "Corporate.",
                    "Mariage.",
                    "Événementiel.",
                  ]}
                  ariaLabel="Photo, vidéo, corporate, mariage, événementiel"
                  className="mt-3"
                  itemClassName="bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent"
                  secondsPerItem={3}
                />
              </h1>
              <div className="mt-2 max-w-3xl text-[18px] leading-[23px] text-white/70 md:text-[20px]">
                <p>
                  Une signature visuelle élégante, pensée pour les marques et les
                  histoires d’exception.
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href={ROUTES.portfolio}
                className="rounded-lg bg-black/70 px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
              >
                Voir le portfolio
              </Link>
              <Link
                href={ROUTES.signature}
                className="text-[11px] font-light tracking-[0.14em] text-white/55 uppercase hover:text-white/80"
              >
                Découvrir la signature →
              </Link>
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex w-full flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                Nos références
              </h2>
              <p className="text-[18px] text-white/70 md:text-[20px]">
                Marques, entreprises et expériences premium.
              </p>
            </div>

            <div className="relative w-full md:w-[55%]">
              <ReferencesTicker logos={REFERENCE_LOGOS} variant="home" />
            </div>
          </div>
        </section>

        <RevealOnScroll as="div">
          <GoogleReviewsSection />
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Process
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
                Un cadre simple. Un rendu irréprochable.
              </h2>
            </div>
            <p className="max-w-[420px] text-right text-[12px] font-light leading-relaxed text-white/45">
              Un accompagnement clair, pensé pour des clients exigeants. Brief, direction artistique, livraison.
            </p>
          </div>

          <div className="mt-10 grid gap-4 border border-white/10 p-6 md:grid-cols-3 md:p-8">
            {[
              { k: "01", t: "Échange privé", d: "Un brief précis, une vision, une esthétique." },
              { k: "02", t: "Production", d: "Discrétion, maîtrise, direction subtile." },
              { k: "03", t: "Livraison", d: "Un rendu calibré, prêt à être utilisé." },
            ].map((s) => (
              <div key={s.k} className="rounded-lg border border-white/10 bg-black p-6">
                <p className="font-serif text-3xl text-white/15">{s.k}</p>
                <p className="mt-4 text-[11px] font-light tracking-[0.14em] text-white uppercase">
                  {s.t}
                </p>
                <p className="mt-3 text-[12px] font-light leading-relaxed text-white/55">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </RevealOnScroll>

        <section id="services" className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center site-pad-x">
              <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
                Services
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
                Collections.
              </h2>
              <p className="mt-4 text-[18px] text-white/70 md:text-[20px]">
                Photo et vidéo, pensées comme une signature.
              </p>
            </div>

            <div className="w-full">
              {SERVICES.map((s) => (
                <div
                  key={s.title}
                  className="relative h-[300px] w-full overflow-hidden md:h-[367px]"
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
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-black/0" />

                  <div className="absolute inset-0 flex flex-col justify-center gap-[22px] site-pad-x">
                    <h3 className="font-serif text-[28px] font-semibold text-white md:text-[36px]">
                      {s.title}
                    </h3>
                    <p className="w-full text-[18px] text-[#ededed] md:w-[60%] md:text-[20px] lg:w-[38%]">
                      {s.description}
                    </p>
                    <Link
                      href={s.href}
                      className="w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <RevealOnScroll as="section" className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="border border-white/10 p-8 md:p-12">
            <p className="text-[10px] font-light tracking-[0.22em] text-white/45 uppercase">
              Témoignages
            </p>
            <h2 className="mt-4 font-serif text-3xl font-semibold text-white md:text-[48px]">
              Une expérience fluide.
            </h2>
            <p className="mt-4 text-[18px] font-light text-white/70 md:text-[20px]">
              Discrétion, direction artistique, livraison. Rien de superflu.
            </p>
            <div className="mt-10">
              <Testimonials />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll as="section" className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Parlez-nous de votre projet.
            </h2>
            <p className="text-[18px] font-light text-white/70 md:text-[20px]">
              Réponse sous 48h. Devis clair. Direction artistique sur-mesure.
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
