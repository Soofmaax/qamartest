import type { Metadata } from "next";
import Script from "next/script";
import { Arimo, Cormorant_SC } from "next/font/google";
import "./globals.css";
import { AnalyticsEvents } from "@/components/AnalyticsEvents";
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
        url: "https://framerusercontent.com/images/yRve70fy1dkrL8wzTIRucXzC1o.png",
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
    images: ["https://framerusercontent.com/images/yRve70fy1dkrL8wzTIRucXzC1o.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA4_ID;

  return (
    <html lang="fr" dir="ltr" className={`${cormorant.variable} ${arimo.variable}`}>
      <head>
        <JsonLd id="jsonld-site" data={siteStructuredData} />
      </head>
      <body className="antialiased">
        {!isPreview && gaId ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="ga4" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}', {
                  anonymize_ip: true,
                });
              `}
            </Script>
            <AnalyticsEvents />
          </>
        ) : null}

        {children}
      </body>
    </html>
  );
}
