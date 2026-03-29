import type { Metadata } from "next";
import { LegacyRedirectPage } from "@/components/LegacyRedirectPage";
import { createPageMetadata } from "@/lib/seo";

const to = "/publicite-digitale/creation-photo-video-premium/";

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Création photo & vidéo premium | Publicité digitale | Directed by Qamar",
    description:
      "Production photo et vidéo premium pour la publicité : direction artistique, cadrage, esthétique moderne, mise en valeur produit/service.",
    path: to,
  }),
  robots: isPreview ? { index: false, follow: false, nocache: true } : { index: false, follow: true },
};

export default function PubliciteDigitaleCreationLegacyPage() {
  return <LegacyRedirectPage to={to} />;
}