import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Studio</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Leo Bruni Photography<br />
              Fine Art & Commercial Photography<br />
              Wien, Österreich
            </p>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Navigation</p>
            <div className="flex flex-col gap-2">
              {[
                { href: "/portfolio/food", label: "Food" },
                { href: "/portfolio/hochzeit", label: "Hochzeit" },
                { href: "/portfolio/architektur", label: "Architektur" },
                { href: "/portfolio/video", label: "Video" },
                { href: "/buchen", label: "Buchen" },
              ].map((l) => (
                <Link key={l.href} href={l.href} className="text-sm text-gray-300 hover:text-white transition-colors">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Kontakt</p>
            <div className="flex flex-col gap-2 text-sm text-gray-300">
              <a href="mailto:hello@leobruni.photo" className="hover:text-white transition-colors">
                hello@leobruni.photo
              </a>
              <a href="tel:+43123456789" className="hover:text-white transition-colors">
                +43 123 456 789
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-xs tracking-widest uppercase hover:text-white transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-xs tracking-widest uppercase hover:text-white transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Leo Bruni Photography. Alle Rechte vorbehalten.
          </p>
          <div className="flex gap-6">
            <Link href="/impressum" className="text-xs text-gray-500 hover:text-white transition-colors tracking-widest uppercase">
              Impressum
            </Link>
            <Link href="/impressum#datenschutz" className="text-xs text-gray-500 hover:text-white transition-colors tracking-widest uppercase">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
