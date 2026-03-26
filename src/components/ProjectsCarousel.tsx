"use client";

import Image from "next/image";
import { useMemo, useState } from "react";

type Project = {
  title: string;
  cover: string;
  images: string[];
};

export function ProjectsCarousel({
  projects,
  tickerDuration = "35s",
}: {
  projects: Project[];
  tickerDuration?: string;
}) {
  const [openProjectIndex, setOpenProjectIndex] = useState<number | null>(null);
  const [openImageIndex, setOpenImageIndex] = useState(0);

  const openProject = useMemo(() => {
    if (openProjectIndex === null) return null;
    return projects[openProjectIndex] ?? null;
  }, [openProjectIndex, projects]);

  const openImage = useMemo(() => {
    if (!openProject) return null;
    return openProject.images[openImageIndex] ?? null;
  }, [openImageIndex, openProject]);

  const close = () => {
    setOpenProjectIndex(null);
    setOpenImageIndex(0);
  };

  return (
    <>
      <div className="relative overflow-hidden">
        <div
          className="ticker"
          style={{ ["--ticker-duration" as string]: tickerDuration }}
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-[15%] bg-gradient-to-r from-black to-black/0" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-[15%] bg-gradient-to-l from-black to-black/0" />

          <div className="flex">
            <div className="ticker-track pr-[36px]" style={{ gap: "36px" }}>
              {projects.map((p, idx) => (
                <button
                  key={`${p.cover}-${idx}`}
                  type="button"
                  className="relative h-[320px] w-[190px] flex-none overflow-hidden rounded-lg text-left md:h-[400px] md:w-[234px]"
                  onClick={() => {
                    setOpenProjectIndex(idx);
                    setOpenImageIndex(0);
                  }}
                >
                  <Image src={p.cover} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-[182px] bg-gradient-to-t from-black to-black/0" />
                  <div className="absolute bottom-[14px] left-1/2 w-[88%] -translate-x-1/2 text-center font-serif text-[32px] font-semibold text-white">
                    {p.title}
                  </div>
                </button>
              ))}
            </div>

            <div
              className="ticker-track pr-[36px]"
              style={{ gap: "36px" }}
              aria-hidden="true"
            >
              {projects.map((p, idx) => (
                <div
                  key={`${p.cover}-${idx}-dup`}
                  className="relative h-[320px] w-[190px] flex-none overflow-hidden rounded-lg md:h-[400px] md:w-[234px]"
                >
                  <Image src={p.cover} alt={p.title} fill className="object-cover" />
                  <div className="absolute inset-x-0 bottom-0 h-[182px] bg-gradient-to-t from-black to-black/0" />
                  <div className="absolute bottom-[14px] left-1/2 w-[88%] -translate-x-1/2 text-center font-serif text-[32px] font-semibold text-white">
                    {p.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {openProject && openImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Projet ${openProject.title}`}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between gap-4 pb-4">
              <h3 className="font-serif text-3xl font-semibold text-white">
                {openProject.title}
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
              <Image src={openImage} alt={openProject.title} fill className="object-contain" />

              {openProject.images.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Image précédente"
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
                    onClick={() =>
                      setOpenImageIndex((v) =>
                        (v - 1 + openProject.images.length) % openProject.images.length
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
                      setOpenImageIndex((v) => (v + 1) % openProject.images.length)
                    }
                  >
                    ›
                  </button>
                </>
              ) : null}
            </div>

            {openProject.images.length > 1 ? (
              <div className="mt-4 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {openProject.images.map((src, idx) => (
                  <button
                    key={src}
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
