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
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link
          href="/"
          className={`text-sm font-semibold tracking-widest uppercase transition-colors duration-300 ${
            scrolled ? "text-black" : "text-white"
          }`}
        >
          Leo Bruni
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-xs tracking-widest uppercase transition-colors duration-300 hover:opacity-60 ${
                scrolled ? "text-black" : "text-white"
              } ${pathname === link.href ? "border-b border-current pb-0.5" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          className={`lg:hidden transition-colors duration-300 ${scrolled ? "text-black" : "text-white"}`}
          onClick={() => setOpen(!open)}
          aria-label="Menü"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-6 pb-6 pt-4 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs tracking-widest uppercase text-black hover:text-gray-400 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
