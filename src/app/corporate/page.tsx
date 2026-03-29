import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { ProjectsCarousel } from "@/components/ProjectsCarousel";
import { ReferencesTicker } from "@/components/ReferencesTicker";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";
import { createPageMetadata } from "@/lib/seo";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Photographe & vidéaste corporate | Directed by Qamar",
  description:
    "Création de contenus photo et vidéo pour entreprises : image de marque, communication corporate, vidéos professionnelles et storytelling visuel.",
  path: "/corporate/",
  image: "https://framerusercontent.com/images/9MhLc1R5WqXjf2kyVHnU1AmNhXs.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
});

const services = [
  {
    title: "Portraits professionnels",
    description:
      "Immortalisez votre savoir-faire, vos processus et la vie de votre structure avec un regard authentique et esthétique. Idéal pour valoriser vos équipes, vos coulisses ou vos événements internes.",
    image:
      "https://framerusercontent.com/images/pCVT5Vo2hlSZzsO08dLr6cO0ZY.png",
    href: "/corporate/portraits-professionnels/",
  },
  {
    title: "Reportages d’entreprise",
    description:
      "Immortalisez votre savoir-faire, vos processus et la vie de votre structure avec un regard authentique et esthétique. Idéal pour valoriser vos équipes, vos coulisses ou vos événements internes.",
    image:
      "https://framerusercontent.com/images/DpaeyEJu9sJ7uvyF30lYwFOalYA.png",
    href: "/corporate/reportages-entreprise/",
  },
  {
    title: "Présentation de marque",
    description:
      "Une réalisation maîtrisée de A à Z : conception, tournage, direction artistique, montage et versionnage.Des contenus conçus pour vos campagnes internes, vos partenaires, vos investisseurs ou vos prises de parole officielles.",
    image:
      "https://framerusercontent.com/images/nut3VC3ToDuZY0i7oI2dVrJVfZY.png",
    href: "/corporate/presentation-marque/",
  },
  {
    title: "Films institutionnels",
    description:
      "Une réalisation maîtrisée de A à Z : conception, tournage, direction artistique, montage et versionnage.Des contenus conçus pour vos campagnes internes, vos partenaires, vos investisseurs ou vos prises de parole officielles.",
    image:
      "https://framerusercontent.com/images/20KvRVeMRpOdaABugVRinkkRuSY.png",
    href: "/corporate/films-institutionnels/",
  },
  {
    title: "Contenu pour site web & réseaux",
    description:
      "Des productions régulières pour alimenter vos plateformes avec du contenu professionnel, dynamique et cohérent.Vous bénéficiez d’une stratégie visuelle complète, pensée pour renforcer votre présence digitale.",
    image:
      "https://framerusercontent.com/images/M0SeRW6OeuB11wv5Lb9k4tyIc.png",
    href: "/corporate/contenu-web-reseaux/",
  },
];

const referenceLogos = [
  {
    src: "https://framerusercontent.com/images/WCk6aWdk3lcNK2YQ4jOZuMqrL8.png",
    width: 243,
    height: 30,
    alt: "PWF",
  },
  {
    src: "https://framerusercontent.com/images/hAQHQ3tidhNw5v9lqDPRy0by4Q.png",
    width: 197,
    height: 35,
    alt: "Group",
  },
  {
    src: "https://framerusercontent.com/images/PkZtUBhle6TenR3CV9mGcpJKQHk.png",
    width: 148,
    height: 30,
    alt: "Fitness Park",
  },
  {
    src: "https://framerusercontent.com/images/Kyt0tHHdYIDhl3RD2HCCBhrpiuc.png",
    width: 134,
    height: 34,
    alt: "UNESCO",
  },
  {
    src: "https://framerusercontent.com/images/fg88tcEcPzAeOIv7O1HBZbLYWfw.png",
    width: 108,
    height: 27,
    alt: "Canal+",
  },
  {
    src: "https://framerusercontent.com/images/DAfyAGHuflSzQsjykANU3SYhX0.png",
    width: 107,
    height: 30,
    alt: "Logo",
  },
  {
    src: "https://framerusercontent.com/images/t3a40zYxxocfwj5czXN2yGUnP5w.png",
    width: 80,
    height: 64,
    alt: "CNA",
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

export default function CorporatePage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="relative w-full overflow-hidden bg-black">
          <div className="relative hero-height w-full">
            <Image src={seo.image} alt="Corporate" fill priority className="object-cover" />

            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/45 to-black" />

            <div className="relative z-[1] flex h-full w-full items-center justify-center">
              <div className="flex flex-col items-center gap-3 px-4 text-center">
                <h1 className="font-serif text-5xl tracking-wide text-white md:text-6xl">
                  Corporate
                </h1>
                <p className="text-[18px] text-white/80 md:text-[20px]">
                  Créer de la valeur avec l’image
                </p>
                <Link
                  href="/contact/"
                  data-ga-event="cta_click"
                  data-ga-category="Lead"
                  data-ga-label="/corporate/:hero"
                  className="mt-5 w-fit rounded-lg bg-black/70 px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] backdrop-blur ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                >
                  Discuter de votre projet
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="text-center font-serif text-3xl font-semibold text-white md:text-[48px]">
            Directed by Qamar
          </h2>
          <div className="mx-auto mt-6 max-w-4xl text-center text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Une communication visuelle cohérente renforce votre identité, votre
              crédibilité et votre impact.
            </p>
            <p className="mt-6">
              Chez Directed by Qamar, chaque production est pensée pour refléter
              votre professionnalisme, renforcer la confiance de vos clients et
              mettre en lumière ce qui rend votre entreprise unique.
            </p>
          </div>
        </section>

        <section className="w-full bg-black">
          {services.map((s) => (
            <div key={s.title} className="relative overflow-hidden">
              <div className="absolute inset-0">
                <Image src={s.image} alt="" fill className="object-cover" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/55 to-black" />

              <div className="relative mx-auto w-full max-w-6xl py-16 site-pad-x md:py-20">
                <div className="w-full md:w-[82%]">
                  <h3 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                    {s.title}
                  </h3>
                  <p className="mt-6 text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
                    {s.description}
                  </p>

                  <Link
                    href={s.href}
                    data-ga-event="cta_click"
                    data-ga-category="Navigation"
                    data-ga-label={`/corporate/:service:${s.title}`}
                    className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
                  >
                    En savoir plus
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
                Nos références
              </h2>
              <p className="mt-2 text-[18px] text-[#ededed] md:text-[20px]">
                Des collaborations qui parlent d’elles-mêmes.
              </p>
            </div>

            <div className="relative">
              <ReferencesTicker logos={referenceLogos} durationSeconds={25} />
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col gap-6 site-pad-x md:flex-row md:items-center md:justify-between">
            <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
              Mon portfolio
            </h2>
            <Link
              href="/portfolio/"
              data-ga-event="cta_click"
              data-ga-category="Navigation"
              data-ga-label="/corporate/:portfolio"
              className="w-fit rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mt-10 site-pad-x">
            <ProjectsCarousel projects={projects} />
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Corporate
          </h2>
          <h3 className="mt-6 font-serif text-3xl font-semibold text-white md:text-[48px]">
            Une image forte attire plus que des regards : elle crée de la confiance.
          </h3>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Aujourd’hui, une entreprise avec une identité visuelle soignée
              convertit davantage, attire de meilleurs clients et se positionne
              comme un acteur crédible.
            </p>
            <p className="mt-6">Une vidéo professionnelle peut :</p>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Accroître le taux de rétention sur votre site</li>
              <li>Clarifier l’offre et les valeurs de votre entreprise</li>
              <li>Améliorer votre visibilité sur les réseaux</li>
              <li>Renforcer l’engagement de vos équipes</li>
              <li>Attirer des prospects plus qualifiés</li>
            </ul>
          </div>
        </section>

        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h2 className="font-serif text-3xl font-semibold text-white md:text-[48px]">
            Pourquoi travailler avec Directed by Qamar ?
          </h2>

          <div className="mt-6 max-w-4xl text-[18px] leading-relaxed text-[#ededed] md:text-[20px]">
            <p>
              Aujourd’hui, une entreprise avec une identité visuelle soignée
              convertit davantage, attire de meilleurs clients et se positionne
              comme un acteur crédible.
            </p>
            <p className="mt-6">Une vidéo professionnelle peut :</p>
            <ul className="mt-6 list-disc space-y-2 pl-5">
              <li>Direction artistique haut de gamme</li>
              <li>Une approche stratégique</li>
              <li>Accompagnement complet</li>
              <li>Des productions qui durent dans le temps</li>
              <li>Expertise dans la publicité digitale</li>
            </ul>

            <h3 className="mt-10 font-serif text-3xl font-semibold text-white">
              Pour qui ?
            </h3>
            <p className="mt-4">
              PME, startups, agences, directions marketing, entreprises ambitieuses
              souhaitant transmettre une image professionnelle et moderne.
            </p>

            <Link
              href="/contact/"
              data-ga-event="cta_click"
              data-ga-category="Lead"
              data-ga-label="/corporate/:devis"
              className="mt-8 inline-flex w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] ring-1 ring-white/15 transition-colors duration-200 hover:bg-white/10 md:text-[20px]"
            >
              Demander un devis
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
