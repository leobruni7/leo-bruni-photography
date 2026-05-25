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
      <section className="relative h-[70vh] flex items-end overflow-hidden bg-black">
        <Image src={heroImg} alt={title} fill className="object-cover opacity-50 grayscale" unoptimized />
        <div className="relative z-10 px-6 lg:px-12 pb-16 max-w-7xl w-full mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">{subtitle}</p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">{title}</h1>
        </div>
      </section>

      <section className="bg-white py-16 px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
        </div>
      </section>

      <section className="bg-white py-4 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden bg-gray-100 group ${i === 0 || i === 3 ? "md:col-span-2" : ""}`}>
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

      <section className="bg-gray-50 py-20 px-6 border-t border-gray-100 mt-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Interesse geweckt?</p>
          <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-tight">
            {title} buchen
          </h2>
          <Link
            href="/buchen"
            className="inline-block bg-black text-white text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gray-800 transition-colors"
          >
            Termin anfragen
          </Link>
        </div>
      </section>
    </>
  );
}
