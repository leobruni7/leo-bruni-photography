"use client";
import { useState } from "react";

const categories = ["Food Fotografie", "Hochzeit Fotografie", "Architektur Fotografie", "Video", "Sonstiges"];

const MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const DAYS = ["Mo","Di","Mi","Do","Fr","Sa","So"];

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
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDayOfMonth(year, month);
  const times = ["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"];

  const prevMonth = () => {
    if (month === 0) { setMonth(11); setYear(y => y - 1); }
    else setMonth(m => m - 1);
  };
  const nextMonth = () => {
    if (month === 11) { setMonth(0); setYear(y => y + 1); }
    else setMonth(m => m + 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-6">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 border border-black rounded-full flex items-center justify-center mx-auto mb-8">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="black" strokeWidth="1.5" />
            </svg>
          </div>
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Anfrage erhalten</p>
          <h2 className="text-3xl font-light text-black mb-4 tracking-tight">Vielen Dank!</h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            Ich melde mich innerhalb von 24 Stunden bei Ihnen unter <strong>{form.email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-12 px-6 lg:px-12 bg-white border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400 mb-4">Online Buchung</p>
          <h1 className="text-4xl md:text-5xl font-light text-black tracking-tight mb-4">Termin buchen</h1>
          <p className="text-gray-500 text-sm">Wählen Sie Kategorie, Datum und Ihre Kontaktdaten.</p>
        </div>

        {/* Steps */}
        <div className="max-w-lg mx-auto flex items-center justify-center gap-4 mt-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-4">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium transition-colors ${
                step >= s ? "bg-black text-white" : "border border-gray-300 text-gray-400"
              }`}>
                {s}
              </div>
              {s < 3 && <div className={`w-16 h-px transition-colors ${step > s ? "bg-black" : "bg-gray-200"}`} />}
            </div>
          ))}
        </div>
        <div className="max-w-lg mx-auto flex justify-between mt-2 px-2">
          <span className="text-xs text-gray-400">Kategorie</span>
          <span className="text-xs text-gray-400">Datum & Zeit</span>
          <span className="text-xs text-gray-400">Kontakt</span>
        </div>
      </section>

      <section className="bg-white py-16 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">

          {/* Step 1 */}
          {step === 1 && (
            <div>
              <h2 className="text-2xl font-light text-black mb-8 tracking-tight">Welche Kategorie?</h2>
              <div className="grid grid-cols-1 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategory(cat)}
                    className={`text-left px-6 py-5 border transition-all text-sm tracking-wide ${
                      category === cat
                        ? "border-black bg-black text-white"
                        : "border-gray-200 text-black hover:border-black"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
              <button
                disabled={!category}
                onClick={() => setStep(2)}
                className="mt-10 w-full bg-black text-white text-xs tracking-[0.3em] uppercase py-4 hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                Weiter
              </button>
            </div>
          )}

          {/* Step 2 */}
          {step === 2 && (
            <div>
              <h2 className="text-2xl font-light text-black mb-8 tracking-tight">Datum & Uhrzeit</h2>

              <div className="border border-gray-200 p-6 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <button onClick={prevMonth} className="text-gray-400 hover:text-black transition-colors text-lg">‹</button>
                  <span className="text-sm font-medium tracking-widest uppercase">{MONTHS[month]} {year}</span>
                  <button onClick={nextMonth} className="text-gray-400 hover:text-black transition-colors text-lg">›</button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS.map(d => (
                    <div key={d} className="text-center text-xs text-gray-400 tracking-widest uppercase py-1">{d}</div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
                  {Array(daysInMonth).fill(null).map((_, i) => {
                    const day = i + 1;
                    const dateStr = `${day}. ${MONTHS[month]} ${year}`;
                    const isPast = new Date(year, month, day) < today;
                    const isSelected = selectedDate === dateStr;
                    return (
                      <button
                        key={day}
                        disabled={isPast}
                        onClick={() => setSelectedDate(dateStr)}
                        className={`aspect-square flex items-center justify-center text-sm rounded-full transition-colors ${
                          isSelected ? "bg-black text-white" :
                          isPast ? "text-gray-300 cursor-not-allowed" :
                          "hover:bg-gray-100 text-black"
                        }`}
                      >
                        {day}
                      </button>
                    );
                  })}
                </div>
              </div>

              {selectedDate && (
                <div>
                  <p className="text-xs tracking-widest uppercase text-gray-400 mb-4">Uhrzeit wählen</p>
                  <div className="grid grid-cols-4 gap-2">
                    {times.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`py-3 text-sm border transition-colors ${
                          selectedTime === t ? "bg-black text-white border-black" : "border-gray-200 hover:border-black"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-4 mt-10">
                <button onClick={() => setStep(1)} className="flex-1 border border-gray-200 text-black text-xs tracking-widest uppercase py-4 hover:border-black transition-colors">
                  Zurück
                </button>
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                  className="flex-1 bg-black text-white text-xs tracking-[0.3em] uppercase py-4 hover:bg-gray-800 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  Weiter
                </button>
              </div>
            </div>
          )}

          {/* Step 3 */}
          {step === 3 && (
            <form onSubmit={handleSubmit}>
              <h2 className="text-2xl font-light text-black mb-2 tracking-tight">Ihre Kontaktdaten</h2>
              <div className="bg-gray-50 border border-gray-100 p-4 mb-8 text-sm text-gray-500">
                <strong className="text-black">{category}</strong> · {selectedDate} · {selectedTime} Uhr
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="Ihr vollständiger Name"
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
                  <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Telefon</label>
                  <input
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors"
                    placeholder="+43 ..."
                  />
                </div>
                <div>
                  <label className="text-xs tracking-widest uppercase text-gray-400 block mb-2">Nachricht</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none"
                    placeholder="Erzählen Sie mir von Ihrem Projekt..."
                  />
                </div>
              </div>

              <div className="flex gap-4 mt-10">
                <button type="button" onClick={() => setStep(2)} className="flex-1 border border-gray-200 text-black text-xs tracking-widest uppercase py-4 hover:border-black transition-colors">
                  Zurück
                </button>
                <button type="submit" className="flex-1 bg-black text-white text-xs tracking-[0.3em] uppercase py-4 hover:bg-gray-800 transition-colors">
                  Anfrage senden
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
