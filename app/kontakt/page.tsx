"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SocialCardsLight } from "@/components/SocialLinks";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", betreff: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white min-h-screen">

      {/* Hero — weiches, einladendes Bild */}
      <section className="relative h-[60vh] sm:h-[70vh] min-h-[480px] bg-black flex items-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=2000&q=85"
          alt="Kontakt Leo Bruni Photography"
          fill priority unoptimized
          className="object-cover opacity-60 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-5 sm:px-8 pb-14 sm:pb-20 text-center">
          <p className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4">Schreiben Sie mir</p>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-white tracking-[-0.04em] leading-none">
            Kontakt
          </h1>
        </div>
      </section>

      {/* Intro zentriert */}
      <section className="bg-white py-14 sm:py-20 px-5 sm:px-8 text-center border-b border-[#e5e5ea]">
        <p className="text-base sm:text-lg text-[#6e6e73] font-light max-w-md mx-auto leading-relaxed">
          Ich freue mich auf Ihre Nachricht — ob Projektanfrage, Frage oder einfach Hallo.
        </p>
      </section>

      {/* Main grid */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

          {/* Left — Studio info + Social */}
          <div>
            <div className="space-y-8">

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Studio</p>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">
                  Leo Bruni Photography<br />
                  Rüsternkamp 17<br />
                  22607 Hamburg<br />
                  Deutschland
                </p>
              </div>

              <div className="w-full h-px bg-[#e5e5ea]" />

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Direkt</p>
                <div className="space-y-1.5">
                  <a href="mailto:kontakt@leobruni-photo.com"
                    className="flex items-center gap-2 text-sm text-[#1d1d1f] font-light hover:text-[#C9A96E] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 text-[#D4C5A9]">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    kontakt@leobruni-photo.com
                  </a>
                  <a href="tel:+4915209850658"
                    className="flex items-center gap-2 text-sm text-[#1d1d1f] font-light hover:text-[#C9A96E] transition-colors">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 shrink-0 text-[#D4C5A9]">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    +49 (0) 152 0985 0658
                  </a>
                </div>
              </div>

              <div className="w-full h-px bg-[#e5e5ea]" />

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Verfügbarkeit</p>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">
                  Mo – Fr: 09:00 – 18:00 Uhr<br />
                  Wochenende: nach Vereinbarung
                </p>
              </div>

              <div className="w-full h-px bg-[#e5e5ea]" />

              <div>
                <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Social Media</p>
                <SocialCardsLight only="all" />
              </div>

              <div className="w-full h-px bg-[#e5e5ea]" />

              <Link href="/buchen"
                className="inline-block text-[11px] tracking-[0.3em] uppercase bg-[#1d1d1f] text-white px-10 py-4 rounded-full hover:bg-black transition-colors">
                Termin buchen
              </Link>
            </div>
          </div>

          {/* Right — Formular */}
          {sent ? (
            <div className="flex items-start pt-10 justify-center">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full border border-[#C9A96E] flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4">Gesendet</p>
                <h3 className="text-2xl font-extralight text-[#1d1d1f] mb-3 tracking-[-0.03em]">Vielen Dank!</h3>
                <p className="text-sm text-[#6e6e73] font-light leading-relaxed">
                  Ich antworte innerhalb von 24 Stunden.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-[-0.03em] mb-8">
                Nachricht senden
              </h2>

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
                Oder direkt buchen:{" "}
                <Link href="/buchen" className="text-[#C9A96E] hover:underline">/buchen →</Link>
              </p>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
