import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { ROUTES } from "@/lib/routes";
import {
  absoluteUrl,
  buildBreadcrumbList,
  buildFaqPage,
  buildGraph,
  buildService,
  buildWebPage,
  type FaqItem,
} from "@/lib/structuredData";

export function ServicePage({
  path,
  seoTitle,
  seoDescription,
  title,
  description,
  heroImage,
  heroVideoSrc,
  gallery,
  introTitle,
  introParagraphs,
  deliverables,
  faq,
}: {
  path: string;
  seoTitle?: string;
  seoDescription?: string;
  title: string;
  description: string;
  heroImage: string;
  heroVideoSrc?: string;
  gallery: string[];
  introTitle: string;
  introParagraphs: string[];
  deliverables: string[];
  faq: FaqItem[];
}) {
  const url = absoluteUrl(path);
  const webpageId = `${url}#webpage`;
  const serviceId = `${url}#service`;
  const faqId = `${url}#faq`;

  const structuredData = buildGraph([
    buildBreadcrumbList({
      path,
      items: [
        { name: "Accueil", path: ROUTES.home },
        { name: title, path },
      ],
    }),
    {
      ...buildWebPage({
        path,
        name: seoTitle ?? `${title} | Directed by Qamar`,
        description: seoDescription ?? description,
        imageUrl: heroImage,
      }),
      mainEntity: { "@id": serviceId },
      hasPart: [{ "@id": faqId }],
    },
    {
      ...buildService({ path, name: title, description }),
      "@id": serviceId,
      mainEntityOfPage: { "@id": webpageId },
    },
    {
      ...buildFaqPage({ path, items: faq, aboutServiceId: serviceId }),
      "@id": faqId,
      mainEntityOfPage: { "@id": webpageId },
    },
  ]);

  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden px-4 py-20 md:px-8">
          <div className="relative mx-auto min-h-[420px] w-full max-w-6xl overflow-hidden rounded-lg">
            {heroVideoSrc ? (
              <video
                className="absolute inset-0 h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster={heroImage}
              >
                <source src={heroVideoSrc} type="video/mp4" />
              </video>
            ) : (
              <Image
                src={heroImage}
                alt={title}
                fill
                priority
                fetchPriority="high"
                sizes="100vw"
                placeholder="blur"
                blurDataURL={DARK_BLUR_DATA_URL}
                className="object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
            <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 md:p-10">
              <h1 className="font-serif text-5xl leading-[1] text-white md:text-6xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">
                {description}
              </p>
              <div className="pt-2">
                <Link
                  href={ROUTES.contact}
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label={`${path}:hero_contact`}
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-20 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-serif text-4xl font-semibold text-white">
              {introTitle}
            </h2>
            <div className="mt-4 grid gap-4 text-lg leading-relaxed text-zinc-200 md:grid-cols-2">
              {introParagraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h3 className="mt-10 font-serif text-3xl font-semibold text-white">
              Livrables
            </h3>
            <ul className="mt-4 grid list-disc gap-2 pl-5 text-lg text-zinc-200 md:grid-cols-2">
              {deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                href={ROUTES.contact}
                data-ga-event="cta_click"
                data-ga-category="Lead"
                data-ga-label={`${path}:devis`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
              >
                Demander un devis
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-24 md:px-8">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`${title} ${i + 1}`}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black px-4 pb-24 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-serif text-4xl font-semibold text-white">FAQ</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {faq.map((item) => (
                <div key={item.q} className="rounded-lg border border-white/10 p-5">
                  <h3 className="text-lg font-semibold text-white">{item.q}</h3>
                  <p className="mt-2 text-lg text-zinc-200">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-24 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <h2 className="font-serif text-4xl font-semibold text-white">
              Découvrir les autres prestations
            </h2>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { href: ROUTES.mariage, label: "Mariage" },
                { href: ROUTES.corporate, label: "Corporate" },
                { href: ROUTES.publiciteDigitale, label: "Publicité digitale" },
                { href: ROUTES.evenementiel, label: "Événementiel" },
              ]
                .filter((l) => l.label !== title)
                .map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-lg border border-white/15 bg-black px-5 py-2.5 text-lg text-zinc-200 hover:bg-white/5"
                  >
                    {l.label}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
