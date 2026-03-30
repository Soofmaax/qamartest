import Link from "next/link";
import { ROUTES } from "@/lib/routes";

const socials = [
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@directedbyqamar_",
    icon: (
      <svg viewBox="0 0 256 256" width="24" height="24" aria-hidden>
        <path
          fill="currentColor"
          d="M232 84v44a76 76 0 0 1-44-14.2V176a80 80 0 1 1-80-80v44a36 36 0 1 0 36 36V24h36a44 44 0 0 0 44 44Z"
        />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/directedbyqamar_/",
    icon: (
      <svg viewBox="0 0 256 256" width="24" height="24" aria-hidden>
        <path
          fill="currentColor"
          d="M128 80a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48Zm0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32Zm48-136H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56Zm40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40ZM196 76a12 12 0 1 1-12-12a12 12 0 0 1 12 12Z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "",
    icon: (
      <svg viewBox="0 0 256 256" width="24" height="24" aria-hidden>
        <path
          fill="currentColor"
          d="M100 80v128H60V80ZM80 32a24 24 0 1 0 24 24a24 24 0 0 0-24-24Zm76 48c-18 0-31 10-36 19V80h-40v128h40v-72c0-19 4-38 28-38s24 22 24 39v71h40v-78c0-39-8-70-56-70Z"
        />
      </svg>
    ),
  },
];

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

          <div className="flex items-center gap-4 pt-2 text-white">
            {socials
              .filter((s) => s.href)
              .map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-opacity duration-200 hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                  aria-label={s.label}
                  title={s.label}
                >
                  {s.icon}
                </a>
              ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-end gap-4 md:items-end">
          <div className="flex flex-wrap gap-6 text-lg text-zinc-200">
            <a
              href="#"
              className="underline underline-offset-4 decoration-white/40 transition-colors duration-200 hover:text-white"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="underline underline-offset-4 decoration-white/40 transition-colors duration-200 hover:text-white"
            >
              CGV
            </a>
          </div>
          <p className="text-right text-lg text-zinc-200">
            Copyright © 2025 -{" "}
            <a
              href="https://kermorweb.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 decoration-white/40 transition-colors duration-200 hover:text-white"
            >
              KermorWeb
            </a>{" "}
            - Tous droits réservés.
          </p>
          <Link
            href={ROUTES.contact}
            className="mt-2 rounded-lg border border-white/15 bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition duration-200 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </footer>
  );
}
