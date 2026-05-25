import Image from "next/image";
import Link from "next/link";

interface GalleryPageProps {
  title: string;
  subtitle: string;
  heroImg: string;
  images: string[];
  description: string;
}

export default function GalleryPage({ title, subtitle, heroImg, images, description }: GalleryPageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] sm:h-[65vh] min-h-[380px] flex items-end overflow-hidden bg-black">
        <Image
          src={heroImg}
          alt={title}
          fill
          className="object-cover opacity-50 grayscale"
          unoptimized
          priority
        />
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 pb-10 sm:pb-14 lg:pb-16 max-w-7xl w-full mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-2 sm:mb-3">{subtitle}</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">{title}</h1>
        </div>
      </section>

      {/* Beschreibung */}
      <section className="bg-white py-10 sm:py-14 lg:py-16 px-5 sm:px-8 lg:px-12 border-b border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
      </section>

      {/* Galerie */}
      <section className="bg-white py-2 px-2 sm:px-4 lg:px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0.5 sm:gap-1">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden bg-gray-100 group ${
                i === 0 || i === 3 ? "sm:col-span-2" : ""
              }`}
            >
              <div className="aspect-[4/3]">
                <Image
                  src={img}
                  alt={`${title} ${i + 1}`}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  unoptimized
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-16 sm:py-20 px-5 sm:px-8 border-t border-gray-100 mt-2">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Interesse geweckt?</p>
          <h2 className="text-2xl sm:text-3xl font-light text-black mb-5 sm:mb-6 tracking-tight">
            {title} buchen
          </h2>
          <Link
            href="/buchen"
            className="inline-block bg-black text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase px-10 sm:px-12 py-3.5 sm:py-4 hover:bg-gray-800 transition-colors"
          >
            Termin anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
