"use client";
import { useState } from "react";

const categories = [
  { id: "food", label: "Food Fotografie", desc: "Kulinarik & Fine Dining" },
  { id: "hochzeit", label: "Hochzeit", desc: "Emotionen & Erinnerungen" },
  { id: "architektur", label: "Architektur", desc: "Raum & Struktur" },
  { id: "video", label: "Video & Film", desc: "Bewegtbild & Storytelling" },
  { id: "sonstiges", label: "Sonstiges", desc: "Individuelles Projekt" },
];

const MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const DAYS = ["Mo","Di","Mi","Do","Fr","Sa","So"];
const TIMES = ["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfMonth(year: number, month: number) {
  const d = new Date(year, month, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

export default function BuchenPage() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [category, setCategory] = useState("");
  const [year, setYear] = useState(today.getFullYear());
  const [month, setMonth] = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const selectedCat = categories.find(c => c.id === category);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 rounded-full border border-[#C9A96E] flex items-center justify-center mx-auto mb-8">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Anfrage gesendet</p>
          <h2 className="text-3xl sm:text-4xl font-extralight text-[#1d1d1f] mb-4 tracking-tight">Vielen Dank!</h2>
          <p className="text-[#6e6e73] text-sm leading-relaxed">
            Ich melde mich innerhalb von 24 Stunden bei Ihnen unter <strong className="text-[#1d1d1f]">{form.email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  const stepLabels = ["Kategorie", "Datum & Zeit", "Kontakt"];

  return (
    <div className="bg-white min-h-screen">

      {/* Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16 px-5 sm:px-8 text-center">
        <p className="text-[10px] tracking-[0.5em] uppercase text-[#C9A96E] mb-4">Online Buchung</p>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extralight text-[#1d1d1f] tracking-tight leading-none mb-4">
          Termin buchen
        </h1>
        <p className="text-[#6e6e73] text-sm font-light max-w-xs mx-auto">
          In drei Schritten zu Ihrem Shooting-Termin
        </p>

        {/* Step indicator */}
        <div className="mt-10 sm:mt-12 max-w-sm mx-auto">
          <div className="flex items-center justify-center gap-0">
            {stepLabels.map((label, i) => {
              const s = i + 1;
              const active = step === s;
              const done = step > s;
              return (
                <div key={s} className="flex items-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium transition-all duration-300 ${
                      done ? "bg-[#C9A96E] text-white" :
                      active ? "bg-[#1d1d1f] text-white" :
                      "border border-[#D4C5A9] text-[#6e6e73]"
                    }`}>
                      {done ? (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      ) : s}
                    </div>
                    <span className={`text-[9px] tracking-[0.2em] uppercase whitespace-nowrap ${active ? "text-[#1d1d1f]" : "text-[#6e6e73]"}`}>
                      {label}
                    </span>
                  </div>
                  {s < 3 && (
                    <div className={`w-16 sm:w-20 h-px mb-5 mx-2 transition-colors duration-300 ${done ? "bg-[#C9A96E]" : "bg-[#D4C5A9]"}`} />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-24 sm:pb-36 px-5 sm:px-8">
        <div className="max-w-xl mx-auto">

          {/* Step 1 — Kategorie */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-tight mb-8">Welche Leistung?</h2>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setCategory(cat.id)}
                    className={`w-full text-left px-6 py-5 border transition-all duration-200 rounded-2xl flex items-center justify-between group ${
                      category === cat.id
                        ? "border-[#C9A96E] bg-[#FAF7F2]"
                        : "border-[#e5e5ea] hover:border-[#D4C5A9] bg-white"
                    }`}
                  >
                    <div>
                      <p className={`text-sm font-light tracking-wide ${category === cat.id ? "text-[#1d1d1f]" : "text-[#1d1d1f]"}`}>
                        {cat.label}
                      </p>
                      <p className="text-[11px] text-[#6e6e73] mt-0.5">{cat.desc}</p>
                    </div>
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${
                      category === cat.id ? "border-[#C9A96E] bg-[#C9A96E]" : "border-[#D4C5A9]"
                    }`}>
                      {category === cat.id && (
                        <div className="w-2 h-2 rounded-full bg-white" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <button
                disabled={!category}
                onClick={() => setStep(2)}
                className="mt-8 w-full bg-[#1d1d1f] text-white text-[11px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </div>
          )}

          {/* Step 2 — Datum & Zeit */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-tight mb-8">Wann soll es sein?</h2>

              {/* Kalender */}
              <div className="border border-[#D4C5A9] rounded-2xl p-5 sm:p-6 mb-5 bg-[#FAF7F2]">
                <div className="flex items-center justify-between mb-6">
                  <button onClick={prevMonth} className="w-8 h-8 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-colors rounded-full hover:bg-white">‹</button>
                  <span className="text-xs tracking-[0.3em] uppercase font-medium text-[#1d1d1f]">{MONTHS[month]} {year}</span>
                  <button onClick={nextMonth} className="w-8 h-8 flex items-center justify-center text-[#6e6e73] hover:text-[#1d1d1f] transition-colors rounded-full hover:bg-white">›</button>
                </div>
                <div className="grid grid-cols-7 mb-2">
                  {DAYS.map(d => (
                    <div key={d} className="text-center text-[9px] tracking-widest uppercase text-[#6e6e73] py-1">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-0.5">
                  {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
                  {Array(daysInMonth).fill(null).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `${day}. ${MONTHS[month]} ${year}`;
                    const isPast = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={day}
                        disabled={isPast}
                        onClick={() => { setSelectedDate(dateStr); setSelectedTime(""); }}
                        className={`aspect-square flex items-center justify-center text-xs rounded-full transition-all duration-150 ${
                          isSelected ? "bg-[#C9A96E] text-white font-medium" :
                          isPast ? "text-[#D4C5A9] cursor-not-allowed" :
                          "text-[#1d1d1f] hover:bg-white hover:shadow-sm"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Zeiten */}
              {selectedDate && (
                <div className="mb-6">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-3">Uhrzeit für {selectedDate}</p>
                  <div className="grid grid-cols-4 gap-2">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-3 text-xs font-light border rounded-xl transition-all duration-150 ${
                          selectedTime === t
                            ? "bg-[#C9A96E] text-white border-[#C9A96E]"
                            : "border-[#D4C5A9] text-[#1d1d1f] hover:border-[#C9A96E] bg-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-8">
                <button onClick={() => setStep(1)} className="flex-1 border border-[#D4C5A9] text-[#1d1d1f] text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:border-[#C9A96E] transition-colors">
                  Zurück
                </button>
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                  className="flex-1 bg-[#1d1d1f] text-white text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Kontakt */}
          {step === 3 && (
            <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}>
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-tight mb-6">Ihre Kontaktdaten</h2>

              {/* Zusammenfassung */}
              <div className="bg-[#FAF7F2] border border-[#D4C5A9] rounded-2xl px-5 py-4 mb-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-2">Ihre Auswahl</p>
                <p className="text-sm text-[#1d1d1f] font-light">
                  {selectedCat?.label} · {selectedDate} · {selectedTime} Uhr
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Name *", key: "name", type: "text", placeholder: "Ihr vollständiger Name", required: true },
                  { label: "E-Mail *", key: "email", type: "email", placeholder: "ihre@email.com", required: true },
                  { label: "Telefon", key: "phone", type: "tel", placeholder: "+49 ...", required: false },
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
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-[#D4C5A9] rounded-xl px-4 py-3.5 text-sm text-[#1d1d1f] placeholder-[#D4C5A9] focus:outline-none focus:border-[#C9A96E] transition-colors resize-none bg-white"
                    placeholder="Erzählen Sie mir von Ihrem Projekt…"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button type="button" onClick={() => setStep(2)} className="flex-1 border border-[#D4C5A9] text-[#1d1d1f] text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:border-[#C9A96E] transition-colors">
                  Zurück
                </button>
                <button type="submit" className="flex-1 bg-[#1d1d1f] text-white text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-colors">
                  Anfrage senden
                </button>
              </div>

              <p className="text-center text-[11px] text-[#6e6e73] mt-5 leading-relaxed">
                Ich antworte innerhalb von 24 Stunden.
              </p>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}
