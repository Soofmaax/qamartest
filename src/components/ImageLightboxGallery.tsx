"use client";

import Image from "next/image";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";

export type GalleryItem = {
  title: string;
  cover: string;
  images: string[];
};

const MAX_SCALE = 4;

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function center(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

export function ImageLightboxGallery({ items }: { items: GalleryItem[] }) {
  const [openItemIndex, setOpenItemIndex] = useState<number | null>(null);
  const [openImageIndex, setOpenImageIndex] = useState(0);

  const dialogTitleId = useId();
  const dialogDescriptionId = useId();
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const lastActiveElementRef = useRef<HTMLElement | null>(null);
  const prevOpenItemIndexRef = useRef(openItemIndex);

  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const gestureRef = useRef<{
    startScale: number;
    startTranslate: { x: number; y: number };
    startDistance: number;
    startCenter: { x: number; y: number };
    lastPointer: { x: number; y: number } | null;
  }>({
    startScale: 1,
    startTranslate: { x: 0, y: 0 },
    startDistance: 0,
    startCenter: { x: 0, y: 0 },
    lastPointer: null,
  });

  const openItem = useMemo(() => {
    if (openItemIndex === null) return null;
    return items[openItemIndex] ?? null;
  }, [items, openItemIndex]);

  const openImage = useMemo(() => {
    if (!openItem) return null;
    return openItem.images[openImageIndex] ?? null;
  }, [openItem, openImageIndex]);

  const close = () => {
    setOpenItemIndex(null);
    setOpenImageIndex(0);
  };

  const resetTransform = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    pointersRef.current.clear();
    gestureRef.current = {
      startScale: 1,
      startTranslate: { x: 0, y: 0 },
      startDistance: 0,
      startCenter: { x: 0, y: 0 },
      lastPointer: null,
    };
  };

  useEffect(() => {
    resetTransform();
  }, [openItemIndex, openImageIndex]);

  useEffect(() => {
    if (openItemIndex !== null && prevOpenItemIndexRef.current === null) {
      closeRef.current?.focus();
    }

    if (openItemIndex === null && prevOpenItemIndexRef.current !== null) {
      lastActiveElementRef.current?.focus();
      lastActiveElementRef.current = null;
    }

    prevOpenItemIndexRef.current = openItemIndex;
  }, [openItemIndex]);

  useEffect(() => {
    if (!openItem) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }

      if (openItem.images.length > 1 && (e.key === "ArrowLeft" || e.key === "ArrowRight")) {
        setOpenImageIndex((v) => {
          const len = openItem.images.length;
          return e.key === "ArrowLeft" ? (v - 1 + len) % len : (v + 1) % len;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openItem]);

  const canNavigate = (openItem?.images.length ?? 0) > 1;

  const onToggleZoom = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      resetTransform();
    }
  };

  const onWheel: React.WheelEventHandler<HTMLDivElement> = (e) => {
    e.preventDefault();

    const nextScale = clamp(scale + (e.deltaY > 0 ? -0.15 : 0.15), 1, MAX_SCALE);
    if (nextScale === 1) {
      setScale(1);
      setTranslate({ x: 0, y: 0 });
    } else {
      setScale(nextScale);
    }
  };

  const onPointerDown: React.PointerEventHandler<HTMLDivElement> = (e) => {
    (e.currentTarget as HTMLDivElement).setPointerCapture(e.pointerId);
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    const pts = Array.from(pointersRef.current.values());
    gestureRef.current.startScale = scale;
    gestureRef.current.startTranslate = translate;

    if (pts.length === 1) {
      gestureRef.current.lastPointer = pts[0];
      return;
    }

    if (pts.length === 2) {
      gestureRef.current.startDistance = distance(pts[0], pts[1]);
      gestureRef.current.startCenter = center(pts[0], pts[1]);
      gestureRef.current.lastPointer = null;
    }
  };

  const onPointerMove: React.PointerEventHandler<HTMLDivElement> = (e) => {
    if (!pointersRef.current.has(e.pointerId)) return;

    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    const pts = Array.from(pointersRef.current.values());

    if (pts.length === 2) {
      const startDistance = gestureRef.current.startDistance || 1;
      const nextScale = clamp(
        gestureRef.current.startScale * (distance(pts[0], pts[1]) / startDistance),
        1,
        MAX_SCALE
      );
      setScale(nextScale);

      if (nextScale === 1) {
        setTranslate({ x: 0, y: 0 });
        return;
      }

      const c = center(pts[0], pts[1]);
      const dx = c.x - gestureRef.current.startCenter.x;
      const dy = c.y - gestureRef.current.startCenter.y;
      setTranslate({
        x: gestureRef.current.startTranslate.x + dx,
        y: gestureRef.current.startTranslate.y + dy,
      });
      return;
    }

    if (pts.length === 1) {
      if (scale <= 1) return;
      const last = gestureRef.current.lastPointer;
      if (!last) {
        gestureRef.current.lastPointer = pts[0];
        return;
      }

      const dx = pts[0].x - last.x;
      const dy = pts[0].y - last.y;
      gestureRef.current.lastPointer = pts[0];

      setTranslate((t) => ({ x: t.x + dx, y: t.y + dy }));
    }
  };

  const onPointerUpOrCancel: React.PointerEventHandler<HTMLDivElement> = (e) => {
    pointersRef.current.delete(e.pointerId);
    const pts = Array.from(pointersRef.current.values());

    if (pts.length === 1) {
      gestureRef.current.lastPointer = pts[0];
      gestureRef.current.startTranslate = translate;
      gestureRef.current.startScale = scale;
    } else {
      gestureRef.current.lastPointer = null;
      gestureRef.current.startTranslate = translate;
      gestureRef.current.startScale = scale;
    }

    if (scale === 1) {
      setTranslate({ x: 0, y: 0 });
    }
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
              lastActiveElementRef.current = document.activeElement as HTMLElement | null;
              setOpenItemIndex(idx);
              setOpenImageIndex(0);
            }}
          >
            <Image
              src={item.cover}
              alt={item.title}
              fill
              sizes="100vw"
              placeholder="blur"
              blurDataURL={DARK_BLUR_DATA_URL}
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
          aria-labelledby={dialogTitleId}
          aria-describedby={dialogDescriptionId}
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className="w-full max-w-5xl">
            <div className="flex items-center justify-between gap-4 pb-4">
              <div className="flex flex-col gap-1">
                <h2 id={dialogTitleId} className="font-serif text-3xl font-semibold text-white">
                  {openItem.title}
                </h2>
                <p className="text-sm text-white/70">
                  {openImageIndex + 1}/{openItem.images.length}
                </p>
                <p id={dialogDescriptionId} className="text-sm text-white/50">
                  Double tap / double clic pour zoomer · Pincer pour zoomer
                </p>
              </div>

              <button
                ref={closeRef}
                type="button"
                className="rounded-md border border-white/15 bg-black px-3 py-2 text-white hover:bg-white/5"
                onClick={close}
              >
                Fermer
              </button>
            </div>

            <div
              className="relative aspect-[16/9] w-full overflow-hidden rounded-lg bg-black touch-none"
              onWheel={onWheel}
              onDoubleClick={onToggleZoom}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUpOrCancel}
              onPointerCancel={onPointerUpOrCancel}
            >
              <div
                className="absolute inset-0"
                style={{
                  transform: `translate3d(${translate.x}px, ${translate.y}px, 0) scale(${scale})`,
                  transformOrigin: "center",
                  transition: pointersRef.current.size === 0 ? "transform 120ms ease-out" : undefined,
                }}
              >
                <Image
                  src={openImage}
                  alt={openItem.title}
                  fill
                  sizes="100vw"
                  placeholder="blur"
                  blurDataURL={DARK_BLUR_DATA_URL}
                  className="object-contain"
                />
              </div>

              <button
                type="button"
                className="absolute bottom-3 right-3 rounded-md border border-white/15 bg-black/60 px-3 py-2 text-sm text-white backdrop-blur hover:bg-white/10"
                onClick={onToggleZoom}
              >
                {scale === 1 ? "Zoom" : "Réinitialiser"}
              </button>

              {canNavigate ? (
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
                    <span aria-hidden>‹</span>
                  </button>
                  <button
                    type="button"
                    aria-label="Image suivante"
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/40 px-3 py-2 text-white hover:bg-black/60"
                    onClick={() =>
                      setOpenImageIndex((v) => (v + 1) % openItem.images.length)
                    }
                  >
                    <span aria-hidden>›</span>
                  </button>
                </>
              ) : null}
            </div>

            {canNavigate ? (
              <div className="mt-4 flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                {openItem.images.map((src, idx) => (
                  <button
                    key={`${src}-${idx}`}
                    type="button"
                    aria-label={`Voir l’image ${idx + 1} de ${openItem.images.length}`}
                    aria-current={idx === openImageIndex ? "true" : undefined}
                    className={`relative h-[72px] w-[110px] flex-none overflow-hidden rounded-md border ${
                      idx === openImageIndex ? "border-white" : "border-white/15"
                    }`}
                    onClick={() => setOpenImageIndex(idx)}
                  >
                    <Image
                      src={src}
                      alt={openItem.title}
                      fill
                      sizes="110px"
                      placeholder="blur"
                      blurDataURL={DARK_BLUR_DATA_URL}
                      className="object-cover"
                    />
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
