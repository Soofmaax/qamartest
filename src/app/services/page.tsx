import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { createPageMetadata } from "@/lib/seo";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { ROUTES } from "@/lib/routes";
import { buildWebPageGraph } from "@/lib/structuredData";

const seo = {
  title: "Services | Directed by Qamar",
  description:
    "Découvrez nos prestations photo & vidéo : mariage, corporate, événementiel et publicité digitale.",
  path: "/services/",
  image: "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
};

export const metadata: Metadata = createPageMetadata(seo);

const structuredData = buildWebPageGraph({
  path: seo.path,
  name: seo.title,
  description: seo.description,
  imageUrl: seo.image,
  breadcrumbs: [
    { name: "Accueil", path: ROUTES.home },
    { name: "Services", path: seo.path },
  ],
});

const services = [
  {
    title: "Mariage",
    description:
      "Des images fortes, élégantes et intemporelles pour raconter l’un des plus beaux jours de votre vie.",
    href: ROUTES.mariage,
    image:
      "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
  },
  {
    title: "Corporate",
    description:
      "Mettre en valeur votre entreprise, votre ADN et vos équipes avec une production professionnelle sur-mesure.",
    href: ROUTES.corporate,
    image: "https://framerusercontent.com/images/qXcHje98qlsOMGT1CJEMgjZ7umM.jpg",
  },
  {
    title: "Publicité digitale",
    description:
      "Des contenus impactants pensés pour la performance : conversions, visibilité, image de marque.",
    href: ROUTES.publiciteDigitale,
    image: "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
    position: "object-left",
  },
  {
    title: "Événementiel",
    description:
      "Couverture photo/vidéo d’événements : conférences, lancements, soirées, festivals. Captation, contenus live et recap.",
    href: ROUTES.evenementiel,
    image: "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
      <JsonLd id="jsonld-page" data={structuredData} />
      <SiteHeader />

      <main className="mx-auto site-width">
        <section className="w-full bg-black py-16 site-pad-x md:py-20">
          <h1 className="font-serif text-4xl font-semibold text-white md:text-[48px]">
            Services
          </h1>
          <p className="mt-4 text-[18px] leading-[23px] text-[#ededed] md:text-[20px]">
            Découvrez notre gamme de prestations.
          </p>
        </section>

        <section className="w-full bg-black pb-16 md:pb-20">
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

              <div className="absolute inset-0 flex flex-col justify-center gap-[18px] site-pad-x md:gap-[22px]">
                <h2 className="font-serif text-[28px] font-semibold text-white md:text-[36px]">
                  {s.title}
                </h2>
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
        </section>

        <section className="w-full bg-black py-16 md:py-20">
          <div className="flex flex-col items-center gap-[26px] text-center site-pad-x md:gap-[34px]">
            <h2 className="font-serif text-[40px] leading-none text-white md:text-[64px]">
              Prêt à donner une nouvelle dimension à vos contenus ?
            </h2>
            <Link
              href={ROUTES.contact}
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
