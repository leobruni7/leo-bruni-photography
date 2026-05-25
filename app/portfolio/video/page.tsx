import Image from "next/image";
import Link from "next/link";

const videos = [
  {
    title: "Fine Dining — Restaurant Mayer",
    category: "Food",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
  },
  {
    title: "Hochzeit — Familie Müller",
    category: "Hochzeit",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?w=900&q=80",
  },
  {
    title: "Hotel Palais — Hamburg",
    category: "Architektur",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=80",
  },
  {
    title: "Brand Film — Weingut Riedl",
    category: "Commercial",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=900&q=80",
  },
];

export default function VideoPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero — vollbild wie andere Kategorien */}
      <section className="relative h-dvh min-h-[580px] bg-black flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=2000&q=90"
          alt="Video & Film"
          fill priority unoptimized
          className="object-cover opacity-50 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4">Bewegtbild</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-white tracking-[-0.04em] leading-none">
            Video
          </h1>
        </div>
      </section>

      {/* Beschreibung */}
      <section className="bg-white py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-base sm:text-xl text-[#6e6e73] font-light leading-relaxed">
            Geschichten, die sich bewegen. Filmische Produktionen für Marken, Events und Editorials — mit derselben Bildsprache wie meine Fotografie.
          </p>
        </div>
      </section>

      {/* Video Grid */}
      <section className="bg-[#1d1d1f] py-2 px-1 sm:px-2">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-1 sm:gap-2">
          {videos.map((v, i) => (
            <div key={i} className={`group relative overflow-hidden bg-black ${i === 0 ? "sm:col-span-2" : ""}`}>
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={v.thumb}
                  alt={v.title}
                  fill unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 opacity-70 group-hover:opacity-90"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/50 group-hover:border-white flex items-center justify-center group-hover:bg-white/10 transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                      <path d="M3 2L14 8L3 14V2Z" fill="white" />
                    </svg>
                  </div>
                </div>
                {/* Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-1">{v.category}</p>
                  <h3 className="text-lg sm:text-xl font-extralight text-white tracking-[-0.02em]">{v.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 sm:py-36 px-5 sm:px-8">
        <div className="max-w-[580px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-5">Buchen</p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-[#1d1d1f] mb-10 tracking-[-0.04em]">
            Video anfragen
          </h2>
          <Link href="/buchen"
            className="inline-block text-[11px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-12 py-4 rounded-full hover:bg-black transition-colors">
            Termin buchen
          </Link>
        </div>
      </section>
    </div>
  );
}
