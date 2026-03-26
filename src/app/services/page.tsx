import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Services | Directed by Qamar",
};

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
    href: "/publicité-digitale/",
    image: "https://framerusercontent.com/images/7S1BnqSduvVOo0AYIdVmWm1oi4E.png",
    position: "object-left",
  },
  {
    title: "Événementiel",
    description:
      "Des vidéos publicitaires stratégiques et créatives, conçues pour maximiser votre visibilité et booster vos conversions.",
    href: "/événementiel/",
    image: "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-black">
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
