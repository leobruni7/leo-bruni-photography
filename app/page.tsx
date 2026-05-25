import Image from "next/image";
import Link from "next/link";

const categories = [
  { href: "/portfolio/food", label: "Food", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85" },
  { href: "/portfolio/hochzeit", label: "Hochzeit", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85" },
  { href: "/portfolio/architektur", label: "Architektur", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85" },
  { href: "/portfolio/video", label: "Video", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=85" },
];

const grid = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=900&q=80",
  "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=900&q=80",
  "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=900&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full h-screen min-h-[600px] bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=2000&q=90"
          alt="Leo Bruni Photography"
          fill priority unoptimized
          className="object-cover opacity-55 grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60" />
        <div className="relative z-10 text-center px-5 max-w-5xl mx-auto">
          <p className="text-[11px] sm:text-xs tracking-[0.5em] uppercase text-white/60 mb-6 sm:mb-8">Fine Art Photography · Hamburg</p>
          <h1 className="text-[13vw] sm:text-[10vw] lg:text-[9rem] font-extralight text-white leading-[0.9] tracking-tight mb-6 sm:mb-8">
            Leo<br />Bruni
          </h1>
          <p className="text-[11px] sm:text-sm tracking-[0.3em] uppercase text-white/50 mb-10 sm:mb-14">
            Food&nbsp;&nbsp;·&nbsp;&nbsp;Hochzeit&nbsp;&nbsp;·&nbsp;&nbsp;Architektur&nbsp;&nbsp;·&nbsp;&nbsp;Video
          </p>
          <Link href="/portfolio"
            className="inline-flex items-center gap-3 text-[11px] tracking-[0.3em] uppercase text-white border border-white/40 rounded-full px-8 py-3 hover:bg-white hover:text-black transition-all duration-300">
            Portfolio entdecken
          </Link>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[9px] tracking-[0.3em] uppercase text-white">Scroll</span>
          <div className="w-px h-10 bg-white" />
        </div>
      </section>

      {/* ── INTRO STATEMENT ── */}
      <section className="bg-white py-24 sm:py-36 lg:py-44 px-5 sm:px-8">
        <div className="max-w-[800px] mx-auto text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-[#1d1d1f] leading-tight tracking-tight">
            Bilder, die bleiben.
          </h2>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-[#6e6e73] font-light leading-relaxed max-w-[540px] mx-auto">
            Ich fotografiere das Unsichtbare — den Moment kurz bevor alles perfekt ist. Mit Licht, Stille und handwerklicher Präzision.
          </p>
          <Link href="/ueber-mich"
            className="inline-block mt-10 sm:mt-12 text-[12px] tracking-[0.3em] uppercase text-[#1d1d1f] border-b border-[#1d1d1f] pb-0.5 hover:text-[#6e6e73] hover:border-[#6e6e73] transition-colors">
            Über mich
          </Link>
        </div>
      </section>

      {/* ── KATEGORIEN — Fullwidth Stack ── */}
      <section className="bg-[#f5f5f7]">
        {categories.map((cat, i) => (
          <Link key={cat.href} href={cat.href}
            className={`group relative flex items-center overflow-hidden ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
            style={{ minHeight: "min(60vh, 520px)" }}>

            {/* Bild */}
            <div className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-full md:absolute md:inset-0">
              <Image src={cat.img} alt={cat.label} fill unoptimized
                className={`object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03] ${
                  i % 2 === 0 ? "md:left-0 md:w-1/2" : "md:right-0 md:w-1/2"
                }`}
              />
            </div>

            {/* Text */}
            <div className={`relative z-10 w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-14 lg:px-20 py-14 sm:py-20 ${
              i % 2 === 0 ? "md:ml-auto" : ""
            }`}>
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#6e6e73] mb-4">0{i + 1}</p>
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1d1d1f] leading-tight tracking-tight mb-4">
                {cat.label}
              </h3>
              <span className="inline-flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-[#1d1d1f] mt-4 group-hover:gap-4 transition-all">
                Ansehen <span>→</span>
              </span>
            </div>
          </Link>
        ))}
      </section>

      {/* ── ZITAT ── */}
      <section className="bg-[#1d1d1f] py-24 sm:py-36 lg:py-44 px-5 sm:px-8">
        <div className="max-w-[700px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/30 mb-10">Philosophie</p>
          <blockquote className="text-2xl sm:text-4xl lg:text-5xl font-extralight text-white leading-snug tracking-tight">
            „Licht ist meine Sprache.<br />Stille ist mein Studio."
          </blockquote>
          <cite className="block mt-10 text-[11px] tracking-[0.4em] uppercase text-white/30 not-italic">
            Leo Bruni
          </cite>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="bg-white py-24 sm:py-36 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-14 sm:mb-20">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#6e6e73] mb-4">Ausgewählte Arbeiten</p>
            <h2 className="text-4xl sm:text-6xl font-extralight text-[#1d1d1f] tracking-tight">Portfolio</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1 sm:gap-2">
            {grid.map((img, i) => (
              <div key={i} className="relative overflow-hidden aspect-square group bg-[#f5f5f7]">
                <Image src={img} alt="" fill unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-14 sm:mt-20">
            <Link href="/portfolio"
              className="inline-block text-[12px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-12 py-4 rounded-full hover:bg-black transition-colors">
              Alle Arbeiten
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BUCHEN ── */}
      <section className="bg-[#f5f5f7] py-24 sm:py-36 lg:py-44 px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#6e6e73] mb-5 sm:mb-6">Zusammenarbeiten</p>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-extralight text-[#1d1d1f] leading-tight tracking-tight mb-6 sm:mb-8">
            Ihr Projekt<br />beginnt hier.
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] font-light mb-10 sm:mb-14 max-w-sm mx-auto leading-relaxed">
            Ob Hochzeit, Food oder Architektur — buchen Sie direkt online Ihren Termin.
          </p>
          <Link href="/buchen"
            className="inline-block text-[12px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-14 py-4 rounded-full hover:bg-black transition-colors">
            Termin buchen
          </Link>
        </div>
      </section>
    </>
  );
}
