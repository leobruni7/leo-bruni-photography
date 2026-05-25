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
    <>
      <section className="pt-32 pb-16 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Arbeiten</p>
          <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight mb-6">Portfolio</h1>
          <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
            Vier Disziplinen. Eine Bildsprache. Entdecken Sie meine Arbeiten.
          </p>
        </div>
      </section>

      <section className="bg-white pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto space-y-1">
          {categories.map((cat, i) => (
            <Link key={cat.href} href={cat.href} className="group relative flex overflow-hidden bg-black h-64 md:h-80">
              <Image
                src={cat.img}
                alt={cat.label}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-105 transition-all duration-700 grayscale"
                unoptimized
              />
              <div className="relative z-10 flex items-end p-10 w-full">
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-2">0{i + 1}</p>
                  <h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">{cat.label}</h2>
                  <p className="text-sm text-gray-300 mt-2">{cat.desc}</p>
                  <span className="mt-4 inline-block text-xs tracking-widest uppercase text-white/50 group-hover:text-white transition-colors">
                    Ansehen →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
