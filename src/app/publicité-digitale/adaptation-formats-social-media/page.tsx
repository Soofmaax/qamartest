import type { Metadata } from "next";
import { LegacyRedirectPage } from "@/components/LegacyRedirectPage";
import { createPageMetadata } from "@/lib/seo";

const to = "/publicite-digitale/adaptation-formats-social-media/";

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

export const metadata: Metadata = {
  ...createPageMetadata({
    title:
      "Adaptation aux formats social media | Publicité digitale | Directed by Qamar",
    description:
      "Déclinaisons et optimisations pour Reels, TikTok, YouTube, Facebook Ads, LinkedIn : rythme, storytelling, durée, accroche visuelle.",
    path: to,
  }),
  robots: isPreview ? { index: false, follow: false, nocache: true } : { index: false, follow: true },
};

export default function PubliciteDigitaleAdaptationLegacyPage() {
  return <LegacyRedirectPage to={to} />;
}