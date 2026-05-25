export default function AGBPage() {
  return (
    <div className="pt-24 sm:pt-32 pb-20 sm:pb-24 px-5 sm:px-8 lg:px-12 bg-white">
      <div className="max-w-2xl mx-auto">
        <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Rechtliches</p>
        <h1 className="text-3xl sm:text-4xl font-light text-black tracking-tight mb-2">
          Allgemeine Geschäftsbedingungen
        </h1>
        <p className="text-sm text-gray-400 mb-12 sm:mb-16">Stand: Januar 2026</p>

        {[
          {
            nr: "§ 1",
            titel: "Geltungsbereich",
            text: `Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Leo Bruni Photography (nachfolgend „Fotograf") und dem Auftraggeber über fotografische und filmische Leistungen. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Fotograf stimmt ihrer Geltung ausdrücklich schriftlich zu.`,
          },
          {
            nr: "§ 2",
            titel: "Vertragsschluss & Buchung",
            text: `Ein Vertrag kommt durch die schriftliche Buchungsbestätigung des Fotografen zustande. Mit der Buchung und Anzahlung erkennt der Auftraggeber diese AGB an. Die Anzahlung beträgt 30 % des vereinbarten Gesamthonorars und ist innerhalb von 7 Tagen nach Buchungsbestätigung fällig. Der verbleibende Betrag ist spätestens 7 Tage vor dem Shooting fällig.`,
          },
          {
            nr: "§ 3",
            titel: "Leistungen & Lieferung",
            text: `Der Umfang der Leistungen ergibt sich aus dem individuellen Angebot. Die Bildbearbeitung und Lieferung erfolgt innerhalb von 2–3 Wochen nach dem Shooting, sofern nichts anderes vereinbart wurde. Die Bilder werden als hochauflösende JPEG-Dateien über einen privaten Online-Zugang bereitgestellt. RAW-Dateien sind nicht im Standard enthalten.`,
          },
          {
            nr: "§ 4",
            titel: "Stornierung & Terminverschiebung",
            text: `Terminverschiebungen sind bis 14 Tage vor dem Shooting einmalig und kostenfrei möglich, sofern ein Ersatztermin innerhalb von 6 Monaten vereinbart wird. Bei Stornierung durch den Auftraggeber gelten folgende Regelungen:\n\n• Bis 30 Tage vor dem Shooting: Rückerstattung der Anzahlung abzüglich 10 % Bearbeitungsgebühr\n• 14–30 Tage vorher: Verlust der Anzahlung (30 %)\n• Unter 14 Tagen: 50 % des Gesamthonorars als Ausfallgebühr\n\nBei Ausfall durch den Fotografen (Krankheit, höhere Gewalt) wird die Anzahlung vollständig zurückerstattet.`,
          },
          {
            nr: "§ 5",
            titel: "Urheberrecht & Nutzungsrechte",
            text: `Alle Fotografien und Filmaufnahmen unterliegen dem Urheberrecht des Fotografen. Mit vollständiger Zahlung erhält der Auftraggeber ein einfaches, nicht übertragbares Nutzungsrecht für den vereinbarten Zweck. Die kommerzielle Nutzung über den vereinbarten Rahmen hinaus bedarf einer gesonderten schriftlichen Vereinbarung und ggf. einer Lizenzgebühr. Der Fotograf behält sich das Recht vor, die Aufnahmen für Portfolio, Werbung und Social Media zu verwenden, sofern nicht ausdrücklich anders vereinbart.`,
          },
          {
            nr: "§ 6",
            titel: "Haftung",
            text: `Der Fotograf haftet nicht für technisches Versagen von Geräten (Kameradefekt, Datenverlust durch Speicherkartenfehler etc.), sofern keine grobe Fahrlässigkeit vorliegt. Im Schadensfall ist die Haftung auf die Höhe des vereinbarten Honorars begrenzt. Für Schäden durch höhere Gewalt (Unwetter, Brand, Pandemie) wird keine Haftung übernommen.`,
          },
          {
            nr: "§ 7",
            titel: "Mitwirkungspflichten des Auftraggebers",
            text: `Der Auftraggeber stellt sicher, dass alle notwendigen Genehmigungen für den Drehort vorliegen und dass das Shooting unter geeigneten Bedingungen stattfinden kann. Bei Verspätungen, die durch den Auftraggeber verursacht werden, kann die entgangene Zeit nicht nachgeholt werden und wird vollständig berechnet.`,
          },
          {
            nr: "§ 8",
            titel: "Datenschutz",
            text: `Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung unter leo-bruni-photography.vercel.app/impressum sowie der DSGVO.`,
          },
          {
            nr: "§ 9",
            titel: "Schlussbestimmungen",
            text: `Es gilt deutsches Recht. Gerichtsstand ist Hamburg. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleiben die übrigen Bestimmungen davon unberührt.`,
          },
        ].map((para) => (
          <section key={para.nr} className="mb-8 sm:mb-10">
            <h2 className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-gray-400 mb-1">{para.nr}</h2>
            <h3 className="text-base sm:text-lg font-medium text-black mb-3">{para.titel}</h3>
            <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{para.text}</p>
          </section>
        ))}

        <div className="border-t border-gray-100 pt-8 mt-12">
          <p className="text-xs text-gray-400 leading-relaxed">
            Leo Bruni Photography · Rüsternkamp 17 · 22607 Hamburg · Deutschland<br />
            E-Mail: hello@leobruni-photo.com · Tel: +49 40 123 456 789
          </p>
        </div>
      </div>
    </div>
  );
}
