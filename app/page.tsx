"use client";
import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    href: "/portfolio/food",
    label: "Food",
    sub: "Kulinarische Perfektion",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  },
  {
    href: "/portfolio/hochzeit",
    label: "Hochzeit",
    sub: "Unvergessliche Momente",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    href: "/portfolio/architektur",
    label: "Architektur",
    sub: "Raum & Licht",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    href: "/portfolio/video",
    label: "Video",
    sub: "Bewegte Bilder",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
];

const featured = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
  "https://images.unsplash.com/photo-1444021465936-c6ca81d39b84?w=800&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1800&q=90"
          alt="Leo Bruni Photography"
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
        <div className="relative z-10 text-center text-white px-5 sm:px-10 max-w-4xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-300 mb-4 sm:mb-6">
            Fine Art Photography
          </p>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight mb-4 sm:mb-6">
            Leo Bruni
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 tracking-widest uppercase mb-8 sm:mb-10">
            Food · Hochzeit · Architektur · Video
          </p>
          <Link
            href="/portfolio"
            className="inline-block border border-white text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase px-8 sm:px-10 py-3 sm:py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Portfolio entdecken
          </Link>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden sm:block">
          <div className="w-px h-12 sm:h-16 bg-white/40 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Kategorien */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 text-center">Leistungen</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-black mb-10 sm:mb-14 lg:mb-16 tracking-tight">
            Jedes Bild erzählt eine Geschichte
          </h2>
          {/* Mobile: 2 Spalten, Tablet: 2x2, Desktop: 4 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-0.5 sm:gap-1">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative overflow-hidden bg-black aspect-[3/4] sm:aspect-[2/3] lg:aspect-[3/4]"
              >
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale"
                  unoptimized
                />
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 lg:p-8">
                  <p className="text-[9px] sm:text-[10px] tracking-[0.3em] uppercase text-gray-300 mb-1 hidden sm:block">
                    {cat.sub}
                  </p>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-light text-white tracking-tight">
                    {cat.label}
                  </h3>
                  <span className="mt-2 sm:mt-4 text-[10px] sm:text-xs tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                    Ansehen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zitat */}
      <section className="bg-black py-20 sm:py-24 lg:py-28 px-5 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-tight">
            "Licht ist meine Sprache.<br className="hidden sm:block" />
            <span className="sm:hidden"> </span>Stille mein Studio."
          </p>
          <p className="mt-6 sm:mt-8 text-[10px] sm:text-xs tracking-widest uppercase text-gray-500">— Leo Bruni</p>
        </div>
      </section>

      {/* Ausgewählte Arbeiten */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 text-center">Ausgewählte Arbeiten</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-black mb-10 sm:mb-14 lg:mb-16 tracking-tight">
            Portfolio
          </h2>
          {/* Mobile: 2 Spalten, Tablet/Desktop: 3 Spalten */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-0.5 sm:gap-1">
            {featured.map((img, i) => (
              <div key={i} className="relative overflow-hidden aspect-square bg-gray-100 group">
                <Image
                  src={img}
                  alt={`Werk ${i + 1}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-black text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase px-10 sm:px-12 py-3.5 sm:py-4 hover:bg-gray-800 transition-colors"
            >
              Alle Arbeiten ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Buchen */}
      <section className="bg-gray-50 py-20 sm:py-24 lg:py-28 px-5 sm:px-8 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Zusammenarbeiten</p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black mb-4 sm:mb-6 tracking-tight">
            Ihr Projekt beginnt hier
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-8 sm:mb-10 max-w-sm mx-auto">
            Ob Hochzeit, Produkt oder Architektur — ich freue mich auf Ihre Anfrage.
          </p>
          <Link
            href="/buchen"
            className="inline-block bg-black text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase px-10 sm:px-12 py-3.5 sm:py-4 hover:bg-gray-800 transition-colors"
          >
            Termin buchen
          </Link>
        </div>
      </section>
    </>
  );
}
