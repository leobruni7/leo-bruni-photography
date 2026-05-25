"use client";
import { useState } from "react";
import Link from "next/link";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", betreff: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-16 sm:pb-20 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Schreiben Sie mir</p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-[#1d1d1f] tracking-tight leading-none">
          Kontakt
        </h1>
      </section>

      {/* Main grid */}
      <section className="pb-24 sm:pb-36 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Studio info */}
          <div className="lg:pt-2">
            <div className="space-y-10">

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Studio</p>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">
                  Leo Bruni Photography<br />
                  Rüsternkamp 17<br />
                  22607 Hamburg<br />
                  Deutschland
                </p>
              </div>

              <div className="w-full h-px bg-[#D4C5A9]" />

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Direkt</p>
                <div className="space-y-2">
                  <a href="mailto:kontakt@leobruni-photo.com"
                    className="block text-sm text-[#1d1d1f] font-light hover:text-[#C9A96E] transition-colors">
                    kontakt@leobruni-photo.com
                  </a>
                  <a href="tel:+4915209850658"
                    className="block text-sm text-[#1d1d1f] font-light hover:text-[#C9A96E] transition-colors">
                    +49 (0) 152 0985 0658
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-[#D4C5A9]" />

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Verfügbarkeit</p>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">
                  Mo – Fr: 09:00 – 18:00 Uhr<br />
                  Wochenende: nach Vereinbarung
                </p>
              </div>

              <div className="w-full h-px bg-[#D4C5A9]" />

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Social</p>
                <div className="flex gap-6">
                  <a href="#" className="text-[11px] tracking-[0.3em] uppercase text-[#1d1d1f] font-light hover:text-[#C9A96E] transition-colors border-b border-[#D4C5A9] pb-0.5">
                    Instagram
                  </a>
                  <a href="#" className="text-[11px] tracking-[0.3em] uppercase text-[#1d1d1f] font-light hover:text-[#C9A96E] transition-colors border-b border-[#D4C5A9] pb-0.5">
                    LinkedIn
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-[#D4C5A9]" />

              <Link href="/buchen"
                className="inline-block text-[11px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-10 py-4 rounded-full hover:bg-black transition-colors">
                Termin buchen
              </Link>
            </div>
          </div>

          {/* Right — Formular */}
          {sent ? (
            <div className="flex items-center justify-center py-20">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-[#C9A96E] flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4">Gesendet</p>
                <h3 className="text-2xl font-extralight text-[#1d1d1f] mb-3 tracking-tight">Vielen Dank!</h3>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">
                  Ich antworte innerhalb von 24 Stunden.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-tight mb-8">Nachricht senden</h2>

              {[
                { label: "Name *", key: "name", type: "text", placeholder: "Ihr vollständiger Name", required: true },
                { label: "E-Mail *", key: "email", type: "email", placeholder: "ihre@email.com", required: true },
                { label: "Betreff", key: "betreff", type: "text", placeholder: "Ihr Anliegen", required: false },
              ].map(({ label, key, type, placeholder, required }) => (
                <div key={key}>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">{label}</label>
                  <input
                    required={required}
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors bg-white"
                    placeholder={placeholder}
                  />
                </div>
              ))}

              <div>
                <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">Nachricht *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors resize-none bg-white"
                  placeholder="Erzählen Sie mir von Ihrem Projekt…"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1d1d1f] text-white text-[11px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-colors mt-2"
              >
                Nachricht senden
              </button>

              <p className="text-[11px] text-[#6e6e73] text-center leading-relaxed pt-1">
                Oder direkt buchen unter{" "}
                <Link href="/buchen" className="text-[#C9A96E] hover:underline">
                  /buchen
                </Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
