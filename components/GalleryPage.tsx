import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  subtitle: string;
  heroImg: string;
  images: string[];
  description: string;
}

export default function GalleryPage({ title, subtitle, heroImg, images, description }: Props) {
  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative h-screen min-h-[580px] bg-black flex items-end overflow-hidden">
        <Image src={heroImg} alt={title} fill priority unoptimized
          className="object-cover opacity-50 grayscale" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="relative z-10 max-w-[1200px] w-full mx-auto px-5 sm:px-8 pb-16 sm:pb-24">
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4">{subtitle}</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-white tracking-tight leading-none">
            {title}
          </h1>
        </div>
      </section>

      {/* Beschreibung */}
      <section className="bg-white py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[600px] mx-auto text-center">
          <p className="text-base sm:text-xl text-[#6e6e73] font-light leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-[#f5f5f7] py-2 px-1 sm:px-2">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1 sm:gap-2">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden bg-[#e8e8ed] group ${i === 0 || i === 3 ? "sm:col-span-2" : ""}`}>
              <div className="aspect-[4/3]">
                <Image src={img} alt={`${title} ${i + 1}`} fill unoptimized
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.04] transition-all duration-700" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-24 sm:py-36 px-5 sm:px-8">
        <div className="max-w-[580px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#6e6e73] mb-5">Buchen</p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-[#1d1d1f] mb-10 tracking-tight">
            {title} anfragen
          </h2>
          <Link href="/buchen"
            className="inline-block text-[12px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-12 py-4 rounded-full hover:bg-black transition-colors">
            Termin buchen
          </Link>
        </div>
      </section>
    </div>
  );
}
