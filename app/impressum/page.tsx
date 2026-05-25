export default function ImpressumPage() {
  return (
    <div className="pt-32 pb-24 px-6 lg:px-12 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Rechtliches</p>
        <h1 className="text-4xl font-light text-black tracking-tight mb-16">Impressum</h1>

        <section className="mb-12">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Angaben gemäß § 5 TMG</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Leo Bruni Photography<br />
            Leo Bruni<br />
            Mariahilfer Straße 100<br />
            1060 Wien<br />
            Österreich
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Kontakt</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Telefon: +43 123 456 789<br />
            E-Mail: hello@leobruni.photo
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Umsatzsteuer-ID</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            USt-IdNr.: ATU00000000
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-4">Berufsbezeichnung</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Fotograf (Österreich)<br />
            Mitglied der Wirtschaftskammer Österreich
          </p>
        </section>

        <div className="border-t border-gray-100 pt-12 mt-12" id="datenschutz">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Rechtliches</p>
          <h2 className="text-3xl font-light text-black tracking-tight mb-10">Datenschutzerklärung</h2>

          <div className="space-y-8">
            <section>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">Verantwortlicher</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leo Bruni Photography, Leo Bruni, Mariahilfer Straße 100, 1060 Wien
              </p>
            </section>

            <section>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">Erhebung und Verarbeitung</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diese Website erhebt keine personenbezogenen Daten ohne Ihre ausdrückliche Einwilligung.
                Beim Ausfüllen des Kontaktformulars werden Name und E-Mail-Adresse ausschließlich zur Beantwortung
                Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.
              </p>
            </section>

            <section>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">Ihre Rechte (DSGVO)</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
                Ihrer personenbezogenen Daten. Kontakt: hello@leobruni.photo
              </p>
            </section>

            <section>
              <h3 className="text-xs tracking-[0.3em] uppercase text-gray-400 mb-3">Hosting</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Diese Website wird über Vercel Inc., 340 Pine Street, San Francisco, CA 94104, USA gehostet.
                Details: vercel.com/legal/privacy-policy
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
