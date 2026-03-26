import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata = {
  title: "Sokona | Mariage | Directed by Qamar",
  description:
    "Galerie mariage — Sokona. Une sélection d’images pour découvrir le style et la qualité du reportage.",
  alternates: { canonical: "/mariage/sokona/" },
};

const images = [
  "https://framerusercontent.com/images/OjM8YyBBtICf6hfaMtgqLNfoVjs.jpg",
  "https://framerusercontent.com/images/XGepEs2I4284GXSGDiChPPj5dNg.jpg",
  "https://framerusercontent.com/images/4Op4n5HTAnrEevRwNm1IuxGFmmc.jpg",
  "https://framerusercontent.com/images/2oNUAYoY9jIvH6aPlVFBUnPc62M.jpg",
  "https://framerusercontent.com/images/d0P58uREIotgwIjkIMBQA12roNQ.jpg",
  "https://framerusercontent.com/images/NEZCIhRhhHIfJxK8M1026G5arOY.jpg",
  "https://framerusercontent.com/images/33qcKaPGRIZCfNxpzNJDV7qNpGc.jpg",
  "https://framerusercontent.com/images/Y18neada0CIq3XzGJDAFYWWBIk.jpg",
  "https://framerusercontent.com/images/1Vf4Hth54m61EkbYu2Bce5xkK9A.jpg",
];

export default function MariageSokonaPage() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main className="mx-auto w-full max-w-6xl px-4 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[18px] text-zinc-200 md:text-[20px]">
              Fiançailles - Mariage - Shooting
            </p>
            <h1 className="mt-2 font-serif text-5xl text-white md:text-6xl">
              Sokona
            </h1>
          </div>

          <Link
            href="/mariage/"
            className="w-fit rounded-lg border border-white/15 bg-black px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
          >
            Retour
          </Link>
        </div>

        <div className="mt-12 columns-1 gap-6 space-y-6 sm:columns-2 lg:columns-3">
          {images.map((src, i) => (
            <div
              key={`${src}-${i}`}
              className="relative w-full overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[3/4] w-full">
                <Image
                  src={src}
                  alt={`Sokona ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
