import Image from "next/image";
import Link from "next/link";

const facts = [
  { zahl: "12+", text: "Jahre Erfahrung" },
  { zahl: "800+", text: "Projekte abgeschlossen" },
  { zahl: "3", text: "Länder, 1 Bildsprache" },
  { zahl: "100%", text: "Leidenschaft" },
];

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60svh] sm:h-[70svh] min-h-[400px] flex items-end overflow-hidden bg-black">
        <Image
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1800&q=90"
          alt="Leo Bruni Photography Studio"
          fill
          className="object-cover opacity-45 grayscale"
          priority
          unoptimized
        />
        <div className="relative z-10 px-5 sm:px-8 lg:px-12 pb-10 sm:pb-16 max-w-7xl w-full mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-2 sm:mb-3">Der Fotograf</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight">Über mich</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-4 sm:mb-6">Meine Geschichte</p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-black tracking-tight mb-6 sm:mb-8 leading-snug">
              Ich fotografiere das,<br />was andere übersehen.
            </h2>
            <div className="space-y-4 text-sm text-gray-500 leading-relaxed">
              <p>
                Mein Name ist Leo Bruni. Seit über zwölf Jahren arbeite ich als Fotograf an der Schnittstelle von Kunst und Kommerz — in Hamburg, Wien und darüber hinaus.
              </p>
              <p>
                Begonnen hat alles mit einer analogen Kamera und dem Wunsch, Licht einzufangen, bevor es verschwindet. Heute umfasst meine Arbeit Food-Fotografie für internationale Restaurants und Verlage, Hochzeitsreportagen, Architekturprojekte und filmische Videoproduktionen.
              </p>
              <p>
                Was mich antreibt: die Stille kurz vor dem Auslöser. Der Moment, in dem alles stimmt.
              </p>
            </div>
            <Link
              href="/buchen"
              className="inline-flex items-center justify-center min-h-[44px] mt-8 sm:mt-10 bg-[#1d1d1f] text-white text-[10px] tracking-[0.3em] uppercase px-10 py-4 rounded-full hover:bg-black transition-colors active:scale-[0.98]"
            >
              Zusammenarbeiten
            </Link>
          </div>

          <div className="relative aspect-[3/4] sm:aspect-[4/5] lg:aspect-[3/4] overflow-hidden bg-gray-100">
            <Image
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=85"
              alt="Leo Bruni"
              fill
              className="object-cover grayscale"
              unoptimized
            />
          </div>
        </div>
      </section>

      {/* Zahlen */}
      <section className="bg-black py-16 sm:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {facts.map((f) => (
            <div key={f.zahl} className="text-center">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-light text-white tracking-tight mb-2">{f.zahl}</p>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase text-gray-500">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Philosophie */}
      <section className="bg-white py-16 sm:py-20 lg:py-24 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-12">
          {[
            {
              title: "Handwerk",
              text: "Jede Aufnahme basiert auf technischem Können — Licht, Komposition, Timing. Kein Filter ersetzt ein gutes Fundament.",
            },
            {
              title: "Vertrauen",
              text: "Ob intimer Hochzeitsmoment oder aufwendige Produktion — ich arbeite ruhig, präzise und immer mit Respekt vor dem Moment.",
            },
            {
              title: "Qualität",
              text: "Ich liefere keine Masse, sondern Bilder, die bleiben. Jedes Projekt erhält meine volle Aufmerksamkeit.",
            },
          ].map((item) => (
            <div key={item.title}>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">{item.title}</p>
              <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ausrüstung */}
      <section className="bg-gray-50 py-16 sm:py-20 px-5 sm:px-8 lg:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4 text-center">Equipment</p>
          <h2 className="text-2xl sm:text-3xl font-light text-black text-center mb-10 sm:mb-12 tracking-tight">Womit ich arbeite</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-2xl mx-auto text-center">
            {["Sony Alpha", "Hasselblad", "Canon Cinema", "Profoto Studio"].map((gear) => (
              <div key={gear}>
                <p className="text-xs sm:text-sm text-black font-medium">{gear}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-16 sm:py-20 px-5 sm:px-8 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Kontakt</p>
          <h2 className="text-2xl sm:text-3xl font-light text-black mb-5 sm:mb-6 tracking-tight">Lassen Sie uns sprechen</h2>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <Link href="/buchen" className="inline-flex items-center justify-center min-h-[44px] bg-[#1d1d1f] text-white text-[10px] tracking-[0.3em] uppercase px-8 py-4 rounded-full hover:bg-black transition-colors active:scale-[0.98]">
              Termin buchen
            </Link>
            <Link href="/kontakt" className="inline-flex items-center justify-center min-h-[44px] border border-[#1d1d1f] text-[#1d1d1f] text-[10px] tracking-[0.3em] uppercase px-8 py-4 rounded-full hover:bg-[#1d1d1f] hover:text-white transition-colors active:scale-[0.98]">
              Nachricht senden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
