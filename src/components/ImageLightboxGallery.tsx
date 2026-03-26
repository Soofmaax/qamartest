"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

export type GalleryItem = {
  title: string;
  cover: string;
  images: string[];
};

export function ImageLightboxGallery({ items }: { items: GalleryItem[] }) {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const [openImageIndex, setOpenImageIndex] = useState(0);

  const openItem = useMemo(() => {
    if (openItemIndex === null) return null;
    return items[openItemIndex] ?? null;
  }, [items, openItemIndex]);

  const openImage = useMemo(() => {
    if (!openItem) return null;
    return openItem.images[openImageIndex] ?? null;
  }, [openImageIndex, openItem]);

  const close = () => {
    setOpenItemIndex(null);
    setOpenImageIndex(0);
  };

  return (
    <>
      <div className="w-full">
        {items.map((item, idx) => (
          <button
            key={item.title}
            type="button"
            className="group relative block h-[300px] w-full overflow-hidden text-left md:h-[367px]"
            onClick={() => {
              setOpenItemIndex(idx);
              setOpenImageIndex(0);
            }}
          >
            <Image
              src={item.cover}
              alt={item.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/35 to-black/0 transition-colors duration-300 group-hover:from-black/90" />
            <div className="absolute inset-0 flex flex-col justify-center gap-3 site-pad-x">
              <h3 className="font-serif text-[40px] font-semibold tracking-wide text-white md:text-[64px]">
                {item.title}
              </h3>
              <p className="text-[16px] text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 md:text-[18px]">
                Voir la galerie
              </p>
            </div>
          </button>
        ))}
      </div>

      {openItem && openImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Galerie ${openItem.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between gap-4 pb-4">
              <h3 className="font-serif text-3xl font-semibold text-white">
                {openItem.title}
              </h3>
              <button
                type="button"
                className="rounded-md border border-white/15 bg-black px-3 py-2 text-white hover:bg-white/5"
                onClick={close}
              >
                Fermer
              </button>
            </div>

            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black">
              <Image src={openImage} alt={openItem.title} fill className="object-contain" />

              {openItem.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Image précédente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
                    onClick={() =>
                      setOpenImageIndex((v) =>
                        (v - 1 + openItem.images.length) % openItem.images.length
                      )
                    }
                  >
                    ‹
                  </button>
                  <button
                    type="button"
                    aria-label="Image suivante"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
                    onClick={() =>
                      setOpenImageIndex((v) => (v + 1) % openItem.images.length)
                    }
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>

            {openItem.images.length > 1 ? (
              <div className="mt-4 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {openItem.images.map((src, idx) => (
                  <button
                    key={`${src}-${idx}`}
                    type="button"
                    className={`relative h-[72px] w-[110px] flex-none overflow-hidden rounded-md border ${
                      idx === openImageIndex ? "border-white" : "border-white/15"
                    }`}
                    onClick={() => setOpenImageIndex(idx)}
                  >
                    <Image src={src} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
