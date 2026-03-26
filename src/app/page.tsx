import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { Testimonials } from "@/components/Testimonials";

const references = [
  {
    src: "https://framerusercontent.com/images/WCk6aWdk3lcNK2YQ4jOZuMqrL8.png",
    alt: "PFW",
  },
  {
    src: "https://framerusercontent.com/images/hAQHQ3tidhNw5v9lqDPRy0by4Q.png",
    alt: "Référence",
  },
  {
    src: "https://framerusercontent.com/images/PkZtUBhle6TenR3CV9mGcpJKQHk.png",
    alt: "Fitness Park",
  },
  {
    src: "https://framerusercontent.com/images/Kyt0tHHdYIDhl3RD2HCCBhrpiuc.png",
    alt: "UNESCO",
  },
  {
    src: "https://framerusercontent.com/images/fg88tcEcPzAeOIv7O1HBZbLYWfw.png",
    alt: "Canal+",
  },
  {
    src: "https://framerusercontent.com/images/DAfyAGHuflSzQsjykANU3SYhX0.png",
    alt: "Référence",
  },
  {
    src: "https://framerusercontent.com/images/t3a40zYxxocfwj5czXN2yGUnP5w.png",
    alt: "CNA",
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

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main>
        <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden px-4 py-20 md:min-h-[85vh] md:px-8">
          <Image
            src="https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg"
            alt="Directed by Qamar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/30 to-black" />

          <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
            <div className="space-y-4">
              <h1 className="font-serif text-5xl leading-[1] text-white md:text-7xl">
                Directed by Qamar
              </h1>
              <p className="mx-auto max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">
                Directed by Qamar est un studio de création visuelle basé à Paris.
                <br />
                <br />
                Nous accompagnons marques et particuliers dans la conception de
                contenus sur-mesure, mêlant exigence esthétique et maîtrise
                technique.
              </p>
            </div>

            <Link
              href="/portfolio/"
              className="rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Découvrir mon travail
            </Link>
          </div>
        </section>

        <section className="bg-black px-4 py-20 md:px-8">
          <div className="mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1fr_1.2fr] md:items-center">
            <div className="space-y-3">
              <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
                Nos références
              </h2>
              <p className="text-lg text-zinc-200">
                Des collaborations qui parlent d’elles-mêmes.
              </p>
            </div>

            <div className="relative overflow-hidden">
              <div className="flex items-center gap-10 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {references.map((ref) => (
                  <div key={ref.src} className="relative h-[34px] w-[150px] flex-none">
                    <Image src={ref.src} alt={ref.alt} fill className="object-contain" />
                  </div>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black to-black/0" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black to-black/0" />
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-20 md:px-8">
          <div className="mx-auto w-full max-w-6xl">
            <div className="flex flex-wrap items-center gap-8">
              <div className="relative h-[140px] w-[140px] overflow-hidden rounded-full">
                <Image
                  src="https://framerusercontent.com/images/QxF9UbJN82KVe5FkW9EhFNwUWQw.jpg"
                  alt="Avis"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-1 text-white">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} aria-hidden>
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-lg text-zinc-200">+150 entreprises accompagnées</p>
                <a
                  href="https://maps.app.goo.gl/CU93H22ijGqnEaKr7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-zinc-200 underline"
                >
                  +16 avis Google
                </a>
              </div>
            </div>

            <div className="mt-10">
              <Testimonials />
            </div>
          </div>
        </section>

        <section id="services" className="bg-black px-4 py-20 md:px-8">
          <div className="mx-auto w-full max-w-6xl text-center">
            <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              Nos Prestations
            </h2>
            <p className="mt-4 text-lg text-zinc-200">
              Découvrez notre gamme de prestations.
            </p>
          </div>

          <div className="mx-auto mt-12 grid w-full max-w-6xl gap-6">
            {services.map((s) => (
              <div key={s.title} className="relative overflow-hidden rounded-lg">
                <div className="relative h-[360px]">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className={`object-cover ${s.position ?? ""}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-black/0" />
                </div>

                <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 md:p-10">
                  <h3 className="font-serif text-3xl font-semibold text-white md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="max-w-2xl text-lg text-zinc-200">
                    {s.description}
                  </p>
                  <div>
                    <Link
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black px-5 py-2.5 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
                    >
                      Découvrir
                      <span aria-hidden>↗</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-black px-4 py-20 md:px-8">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <h2 className="font-serif text-4xl font-semibold text-white md:text-5xl">
              Mon portfolio
            </h2>
            <Link
              href="/portfolio/"
              className="rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mx-auto mt-10 w-full max-w-6xl overflow-hidden">
            <div className="flex gap-6 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              {[
                "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
                "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
                "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
                "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
                "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
                "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
              ].map((src, i) => (
                <div
                  key={src}
                  className="relative h-[380px] w-[240px] flex-none overflow-hidden rounded-lg"
                >
                  <Image src={src} alt={`Portfolio ${i + 1}`} fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-black/0" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-black px-4 py-24 md:px-8">
          <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-8 text-center">
            <h2 className="font-serif text-4xl leading-tight text-white md:text-6xl">
              Prêt à donner une nouvelle dimension à vos contenus ?
            </h2>
            <Link
              href="/contact/"
              className="rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
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
