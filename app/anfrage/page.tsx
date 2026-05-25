"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const services = [
  { id: "food", label: "Food Fotografie", desc: "Restaurants, Produkte, Fine Dining" },
  { id: "hochzeit", label: "Hochzeit", desc: "Reportage & Portraits" },
  { id: "architektur", label: "Architektur", desc: "Innen- & Außenaufnahmen" },
  { id: "video", label: "Video & Film", desc: "Imagefilm, Reels, Dokumentation" },
  { id: "sonstiges", label: "Anderes Projekt", desc: "Etwas Besonderes" },
];

const benefits = [
  { icon: "24h", text: "Antwort innerhalb von 24 Stunden" },
  { icon: "0€", text: "Kostenloses Erstgespräch" },
  { icon: "✓", text: "Kein Risiko, keine Verpflichtung" },
  { icon: "★", text: "12+ Jahre Erfahrung in Hamburg" },
];

export default function AnfragePage() {
  const [service, setService] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C9A96E] flex items-center justify-center mx-auto mb-8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Anfrage gesendet</p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#1d1d1f] tracking-[-0.04em] mb-4">
            Ich melde mich!
          </h2>
          <p className="text-[#6e6e73] text-sm leading-relaxed mb-8 font-light">
            Ich antworte innerhalb von 24 Stunden auf <strong className="text-[#1d1d1f] font-normal">{form.email}</strong>.
          </p>
          <Link href="/"
            className="inline-flex items-center justify-center text-[11px] tracking-[0.25em] uppercase bg-[#1d1d1f] text-white px-10 py-3.5 rounded-full hover:bg-black transition-colors">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#1d1d1f] pt-20 pb-0">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?w=1600&q=80"
            alt="" fill unoptimized className="object-cover grayscale"
          />
        </div>
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-10 pt-16 sm:pt-20 pb-16 sm:pb-20">
          <div className="max-w-2xl">
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-5">Jetzt anfragen</p>
            <h1 className="text-[clamp(2.4rem,6vw,5rem)] font-extralight text-white leading-[1.05] tracking-[-0.04em] mb-6">
              Ihr nächstes<br />Projekt verdient<br />
              <em className="not-italic text-[#C9A96E]">das Beste.</em>
            </h1>
            <p className="text-base text-white/50 font-light leading-relaxed max-w-sm">
              Füllen Sie das Formular aus — ich melde mich innerhalb von 24 Stunden mit einem unverbindlichen Angebot.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits strip */}
      <div className="bg-[#FAF7F2] border-y border-[#D4C5A9]">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 py-5 grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-[#D4C5A9]">
          {benefits.map((b) => (
            <div key={b.text} className="text-center px-4 py-1">
              <p className="text-base sm:text-lg font-extralight text-[#C9A96E] tracking-[-0.02em]">{b.icon}</p>
              <p className="text-[10px] sm:text-[11px] text-[#6e6e73] mt-1 leading-tight">{b.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Form section */}
      <section className="py-16 sm:py-24 px-6 sm:px-10">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left — service selector */}
          <div className="lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-extralight text-[#1d1d1f] tracking-[-0.03em] mb-6">
              Was darf ich für Sie fotografieren?
            </h2>
            <div className="space-y-2 mb-8">
              {services.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setService(s.id)}
                  className={`w-full text-left px-5 py-4 border rounded-xl transition-all duration-200 flex items-center justify-between ${
                    service === s.id
                      ? "border-[#C9A96E] bg-[#FAF7F2]"
                      : "border-[#e5e5ea] bg-white hover:border-[#D4C5A9]"
                  }`}
                >
                  <div>
                    <p className="text-sm font-light text-[#1d1d1f]">{s.label}</p>
                    <p className="text-[11px] text-[#6e6e73] mt-0.5">{s.desc}</p>
                  </div>
                  <div className={`w-4 h-4 rounded-full border-2 shrink-0 transition-colors ${
                    service === s.id ? "border-[#C9A96E] bg-[#C9A96E]" : "border-[#D4C5A9]"
                  }`} />
                </button>
              ))}
            </div>

            {/* Trust block */}
            <div className="bg-[#1d1d1f] rounded-2xl p-6">
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4">Warum Leo Bruni?</p>
              <ul className="space-y-3">
                {[
                  "12+ Jahre professionelle Erfahrung",
                  "800+ erfolgreich abgeschlossene Projekte",
                  "Spezialisiert auf Hamburg & Norddeutschland",
                  "Lieferung innerhalb von 2–3 Wochen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/60 font-light">
                    <span className="text-[#C9A96E] mt-0.5 shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — contact form */}
          <div className="lg:col-span-3">
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <h2 className="text-xl sm:text-2xl font-extralight text-[#1d1d1f] tracking-[-0.03em] mb-6">
                Ihre Kontaktdaten
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">Name *</label>
                  <input
                    required type="text"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">E-Mail *</label>
                  <input
                    required type="email"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors"
                    placeholder="ihre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">Telefon</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                  className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors"
                  placeholder="+49 ..."
                />
              </div>

              <div>
                <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">Ihr Projekt *</label>
                <textarea
                  required rows={5}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors resize-none"
                  placeholder="Beschreiben Sie Ihr Projekt, Ihren Wunschtermin und Ihr Budget…"
                />
              </div>

              <div className="bg-[#FAF7F2] border border-[#D4C5A9] rounded-xl px-5 py-4">
                <p className="text-[11px] text-[#6e6e73] font-light leading-relaxed">
                  Ihre Daten werden vertraulich behandelt und nur zur Bearbeitung Ihrer Anfrage verwendet.{" "}
                  <Link href="/impressum#datenschutz" className="text-[#C9A96E] hover:underline">Datenschutz</Link>
                </p>
              </div>

              <button
                type="submit"
                className="w-full bg-[#1d1d1f] text-white text-[11px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-colors font-medium"
              >
                Anfrage kostenfrei senden
              </button>

              <p className="text-center text-[11px] text-[#6e6e73] font-light">
                Oder direkt buchen:{" "}
                <Link href="/buchen" className="text-[#C9A96E] hover:underline">Online-Termin auswählen →</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
