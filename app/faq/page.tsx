"use client";
import { useState } from "react";
import Link from "next/link";

const faqData = [
  {
    kategorie: "Buchung & Ablauf",
    fragen: [
      {
        frage: "Wie läuft eine Buchung ab?",
        antwort: "Wählen Sie über unser Online-Buchungssystem Ihre Kategorie, ein Datum und eine Uhrzeit. Nach Ihrer Anfrage melde ich mich innerhalb von 24 Stunden zur Bestätigung und für ein erstes Gespräch.",
      },
      {
        frage: "Wie weit im Voraus sollte ich buchen?",
        antwort: "Für Hochzeiten empfehle ich eine Buchung mindestens 6–12 Monate im Voraus. Für Food- und Architekturprojekte sind 4–6 Wochen ideal. Für kurzfristige Anfragen kontaktieren Sie mich direkt.",
      },
      {
        frage: "Gibt es einen Mindestauftrag?",
        antwort: "Ja. Der Mindestauftrag beträgt 2 Stunden Shooting-Zeit. Alle Details werden im Angebot transparent aufgeführt.",
      },
      {
        frage: "Kann ich einen Termin verschieben oder stornieren?",
        antwort: "Terminverschiebungen sind bis 14 Tage vor dem Shooting kostenfrei möglich. Bei Stornierung unter 14 Tagen wird eine Ausfallgebühr von 50 % des vereinbarten Honorars berechnet. Details finden Sie in den AGBs.",
      },
    ],
  },
  {
    kategorie: "Bilder & Lieferung",
    fragen: [
      {
        frage: "Wie lange dauert die Bildbearbeitung?",
        antwort: "Standard: 2–3 Wochen nach dem Shooting. Bei dringenden Projekten ist Express-Lieferung (5–7 Werktage) gegen Aufpreis möglich.",
      },
      {
        frage: "Wie erhalte ich meine fertigen Bilder?",
        antwort: "Sie erhalten einen privaten Download-Link zu einer Online-Galerie mit allen bearbeiteten Bildern in voller Auflösung (JPEG + optional TIFF). Die Galerie ist 60 Tage verfügbar.",
      },
      {
        frage: "Wie viele Bilder erhalte ich?",
        antwort: "Das variiert je nach Projekt. Als Richtwert: Food-Shootings 20–40 Bilder/Stunde, Hochzeiten 400–600 Bilder pro Tag, Architektur 30–60 Bilder pro Objekt.",
      },
      {
        frage: "Erhalte ich auch die unbearbeiteten Rohdaten (RAW-Dateien)?",
        antwort: "RAW-Dateien werden standardmäßig nicht mitgeliefert. Auf Anfrage und gegen einen Aufpreis ist dies möglich.",
      },
    ],
  },
  {
    kategorie: "Rechte & Nutzung",
    fragen: [
      {
        frage: "Darf ich die Bilder auf Social Media verwenden?",
        antwort: "Ja, für den persönlichen und nicht-kommerziellen Gebrauch uneingeschränkt. Für kommerzielle Nutzung (z. B. Werbung, Printmedien) kontaktieren Sie mich bitte vorab.",
      },
      {
        frage: "Darf Leo Bruni die Bilder in seinem Portfolio verwenden?",
        antwort: "Ja, sofern nicht ausdrücklich anders vereinbart. Bei sensiblen Projekten (z. B. private Hochzeiten) kann auf Wunsch eine Vertraulichkeitsvereinbarung getroffen werden.",
      },
    ],
  },
  {
    kategorie: "Preise & Zahlung",
    fragen: [
      {
        frage: "Wie werden die Preise berechnet?",
        antwort: "Die Preise basieren auf Shooting-Dauer, Projektumfang und Nutzungsrechten. Auf Anfrage erhalten Sie ein individuelles Angebot innerhalb von 48 Stunden.",
      },
      {
        frage: "Welche Zahlungsmethoden werden akzeptiert?",
        antwort: "Überweisung, PayPal und Kreditkarte (Visa/Mastercard). Eine Anzahlung von 30 % ist bei der Buchung fällig, der Restbetrag 7 Tage vor dem Shooting.",
      },
      {
        frage: "Gibt es eine Mehrwertsteuer?",
        antwort: "Ja, alle Preise verstehen sich zzgl. der gesetzlichen Mehrwertsteuer (19 % DE). Für Firmenkunden innerhalb der EU ist eine steuerfreie Abrechnung per Reverse-Charge möglich.",
      },
    ],
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => setOpenIndex(openIndex === key ? null : key);

  return (
    <>
      <section className="pt-24 sm:pt-32 pb-10 sm:pb-16 px-5 sm:px-8 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3 sm:mb-4">Häufige Fragen</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-black tracking-tight mb-4">FAQ</h1>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md mx-auto">
            Hier finden Sie Antworten auf die häufigsten Fragen. Für alles andere — schreiben Sie mir.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 lg:py-20 px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto space-y-12 sm:space-y-16">
          {faqData.map((section) => (
            <div key={section.kategorie}>
              <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-5 sm:mb-6">
                {section.kategorie}
              </p>
              <div className="divide-y divide-gray-100">
                {section.fragen.map((item, i) => {
                  const key = `${section.kategorie}-${i}`;
                  const isOpen = openIndex === key;
                  return (
                    <div key={key}>
                      <button
                        onClick={() => toggle(key)}
                        className="w-full flex items-center justify-between py-4 sm:py-5 text-left group"
                      >
                        <span className="text-sm sm:text-base text-black pr-4 group-hover:text-gray-500 transition-colors">
                          {item.frage}
                        </span>
                        <span className={`text-lg text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                          +
                        </span>
                      </button>
                      {isOpen && (
                        <div className="pb-5 sm:pb-6">
                          <p className="text-sm text-gray-500 leading-relaxed">{item.antwort}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-16 sm:py-20 px-5 sm:px-8 border-t border-gray-100">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Noch Fragen?</p>
          <h2 className="text-2xl sm:text-3xl font-light text-black mb-5 sm:mb-6 tracking-tight">
            Ich helfe Ihnen gerne weiter
          </h2>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/kontakt" className="bg-black text-white text-[10px] sm:text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-gray-800 transition-colors">
              Kontakt aufnehmen
            </Link>
            <Link href="/buchen" className="border border-black text-black text-[10px] sm:text-xs tracking-[0.3em] uppercase px-8 py-4 hover:bg-black hover:text-white transition-colors">
              Termin buchen
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
