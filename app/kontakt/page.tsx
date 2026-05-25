"use client";
import { useState } from "react";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", betreff: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div className="bg-white min-h-screen">
      <section className="pt-24 sm:pt-28 pb-6 px-5 sm:px-8 lg:px-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] sm:text-xs tracking-[0.4em] uppercase text-gray-400 mb-3">Schreiben Sie mir</p>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-light text-black tracking-tight">Kontakt</h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-5 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Info */}
          <div className="space-y-10">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Studio</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Leo Bruni Photography<br />
                Rüsternkamp 17<br />
                22607 Hamburg<br />
                Deutschland
              </p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Direkt</p>
              <div className="space-y-2">
                <a href="mailto:kontakt@leobruni-photo.com" className="block text-sm text-black hover:text-gray-500 transition-colors">
                  kontakt@leobruni-photo.com
                </a>
                <a href="tel:+4915209850658" className="block text-sm text-black hover:text-gray-500 transition-colors">
                  +49 (0) 152 0985 0658
                </a>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Social</p>
              <div className="flex gap-6">
                <a href="#" className="text-xs tracking-widest uppercase text-black hover:text-gray-400 transition-colors border-b border-black pb-0.5">Instagram</a>
                <a href="#" className="text-xs tracking-widest uppercase text-black hover:text-gray-400 transition-colors border-b border-black pb-0.5">LinkedIn</a>
              </div>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-gray-400 mb-3">Verfügbarkeit</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Mo – Fr: 09:00 – 18:00 Uhr<br />
                Wochenende: nach Vereinbarung
              </p>
            </div>
          </div>

          {/* Formular */}
          {sent ? (
            <div className="flex items-center justify-center py-16">
              <div className="text-center">
                <div className="w-12 h-12 border border-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="black" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-xl font-light text-black mb-2">Nachricht gesendet</h3>
                <p className="text-sm text-gray-500">Ich antworte innerhalb von 24 Stunden.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="space-y-5">
              {[
                { label: "Name *", key: "name", type: "text", placeholder: "Ihr vollständiger Name", required: true },
                { label: "E-Mail *", key: "email", type: "email", placeholder: "ihre@email.com", required: true },
                { label: "Betreff", key: "betreff", type: "text", placeholder: "Ihr Anliegen", required: false },
              ].map(({ label, key, type, placeholder, required }) => (
                <div key={key}>
                  <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">{label}</label>
                  <input
                    required={required}
                    type={type}
                    value={form[key as keyof typeof form]}
                    onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors bg-white"
                    placeholder={placeholder}
                  />
                </div>
              ))}
              <div>
                <label className="text-[10px] tracking-widest uppercase text-gray-500 block mb-2">Nachricht *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full border border-gray-200 px-4 py-3 text-sm text-black placeholder-gray-300 focus:outline-none focus:border-black transition-colors resize-none bg-white"
                  placeholder="Erzählen Sie mir von Ihrem Projekt..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white text-xs tracking-[0.3em] uppercase py-4 hover:bg-gray-800 transition-colors"
              >
                Nachricht senden
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
