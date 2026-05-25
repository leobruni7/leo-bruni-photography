import Link from "next/link";
import { SocialIconsFooter } from "@/components/SocialLinks";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20">

        {/* Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8 pb-12 sm:pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="text-[13px] font-semibold tracking-[-0.02em] mb-3">Leo Bruni Photography</p>
            <p className="text-[12px] text-white/40 font-light leading-relaxed mb-5">
              Rüsternkamp 17<br />22607 Hamburg<br />Deutschland
            </p>
            <p className="text-[12px] text-white/40 font-light mb-5">
              <a href="mailto:kontakt@leobruni-photo.com" className="hover:text-white transition-colors block mb-1 break-all">
                kontakt@leobruni-photo.com
              </a>
              <a href="tel:+4915209850658" className="hover:text-white transition-colors">
                +49 (0) 152 0985 0658
              </a>
            </p>
            <Link href="/social"
              className="text-[10px] tracking-[0.3em] uppercase text-white/20 hover:text-[#C9A96E] transition-colors">
              Social Media →
            </Link>
          </div>

          {/* Portfolio */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4">Portfolio</p>
            <div className="flex flex-col gap-2.5">
              {[
                ["/portfolio", "Alle Arbeiten"],
                ["/portfolio/food", "Food"],
                ["/portfolio/hochzeit", "Hochzeit"],
                ["/portfolio/architektur", "Architektur"],
                ["/portfolio/video", "Video"],
              ].map(([href, label]) => (
                <Link key={href} href={href}
                  className="text-[12px] text-white/60 font-light hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Studio */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4">Studio</p>
            <div className="flex flex-col gap-2.5">
              {[
                ["/ueber-mich", "Über mich"],
                ["/anfrage", "Anfragen"],
                ["/buchen", "Termin buchen"],
                ["/kontakt", "Kontakt"],
                ["/faq", "FAQ"],
              ].map(([href, label]) => (
                <Link key={href} href={href}
                  className="text-[12px] text-white/60 font-light hover:text-white transition-colors">
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div>
            <p className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-4">Starten</p>
            <p className="text-[12px] text-white/40 font-light leading-relaxed mb-5">
              Kostenloses Erstgespräch — ich antworte innerhalb von 24 Stunden.
            </p>
            <Link href="/anfrage"
              className="inline-block text-[10px] tracking-[0.25em] uppercase bg-[#C9A96E] text-white px-6 py-3 rounded-full hover:bg-[#8B7355] transition-colors mb-3">
              Jetzt anfragen
            </Link>
            <br />
            <Link href="/buchen"
              className="inline-block text-[10px] tracking-[0.25em] uppercase border border-white/20 text-white/60 px-6 py-3 rounded-full hover:border-white/50 hover:text-white transition-colors">
              Termin buchen
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-5 pt-6 sm:pt-8">
          <p className="text-[11px] text-white/25 order-last sm:order-first">
            © {new Date().getFullYear()} Leo Bruni Photography. Alle Rechte vorbehalten.
          </p>
          <SocialIconsFooter />
          <div className="flex flex-wrap justify-center gap-4 text-[11px] text-white/25">
            {[
              ["/impressum", "Impressum"],
              ["/impressum#datenschutz", "Datenschutz"],
              ["/agb", "AGB"],
              ["/rechtliches", "Rechtliches"],
            ].map(([href, label]) => (
              <Link key={href} href={href} className="hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
