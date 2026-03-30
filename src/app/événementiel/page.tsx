import type { Metadata } from "next";
import { LegacyRedirectPage } from "@/components/LegacyRedirectPage";
import { createPageMetadata } from "@/lib/seo";

const to = "/evenementiel/";

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Photographe & vidéaste événementiel | Directed by Qamar",
    description:
      "Couverture photo/vidéo événementiel à Paris : conférences, lancements, soirées, festivals. Captation, montage, contenus live et recap.",
    path: to,
  }),
  // Prevent indexing of legacy URLs (the canonical is the new ASCII-only route).
  robots: isPreview ? { index: false, follow: false, nocache: true } : { index: false, follow: true },
};

export default function EvenementielLegacyPage() {
  return <LegacyRedirectPage to={to} />;
}
