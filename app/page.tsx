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
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1800&q=90"
          alt="Leo Bruni Photography Hero"
          fill
          className="object-cover opacity-60"
          priority
          unoptimized
        />
        <div className="relative z-10 text-center text-white px-6">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-300 mb-6">Fine Art Photography</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tight mb-6">
            Leo Bruni
          </h1>
          <p className="text-sm md:text-base text-gray-300 tracking-widest uppercase mb-10">
            Food · Hochzeit · Architektur · Video
          </p>
          <Link
            href="/portfolio"
            className="inline-block border border-white text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-white hover:text-black transition-all duration-300"
          >
            Portfolio entdecken
          </Link>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <div className="w-px h-16 bg-white/40 mx-auto animate-pulse" />
        </div>
      </section>

      {/* Kategorien */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4 text-center">Leistungen</p>
          <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-16 tracking-tight">
            Jedes Bild erzählt eine Geschichte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {categories.map((cat) => (
              <Link key={cat.href} href={cat.href} className="group relative overflow-hidden aspect-[3/4] bg-black">
                <Image
                  src={cat.img}
                  alt={cat.label}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 grayscale"
                  unoptimized
                />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-gray-300 mb-1">{cat.sub}</p>
                  <h3 className="text-2xl font-light text-white tracking-tight">{cat.label}</h3>
                  <span className="mt-4 text-xs tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                    Ansehen →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Zitat */}
      <section className="bg-black py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-relaxed tracking-tight">
            "Licht ist meine Sprache.<br />Stille mein Studio."
          </p>
          <p className="mt-8 text-xs tracking-widest uppercase text-gray-500">— Leo Bruni</p>
        </div>
      </section>

      {/* Ausgewählte Arbeiten */}
      <section className="bg-white py-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4 text-center">Ausgewählte Arbeiten</p>
          <h2 className="text-3xl md:text-4xl font-light text-center text-black mb-16 tracking-tight">
            Portfolio
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
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
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-black text-white text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-gray-800 transition-colors"
            >
              Alle Arbeiten ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Buchen */}
      <section className="bg-gray-50 py-28 px-6 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Zusammenarbeiten</p>
          <h2 className="text-3xl md:text-4xl font-light text-black mb-6 tracking-tight">
            Ihr Projekt beginnt hier
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed mb-10">
            Ob Hochzeit, Produkt oder Architektur — ich freue mich auf Ihre Anfrage.
            Buchen Sie direkt online Ihren Wunschtermin.
          </p>
          <Link
            href="/buchen"
            className="inline-block bg-black text-white text-xs tracking-[0.3em] uppercase px-12 py-4 hover:bg-gray-800 transition-colors"
          >
            Termin buchen
          </Link>
        </div>
      </section>
    </>
  );
}
