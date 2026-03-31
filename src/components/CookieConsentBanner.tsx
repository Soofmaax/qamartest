'use client';

import { useCookieConsent } from "@/lib/cookieConsent";

type Props = {
  className?: string;
};

export function CookieConsentBanner({ className }: Props) {
  const { consent, setConsent } = useCookieConsent();

  if (consent !== null) return null;

  return (
    <div
      className={
        className ??
        "fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/95 px-4 py-4 backdrop-blur md:px-8"
      }
      role="dialog"
      aria-label="Préférences cookies"
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl text-sm text-zinc-200">
          <p className="font-semibold text-white">Cookies & mesure d’audience</p>
          <p className="mt-1 text-white/70">
            Nous utilisons des cookies pour mesurer l’audience et améliorer le site (GA4/GTM) et
            afficher certaines fonctionnalités (avis). Vous pouvez accepter ou refuser.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <button
            type="button"
            onClick={() => setConsent("rejected")}
            className="rounded-lg border border-white/15 bg-black px-4 py-2 text-sm text-white/80 transition hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            Refuser
          </button>
          <button
            type="button"
            onClick={() => setConsent("accepted")}
            className="rounded-lg border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
          >
            Accepter
          </button>
        </div>
      </div>
    </div>
  );
}
