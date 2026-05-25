"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/portfolio/food", label: "Food" },
  { href: "/portfolio/hochzeit", label: "Hochzeit" },
  { href: "/portfolio/architektur", label: "Architektur" },
  { href: "/portfolio/video", label: "Video" },
  { href: "/buchen", label: "Buchen" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-white/98 backdrop-blur-md border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-14 sm:h-16">
        <Link
          href="/"
          className={`text-xs sm:text-sm font-semibold tracking-widest uppercase transition-colors duration-300 ${
            scrolled || open ? "text-black" : "text-white"
          }`}
        >
          Leo Bruni
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-50 ${
                scrolled ? "text-black" : "text-white"
              } ${pathname === link.href ? "border-b border-current pb-0.5" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile/Tablet Button */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${
            scrolled || open ? "text-black" : "text-white"
          }`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-5 sm:px-8 pb-8 pt-6 flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === link.href ? "text-black font-medium" : "text-gray-500 hover:text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <Link
              href="/buchen"
              className="block w-full text-center bg-black text-white text-xs tracking-widest uppercase py-4"
            >
              Jetzt buchen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
