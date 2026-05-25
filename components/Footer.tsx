import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1d1d1f] text-white">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 py-16 sm:py-20">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-6 pb-12 sm:pb-16 border-b border-white/10">
          <div className="max-w-xs">
            <p className="text-base font-semibold tracking-tight mb-3">Leo Bruni Photography</p>
            <p className="text-[13px] text-white/40 leading-relaxed">
              Rüsternkamp 17<br />22607 Hamburg, Deutschland
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-12 text-[13px]">
            <div>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">Portfolio</p>
              <div className="flex flex-col gap-2.5">
                {["/portfolio/food|Food", "/portfolio/hochzeit|Hochzeit", "/portfolio/architektur|Architektur", "/portfolio/video|Video"].map(s => {
                  const [href, label] = s.split("|");
                  return <Link key={href} href={href} className="text-white/70 hover:text-white transition-colors">{label}</Link>;
                })}
              </div>
            </div>
            <div>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">Studio</p>
              <div className="flex flex-col gap-2.5">
                {["/ueber-mich|Über mich", "/anfrage|Anfragen", "/buchen|Buchen", "/kontakt|Kontakt", "/faq|FAQ"].map(s => {
                  const [href, label] = s.split("|");
                  return <Link key={href} href={href} className="text-white/70 hover:text-white transition-colors">{label}</Link>;
                })}
              </div>
            </div>
            <div>
              <p className="text-white/30 text-[10px] tracking-widest uppercase mb-3">Kontakt</p>
              <div className="flex flex-col gap-2.5">
                <a href="mailto:kontakt@leobruni-photo.com" className="text-white/70 hover:text-white transition-colors break-all">
                  kontakt@leobruni-photo.com
                </a>
                <a href="tel:+4915209850658" className="text-white/70 hover:text-white transition-colors">
                  +49 (0) 152 0985 0658
                </a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-white/70 hover:text-white transition-colors">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 text-[12px] text-white/30">
          <p>© {new Date().getFullYear()} Leo Bruni Photography. Alle Rechte vorbehalten.</p>
          <div className="flex gap-5">
            {["/impressum|Impressum", "/impressum#datenschutz|Datenschutz", "/agb|AGB", "/rechtliches|Rechtliches"].map(s => {
              const [href, label] = s.split("|");
              return <Link key={href} href={href} className="hover:text-white transition-colors">{label}</Link>;
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
