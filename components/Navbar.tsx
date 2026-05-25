"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { LANGUAGES, t, type LangCode } from "@/lib/i18n";

const HERO_PAGES = ["/", "/portfolio/food", "/portfolio/hochzeit", "/portfolio/architektur", "/portfolio/video", "/ueber-mich"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const langRef = useRef<HTMLDivElement>(null);

  const isHeroPage = HERO_PAGES.includes(pathname);
  const transparent = isHeroPage && !scrolled && !open;

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setOpen(false); setScrolled(false); }, [pathname]);

  // Close lang dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { href: "/ueber-mich",          label: t("nav_about", lang)        },
    { href: "/portfolio",            label: t("nav_portfolio", lang)    },
    { href: "/portfolio/food",       label: t("nav_food", lang)         },
    { href: "/portfolio/hochzeit",   label: t("nav_wedding", lang)      },
    { href: "/portfolio/architektur",label: t("nav_architecture", lang) },
    { href: "/portfolio/video",      label: t("nav_video", lang)        },
    { href: "/kontakt",              label: t("nav_contact", lang)      },
  ];

  const mobileLinks = [
    { href: "/",                     label: transparent ? "Home" : "Leo Bruni" },
    { href: "/portfolio",            label: t("nav_portfolio", lang)    },
    { href: "/portfolio/food",       label: t("nav_food", lang)         },
    { href: "/portfolio/hochzeit",   label: t("nav_wedding", lang)      },
    { href: "/portfolio/architektur",label: t("nav_architecture", lang) },
    { href: "/portfolio/video",      label: t("nav_video", lang)        },
    { href: "/ueber-mich",           label: t("nav_about", lang)        },
    { href: "/kontakt",              label: t("nav_contact", lang)      },
    { href: "/anfrage",              label: t("nav_inquire", lang)      },
    { href: "/buchen",               label: t("nav_book", lang)         },
    { href: "/newsletter",           label: "Newsletter"                },
    { href: "/faq",                  label: "FAQ"                       },
    { href: "/rechtliches",          label: "Rechtliches"               },
  ];

  const currentLang = LANGUAGES.find(l => l.code === lang)!;

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
          <nav className="hidden md:flex items-center gap-5 lg:gap-6">
            {navLinks.map(l => (
              <Link key={l.href} href={l.href}
                className={`text-[12px] tracking-[-0.01em] transition-colors ${
                  transparent ? "text-white/80 hover:text-white" : "text-[#1d1d1f]/70 hover:text-[#1d1d1f]"
                } ${pathname === l.href ? "!opacity-100 font-medium" : ""}`}>
                {l.label}
              </Link>
            ))}

            {/* Anfragen pill */}
            <Link href="/anfrage"
              className={`text-[11px] tracking-[0.15em] uppercase px-4 py-1.5 rounded-full transition-all font-medium ${
                transparent
                  ? "bg-white/15 text-white hover:bg-white/25 border border-white/20"
                  : "bg-[#C9A96E] text-white hover:bg-[#8B7355]"
              }`}>
              {t("nav_inquire", lang)}
            </Link>

            {/* Language switcher */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(o => !o)}
                className={`flex items-center gap-1.5 text-[11px] tracking-[0.1em] uppercase px-3 py-1.5 rounded-full border transition-all ${
                  transparent
                    ? "border-white/20 text-white/70 hover:text-white hover:border-white/40"
                    : "border-[#D4C5A9] text-[#6e6e73] hover:border-[#C9A96E] hover:text-[#1d1d1f]"
                }`}
                aria-label="Sprache wählen"
              >
                <span>{currentLang.flag}</span>
                <span>{currentLang.short}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  className={`w-3 h-3 transition-transform duration-200 ${langOpen ? "rotate-180" : ""}`}>
                  <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Dropdown */}
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl border border-[#e5e5ea] shadow-xl overflow-hidden z-50">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as LangCode); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
                        lang === l.code
                          ? "bg-[#FAF7F2] text-[#C9A96E] font-medium"
                          : "text-[#1d1d1f] hover:bg-[#f5f5f7]"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="font-light">{l.label}</span>
                      {lang === l.code && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          className="w-3.5 h-3.5 ml-auto text-[#C9A96E]">
                          <path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Mobile: lang button + hamburger */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile language switcher */}
            <div ref={undefined} className="relative">
              <button
                onClick={() => setLangOpen(o => !o)}
                className={`flex items-center gap-1 min-h-[36px] text-[11px] px-3 py-2 rounded-full border transition-all ${
                  transparent
                    ? "border-white/20 text-white/70"
                    : "border-[#D4C5A9] text-[#6e6e73]"
                }`}
              >
                <span>{currentLang.flag}</span>
                <span className="tracking-[0.1em] uppercase">{currentLang.short}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-40 bg-white rounded-2xl border border-[#e5e5ea] shadow-xl overflow-hidden z-50">
                  {LANGUAGES.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => { setLang(l.code as LangCode); setLangOpen(false); }}
                      className={`w-full flex items-center gap-3 px-4 py-3 text-sm text-left transition-colors ${
                        lang === l.code
                          ? "bg-[#FAF7F2] text-[#C9A96E] font-medium"
                          : "text-[#1d1d1f] hover:bg-[#f5f5f7]"
                      }`}
                    >
                      <span className="text-base">{l.flag}</span>
                      <span className="font-light">{l.label}</span>
                      {lang === l.code && (
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                          className="w-3.5 h-3.5 ml-auto text-[#C9A96E]">
                          <path d="M5 13L9 17L19 7" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <button
              onClick={() => setOpen(o => !o)}
              className={`w-11 h-11 flex flex-col justify-center gap-[5px] ${
                transparent ? "text-white" : "text-[#1d1d1f]"
              }`}
              aria-label="Menü">
              <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
              <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all duration-300 ${open ? "opacity-0 scale-x-0" : ""}`} />
              <span className={`block h-[1.5px] w-5 mx-auto bg-current transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
            </button>
          </div>
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
              {t("inquire_cta", lang)} →
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
