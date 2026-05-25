"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HERO_PAGES = ["/", "/portfolio/food", "/portfolio/hochzeit", "/portfolio/architektur", "/portfolio/video", "/ueber-mich"];

const links = [
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio/food", label: "Food" },
  { href: "/portfolio/hochzeit", label: "Hochzeit" },
  { href: "/portfolio/architektur", label: "Architektur" },
  { href: "/portfolio/video", label: "Video" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isHeroPage = HERO_PAGES.includes(pathname);
  const transparent = isHeroPage && !scrolled && !open;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); setScrolled(false); }, [pathname]);

  return (
    <>
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        transparent ? "bg-transparent" : "bg-white/90 backdrop-blur-xl border-b border-black/5"
      }`}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between h-12 sm:h-14">

          <Link href="/" className={`text-[13px] font-semibold tracking-tight transition-colors ${transparent ? "text-white" : "text-[#1d1d1f]"}`}>
            Leo Bruni
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {links.map(l => (
              <Link key={l.href} href={l.href}
                className={`text-[12px] tracking-wide transition-colors hover:opacity-60 ${
                  transparent ? "text-white" : "text-[#1d1d1f]"
                } ${pathname === l.href ? "opacity-100 font-medium" : "opacity-80"}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/buchen"
              className={`text-[12px] tracking-wide px-4 py-1.5 rounded-full transition-all ${
                transparent
                  ? "bg-white/20 text-white hover:bg-white/30 border border-white/30"
                  : "bg-[#1d1d1f] text-white hover:bg-black"
              }`}>
              Buchen
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className={`md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] ${transparent ? "text-white" : "text-[#1d1d1f]"}`}
            aria-label="Menü">
            <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all ${open ? "opacity-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      {open && (
        <div className="fixed inset-0 z-40 bg-white flex flex-col pt-14">
          <nav className="flex flex-col px-8 pt-8 gap-1">
            {[...links, { href: "/buchen", label: "Buchen" }, { href: "/faq", label: "FAQ" }, { href: "/rechtliches", label: "Rechtliches" }].map(l => (
              <Link key={l.href} href={l.href}
                className="py-4 text-[22px] font-light text-[#1d1d1f] border-b border-gray-100 hover:text-gray-400 transition-colors">
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-8 pb-12 text-[13px] text-gray-400">
            kontakt@leobruni-photo.com
          </div>
        </div>
      )}
    </>
  );
}
