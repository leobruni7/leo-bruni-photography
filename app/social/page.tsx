import Link from "next/link";
import { SocialGrid } from "@/components/SocialLinks";

export default function SocialPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Folgen Sie mir</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-[#1d1d1f] tracking-[-0.04em] leading-none mb-6">
          Social Media
        </h1>
        <p className="text-sm sm:text-base text-[#6e6e73] font-light max-w-md mx-auto leading-relaxed">
          Behind-the-Scenes, aktuelle Projekte und Einblicke in meine Arbeit —
          auf allen Plattformen, die Ihnen am meisten liegen.
        </p>
      </section>

      {/* Primary channels highlight */}
      <section className="bg-[#FAF7F2] border-y border-[#D4C5A9] py-10 px-5 sm:px-8">
        <div className="max-w-[900px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-3">Hauptkanäle</p>
          <p className="text-sm text-[#6e6e73] font-light">
            Am aktivsten auf{" "}
            <strong className="text-[#1d1d1f] font-medium">Instagram</strong>,{" "}
            <strong className="text-[#1d1d1f] font-medium">YouTube</strong> und{" "}
            <strong className="text-[#1d1d1f] font-medium">TikTok</strong> — dort poste ich mehrmals pro Woche.
          </p>
        </div>
      </section>

      {/* Full grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto">
          <SocialGrid />
        </div>
      </section>

      {/* Note about URLs */}
      <section className="bg-[#f5f5f7] py-12 px-5 sm:px-8 border-t border-[#e5e5ea]">
        <div className="max-w-[680px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Kontakt</p>
          <p className="text-sm text-[#6e6e73] font-light leading-relaxed mb-8">
            Lieber persönlich schreiben? Ich antworte auf alle Nachrichten innerhalb von 24 Stunden.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontakt"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase bg-[#1d1d1f] text-white px-10 py-4 rounded-full hover:bg-black transition-colors">
              Kontakt aufnehmen
            </Link>
            <Link href="/anfrage"
              className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase border border-[#D4C5A9] text-[#1d1d1f] px-10 py-4 rounded-full hover:border-[#C9A96E] transition-colors">
              Projekt anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
