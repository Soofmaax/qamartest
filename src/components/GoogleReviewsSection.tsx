'use client';

import Image from "next/image";
import Script from "next/script";
import { useCookieConsent } from "@/lib/cookieConsent";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";

const GOOGLE_BUSINESS_URL = "https://maps.app.goo.gl/CU93H22ijGqnEaKr7";

const REVIEW_STATS = [
  { value: "5,0", label: "Note Google" },
  { value: "20", label: "Avis" },
  { value: "150+", label: "Marques & entreprises" },
];

export function GoogleReviewsSection() {
  const { consent, setConsent } = useCookieConsent();

  const canLoadWidget = consent === "accepted";

  return (
    <section className="w-full bg-black py-16 site-pad-x md:py-20">
      <div className="flex flex-col items-start gap-8 md:items-center">
        <div className="flex w-full flex-col items-center gap-6 md:w-auto md:flex-row md:items-center md:gap-[35px]">
          <div className="relative h-[141px] w-[141px] overflow-hidden rounded-full">
            <Image
              src="https://framerusercontent.com/images/QxF9UbJN82KVe5FkW9EhFNwUWQw.jpg"
              alt="Avis"
              fill
              sizes="141px"
              placeholder="blur"
              blurDataURL={DARK_BLUR_DATA_URL}
              className="object-cover"
            />
          </div>

          <div className="flex w-full flex-col items-start gap-5 md:w-auto">
            <div className="flex items-center gap-1 text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden>
                  ★
                </span>
              ))}
            </div>

            <div className="grid w-full grid-cols-3 gap-4 rounded-lg border border-white/10 bg-black/40 px-5 py-4 md:w-[520px]">
              {REVIEW_STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  className={
                    i === 0 ? "flex flex-col" : "flex flex-col border-l border-white/10 pl-4"
                  }
                >
                  <p className="text-[18px] font-semibold leading-none text-white md:text-[20px]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-[12px] uppercase tracking-[0.22em] text-[#ededed]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={GOOGLE_BUSINESS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[16px] text-[#ededed] underline underline-offset-4 decoration-white/40 transition-colors duration-200 hover:text-white md:text-[18px]"
              >
                Voir tous les avis Google
              </a>
              <span className="text-[12px] uppercase tracking-[0.22em] text-white/50">
                Google Business Profile
              </span>
            </div>
          </div>
        </div>

        <div className="w-full pt-2 md:pt-0">
          {canLoadWidget ? (
            <>
              <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
              <div
                className="elfsight-app-a80967ce-6c37-4265-a5ce-9526acf89407"
                data-elfsight-app-lazy
              />
            </>
          ) : (
            <div className="rounded-lg border border-white/10 bg-black/40 p-6 text-white">
              <p className="text-sm text-white/80">
                Pour afficher les avis, vous devez accepter les cookies.
              </p>
              <div className="mt-4 flex flex-col gap-2 sm:flex-row">
                <button
                  type="button"
                  onClick={() => setConsent("accepted")}
                  className="w-fit rounded-lg border border-white/15 bg-white px-4 py-2 text-sm font-semibold text-black transition hover:bg-white/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-4 focus-visible:ring-offset-black"
                >
                  Accepter les cookies
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
