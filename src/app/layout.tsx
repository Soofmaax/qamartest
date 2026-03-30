import type { Metadata } from "next";
import Script from "next/script";
import { Arimo, Cormorant_SC, Syncopate } from "next/font/google";
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

        {!isPreview ? (
          <Script id="dataLayer-init" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: "app_config",
                gtm_id: ${gtmId ? `'${gtmId}'` : "undefined"},
                ga4_id: ${gaId ? `'${gaId}'` : "undefined"},
                meta_pixel_id: ${metaPixelId ? `'${metaPixelId}'` : "undefined"},
              });
            `}
          </Script>
        ) : null}

        {!isPreview && gtmId ? (
          <Script
            id="gtm"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
 j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
 })(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        ) : null}
      </head>
      <body className="antialiased">
        {!isPreview && gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}

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
