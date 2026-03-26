"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/services/", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-black">
      <div className="mx-auto site-width">
        <div className="flex items-center justify-between gap-4 py-5 site-pad-x">
          <Link href="/" className="relative h-[52px] w-[160px] md:h-[69px] md:w-[213px]">
            <Image
              src="https://framerusercontent.com/images/CQ0Kd86NZDyfrUsqQ2XdDJBGDs.png"
              alt="Directed by Qamar"
              fill
              className="object-contain"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-[35px] md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[20px] font-light leading-[23px] text-[#e5e5e5] hover:text-white"
                style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/contact/"
              className="hidden rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] md:inline-block"
            >
              Me contacter
            </Link>

            <button
              type="button"
              className="grid h-11 w-11 place-items-center rounded-lg border border-white/15 text-white md:hidden"
              aria-label="Ouvrir le menu"
              onClick={() => setOpen(true)}
            >
              <span className="text-2xl leading-none">≡</span>
            </button>
          </div>
        </div>
      </div>

      {open ? (
        <div
          className="fixed inset-0 z-[100] bg-black/80"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="absolute right-4 top-4 w-[min(92vw,360px)] rounded-lg border border-white/10 bg-black p-5">
            <div className="flex items-center justify-between">
              <p className="font-serif text-2xl font-semibold text-white">Menu</p>
              <button
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
                  style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact/"
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
