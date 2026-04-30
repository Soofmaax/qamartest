import type { Metadata } from "next";
import { Arimo, Cormorant_SC, Syncopate } from "next/font/google";
import "./globals.css";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import { CookieConsentBanner } from "@/components/CookieConsentBanner";
import { JsonLd } from "@/components/JsonLd";
import {
  buildGraph,
  buildOrganizationLocalBusiness,
  buildPerson,
  buildWebSite,
} from "@/lib/structuredData";

const cormorant = Cormorant_SC({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const syncopate = Syncopate({
  variable: "--font-nav",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const isPreview = process.env.NEXT_PUBLIC_IS_PREVIEW === "1";

const siteStructuredData = buildGraph([
  buildOrganizationLocalBusiness(),
  buildPerson(),
  buildWebSite(),
]);

export const metadata: Metadata = {
  title: "Photographe & vidéaste professionnel | Directed by Qamar",
  description:
    "Photographe et vidéaste professionnel pour projets corporate, mariages et contenus digitaux. Images fortes, storytelling et accompagnement sur mesure.",
  metadataBase: new URL("https://www.directedbyqamar.com"),
  alternates: {
    canonical: "/",
  },
  robots: isPreview
    ? { index: false, follow: false, nocache: true }
    : { index: true, follow: true },
  openGraph: {
    type: "website",
    title: "Photographe & vidéaste professionnel | Directed by Qamar",
    description:
      "Photographe et vidéaste professionnel pour projets corporate, mariages et contenus digitaux. Images fortes, storytelling et accompagnement sur mesure.",
    url: "https://www.directedbyqamar.com/",
    images: [
      {
        url: "/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg",
        width: 1200,
        height: 630,
        alt: "Directed by Qamar",
      },
    ],
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Photographe & vidéaste professionnel | Directed by Qamar",
    description:
      "Photographe et vidéaste professionnel pour projets corporate, mariages et contenus digitaux. Images fortes, storytelling et accompagnement sur mesure.",
    images: ["/images/portfolio/corporate/hotel-dali/hotel-dali-01.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;
  const metaPixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html
      lang="fr"
      dir="ltr"
      className={`${cormorant.variable} ${arimo.variable} ${syncopate.variable}`}
    >
      <head>
        <JsonLd id="jsonld-site" data={siteStructuredData} />
      </head>
      <body className="antialiased">
        <AnalyticsScripts
          isPreview={isPreview}
          gtmId={gtmId}
          gaId={gaId}
          metaPixelId={metaPixelId}
        />

        {children}

        {!isPreview ? <CookieConsentBanner /> : null}
      </body>
    </html>
  );
}
