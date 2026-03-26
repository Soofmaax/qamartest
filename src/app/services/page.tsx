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
        <section className="w-full bg-black py-20 site-pad-x">
          <h1 className="font-serif text-[48px] font-semibold text-white">
            Services
          </h1>
          <p className="mt-4 text-[20px] leading-[23px] text-[#ededed]">
            Découvrez notre gamme de prestations.
          </p>
        </section>

        <section className="w-full bg-black pb-20">
          {services.map((s) => (
            <div key={s.title} className="relative h-[367px] w-full overflow-hidden">
              <Image
                src={s.image}
                alt={s.title}
                fill
                className={`object-cover ${s.position ?? ""}`}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black to-black/0" />

              <div className="absolute inset-0 flex flex-col justify-center gap-[22px] site-pad-x">
                <h2 className="font-serif text-[36px] font-semibold text-white">
                  {s.title}
                </h2>
                <p className="w-[38%] text-[20px] text-[#ededed]">
                  {s.description}
                </p>
                <Link
                  href={s.href}
                  className="w-fit rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)]"
                >
                  Découvrir
                </Link>
              </div>
            </div>
          ))}
        </section>

        <section className="w-full bg-black py-20">
          <div className="flex flex-col items-center gap-[34px] text-center site-pad-x">
            <h2 className="font-serif text-[64px] leading-none text-white">
              Prêt à donner une nouvelle dimension à vos contenus ?
            </h2>
            <Link
              href="/contact/"
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)]"
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
