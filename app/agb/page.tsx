import Link from "next/link";

const paragraphs = [
  {
    nr: "§ 1",
    titel: "Geltungsbereich",
    text: "Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen Leo Bruni Photography (nachfolgend „Fotograf") und dem Auftraggeber über fotografische und filmische Leistungen. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, der Fotograf stimmt ihrer Geltung ausdrücklich schriftlich zu.",
  },
  {
    nr: "§ 2",
    titel: "Vertragsschluss & Buchung",
    text: "Ein Vertrag kommt durch die schriftliche Buchungsbestätigung des Fotografen zustande. Mit der Buchung und Anzahlung erkennt der Auftraggeber diese AGB an. Die Anzahlung beträgt 30 % des vereinbarten Gesamthonorars und ist innerhalb von 7 Tagen nach Buchungsbestätigung fällig. Der verbleibende Betrag ist spätestens 7 Tage vor dem Shooting fällig.",
  },
  {
    nr: "§ 3",
    titel: "Leistungen & Lieferung",
    text: "Der Umfang der Leistungen ergibt sich aus dem individuellen Angebot. Die Bildbearbeitung und Lieferung erfolgt innerhalb von 2–3 Wochen nach dem Shooting, sofern nichts anderes vereinbart wurde. Die Bilder werden als hochauflösende JPEG-Dateien über einen privaten Online-Zugang bereitgestellt. RAW-Dateien sind nicht im Standard enthalten.",
  },
  {
    nr: "§ 4",
    titel: "Stornierung & Terminverschiebung",
    text: "Terminverschiebungen sind bis 14 Tage vor dem Shooting einmalig und kostenfrei möglich, sofern ein Ersatztermin innerhalb von 6 Monaten vereinbart wird. Bei Stornierung durch den Auftraggeber gelten folgende Regelungen:\n\n• Bis 30 Tage vor dem Shooting: Rückerstattung der Anzahlung abzüglich 10 % Bearbeitungsgebühr\n• 14–30 Tage vorher: Verlust der Anzahlung (30 %)\n• Unter 14 Tagen: 50 % des Gesamthonorars als Ausfallgebühr\n\nBei Ausfall durch den Fotografen (Krankheit, höhere Gewalt) wird die Anzahlung vollständig zurückerstattet.",
  },
  {
    nr: "§ 5",
    titel: "Urheberrecht & Nutzungsrechte",
    text: "Alle Fotografien und Filmaufnahmen unterliegen dem Urheberrecht des Fotografen. Mit vollständiger Zahlung erhält der Auftraggeber ein einfaches, nicht übertragbares Nutzungsrecht für den vereinbarten Zweck. Die kommerzielle Nutzung über den vereinbarten Rahmen hinaus bedarf einer gesonderten schriftlichen Vereinbarung und ggf. einer Lizenzgebühr. Der Fotograf behält sich das Recht vor, die Aufnahmen für Portfolio, Werbung und Social Media zu verwenden, sofern nicht ausdrücklich anders vereinbart.",
  },
  {
    nr: "§ 6",
    titel: "Haftung",
    text: "Der Fotograf haftet nicht für technisches Versagen von Geräten (Kameradefekt, Datenverlust durch Speicherkartenfehler etc.), sofern keine grobe Fahrlässigkeit vorliegt. Im Schadensfall ist die Haftung auf die Höhe des vereinbarten Honorars begrenzt. Für Schäden durch höhere Gewalt (Unwetter, Brand, Pandemie) wird keine Haftung übernommen.",
  },
  {
    nr: "§ 7",
    titel: "Mitwirkungspflichten des Auftraggebers",
    text: "Der Auftraggeber stellt sicher, dass alle notwendigen Genehmigungen für den Drehort vorliegen und dass das Shooting unter geeigneten Bedingungen stattfinden kann. Bei Verspätungen, die durch den Auftraggeber verursacht werden, kann die entgangene Zeit nicht nachgeholt werden und wird vollständig berechnet.",
  },
  {
    nr: "§ 8",
    titel: "Datenschutz",
    text: "Die Verarbeitung personenbezogener Daten erfolgt gemäß der Datenschutzerklärung auf dieser Website sowie der DSGVO.",
  },
  {
    nr: "§ 9",
    titel: "Schlussbestimmungen",
    text: "Es gilt deutsches Recht. Gerichtsstand ist Hamburg. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleiben die übrigen Bestimmungen davon unberührt.",
  },
];

export default function AGBPage() {
  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Rechtliches</p>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extralight text-[#1d1d1f] tracking-tight leading-tight">
          Allgemeine<br className="sm:hidden" /> Geschäftsbedingungen
        </h1>
        <p className="mt-4 text-[11px] tracking-[0.3em] uppercase text-[#6e6e73]">Stand: Januar 2026</p>
      </section>

      {/* Paragraphen */}
      <section className="pb-20 sm:pb-28 px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto">
          <div className="divide-y divide-[#D4C5A9]">
            {paragraphs.map((para) => (
              <div key={para.nr} className="py-8 sm:py-10">
                <div className="flex items-baseline gap-4 mb-3">
                  <span className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] shrink-0">{para.nr}</span>
                  <h2 className="text-base sm:text-lg font-light text-[#1d1d1f] tracking-tight">{para.titel}</h2>
                </div>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed whitespace-pre-line pl-0">
                  {para.text}
                </p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="border-t border-[#D4C5A9] pt-8 mt-4">
            <p className="text-[11px] text-[#6e6e73] font-light leading-relaxed">
              Leo Bruni Photography · Rüsternkamp 17 · 22607 Hamburg · Deutschland<br />
              <a href="mailto:kontakt@leobruni-photo.com" className="text-[#C9A96E] hover:underline">
                kontakt@leobruni-photo.com
              </a>{" "}
              · +49 (0) 152 0985 0658
            </p>
          </div>
        </div>
      </section>

      {/* Nav */}
      <section className="bg-[#FAF7F2] border-t border-[#D4C5A9] py-10 px-5 sm:px-8">
        <div className="max-w-[680px] mx-auto flex flex-wrap gap-6">
          <Link href="/impressum" className="text-[11px] tracking-[0.3em] uppercase text-[#1d1d1f] border-b border-[#D4C5A9] pb-0.5 hover:border-[#C9A96E] hover:text-[#C9A96E] transition-colors">
            Impressum & Datenschutz →
          </Link>
          <Link href="/rechtliches" className="text-[11px] tracking-[0.3em] uppercase text-[#6e6e73] hover:text-[#1d1d1f] transition-colors">
            Alle Dokumente
          </Link>
        </div>
      </section>
    </div>
  );
}
