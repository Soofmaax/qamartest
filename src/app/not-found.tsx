import Link from "next/link";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { ROUTES } from "@/lib/routes";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black">
      <SiteHeader />

      <main className="mx-auto site-width px-4 py-20 md:px-8">
        <div className="mx-auto w-full max-w-3xl text-center">
          <h1 className="font-serif text-5xl text-white md:text-6xl">404</h1>
          <p className="mt-4 text-lg text-zinc-200 md:text-xl">
            Cette page n’existe pas.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={ROUTES.home}
              className="rounded-lg border border-white/15 bg-black px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Retour à l’accueil
            </Link>
            <Link
              href={ROUTES.contact}
              className="rounded-lg border border-white/15 bg-black px-6 py-3 text-center font-serif text-lg font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
