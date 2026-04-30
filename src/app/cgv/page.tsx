import type { Metadata } from "next";

import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ROUTES } from "@/lib/routes";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "CGV | Directed by Qamar",
  description:
    "Consultez les Conditions Générales de Vente (CGV) de Directed by Qamar.",
  path: ROUTES.cgv,
  image: "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
};

export const metadata: Metadata = createPageMetadata({
  ...seo,
  robots: { index: false, follow: false },
});

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [
    { name: "Accueil", path: ROUTES.home },
    { name: "CGV", path: seo.path },
  ],
});

export default function CgvPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-[48px]">
            Conditions Générales de Vente
          </h1>
          <p className="mt-4 text-[18px] leading-[23px] text-[#ededed] md:text-[20px]">
            Document en cours de rédaction.
          </p>

          <div className="mt-10 max-w-3xl space-y-6 text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Les CGV complètes seront fournies par le client et publiées ici.
            </p>
            <p>
              Pour toute question, contactez-nous via la page{" "}
              <a
                href={ROUTES.contact}
                className="underline underline-offset-4 decoration-white/40 transition-colors duration-200 hover:text-white"
              >
                Contact
              </a>
              .
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
