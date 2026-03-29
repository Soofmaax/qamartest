"use client";

import Image from "next/image";
import { useState } from "react";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { youTubeThumbnailUrl } from "@/lib/videos";

type Props = {
  videoId: string;
  title: string;
  className?: string;
};

export function YouTubeEmbed({ videoId, title, className }: Props) {
  const [loaded, setLoaded] = useState(false);
  const thumbnail = youTubeThumbnailUrl(videoId);

  return (
    <div className={className}>
      <div className="relative aspect-video overflow-hidden rounded-lg bg-black">
        {!loaded ? (
          <button
            type="button"
            onClick={() => setLoaded(true)}
            className="group absolute inset-0"
            aria-label={`Lire la vidéo : ${title}`}
          >
            <Image
              src={thumbnail}
              alt={title}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={DARK_BLUR_DATA_URL}
              className="object-cover opacity-90 transition group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/35 to-black/70" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="grid h-16 w-16 place-items-center rounded-full border border-white/25 bg-black/50 text-white backdrop-blur transition group-hover:bg-black/60">
                <span aria-hidden className="text-3xl leading-none">
                  ▶
                </span>
              </span>
            </div>
          </button>
        ) : (
          <iframe
            className="absolute inset-0 h-full w-full"
            src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0`}
            title={title}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        )}
      </div>
    </div>
  );
}
