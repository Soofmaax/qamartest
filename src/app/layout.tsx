import type { Metadata } from "next";
import { Arimo, Cormorant_SC } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_SC({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const arimo = Arimo({
  variable: "--font-arimo",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Photographe & vidéaste professionnel | Directed by Qamar",
  description:
    "Photographe et vidéaste professionnel pour projets corporate, mariages et contenus digitaux. Images fortes, storytelling et accompagnement sur mesure.",
  metadataBase: new URL("https://www.directedbyqamar.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Photographe & vidéaste professionnel | Directed by Qamar",
    description:
      "Photographe et vidéaste professionnel pour projets corporate, mariages et contenus digitaux. Images fortes, storytelling et accompagnement sur mesure.",
    url: "https://www.directedbyqamar.com/",
    images: [
      "https://framerusercontent.com/images/yRve70fy1dkrL8wzTIRucXzC1o.png",
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" dir="ltr">
      <body className={`${cormorant.variable} ${arimo.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
