import Image from "next/image";
import Link from "next/link";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function DigitalAdsServicePage({
  path,
  seoTitle,
  seoDescription,
  structuredData,
  title,
  eyebrow,
  description,
  heroImage,
  gallery,
}: {
  path: string;
  seoTitle: string;
  seoDescription: string;
  structuredData: unknown;
  title: string;
  eyebrow: string;
  description: string;
  heroImage: string;
  gallery: Array<{ title: string; cover: string; images: string[] }>;
}) {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative h-[520px] w-full md:h-[650px]">
            <Image src={heroImage} alt={seoTitle} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black" />

            <div className="relative z-[1] flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <h1 className="font-serif text-5xl tracking-wide text-white md:text-6xl">
                  {title}
                </h1>
                <p className="text-[18px] text-white/80 md:text-[20px]">{eyebrow}</p>
                <Link
                  href="/contact/"
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label={`${path}:hero`}
                  className="mt-5 w-fit rounded-lg bg-black/70 px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                >
                  Discuter de votre projet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            {title}
          </h2>
          <p className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            {seoDescription}
          </p>
          <p className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            {description}
          </p>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Le process
          </h2>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              L’objectif est simple : produire des assets publicitaires clairs,
              esthétiques et efficaces. On travaille avec un process fluide pour
              itérer rapidement, livrer les bons formats et maximiser la
              performance.
            </p>

            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Brief : offre, audience, angle, promesse, objectifs</li>
              <li>Conception : idées, hooks, script, storyboard (si besoin)</li>
              <li>Production : tournage / shooting + direction artistique</li>
              <li>Post-production : montage, rythme, sous-titres, déclinaisons</li>
              <li>Livraison : exports prêts Ads (9:16 / 1:1 / 16:9)</li>
            </ul>

            <p className="mt-6">Délais typiques : 3 à 10 jours selon le projet.</p>
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="site-pad-x">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Portfolio
            </h2>
          </div>
          <div className="mt-10 w-full">
            <ImageLightboxGallery items={gallery} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <Link
              href="/publicité-digitale/"
              data-ga-event="cta_click"
              data-ga-category="Navigation"
              data-ga-label={`${path}:back`}
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Retour à Publicité digitale
            </Link>
            <Link
              href="/contact/"
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label={`${path}:devis`}
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Demander un devis
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
