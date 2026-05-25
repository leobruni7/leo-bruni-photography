import Link from "next/link";

const videos = [
  {
    title: "Fine Dining — Restaurant Mayer",
    category: "Food",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80",
  },
  {
    title: "Hochzeit — Familie Müller",
    category: "Hochzeit",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
  },
  {
    title: "Hotel Palais — Wien",
    category: "Architektur",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  },
  {
    title: "Brand Film — Weingut Riedl",
    category: "Commercial",
    embed: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    thumb: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
  },
];

export default function VideoPage() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-6 lg:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-500 mb-4">Bewegtbild</p>
          <h1 className="text-5xl md:text-7xl font-light text-white tracking-tight">Video</h1>
          <p className="mt-6 text-sm text-gray-400 max-w-lg leading-relaxed">
            Geschichten, die sich bewegen. Filmische Produktionen für Marken, Events und Editorials — mit derselben Bildsprache wie meine Fotografie.
          </p>
        </div>
      </section>

      <section className="bg-black pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-1">
          {videos.map((v, i) => (
            <div key={i} className="group relative bg-gray-900 overflow-hidden">
              <div className="relative aspect-video bg-gray-800 flex items-center justify-center">
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-60 group-hover:opacity-40 transition-all duration-500"
                  style={{ backgroundImage: `url(${v.thumb})` }}
                />
                <div className="relative z-10 w-14 h-14 rounded-full border border-white/60 flex items-center justify-center group-hover:bg-white/20 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4 2L14 8L4 14V2Z" fill="white" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <p className="text-xs tracking-widest uppercase text-gray-500 mb-1">{v.category}</p>
                <h3 className="text-lg font-light text-white">{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 border-t border-gray-200">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Video Anfrage</p>
          <h2 className="text-2xl md:text-3xl font-light text-black mb-6 tracking-tight">
            Video-Projekt anfragen
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
