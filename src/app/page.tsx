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

      <main className="mx-auto site-width">
        <section className="relative hero-height w-full overflow-hidden site-pad-x">
          <Image
            src="https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg"
            alt="Directed by Qamar"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black" />

          <div className="relative z-10 flex h-full flex-col items-center justify-center gap-[34px] text-center">
            <div className="flex w-full flex-col items-center gap-[5px]">
              <h1 className="font-serif text-[64px] leading-none text-white">
                Directed by Qamar
              </h1>
              <div className="mt-1 max-w-5xl text-[20px] leading-[23px] text-[#ededed]">
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
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)]"
            >
              Découvrir mon travail
            </Link>
          </div>
        </section>

        <section className="w-full bg-black py-20 site-pad-x">
          <div className="flex w-full flex-col items-start gap-5 md:flex-row md:items-center md:justify-between">
            <div className="space-y-2">
              <h2 className="font-serif text-[48px] font-semibold text-white">
                Nos références
              </h2>
              <p className="text-[20px] text-[#ededed]">
                Des collaborations qui parlent d’elles-mêmes.
              </p>
            </div>

            <div className="relative w-full md:w-[55%]">
              <div className="ticker h-[91px]">
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[23%] bg-gradient-to-r from-black to-black/0" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[23%] bg-gradient-to-l from-black to-black/0" />

                <div className="flex h-full items-center">
                  <div className="ticker-track pr-[43px]">
                    {references.map((ref) => (
                      <div
                        key={ref.src}
                        className="relative h-[35px] w-[200px] flex-none"
                      >
                        <Image
                          src={ref.src}
                          alt={ref.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="ticker-track pr-[43px]" aria-hidden="true">
                    {references.map((ref) => (
                      <div
                        key={`${ref.src}-dup`}
                        className="relative h-[35px] w-[200px] flex-none"
                      >
                        <Image
                          src={ref.src}
                          alt={ref.alt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-20 site-pad-x">
          <div className="flex flex-wrap items-center justify-center gap-[35px]">
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
              <p className="text-[20px] text-[#ededed]">+150 entreprises accompagnées</p>
              <a
                href="https://maps.app.goo.gl/CU93H22ijGqnEaKr7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[20px] text-[#ededed] underline"
              >
                +16 avis Google
              </a>
            </div>

            <div className="w-full pt-6">
              <Testimonials />
            </div>
          </div>
        </section>

        <section id="services" className="w-full bg-black py-20">
          <div className="flex flex-col items-center gap-10">
            <div className="text-center site-pad-x">
              <h2 className="font-serif text-[48px] font-semibold text-white">
                Nos Prestations
              </h2>
              <p className="mt-4 text-[20px] text-[#ededed]">
                Découvrez notre gamme de prestations.
              </p>
            </div>

            <div className="w-full">
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
                    <h3 className="font-serif text-[36px] font-semibold text-white">
                      {s.title}
                    </h3>
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
            </div>
          </div>
        </section>

        <section className="w-full bg-black py-20 site-pad-x">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-[48px] font-semibold text-white">
              Mon portfolio
            </h2>
            <Link
              href="/portfolio/"
              className="rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)]"
            >
              Découvrir mon travail
            </Link>
          </div>

          <div className="mt-10 flex gap-9 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {[
              {
                src: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
                label: "Corporate",
              },
              {
                src: "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
                label: "Événementiel",
              },
              {
                src: "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
                label: "Mariage",
              },
              {
                src: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
                label: "Publicté digitale",
              },
              {
                src: "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
                label: "Corporate",
              },
              {
                src: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
                label: "Publicité digitale",
              },
              {
                src: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
                label: "Corporate",
              },
            ].map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="relative h-[400px] w-[234px] flex-none overflow-hidden rounded-lg"
              >
                <Image src={item.src} alt={item.label} fill className="object-cover" />
                <div className="absolute inset-x-0 bottom-0 h-[182px] bg-gradient-to-t from-black to-black/0" />
                <div className="absolute bottom-[14px] left-1/2 w-[88%] -translate-x-1/2 text-center font-serif text-[32px] font-semibold text-white">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
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
