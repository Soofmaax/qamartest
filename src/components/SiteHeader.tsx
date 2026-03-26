import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio/", label: "Portfolio" },
  { href: "/contact/", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-black/60 backdrop-blur supports-[backdrop-filter]:bg-black/40">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-4 py-4 md:px-8">
        <Link href="/" className="relative h-[52px] w-[160px] md:h-[60px] md:w-[190px]">
          <Image
            src="https://framerusercontent.com/images/CQ0Kd86NZDyfrUsqQ2XdDJBGDs.png"
            alt="Directed by Qamar"
            fill
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[18px] font-light text-zinc-200 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact/"
          className="rounded-lg border border-white/15 bg-black px-5 py-2.5 font-serif text-[18px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)] transition hover:bg-white/5"
        >
          Me contacter
        </Link>
      </div>
    </header>
  );
}
