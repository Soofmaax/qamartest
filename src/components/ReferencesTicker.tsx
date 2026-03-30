import Image from "next/image";
import type { CSSProperties } from "react";

export type ReferenceLogo = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type Props = {
  logos: ReferenceLogo[];
  durationSeconds?: number;
  variant?: "home" | "section";
  fadeWidthClassName?: string;
  logoClassName?: string;
};

export function ReferencesTicker({
  logos,
  durationSeconds = 25,
  variant = "section",
  fadeWidthClassName,
  logoClassName,
}: Props) {
  const duration = `${durationSeconds}s`;

  if (variant === "home") {
    const fade = fadeWidthClassName ?? "w-[23%]";

    return (
      <div className="ticker h-[91px]">
        <div
          className={`pointer-events-none absolute inset-y-0 left-0 z-10 ${fade} bg-gradient-to-r from-black to-black/0`}
        />
        <div
          className={`pointer-events-none absolute inset-y-0 right-0 z-10 ${fade} bg-gradient-to-l from-black to-black/0`}
        />

        <div className="ticker-marquee flex h-full items-center pr-[43px]">
          <div className="ticker-group pr-[43px]">
            {logos.map((ref) => (
              <div
                key={ref.src}
                className={`relative h-[35px] w-[200px] flex-none ${logoClassName ?? ""}`}
              >
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          <div className="ticker-group pr-[43px]" aria-hidden="true">
            {logos.map((ref) => (
              <div
                key={`${ref.src}-dup`}
                className={`relative h-[35px] w-[200px] flex-none ${logoClassName ?? ""}`}
              >
                <Image
                  src={ref.src}
                  alt={ref.alt}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  const fade = fadeWidthClassName ?? "w-[15%]";

  return (
    <>
      <div className="ticker">
        <div
          className="ticker-track"
          style={{ "--ticker-duration": duration } as CSSProperties}
        >
          {logos.map((logo) => (
            <div
              key={logo.src}
              className={`relative flex h-[64px] w-auto flex-none items-center ${logoClassName ?? ""}`}
            >
              {typeof logo.width === "number" && typeof logo.height === "number" ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-[64px] w-auto object-contain"
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>

        <div
          className="ticker-track"
          aria-hidden
          style={{ "--ticker-duration": duration } as CSSProperties}
        >
          {logos.map((logo) => (
            <div
              key={`${logo.src}-dup`}
              className={`relative flex h-[64px] w-auto flex-none items-center ${logoClassName ?? ""}`}
            >
              {typeof logo.width === "number" && typeof logo.height === "number" ? (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto max-h-[64px] w-auto object-contain"
                />
              ) : (
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  sizes="200px"
                  className="object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-y-0 left-0 ${fade} bg-gradient-to-r from-black to-transparent`}
      />
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 ${fade} bg-gradient-to-l from-black to-transparent`}
      />
    </>
  );
}
