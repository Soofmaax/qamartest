"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { DARK_BLUR_DATA_URL } from "@/lib/blurDataUrl";
import { ROUTES } from "@/lib/routes";

const navItems = [
  { href: ROUTES.home, label: "Accueil" },
  { href: ROUTES.services, label: "Services" },
  { href: ROUTES.portfolio, label: "Portfolio" },
  { href: ROUTES.contact, label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuDialogId = useId();
  const menuTitleId = useId();
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const prevOpenRef = useRef(open);

  useEffect(() => {
    if (open && !prevOpenRef.current) {
      closeRef.current?.focus();
    }

    if (!open && prevOpenRef.current) {
      triggerRef.current?.focus();
    }

    prevOpenRef.current = open;
  }, [open]);

  return (
    <header className="w-full bg-black">
      <div className="mx-auto site-width">
        <div className="flex items-center justify-between gap-4 py-5 site-pad-x">
          <Link href={ROUTES.home} className="relative h-[52px] w-[160px] md:h-[69px] md:w-[213px]">
            <Image
              src="https://framerusercontent.com/images/CQ0Kd86NZDyfrUsqQ2XdDJBGDs.png"
              alt="Directed by Qamar"
              fill
              sizes="(min-width: 768px) 213px, 160px"
              placeholder="blur"
              blurDataURL={DARK_BLUR_DATA_URL}
              className="object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-[35px] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[20px] font-light leading-[23px] text-[#e5e5e5] hover:text-white"
                style={{ fontFamily: "var(--font-nav), var(--font-arimo), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href={ROUTES.contact}
              className="hidden rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:inline-block"
            >
              Me contacter
            </Link>

            <button
              ref={triggerRef}
              type="button"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white md:hidden"
              aria-label="Ouvrir le menu"
              aria-haspopup="dialog"
              aria-controls={menuDialogId}
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <span aria-hidden className="text-2xl leading-none">≡</span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          id={menuDialogId}
          className="fixed inset-0 z-[100] bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-labelledby={menuTitleId}
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="absolute right-4 top-4 w-[min(92vw,360px)] rounded-lg border border-white/10 bg-black p-5">
            <div className="flex items-center justify-between">
              <h2 id={menuTitleId} className="font-serif text-2xl font-semibold text-white">
                Menu
              </h2>
              <button
                ref={closeRef}
                type="button"
                className="rounded-md border border-white/15 bg-black px-3 py-2 text-white"
                onClick={() => setOpen(false)}
              >
                Fermer
              </button>
            </div>

            <div className="mt-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-[20px] font-light leading-[23px] text-[#e5e5e5]"
                  style={{ fontFamily: "var(--font-nav), var(--font-arimo), system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={ROUTES.contact}
                className="mt-2 rounded-lg bg-black px-5 py-2.5 text-center font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)]"
                onClick={() => setOpen(false)}
              >
                Me contacter
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
