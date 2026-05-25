import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    href: "/portfolio/food",
    label: "Food Fotografie",
    desc: "Kulinarische Kunst — von Fine Dining bis Produktfotografie",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200&q=80",
  },
  {
    href: "/portfolio/hochzeit",
    label: "Hochzeit Fotografie",
    desc: "Emotionale Momente, zeitlos festgehalten",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
  {
    href: "/portfolio/architektur",
    label: "Architektur Fotografie",
    desc: "Räume, Strukturen und Licht in ihrer reinsten Form",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  },
  {
    href: "/portfolio/video",
    label: "Video",
    desc: "Bewegtbild für Marken, Events und Editorials",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200&q=80",
  },
];

export default function PortfolioPage() {
  return (
    <div className="bg-white min-h-screen">
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Arbeiten</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-black tracking-tight mb-4">Portfolio</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Vier Disziplinen. Eine Bildsprache. Entdecken Sie meine Arbeiten.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-1">
          {categories.map((cat, i) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group relative flex overflow-hidden bg-black h-56 sm:h-72 md:h-80"
            >
              <Image
                src={cat.img}
                alt={cat.label}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale"
                unoptimized
              />
              {/* Gradient für Lesbarkeit */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="relative z-10 flex items-end p-6 sm:p-8 lg:p-10 w-full">
                <div>
                  <p className="text-[10px] tracking-widest uppercase text-gray-300 mb-1 sm:mb-2">0{i + 1}</p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-white tracking-tight">{cat.label}</h2>
                  <p className="text-xs sm:text-sm text-gray-300 mt-1 sm:mt-2 hidden sm:block">{cat.desc}</p>
                  <span className="mt-3 sm:mt-4 inline-block text-[10px] sm:text-xs tracking-widest uppercase text-white/60 group-hover:text-white transition-colors">
                    Ansehen →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
