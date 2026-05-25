import Image from "next/image";
import Link from "next/link";

const cats = [
  { href: "/portfolio/food", n: "01", label: "Food", desc: "Kulinarik & Fine Dining", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=85" },
  { href: "/portfolio/hochzeit", n: "02", label: "Hochzeit", desc: "Emotionen & Erinnerungen", img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85" },
  { href: "/portfolio/architektur", n: "03", label: "Architektur", desc: "Raum & Struktur", img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=85" },
  { href: "/portfolio/video", n: "04", label: "Video", desc: "Bewegtbild & Film", img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=85" },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#6e6e73] mb-4">Arbeiten</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-[#1d1d1f] tracking-tight leading-none">
          Portfolio
        </h1>
      </section>

      {/* Categories */}
      <section className="pb-20 sm:pb-32 px-5 sm:px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
          {cats.map((cat) => (
            <Link key={cat.href} href={cat.href}
              className="group relative overflow-hidden bg-[#f5f5f7] aspect-[4/3] sm:aspect-[3/2]">
              <Image src={cat.img} alt={cat.label} fill unoptimized
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700 opacity-90" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-2">{cat.n}</p>
                <h2 className="text-3xl sm:text-4xl font-extralight text-white tracking-tight">{cat.label}</h2>
                <p className="text-[12px] text-white/60 mt-1">{cat.desc}</p>
                <span className="mt-4 text-[11px] tracking-[0.3em] uppercase text-white/40 group-hover:text-white/80 transition-colors">
                  Ansehen →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
