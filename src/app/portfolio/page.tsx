import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Portfolio | Directed by Qamar",
};

const items = [
  {
    category: "Corporate",
    src: "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
  },
  {
    category: "Événementiel",
    src: "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
  },
  {
    category: "Mariage",
    src: "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
  },
  {
    category: "Publicité digitale",
    src: "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
  },
  {
    category: "Corporate",
    src: "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
  },
  {
    category: "Publicité digitale",
    src: "https://framerusercontent.com/images/kG2k29DgSSRPzEhDQRQZRd8KoTY.jpg",
  },
  {
    category: "Corporate",
    src: "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main className="px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <h1 className="font-serif text-5xl text-white md:text-6xl">
                Portfolio
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-zinc-200 md:text-xl">
                Une sélection de projets : corporate, mariage, événementiel et
                contenus digitaux.
              </p>
            </div>

            <Link
              href="/contact/"
              className="rounded-lg border border-white/15 bg-black px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Me contacter
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <div
                key={`${item.src}-${i}`}
                className="group relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={item.src}
                  alt={item.category}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black to-black/0" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <p className="font-serif text-2xl font-semibold text-white">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
