import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:px-8">
        <div className="space-y-4">
          <h2 className="font-serif text-4xl font-semibold text-white">
            Directed by Qamar
          </h2>
          <p className="text-lg text-zinc-200">
            Studio de création visuelle basé à Paris.
          </p>
          <div className="space-y-1 text-lg text-zinc-200">
            <p>directedbyqamar@gmail.com</p>
            <p>06 02 65 77 52</p>
          </div>
        </div>

        <div className="flex flex-col items-start justify-end gap-4 md:items-end">
          <div className="flex flex-wrap gap-6 text-lg text-zinc-200">
            <span>Mentions légales</span>
            <span>CGV</span>
          </div>
          <p className="text-right text-lg text-zinc-200">
            Copyright © 2025 -{" "}
            <a
              href="https://kermorweb.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              KermorWeb
            </a>{" "}
            - Tous droits réservés.
          </p>
          <Link
            href="/contact/"
            className="mt-2 rounded-lg border border-white/15 bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </footer>
  );
}
