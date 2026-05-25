import Link from "next/link";

const sections = [
  {
    href: "/impressum",
    label: "Impressum",
    desc: "Angaben zum Anbieter gemäß § 5 TMG, Kontaktdaten und Verantwortliche.",
    icon: "01",
  },
  {
    href: "/impressum#datenschutz",
    label: "Datenschutzerklärung",
    desc: "Informationen zur Verarbeitung Ihrer personenbezogenen Daten gemäß DSGVO.",
    icon: "02",
  },
  {
    href: "/agb",
    label: "AGB",
    desc: "Allgemeine Geschäftsbedingungen für alle fotografischen und filmischen Leistungen.",
    icon: "03",
  },
  {
    href: "/faq",
    label: "FAQ",
    desc: "Häufig gestellte Fragen zu Buchung, Lieferung, Preisen und Nutzungsrechten.",
    icon: "04",
  },
];

export default function RechtlichesPage() {
  return (
    <>
      <section className="pt-24 sm:pt-28 pb-10 sm:pb-14 px-5 sm:px-8 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Transparenz</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight mb-4">Rechtliches</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Alle rechtlichen Dokumente, Richtlinien und häufige Fragen an einem Ort.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-1">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block border border-gray-100 p-7 sm:p-8 hover:border-black transition-all duration-300 bg-white"
            >
              <p className="text-[10px] tracking-widest uppercase text-gray-300 mb-4 group-hover:text-gray-400 transition-colors">
                {s.icon}
              </p>
              <h2 className="text-lg sm:text-xl font-light text-black mb-3 tracking-tight">{s.label}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">{s.desc}</p>
              <span className="text-[10px] tracking-widest uppercase text-gray-300 group-hover:text-black transition-colors">
                Ansehen →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-14 sm:py-16 px-5 sm:px-8 border-t border-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Fragen?</p>
          <p className="text-sm text-gray-500 leading-relaxed mb-5">
            Für rechtliche Fragen zu Verträgen, Nutzungsrechten oder Datenschutz stehe ich Ihnen gerne zur Verfügung.
          </p>
          <Link
            href="/kontakt"
            className="inline-block bg-black text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase px-10 py-4 hover:bg-gray-800 transition-colors"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
