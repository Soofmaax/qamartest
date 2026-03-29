import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { GoogleReviewsSection } from "@/components/GoogleReviewsSection";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { ReferencesTicker } from "@/components/ReferencesTicker";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { PORTFOLIO_PROJECTS } from "@/lib/content";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Photographe & vidéaste professionnel | Directed by Qamar",
  description:
    "Directed by Qamar est un studio de création visuelle basé à Paris. Photo & vidéo corporate, mariage, événementiel et contenus digitaux.",
  path: "/",
  image: "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [{ name: "Accueil", path: "/" }],
});

const references = [
  {
    src: "https://framerusercontent.com/images/WCk6aWdk3lcNK2YQ4jOZuMqrL8.png",
    alt: "PFW",
    width: 200,
    height: 35,
  },
  {
    src: "https://framerusercontent.com/images/hAQHQ3tidhNw5v9lqDPRy0by4Q.png",
    alt: "Référence",
    width: 200,
    height: 35,
  },
  {
    src: "https://framerusercontent.com/images/PkZtUBhle6TenR3CV9mGcpJKQHk.png",
    alt: "Fitness Park",
    width: 200,
    height: 35,
  },
  {
    src: "https://framerusercontent.com/images/Kyt0tHHdYIDhl3RD2HCCBhrpiuc.png",
    alt: "UNESCO",
    width: 200,
    height: 35,
  },
  {
    src: "https://framerusercontent.com/images/fg88tcEcPzAeOIv7O1HBZbLYWfw.png",
    alt: "Canal+",
    width: 200,
    height: 35,
  },
  {
    src: "https://framerusercontent.com/images/DAfyAGHuflSzQsjykANU3SYhX0.png",
    alt: "Référence",
    width: 200,
    height: 35,
  },
  {
    src: "https://framerusercontent.com/images/t3a40zYxxocfwj5czXN2yGUnP5w.png",
    alt: "CNA",
    width: 200,
    height: 35,
  },
];

const services = [
  {
    title: "Mariage",
    description:
      "Des images fortes, élégantes et intemporelles pour raconter l’un des plus beaux jours de votre vie.",
    href: "/mariage/",
    image:
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
  },
  {
    title: "Corporate",
    description:
      "Mettre en valeur votre entreprise, votre ADN et vos équipes avec une production professionnelle sur-mesure.",
    href: "/corporate/",
    image: "https://framerusercontent.com/images/qXcHje98qlsOMGT1CJEMgjZ7umM.jpg",
  },
  {
    title: "Publicité digitale",
    description:
      "Des contenus impactants pensés pour la performance : conversions, visibilité, image de marque.",
    href: "/publicite-digitale/",
    image: "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
    position: "object-left",
  },
  {
    title: "Événementiel",
    description:
      "Des vidéos publicitaires stratégiques et créatives, conçues pour maximiser votre visibilité et booster vos conversions.",
    href: "/evenementiel/",
    image: "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative hero-height w-full overflow-hidden site-pad-x">
          <Image
            src="https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg"
            alt="Directed by Qamar"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            blurDataURL={DARK_BLUR_DATA_URL}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-[34px] text-center">
            <div className="flex w-full flex-col items-center gap-[5px]">
              <h1 className="font-serif text-[42px] leading-none text-white sm:text-[54px] md:text-[64px]">
                Directed by Qamar
              </h1>
              <div className="mt-1 max-w-5xl text-[18px] leading-[23px] text-[#ededed] md:text-[20px]">
                <p>
                  Directed by Qamar est un studio de création visuelle basé à
                  Paris.
                </p>
                <p className="mt-6">
                  Nous accompagnons marques et particuliers dans la conception de
                  contenus sur-mesure, mêlant exigence esthétique et maîtrise
                  technique.
                </p>
              </div>
            </div>

            <Link
              href="/portfolio/"
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
            >
              Découvrir mon travail
            </Link>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex w-full flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                Nos références
              </h2>
              <p className="text-[18px] text-[#ededed] md:text-[20px]">
                Des collaborations qui parlent d’elles-mêmes.
              </p>
            </div>

            <div className="relative w-full md:w-[55%]">
              <ReferencesTicker logos={references} variant="home" />
            </div>
          </div>
        </section>

        <GoogleReviewsSection />

        <section id="services" className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center site-pad-x">
              <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                Nos Prestations
              </h2>
              <p className="mt-4 text-[18px] text-[#ededed] md:text-[20px]">
                Découvrez notre gamme de prestations.
              </p>
            </div>

            <div className="w-full">
              {services.map((s) => (
                <div
                  key={s.title}
                  className="relative h-[300px] w-full overflow-hidden md:h-[367px]"
                >
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    sizes="100vw"
                    placeholder="blur"
                    blurDataURL={DARK_BLUR_DATA_URL}
                    className={`object-cover ${s.position ?? ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-black/0" />

                  <div className="absolute inset-0 flex flex-col justify-center gap-[22px] site-pad-x">
                    <h3 className="font-serif text-[28px] font-semibold text-white md:text-[36px]">
                      {s.title}
                    </h3>
                    <p className="w-full text-[18px] text-[#ededed] md:w-[60%] md:text-[20px] lg:w-[38%]">
                      {s.description}
                    </p>
                    <Link
                      href={s.href}
                      className="w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
                    >
                      Découvrir
                    </Link>
                  </div>
                </div>
              ))}
            </div>
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
            <ProjectsCarousel projects={PORTFOLIO_PROJECTS} />
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Prêt à donner une nouvelle dimension à vos contenus ?
            </h2>
            <Link
              href="/contact/"
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:text-[20px]"
            >
              Me contacter
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
