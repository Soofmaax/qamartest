import type { Metadata } from "next";
import { LegacyRedirectPage } from "@/components/LegacyRedirectPage";
import { createPageMetadata } from "@/lib/seo";

const to = "/publicite-digitale/optimisation-conversions-branding/";

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

export const metadata: Metadata = {
  ...createPageMetadata({
    title:
      "Optimisation conversions & branding | Publicité digitale | Directed by Qamar",
    description:
      "Des contenus publicitaires orientés performance : ventes, taux de clic, engagement et notoriété. L’esthétique au service de l’efficacité.",
    path: to,
  }),
  robots: isPreview ? { index: false, follow: false, nocache: true } : { index: false, follow: true },
};

export default function PubliciteDigitaleOptimisationLegacyPage() {
  return <LegacyRedirectPage to={to} />;
}