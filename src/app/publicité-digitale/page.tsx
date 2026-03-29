import type { Metadata } from "next";
import { LegacyRedirectPage } from "@/components/LegacyRedirectPage";
import { createPageMetadata } from "@/lib/seo";

const to = "/publicite-digitale/";

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Photographe & vidéaste publicité digitale | Directed by Qamar",
    description:
      "Des contenus publicitaires pensés pour performer : photo/vidéo premium, storytelling, hooks, formats Ads, et déclinaisons pour réseaux et site web.",
    path: to,
  }),
  robots: isPreview ? { index: false, follow: false, nocache: true } : { index: false, follow: true },
};

export default function PubliciteDigitaleLegacyPage() {
  return <LegacyRedirectPage to={to} />;
}
