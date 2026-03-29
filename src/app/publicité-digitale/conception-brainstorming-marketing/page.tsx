import type { Metadata } from "next";
import { LegacyRedirectPage } from "@/components/LegacyRedirectPage";
import { createPageMetadata } from "@/lib/seo";

const to = "/publicite-digitale/conception-brainstorming-marketing/";

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

export const metadata: Metadata = {
  ...createPageMetadata({
    title:
      "Conception & brainstorming marketing | Publicité digitale | Directed by Qamar",
    description:
      "Conception d’angles publicitaires, hooks et scripts. Une phase stratégique pour transformer votre message en contenus performants.",
    path: to,
  }),
  robots: isPreview ? { index: false, follow: false, nocache: true } : { index: false, follow: true },
};

export default function PubliciteDigitaleConceptionLegacyPage() {
  return <LegacyRedirectPage to={to} />;
}