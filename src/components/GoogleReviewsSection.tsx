import Image from "next/image";
import Script from "next/script";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";

const REVIEW_STATS = [
  { value: "5,0", label: "Note Google" },
  { value: "20", label: "Avis" },
  { value: "150+", label: "Marques & entreprises" },
];

export function GoogleReviewsSection() {
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

            <a
              href="https://maps.app.goo.gl/CU93H22ijGqnEaKr7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[16px] text-[#ededed] underline md:text-[18px]"
            >
              Voir tous les avis Google
            </a>
          </div>
        </div>

        <div className="w-full pt-2 md:pt-0">
          <Script
            src="https://elfsightcdn.com/platform.js"
            strategy="lazyOnload"
          />
          <div
            className="elfsight-app-a80967ce-6c37-4265-a5ce-9526acf89407"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}
