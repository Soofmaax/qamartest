import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { ROUTES } from "@/lib/routes";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Portfolio | Directed by Qamar",
  description:
    "Découvrez une sélection de projets : corporate, mariage, événementiel et contenus digitaux.",
  path: "/portfolio/",
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
    { name: "Portfolio", path: seo.path },
  ],
});

const items = [
  {
    category: "Corporate",
    src: "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
  },
  {
    category: "Événementiel",
    src: "/images/portfolio/evenementiel/beef-club/beef-club-03.jpg",
  },
  {
    category: "Mariage",
    src: "/images/portfolio/mariage/raw-import/ELHAD ET INASS/elhad-et-inass-01.jpg",
  },
  {
    category: "Publicité digitale",
    src: "/images/portfolio/shooting/sema-shooting/sema-shooting-01.jpg",
  },
  {
    category: "Corporate",
    src: "/images/portfolio/corporate/la-pommeraie/la-pommeraie-01.jpg",
  },
  {
    category: "Publicité digitale",
    src: "/images/portfolio/shooting/afro-french-touch/afro-french-touch-01.jpg",
  },
  {
    category: "Corporate",
    src: "/images/portfolio/corporate/unesco/unesco-01.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-5xl text-white md:text-6xl">
                Portfolio
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-200 md:text-xl">
                Une sélection de projets : corporate, mariage, événementiel et
                contenus digitaux.
              </p>
            </div>

            <Link
              href={ROUTES.contact}
              className="rounded-lg border border-white/15 bg-black px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Me contacter
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.category}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-2xl font-semibold text-white">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
