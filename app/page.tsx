import Image from "next/image";
import Link from "next/link";

const services = [
  {
    href: "/portfolio/food",
    label: "Food",
    sub: "Kulinarik & Fine Dining",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&q=85",
    cta: "Food Fotografie buchen",
  },
  {
    href: "/portfolio/hochzeit",
    label: "Hochzeit",
    sub: "Emotionen & Erinnerungen",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=85",
    cta: "Hochzeit anfragen",
  },
  {
    href: "/portfolio/architektur",
    label: "Architektur",
    sub: "Raum & Struktur",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=85",
    cta: "Architektur buchen",
  },
  {
    href: "/portfolio/video",
    label: "Video",
    sub: "Bewegtbild & Film",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=85",
    cta: "Videoprojekt starten",
  },
];

const stats = [
  { n: "12+", label: "Jahre Erfahrung" },
  { n: "800+", label: "Projekte" },
  { n: "24h", label: "Antwortzeit" },
  { n: "100%", label: "Leidenschaft" },
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
      <section className="relative w-full h-dvh min-h-[640px] bg-black flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=2000&q=90"
          alt="Leo Bruni Photography"
          fill priority unoptimized
          className="object-cover opacity-50 grayscale scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-black/10" />

        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 sm:px-10 pb-16 sm:pb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/50 mb-5">
            Fine Art Photography · Hamburg
          </p>
          <h1 className="text-[clamp(3rem,8vw,7rem)] font-extralight text-white leading-[1] tracking-[-0.04em] mb-6 max-w-3xl">
            Bilder,<br />die bleiben.
          </h1>
          <p className="text-sm sm:text-base text-white/60 font-light mb-10 max-w-sm leading-relaxed">
            Professionelle Fotografie für Food, Hochzeit, Architektur & Video in Hamburg.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Link href="/buchen"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase bg-white text-[#1d1d1f] px-8 py-4 rounded-full hover:bg-[#FAF7F2] transition-all font-medium">
              Jetzt Termin buchen
            </Link>
            <Link href="/portfolio"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase text-white border border-white/30 px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              Portfolio ansehen
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 right-8 sm:right-10 z-10 flex flex-col items-center gap-2 opacity-30">
          <div className="w-px h-12 bg-white" />
          <span className="text-[9px] tracking-[0.3em] uppercase text-white rotate-0">Scroll</span>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#1d1d1f]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-10 sm:py-12 grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-white/10">
          {stats.map((s) => (
            <div key={s.n} className="text-center px-4 sm:px-6 py-2">
              <p className="text-2xl sm:text-3xl font-extralight text-white tracking-[-0.04em]">{s.n}</p>
              <p className="text-[10px] tracking-[0.3em] uppercase text-white/40 mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATEMENT ── */}
      <section className="bg-white py-24 sm:py-36 lg:py-44 px-6 sm:px-10">
        <div className="max-w-[860px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-6">Meine Philosophie</p>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-extralight text-[#1d1d1f] leading-[1.1] tracking-[-0.04em] mb-6 sm:mb-8">
            Ich fotografiere das Unsichtbare — den Moment kurz bevor alles perfekt ist.
          </h2>
          <p className="text-base sm:text-lg text-[#6e6e73] font-light leading-relaxed max-w-[480px] mx-auto">
            Mit Licht, Stille und handwerklicher Präzision entstehen Bilder, die Ihre Marke, Ihr Unternehmen oder Ihren wichtigsten Tag unvergesslich machen.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10 sm:mt-12">
            <Link href="/ueber-mich"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase text-[#1d1d1f] border border-[#1d1d1f] px-8 py-3.5 rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all">
              Über Leo Bruni
            </Link>
            <Link href="/buchen"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase bg-[#C9A96E] text-white px-8 py-3.5 rounded-full hover:bg-[#8B7355] transition-all">
              Kostenloses Erstgespräch
            </Link>
          </div>
        </div>
      </section>

      {/* ── SERVICES / LEAD GEN ── */}
      <section className="bg-[#f5f5f7] py-20 sm:py-28 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Leistungen</p>
            <h2 className="text-[clamp(2rem,4.5vw,3.5rem)] font-extralight text-[#1d1d1f] tracking-[-0.04em]">
              Was brauchen Sie?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {services.map((s) => (
              <div key={s.href} className="group bg-white rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-500">
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image src={s.img} alt={s.label} fill unoptimized
                    className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.05] transition-all duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 p-5">
                    <h3 className="text-xl font-extralight text-white tracking-[-0.03em] leading-tight">{s.label}</h3>
                    <p className="text-[11px] text-white/60 mt-0.5">{s.sub}</p>
                  </div>
                </div>
                <div className="p-5">
                  <Link href="/buchen"
                    className="block w-full text-center text-[10px] tracking-[0.25em] uppercase bg-[#1d1d1f] text-white py-3 rounded-full hover:bg-black transition-colors">
                    {s.cta}
                  </Link>
                  <Link href={s.href}
                    className="block w-full text-center text-[10px] tracking-[0.2em] uppercase text-[#6e6e73] py-3 hover:text-[#1d1d1f] transition-colors mt-1">
                    Portfolio ansehen →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO GRID ── */}
      <section className="bg-white py-20 sm:py-32 px-6 sm:px-10">
        <div className="max-w-[1200px] mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 sm:mb-14 gap-4">
            <div>
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">Ausgewählte Arbeiten</p>
              <h2 className="text-[clamp(2rem,4vw,3rem)] font-extralight text-[#1d1d1f] tracking-[-0.04em]">
                Portfolio
              </h2>
            </div>
            <Link href="/portfolio"
              className="self-start sm:self-auto text-[11px] tracking-[0.25em] uppercase text-[#1d1d1f] border border-[#1d1d1f] px-7 py-3 rounded-full hover:bg-[#1d1d1f] hover:text-white transition-all">
              Alle Arbeiten
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1.5">
            {grid.map((img, i) => (
              <div key={i} className="relative overflow-hidden aspect-square group bg-[#f5f5f7] rounded-xl">
                <Image src={img} alt="" fill unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.06] transition-all duration-700 rounded-xl"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className="bg-[#1d1d1f] py-24 sm:py-36 px-6 sm:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-8">Meine Bildsprache</p>
          <blockquote className="text-[clamp(1.6rem,4vw,3.2rem)] font-extralight text-white leading-[1.2] tracking-[-0.03em]">
            „Licht ist meine Sprache.<br />Stille ist mein Studio."
          </blockquote>
          <cite className="block mt-8 text-[11px] tracking-[0.4em] uppercase text-white/30 not-italic">
            Leo Bruni
          </cite>
          <div className="mt-10 sm:mt-12">
            <Link href="/buchen"
              className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase text-white border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition-all">
              Jetzt anfragen
            </Link>
          </div>
        </div>
      </section>

      {/* ── LEAD GEN CTA ── */}
      <section className="bg-[#FAF7F2] py-24 sm:py-36 lg:py-44 px-6 sm:px-10">
        <div className="max-w-[760px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-5">Bereit für Ihr Projekt?</p>
          <h2 className="text-[clamp(2.2rem,5vw,4rem)] font-extralight text-[#1d1d1f] leading-[1.1] tracking-[-0.04em] mb-6">
            Ihr nächstes Projekt<br />beginnt mit einem Gespräch.
          </h2>
          <p className="text-base text-[#6e6e73] font-light mb-10 max-w-[420px] mx-auto leading-relaxed">
            Kostenloses Erstgespräch · Kein Risiko · Antwort innerhalb von 24h
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/buchen"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase bg-[#1d1d1f] text-white px-12 py-4 rounded-full hover:bg-black transition-colors font-medium">
              Termin buchen
            </Link>
            <Link href="/kontakt"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase text-[#1d1d1f] border border-[#D4C5A9] px-12 py-4 rounded-full hover:border-[#C9A96E] transition-colors">
              Erst Fragen stellen
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {["Food Fotografie", "Hochzeit", "Architektur", "Video"].map((tag) => (
              <span key={tag} className="text-[11px] tracking-[0.2em] uppercase text-[#8B7355]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
