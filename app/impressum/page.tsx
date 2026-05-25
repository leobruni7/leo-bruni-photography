import Link from "next/link";

const impressumSections = [
  {
    label: "Angaben gemäß § 5 TMG",
    content: (
      <>
        <strong className="text-[#1d1d1f] font-medium">Leo Bruni Photography</strong><br />
        Inhaber: Leo Bruni<br />
        Rüsternkamp 17<br />
        22607 Hamburg<br />
        Deutschland
      </>
    ),
  },
  {
    label: "Kontakt",
    content: (
      <>
        Mobil:{" "}
        <a href="tel:+4915209850658" className="text-[#C9A96E] hover:underline">+49 (0) 152 0985 0658</a><br />
        E-Mail:{" "}
        <a href="mailto:kontakt@leobruni-photo.com" className="text-[#C9A96E] hover:underline">
          kontakt@leobruni-photo.com
        </a>
      </>
    ),
  },
  {
    label: "Umsatzsteuer",
    content: (
      <>
        Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:<br />
        DE000000000
      </>
    ),
  },
  {
    label: "Berufsbezeichnung",
    content: (
      <>
        Fotograf (Deutschland)<br />
        Mitglied der Handelskammer Hamburg
      </>
    ),
  },
  {
    label: "Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)",
    content: (
      <>
        Leo Bruni<br />
        Rüsternkamp 17<br />
        22607 Hamburg
      </>
    ),
  },
  {
    label: "Streitschlichtung",
    content: (
      <>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
        <span className="text-[#1d1d1f]">https://ec.europa.eu/consumers/odr</span>.<br />
        Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teilzunehmen.
      </>
    ),
  },
];

const datenschutzSections = [
  {
    titel: "1. Verantwortlicher",
    text: "Leo Bruni Photography, Leo Bruni, Rüsternkamp 17, 22607 Hamburg, Deutschland. E-Mail: kontakt@leobruni-photo.com",
  },
  {
    titel: "2. Erhebung und Verarbeitung personenbezogener Daten",
    text: "Diese Website erhebt keine personenbezogenen Daten ohne Ihre ausdrückliche Einwilligung. Beim Ausfüllen des Kontakt- oder Buchungsformulars werden Name, E-Mail-Adresse und optional Telefonnummer ausschließlich zur Beantwortung und Abwicklung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht.",
  },
  {
    titel: "3. Ihre Rechte (DSGVO Art. 15–22)",
    text: "Sie haben das Recht auf: Auskunft über gespeicherte Daten · Berichtigung unrichtiger Daten · Löschung · Einschränkung der Verarbeitung · Datenübertragbarkeit · Widerspruch gegen die Verarbeitung. Kontakt: kontakt@leobruni-photo.com",
  },
  {
    titel: "4. Cookies",
    text: "Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies eingesetzt, die keine personenbezogenen Daten speichern.",
  },
  {
    titel: "5. Hosting",
    text: "Diese Website wird über Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA gehostet. Beim Aufruf der Seite werden Server-Logs (IP-Adresse, Zeitstempel) für max. 7 Tage gespeichert.",
  },
  {
    titel: "6. Bilder (Unsplash)",
    text: "Platzhalterbilder stammen von Unsplash (unsplash.com). Diese werden vom Unsplash-Server geladen; dabei kann Unsplash Ihre IP-Adresse verarbeiten.",
  },
  {
    titel: "7. Beschwerderecht",
    text: "Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren. In Hamburg: Hamburgischer Beauftragter für Datenschutz und Informationsfreiheit (HmbBfDI), Ludwig-Erhard-Str. 22, 20459 Hamburg.",
  },
];

export default function ImpressumPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Rechtliches</p>
        <h1 className="text-5xl sm:text-6xl font-extralight text-[#1d1d1f] tracking-tight leading-none">
          Impressum
        </h1>
      </section>

      {/* Impressum content */}
      <section className="pb-16 px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto">
          <div className="divide-y divide-[#D4C5A9]">
            {impressumSections.map((s) => (
              <div key={s.label} className="py-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">{s.label}</p>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">{s.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto border-t-2 border-[#D4C5A9]" />
      </div>

      {/* Datenschutz */}
      <section id="datenschutz" className="py-16 sm:py-20 px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto">
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Datenschutz</p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#1d1d1f] tracking-tight mb-12">
            Datenschutzerklärung
          </h2>
          <div className="divide-y divide-[#D4C5A9]">
            {datenschutzSections.map((item) => (
              <div key={item.titel} className="py-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">{item.titel}</p>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nav links */}
      <section className="bg-[#FAF7F2] border-t border-[#D4C5A9] py-10 px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto flex flex-wrap gap-6">
          <Link href="/agb" className="text-[11px] tracking-[0.3em] uppercase text-[#1d1d1f] border-b border-[#D4C5A9] pb-0.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
            AGB ansehen →
          </Link>
          <Link href="/rechtliches" className="text-[11px] tracking-[0.3em] uppercase text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
            Alle Dokumente
          </Link>
        </div>
      </section>
    </div>
  );
}
