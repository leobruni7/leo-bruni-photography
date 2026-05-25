"use client";
import { useState } from "react";

export default function KontaktPage() {
  const [form, setForm] = useState({ name: "", email: "", betreff: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <section className="pt-32 pb-0 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Schreiben Sie mir</p>
          <h1 className="text-4xl md:text-6xl font-light text-black tracking-tight">Kontakt</h1>
        </div>
      </section>

      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div className="space-y-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Studio</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Leo Bruni Photography<br />
                Mariahilfer Straße 100<br />
                1060 Wien, Österreich
              </p>
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Direkt</p>
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
              <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Social</p>
              <div className="flex gap-6">
                <a href="#" className="text-xs tracking-widest uppercase text-black hover:text-gray-500 transition-colors border-b border-current pb-0.5">
                  Instagram
                </a>
                <a href="#" className="text-xs tracking-widest uppercase text-black hover:text-gray-500 transition-colors border-b border-current pb-0.5">
                  LinkedIn
                </a>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Verfügbarkeit</p>
              <p className="text-sm text-gray-600 leading-relaxed">
                Mo – Fr: 09:00 – 18:00 Uhr<br />
                Wochenende: nach Vereinbarung
              </p>
            </div>
          </div>

          {/* Formular */}
          {sent ? (
            <div className="flex items-center justify-center">
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
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Name *</label>
                <input
                  required
                  value={form.name}
                  onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">E-Mail *</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="ihre@email.com"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Betreff</label>
                <input
                  value={form.betreff}
                  onChange={e => setForm(f => ({ ...f, betreff: e.target.value }))}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                  placeholder="Ihr Anliegen"
                />
              </div>
              <div>
                <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Nachricht *</label>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                  placeholder="Erzählen Sie mir von Ihrem Projekt..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-black text-white text-xs tracking-[0.3em] uppercase py-4 hover:bg-gray-800 transition-colors mt-2"
              >
                Nachricht senden
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
