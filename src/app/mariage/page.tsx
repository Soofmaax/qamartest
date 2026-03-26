import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ImageLightboxGallery } from "@/components/ImageLightboxGallery";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { Testimonials } from "@/components/Testimonials";

export const metadata: Metadata = {
  title: "Photographe & vidéaste de mariage | Directed by Qamar",
  description:
    "Vidéaste et photographe de mariage à Paris. Une approche cinématique et élégante pour créer des souvenirs intemporels.",
  alternates: { canonical: "/mariage/" },
};

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const lastPrestations = [
  {
    title: "Ninon",
    cover: "https://framerusercontent.com/images/aCW40boMagvmECJgfTGyeQNYAdk.jpg",
    images: [
      "https://framerusercontent.com/images/aCW40boMagvmECJgfTGyeQNYAdk.jpg",
      "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
    ],
  },
  {
    title: "Sokona",
    cover: "https://framerusercontent.com/images/CKNnTEwk1ePqVV3ppEpZJfaeY4.jpg",
    images: [
      "https://framerusercontent.com/images/CKNnTEwk1ePqVV3ppEpZJfaeY4.jpg",
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
    ],
  },
  {
    title: "Mauricien",
    cover: "https://framerusercontent.com/images/eLN6hbfMAa0S7m6HCAs4dE66c.jpg",
    images: [
      "https://framerusercontent.com/images/eLN6hbfMAa0S7m6HCAs4dE66c.jpg",
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    ],
  },
];

const formulas = [
  {
    title: "Photo",
    description: "Immortalisez votre journée avec des images élégantes et intemporelles.",
    bullets: [
      "Reportage complet du mariage : préparatifs, cérémonie, portraits, soirée",
      "Photos haut de gamme, lumière et composition maîtrisées",
      "Retouches professionnelles et travail des couleurs",
      "Remise rapide via galerie privée",
    ],
    href: "/contact/",
    cta: "En savoir plus",
  },
  {
    title: "Vidéo",
    description: "Revivez votre mariage comme un film.",
    bullets: [
      "Captation complète de votre journée avec sensibilité et style",
      "Direction artistique et accompagnement pour chaque plan",
      "Montage cinématique, étalonnage et retouches premium",
      "Livraison rapide via galerie privée ou version téléchargeable",
    ],
    href: "/contact/",
    cta: "En savoir plus",
  },
  {
    title: "Photo + Vidéo",
    description:
      "La formule complète pour une expérience immersive et cohérente.",
    bullets: [
      "Reportage complet combinant photos et vidéos",
      "Direction artistique globale pour un rendu harmonieux",
      "Couleurs, montage et retouches premium pour chaque support",
      "Galerie privée avec accès facile pour partager vos souvenirs",
    ],
    href: "/contact/",
    cta: "En savoir plus",
  },
];

const projects = [
  {
    title: "Corporate",
    cover: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
    images: [
      "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
      "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
      "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
    ],
  },
  {
    title: "Événementiel",
    cover: "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
    images: [
      "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
      "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
      "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
    ],
  },
  {
    title: "Mariage",
    cover: "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
    images: [
      "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    ],
  },
  {
    title: "Publicté digitale",
    cover: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
    images: [
      "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
      "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
      "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
    ],
  },
];

export default function MariagePage() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col items-center gap-3 text-center">
            <h1 className="font-serif text-5xl text-white md:text-6xl">
              Mariage
            </h1>
            <p className="text-[18px] text-[#ededed] md:text-[20px]">
              fiançailles - Mariage - Shooting
            </p>
            <Link
              href="/contact/"
              className="mt-5 w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
            >
              reservations pour 2026 et 2027 ouvertes
            </Link>
          </div>
        </section>

        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative h-[520px] w-full md:h-[650px]">
            <video
              className="absolute inset-0 h-full w-full object-cover object-bottom"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="https://framerusercontent.com/images/6nk6lOJ0PhfmfG5ELflQRv3Mk.jpg"
            >
              <source src={`${basePath}/videos/mariage.mp4`} type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/35 to-black" />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-4xl font-semibold text-white md:text-[64px]">
            Quand chaque instant devient héritage
          </h2>
          <div className="mt-6 grid gap-6 text-[18px] leading-relaxed text-[#ededed] md:grid-cols-2 md:text-[20px]">
            <p>
              En tant que vidéastes et photographes de mariage, notre rôle va bien
              au-delà de la simple captation d’images.
            </p>
            <p>
              Nous créons une expérience sur mesure, pensée pour révéler la beauté
              authentique de vos moments les plus précieux.
            </p>
            <p>
              En France comme à l’étranger, nous façonnons pour vous des souvenirs
              d’exception : des images qui ne se contentent pas d’être vues, mais
              qui se vivent et se ressentent.
            </p>
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="site-pad-x">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mes dernières prestations
            </h2>
          </div>

          <div className="mt-10 w-full">
            <ImageLightboxGallery items={lastPrestations} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Ce que vous obtenez
          </h2>
          <div className="mt-6 grid gap-6 text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Chaque mariage est unique, et chaque projet fait l’objet d’un devis
              personnalisé, adapté à vos besoins, votre lieu et le temps de
              présence souhaité.
            </p>
            <p>Je propose trois formules principales :</p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {formulas.map((f) => (
              <div
                key={f.title}
                className="rounded-lg border border-white/10 bg-black/40 p-6"
              >
                <h3 className="font-serif text-3xl font-semibold text-white">
                  {f.title}
                </h3>
                <p className="mt-4 text-[18px] text-[#ededed] md:text-[20px]">
                  {f.description}
                </p>
                <ul className="mt-6 list-disc space-y-2 pl-5 text-[18px] text-[#ededed] md:text-[20px]">
                  {f.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <Link
                  href={f.href}
                  className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
                >
                  {f.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mon portfolio
            </h2>
            <Link
              href="/portfolio/"
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mt-10">
            <ProjectsCarousel projects={projects} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Votre expérience, étape par étape
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {["Premier échange", "Préparation", "Le Jour‑J", "Post‑production"].map(
              (title, idx) => (
                <div
                  key={title}
                  className="rounded-lg border border-white/10 bg-black/40 p-6"
                >
                  <p className="font-serif text-4xl font-semibold text-white">
                    {idx + 1}
                  </p>
                  <h3 className="mt-4 font-serif text-2xl font-semibold text-white">
                    {title}
                  </h3>
                  <p className="mt-3 text-[18px] text-[#ededed] md:text-[20px]">
                    {
                      [
                        "Par téléphone, visioconférence ou rencontre : on parle de vous, de votre histoire et de vos envies.",
                        "Repérage, conseils et anticipation des moments forts.",
                        "Je suis présent, discret et attentif à chaque instant important.",
                        "Sélection, montage, retouches et habillage cinématique.",
                      ][idx]
                    }
                  </p>
                </div>
              )
            )}
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Prêt à immortaliser votre mariage ?
            </h2>
            <p className="text-[18px] text-[#ededed] md:text-[20px]">
              Les disponibilités sont limitées pour garantir une attention totale
              à chaque projet.
            </p>
            <Link
              href="/contact/"
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
            >
              Vérifier mes disponibiltés
            </Link>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col items-start gap-8 md:items-center">
            <div className="flex w-full flex-col items-center gap-6 md:w-auto md:flex-row md:items-center md:gap-[35px]">
              <div className="relative h-[141px] w-[141px] overflow-hidden rounded-full">
                <Image
                  src="https://framerusercontent.com/images/QxF9UbJN82KVe5FkW9EhFNwUWQw.jpg"
                  alt="Avis"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col items-start gap-2">
                <div className="flex items-center gap-1 text-white">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-[18px] text-[#ededed] md:text-[20px]">
                  +150 entreprises accompagnées
                </p>
                <a
                  href="https://maps.app.goo.gl/CU93H22ijGqnEaKr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[18px] text-[#ededed] underline md:text-[20px]"
                >
                  +16 avis Google
                </a>
              </div>
            </div>

            <div className="w-full pt-2 md:pt-0">
              <Testimonials />
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
