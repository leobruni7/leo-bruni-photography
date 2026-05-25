import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-14 sm:py-16 px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-10 sm:mb-12">

          {/* Studio */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-3 sm:mb-4">Studio</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leo Bruni Photography<br />
              Rüsternkamp 17<br />
              22607 Hamburg<br />
              Deutschland
            </p>
          </div>

          {/* Portfolio */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-3 sm:mb-4">Portfolio</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/portfolio/food", label: "Food" },
                { href: "/portfolio/hochzeit", label: "Hochzeit" },
                { href: "/portfolio/architektur", label: "Architektur" },
                { href: "/portfolio/video", label: "Video" },
                { href: "/portfolio", label: "Alle Arbeiten" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-3 sm:mb-4">Info</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/ueber-mich", label: "Über mich" },
                { href: "/buchen", label: "Termin buchen" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "/faq", label: "FAQ" },
                { href: "/rechtliches", label: "Rechtliches" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Kontakt */}
          <div>
            <p className="text-[10px] tracking-widest uppercase text-gray-400 mb-3 sm:mb-4">Kontakt</p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="mailto:hello@leobruni-photo.com" className="hover:text-white transition-colors break-all">
                hello@leobruni-photo.com
              </a>
              <a href="tel:+4940123456789" className="hover:text-white transition-colors">
                +49 40 123 456 789
              </a>
              <div className="flex gap-5 mt-3">
                <a href="#" className="text-[10px] tracking-widest uppercase hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-[10px] tracking-widest uppercase hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-[11px] text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} Leo Bruni Photography · Hamburg · Deutschland
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link href="/impressum" className="text-[10px] text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Impressum</Link>
            <Link href="/impressum#datenschutz" className="text-[10px] text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Datenschutz</Link>
            <Link href="/agb" className="text-[10px] text-gray-500 hover:text-white transition-colors tracking-widest uppercase">AGB</Link>
            <Link href="/rechtliches" className="text-[10px] text-gray-500 hover:text-white transition-colors tracking-widest uppercase">Rechtliches</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
