import type { Metadata } from "next";
import { Suspense } from "react";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";
import { ROUTES } from "@/lib/routes";
import { buildWebPageGraph } from "@/lib/structuredData";
import { ContactForm } from "./ContactForm";
import { ContactStatusBanner } from "./status-banner";

const seo = {
  title: "Contact | Directed by Qamar",
  description:
    "Contactez Directed by Qamar : décrivez votre projet (date, lieu, contraintes, budget) et recevez un retour rapide.",
  path: "/contact/",
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
    { name: "Contact", path: seo.path },
  ],
});

export default function ContactPage() {
  const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h1 className="font-serif text-5xl text-white md:text-6xl">Contact</h1>
          <p className="mt-4 text-lg text-zinc-200 md:text-xl">
            Décris ton besoin (type de projet, date, lieu, contraintes, budget) et
            je reviens vers toi rapidement.
          </p>

          <div className="mt-10 rounded-lg border border-white/10 bg-black/40 p-6 md:p-8">
            <Suspense fallback={null}>
              <ContactStatusBanner isPreview={isPreview} />
            </Suspense>

            <ContactForm isPreview={isPreview} />

            <p className="mt-5 text-sm text-zinc-400">
              Le destinataire email sera configuré une fois la Google Workspace
              (email de domaine) créée.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
