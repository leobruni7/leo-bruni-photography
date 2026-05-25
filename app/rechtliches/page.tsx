import Link from "next/link";

const sections = [
  {
    href: "/impressum",
    n: "01",
    label: "Impressum",
    desc: "Angaben zum Anbieter gemäß § 5 TMG, Kontaktdaten und Verantwortliche.",
  },
  {
    href: "/impressum#datenschutz",
    n: "02",
    label: "Datenschutz",
    desc: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO.",
  },
  {
    href: "/agb",
    n: "03",
    label: "AGB",
    desc: "Allgemeine Geschäftsbedingungen für fotografische und filmische Leistungen.",
  },
  {
    href: "/faq",
    n: "04",
    label: "FAQ",
    desc: "Häufig gestellte Fragen zu Buchung, Lieferung, Preisen und Nutzungsrechten.",
  },
];

export default function RechtlichesPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-24 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Transparenz</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-[#1d1d1f] tracking-tight leading-none">
          Rechtliches
        </h1>
        <p className="mt-6 text-sm text-[#6e6e73] font-light max-w-xs mx-auto">
          Alle rechtlichen Dokumente an einem Ort.
        </p>
      </section>

      {/* Cards */}
      <section className="pb-20 sm:pb-32 px-5 sm:px-8">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-3">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block border border-[#D4C5A9] rounded-2xl p-8 sm:p-10 hover:border-[#C9A96E] hover:bg-[#FAF7F2] transition-all duration-300"
            >
              <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-5">{s.n}</p>
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-tight mb-3">{s.label}</h2>
              <p className="text-sm text-[#6e6e73] font-light leading-relaxed mb-6">{s.desc}</p>
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#D4C5A9] group-hover:text-[#C9A96E] transition-colors">
                Ansehen →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#FAF7F2] border-t border-[#D4C5A9] py-20 sm:py-28 px-5 sm:px-8">
        <div className="max-w-[560px] mx-auto text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-5">Fragen?</p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#1d1d1f] tracking-tight mb-5">
            Ich helfe gerne weiter.
          </h2>
          <p className="text-sm text-[#6e6e73] font-light leading-relaxed mb-10 max-w-sm mx-auto">
            Für Fragen zu Verträgen, Nutzungsrechten oder Datenschutz stehe ich Ihnen jederzeit zur Verfügung.
          </p>
          <Link
            href="/kontakt"
            className="inline-block text-[11px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-12 py-4 rounded-full hover:bg-black transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </div>
  );
}
