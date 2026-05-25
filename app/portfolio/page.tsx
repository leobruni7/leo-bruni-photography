import Image from "next/image";
import Link from "next/link";

const b2b = [
  {
    href: "/portfolio/food",
    n: "01",
    label: "Food",
    desc: "Kulinarik & Fine Dining",
    sub: "Restaurants · Produkte · Brands",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85",
  },
  {
    href: "/portfolio/architektur",
    n: "02",
    label: "Architektur",
    desc: "Raum & Struktur",
    sub: "Immobilien · Hotels · Büros",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85",
  },
  {
    href: "/portfolio/video",
    n: "03",
    label: "Video",
    desc: "Bewegtbild & Film",
    sub: "Imagefilm · Reels · Dokumentation",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=85",
  },
];

const b2c = [
  {
    href: "/portfolio/hochzeit",
    n: "01",
    label: "Hochzeit",
    desc: "Emotionen & Erinnerungen",
    sub: "Reportage · Portraits · Paarshooting",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
  },
];

function CategoryCard({ cat }: { cat: typeof b2b[0] }) {
  return (
    <Link href={cat.href}
      className="group relative overflow-hidden bg-[#f5f5f7] aspect-[4/3] sm:aspect-[3/2] rounded-2xl">
      <Image src={cat.img} alt={cat.label} fill unoptimized
        className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 opacity-90" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent rounded-2xl" />
      <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
        <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-2">{cat.n}</p>
        <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-[-0.03em]">{cat.label}</h2>
        <p className="text-[11px] text-white/50 mt-1">{cat.desc}</p>
        <p className="text-[10px] text-white/30 mt-0.5">{cat.sub}</p>
        <span className="mt-4 text-[10px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white/80 transition-colors">
          Ansehen →
        </span>
      </div>
    </Link>
  );
}

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Arbeiten</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-[#1d1d1f] tracking-[-0.04em] leading-none">
          Portfolio
        </h1>
        <p className="mt-5 text-sm text-[#6e6e73] font-light max-w-xs mx-auto">
          Für Unternehmen und Privatpersonen — je nach Bedarf.
        </p>
      </section>

      {/* ── B2B ── */}
      <section className="pb-10 sm:pb-14 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">

          {/* B2B Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E]">B2B</span>
            <div className="flex-1 h-px bg-[#D4C5A9]" />
            <span className="text-[11px] text-[#6e6e73] font-light">Für Unternehmen & Brands</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
            {b2b.map((cat) => (
              <CategoryCard key={cat.href} cat={cat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── B2C ── */}
      <section className="pb-20 sm:pb-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto">

          {/* B2C Label */}
          <div className="flex items-center gap-4 mb-6">
            <span className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E]">B2C</span>
            <div className="flex-1 h-px bg-[#D4C5A9]" />
            <span className="text-[11px] text-[#6e6e73] font-light">Für Privatpersonen</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
            {b2c.map((cat) => (
              <CategoryCard key={cat.href} cat={cat} />
            ))}
            {/* Platzhalter-Karte für zukünftige Kategorien */}
            <Link href="/anfrage"
              className="group relative overflow-hidden bg-[#FAF7F2] aspect-[4/3] sm:aspect-[3/2] rounded-2xl border-2 border-dashed border-[#D4C5A9] hover:border-[#C9A96E] transition-colors flex flex-col items-center justify-center gap-3">
              <div className="w-10 h-10 rounded-full border border-[#D4C5A9] group-hover:border-[#C9A96E] flex items-center justify-center transition-colors">
                <span className="text-[#C9A96E] text-lg leading-none">+</span>
              </div>
              <div className="text-center px-6">
                <p className="text-sm font-light text-[#1d1d1f]">Individuelles Projekt?</p>
                <p className="text-[11px] text-[#6e6e73] mt-1">Sprechen Sie mich an</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F2] border-t border-[#D4C5A9] py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[560px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-5">Buchen</p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#1d1d1f] tracking-[-0.04em] mb-8">
            Welches Projekt darf ich für Sie umsetzen?
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/anfrage"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase bg-[#1d1d1f] text-white px-10 py-4 rounded-full hover:bg-black transition-colors">
              Anfrage senden
            </Link>
            <Link href="/buchen"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase border border-[#D4C5A9] text-[#1d1d1f] px-10 py-4 rounded-full hover:border-[#C9A96E] transition-colors">
              Termin buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
