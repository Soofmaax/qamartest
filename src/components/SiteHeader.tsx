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
    <header className="w-full bg-black">
      <div className="mx-auto site-width">
        <div className="flex items-center justify-between gap-6 py-5 site-pad-x">
          <div className="flex items-center gap-10">
            <Link href="/" className="relative h-[69px] w-[213px]">
              <Image
                src="https://framerusercontent.com/images/CQ0Kd86NZDyfrUsqQ2XdDJBGDs.png"
                alt="Directed by Qamar"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

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

          <Link
            href="/contact/"
            className="rounded-lg bg-black px-5 py-2.5 font-serif text-[20px] font-bold text-white shadow-[0_4px_35.6px_-2px_rgba(255,255,255,1)]"
          >
            Me contacter
          </Link>
        </div>
      </div>
    </header>
  );
}
