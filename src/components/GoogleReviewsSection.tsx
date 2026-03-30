import Image from "next/image";
import { Testimonials } from "@/components/Testimonials";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";

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

          <div className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-1 text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} aria-hidden>
                  ★
                </span>
              ))}
            </div>
            <p className="text-[18px] text-[#ededed] md:text-[20px]">
              +150 entreprises accompagnées
            </p>
            <a
              href="https://maps.app.goo.gl/CU93H22ijGqnEaKr7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[18px] text-[#ededed] underline md:text-[20px]"
            >
              +16 avis Google
            </a>
          </div>
        </div>

        <div className="w-full pt-2 md:pt-0">
          <Testimonials />
        </div>
      </div>
    </section>
  );
}
