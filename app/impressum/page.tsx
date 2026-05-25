import Link from "next/link";

export default function ImpressumPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Rechtliches</p>
        <h1 className="text-3xl sm:text-4xl font-light text-black tracking-tight mb-12 sm:mb-16">Impressum</h1>

        <section className="mb-10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3 sm:mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            <strong className="text-black font-medium">Leo Bruni Photography</strong><br />
            Inhaber: Leo Bruni<br />
            Rüsternkamp 17<br />
            22607 Hamburg<br />
            Deutschland
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3 sm:mb-4">Kontakt</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Telefon: +49 40 123 456 789<br />
            E-Mail:{" "}
            <a href="mailto:hello@leobruni-photo.com" className="text-black hover:text-gray-500 transition-colors">
              hello@leobruni-photo.com
            </a>
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3 sm:mb-4">Umsatzsteuer</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG:<br />
            DE000000000
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3 sm:mb-4">Berufsbezeichnung</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Fotograf (Deutschland)<br />
            Mitglied der Handelskammer Hamburg
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3 sm:mb-4">Verantwortlich für den Inhalt (§ 18 Abs. 2 MStV)</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Leo Bruni<br />
            Rüsternkamp 17<br />
            22607 Hamburg
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-3 sm:mb-4">Streitschlichtung</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
            <span className="text-black">https://ec.europa.eu/consumers/odr</span>.<br />
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        {/* Datenschutz */}
        <div className="border-t border-gray-100 pt-12 mt-12" id="datenschutz">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Datenschutz</p>
          <h2 className="text-2xl sm:text-3xl font-light text-black tracking-tight mb-10 sm:mb-12">Datenschutzerklärung</h2>

          <div className="space-y-8">
            {[
              {
                titel: "1. Verantwortlicher",
                text: "Leo Bruni Photography, Leo Bruni, Rüsternkamp 17, 22607 Hamburg, Deutschland. E-Mail: hello@leobruni-photo.com",
              },
              {
                titel: "2. Erhebung und Verarbeitung personenbezogener Daten",
                text: "Diese Website erhebt keine personenbezogenen Daten ohne Ihre ausdrückliche Einwilligung. Beim Ausfüllen des Kontakt- oder Buchungsformulars werden Name, E-Mail-Adresse und optional Telefonnummer ausschließlich zur Beantwortung und Abwicklung Ihrer Anfrage verwendet. Eine Weitergabe an Dritte erfolgt nicht.",
              },
              {
                titel: "3. Ihre Rechte (DSGVO Art. 15–22)",
                text: "Sie haben das Recht auf: Auskunft über gespeicherte Daten · Berichtigung unrichtiger Daten · Löschung · Einschränkung der Verarbeitung · Datenübertragbarkeit · Widerspruch gegen die Verarbeitung. Kontakt: hello@leobruni-photo.com",
              },
              {
                titel: "4. Cookies",
                text: "Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch notwendige Cookies eingesetzt, die keine personenbezogenen Daten speichern.",
              },
              {
                titel: "5. Hosting",
                text: "Diese Website wird über Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA gehostet. Beim Aufruf der Seite werden Server-Logs (IP-Adresse, Zeitstempel) für max. 7 Tage gespeichert. Details: vercel.com/legal/privacy-policy",
              },
              {
                titel: "6. Bilder (Unsplash)",
                text: "Platzhalterbilder stammen von Unsplash (unsplash.com). Diese werden vom Unsplash-Server geladen; dabei kann Unsplash Ihre IP-Adresse verarbeiten. Details: unsplash.com/privacy",
              },
              {
                titel: "7. Beschwerderecht",
                text: "Sie haben das Recht, sich bei der zuständigen Datenschutzbehörde zu beschweren. In Hamburg: Hamburgischer Beauftragter für Datenschutz und Informationsfreiheit (HmbBfDI), Ludwig-Erhard-Str. 22, 20459 Hamburg.",
              },
            ].map((item) => (
              <section key={item.titel}>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-gray-400 mb-2 sm:mb-3">{item.titel}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </section>
            ))}
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 mt-12 flex flex-col sm:flex-row gap-4">
          <Link href="/agb" className="text-xs tracking-widest uppercase text-black border-b border-current pb-0.5 hover:text-gray-500 transition-colors">
            AGBs ansehen →
          </Link>
          <Link href="/rechtliches" className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors">
            Alle rechtl. Dokumente
          </Link>
        </div>
      </div>
    </div>
  );
}
