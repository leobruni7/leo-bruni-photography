"use client";
import { useState } from "react";
import Link from "next/link";

const perks = [
  {
    n: "01",
    title: "Behind-the-Scenes",
    desc: "Einblicke in aktuelle Shootings, Locations und Entstehungsprozesse.",
  },
  {
    n: "02",
    title: "Neue Arbeiten zuerst",
    desc: "Frische Bilder und Filmprojekte — bevor sie auf Social Media erscheinen.",
  },
  {
    n: "03",
    title: "Exklusive Angebote",
    desc: "Sonderkonditionen und freie Termine nur für Newsletter-Abonnenten.",
  },
  {
    n: "04",
    title: "Fotografie-Tipps",
    desc: "Praktisches Wissen zu Licht, Komposition und Bildgestaltung.",
  },
];

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState<"" | "b2b" | "b2c">("");
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full bg-[#FAF7F2] border border-[#C9A96E] flex items-center justify-center mx-auto mb-8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Willkommen</p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#1d1d1f] tracking-[-0.04em] mb-4">
            Sie sind dabei!
          </h2>
          <p className="text-sm text-[#6e6e73] font-light leading-relaxed mb-8">
            Ich freue mich, Sie als Abonnenten begrüßen zu dürfen. Die erste Ausgabe kommt bald.
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

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-14 sm:pb-20 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Newsletter</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-[#1d1d1f] tracking-[-0.04em] leading-none mb-6">
          Nah dran.<br />Immer zuerst.
        </h1>
        <p className="text-sm sm:text-base text-[#6e6e73] font-light max-w-sm mx-auto leading-relaxed">
          Kein Spam. Nur das Wesentliche — ca. einmal im Monat.
        </p>
      </section>

      {/* Perks */}
      <section className="bg-[#FAF7F2] border-y border-[#D4C5A9] py-12 sm:py-16 px-5 sm:px-8">
        <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {perks.map((p) => (
            <div key={p.n}>
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">{p.n}</p>
              <h3 className="text-base font-light text-[#1d1d1f] mb-2 tracking-[-0.02em]">{p.title}</h3>
              <p className="text-[12px] text-[#6e6e73] font-light leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section className="py-16 sm:py-24 px-5 sm:px-8">
        <div className="max-w-[520px] mx-auto">
          <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="space-y-5">

            <div>
              <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors bg-white"
                placeholder="Ihr Vorname"
              />
            </div>

            <div>
              <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">E-Mail *</label>
              <input
                required type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors bg-white"
                placeholder="ihre@email.com"
              />
            </div>

            {/* B2B / B2C Auswahl */}
            <div>
              <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-3">
                Ich interessiere mich für
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: "b2b", label: "Business", sub: "Unternehmen & Brands" },
                  { id: "b2c", label: "Privat", sub: "Hochzeit & Events" },
                ].map((opt) => (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => setType(opt.id as "b2b" | "b2c")}
                    className={`px-4 py-4 border rounded-xl text-left transition-all duration-200 ${
                      type === opt.id
                        ? "border-[#C9A96E] bg-[#FAF7F2]"
                        : "border-[#D4C5A9] bg-white hover:border-[#C9A96E]"
                    }`}
                  >
                    <p className="text-sm font-light text-[#1d1d1f]">{opt.label}</p>
                    <p className="text-[11px] text-[#6e6e73] mt-0.5">{opt.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1d1d1f] text-white text-[11px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-colors"
            >
              Jetzt kostenlos abonnieren
            </button>

            <p className="text-center text-[11px] text-[#6e6e73] font-light leading-relaxed">
              Jederzeit abmeldbar. Keine Weitergabe an Dritte.{" "}
              <Link href="/impressum#datenschutz" className="text-[#C9A96E] hover:underline">
                Datenschutz
              </Link>
            </p>
          </form>
        </div>
      </section>
    </div>
  );
}
