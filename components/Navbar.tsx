"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const HERO_PAGES = ["/", "/portfolio/food", "/portfolio/hochzeit", "/portfolio/architektur", "/portfolio/video", "/ueber-mich"];

const navLinks = [
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio/food", label: "Food" },
  { href: "/portfolio/hochzeit", label: "Hochzeit" },
  { href: "/portfolio/architektur", label: "Architektur" },
  { href: "/portfolio/video", label: "Video" },
  { href: "/kontakt", label: "Kontakt" },
];

const mobileLinks = [
  { href: "/", label: "Startseite" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio/food", label: "Food" },
  { href: "/portfolio/hochzeit", label: "Hochzeit" },
  { href: "/portfolio/architektur", label: "Architektur" },
  { href: "/portfolio/video", label: "Video" },
  { href: "/ueber-mich", label: "Über mich" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/anfrage", label: "Anfragen" },
  { href: "/buchen", label: "Termin buchen" },
  { href: "/faq", label: "FAQ" },
  { href: "/rechtliches", label: "Rechtliches" },
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
        transparent ? "bg-transparent" : "bg-white/92 backdrop-blur-xl border-b border-black/[0.06]"
      }`}>
        <div className="max-w-[1200px] mx-auto px-5 sm:px-8 flex items-center justify-between h-12 sm:h-14">

          <Link href="/" className={`text-[13px] font-semibold tracking-[-0.02em] transition-colors ${
            transparent ? "text-white" : "text-[#1d1d1f]"
          }`}>
            Leo Bruni
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`text-[12px] tracking-[-0.01em] transition-colors ${
                  transparent ? "text-white/80 hover:text-white" : "text-[#1d1d1f]/70 hover:text-[#1d1d1f]"
                } ${pathname === l.href ? "!opacity-100 font-medium" : ""}`}>
                {l.label}
              </Link>
            ))}
            <Link href="/anfrage"
              className={`text-[11px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full transition-all font-medium ${
                transparent
                  ? "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                  : "bg-[#C9A96E] text-white hover:bg-[#8B7355]"
              }`}>
              Anfragen
            </Link>
          </nav>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            className={`md:hidden w-8 h-8 flex flex-col justify-center gap-[5px] ${
              transparent ? "text-white" : "text-[#1d1d1f]"
            }`}
            aria-label="Menü">
            <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>
      </header>

      {/* Mobile menu */}
      <div className={`fixed inset-0 z-40 bg-white flex flex-col transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}>
        <div className="pt-14 flex flex-col h-full">
          <nav className="flex flex-col px-8 pt-6 overflow-y-auto">
            {mobileLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`py-3.5 text-xl font-extralight text-[#1d1d1f] border-b border-[#f0f0f0] hover:text-[#C9A96E] transition-colors tracking-[-0.02em] ${
                  l.href === "/anfrage" || l.href === "/buchen" ? "text-[#C9A96E]" : ""
                }`}>
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto px-8 pb-10 pt-6">
            <Link href="/anfrage"
              className="block w-full text-center text-[11px] tracking-[0.25em] uppercase bg-[#1d1d1f] text-white py-4 rounded-full">
              Jetzt kostenlos anfragen →
            </Link>
            <p className="text-[12px] text-[#6e6e73] mt-5 font-light">
              kontakt@leobruni-photo.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
