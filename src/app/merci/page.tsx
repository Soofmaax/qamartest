import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { buildWebPageGraph } from "@/lib/structuredData";
import { ThankYouTracker } from "./ThankYouTracker";

const seo = {
  title: "Merci | Directed by Qamar",
  description: "Merci pour votre message. Nous revenons vers vous rapidement.",
  path: "/merci/",
  image: "/images/portfolio/mariage/raw-import/ELHAD ET INASS/elhad-et-inass-01.jpg",
  robots: { index: false, follow: false },
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [
    { name: "Accueil", path: ROUTES.home },
    { name: "Merci", path: seo.path },
  ],
});

export default function MerciPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-3xl rounded-lg border border-white/10 bg-black/40 p-6 md:p-10">
          <h1 className="font-serif text-5xl text-white md:text-6xl">Merci</h1>
          <p className="mt-4 text-lg text-zinc-200 md:text-xl">
            Votre message a bien été envoyé. Je reviens vers vous rapidement.
          </p>

          <div className="mt-8 flex flex-col gap-3 md:flex-row">
            <Link
              href={ROUTES.home}
              className="inline-flex w-fit rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Retour à l’accueil
            </Link>
            <Link
              href={ROUTES.portfolio}
              className="inline-flex w-fit rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Voir le portfolio
            </Link>
          </div>
        </div>

        <Suspense fallback={null}>
          <ThankYouTracker />
        </Suspense>
      </main>

      <SiteFooter />
    </div>
  );
}
