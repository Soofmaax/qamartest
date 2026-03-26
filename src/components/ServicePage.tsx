import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

export function ServicePage({
  title,
  description,
  heroImage,
  gallery,
}: {
  title: string;
  description: string;
  heroImage: string;
  gallery: string[];
}) {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main>
        <section className="relative overflow-hidden px-4 py-20 md:px-8">
          <div className="relative mx-auto min-h-[420px] w-full max-w-6xl overflow-hidden rounded-lg">
            <Image src={heroImage} alt={title} fill priority className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/40 to-black" />
            <div className="absolute inset-0 flex flex-col justify-end gap-4 p-6 md:p-10">
              <h1 className="font-serif text-5xl leading-[1] text-white md:text-6xl">
                {title}
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-zinc-200 md:text-xl">
                {description}
              </p>
              <div className="pt-2">
                <Link
                  href="/contact/"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-black px-6 py-3 font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
                >
                  Me contacter
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-black px-4 pb-24 md:px-8">
          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
            {gallery.map((src, i) => (
              <div
                key={src}
                className="relative aspect-[3/4] overflow-hidden rounded-lg"
              >
                <Image
                  src={src}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
