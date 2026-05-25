"use client";
import { useState } from "react";
import Image from "next/image";

const categories = [
  {
    id: "food", label: "Food", desc: "Kulinarik & Fine Dining",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
  },
  {
    id: "hochzeit", label: "Hochzeit", desc: "Emotionen & Erinnerungen",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
  },
  {
    id: "architektur", label: "Architektur", desc: "Raum & Struktur",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
  },
  {
    id: "video", label: "Video & Film", desc: "Bewegtbild & Storytelling",
    img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&q=80",
  },
  {
    id: "sonstiges", label: "Individuell", desc: "Ihr besonderes Projekt",
    img: "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80",
  },
];

const MONTHS = ["Januar","Februar","März","April","Mai","Juni","Juli","August","September","Oktober","November","Dezember"];
const DAYS   = ["Mo","Di","Mi","Do","Fr","Sa","So"];
const TIMES  = ["09:00","10:00","11:00","12:00","14:00","15:00","16:00","17:00"];

function getDaysInMonth(y: number, m: number) { return new Date(y, m + 1, 0).getDate(); }
function getFirstDay(y: number, m: number) {
  const d = new Date(y, m, 1).getDay();
  return d === 0 ? 6 : d - 1;
}

function CategoryCard({
  cat, selected, onSelect, wide = false,
}: {
  cat: typeof categories[0];
  selected: boolean;
  onSelect: () => void;
  wide?: boolean;
}) {
  return (
    <button
      onClick={onSelect}
      className={`relative overflow-hidden rounded-2xl text-left group transition-all duration-300 ${
        wide ? "h-20 w-full" : "w-full aspect-[3/2]"
      } ${selected ? "ring-2 ring-[#C9A96E] ring-offset-2 scale-[1.01]" : "hover:scale-[1.02]"}`}
    >
      <Image
        src={cat.img} alt={cat.label} fill unoptimized
        className={`object-cover transition-all duration-700 ${
          selected ? "grayscale-0 scale-[1.06]" : "grayscale group-hover:grayscale-0 group-hover:scale-[1.04]"
        }`}
      />
      <div className={`absolute inset-0 transition-colors duration-300 ${
        selected ? "bg-black/35" : "bg-black/52 group-hover:bg-black/38"
      }`} />
      <div className="absolute inset-0 flex flex-col justify-end p-4">
        <p className="text-[10px] text-white/60 font-light mb-0.5">{cat.desc}</p>
        <p className="text-base font-extralight text-white tracking-[-0.02em]">{cat.label}</p>
      </div>
      {selected && (
        <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-[#C9A96E] flex items-center justify-center shadow">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none">
            <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          </svg>
        </div>
      )}
    </button>
  );
}

function StepDots({ step }: { step: number }) {
  const labels = ["Kategorie", "Termin", "Kontakt"];
  return (
    <div className="flex items-start justify-center gap-0 mb-12 sm:mb-14">
      {labels.map((label, i) => {
        const s = i + 1;
        const done   = step > s;
        const active = step === s;
        return (
          <div key={s} className="flex items-start">
            <div className="flex flex-col items-center gap-2.5">
              <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-medium transition-all duration-500 ${
                done   ? "bg-[#C9A96E] scale-110" :
                active ? "bg-[#1d1d1f]"           :
                         "border border-[#D4C5A9] bg-white"
              } ${done || active ? "text-white" : "text-[#6e6e73]"}`}>
                {done ? (
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none">
                    <path d="M5 13L9 17L19 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                ) : s}
              </div>
              <span className={`text-[9px] tracking-[0.2em] uppercase whitespace-nowrap ${
                active ? "text-[#1d1d1f] font-medium" : "text-[#6e6e73]"
              }`}>
                {label}
              </span>
            </div>
            {s < 3 && (
              <div className={`w-20 sm:w-28 h-px mt-3.5 mx-2.5 transition-all duration-600 ${
                done ? "bg-[#C9A96E]" : "bg-[#e5e5ea]"
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default function BuchenPage() {
  const today = new Date();
  const [step, setStep]               = useState(1);
  const [category, setCategory]       = useState("");
  const [year, setYear]               = useState(today.getFullYear());
  const [month, setMonth]             = useState(today.getMonth());
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [form, setForm]               = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted]     = useState(false);

  const prevMonth = () => month === 0  ? (setMonth(11), setYear(y => y - 1)) : setMonth(m => m - 1);
  const nextMonth = () => month === 11 ? (setMonth(0),  setYear(y => y + 1)) : setMonth(m => m + 1);

  const selectedCat  = categories.find(c => c.id === category);
  const daysInMonth  = getDaysInMonth(year, month);
  const firstDay     = getFirstDay(year, month);

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-5">
        <div className="text-center max-w-md animate-scale-in">
          <div className="w-20 h-20 rounded-full bg-[#FAF7F2] border border-[#C9A96E] flex items-center justify-center mx-auto mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path d="M5 13L9 17L19 7" stroke="#C9A96E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <p className="text-[10px] tracking-[0.6em] uppercase text-[#C9A96E] mb-4">Buchung erhalten</p>
          <h2 className="text-4xl sm:text-5xl font-extralight text-[#1d1d1f] mb-5 tracking-[-0.04em]">Vielen Dank!</h2>
          <p className="text-[#6e6e73] text-sm leading-relaxed mb-8 font-light max-w-xs mx-auto">
            Ich melde mich innerhalb von 24 Stunden bei{" "}
            <strong className="text-[#1d1d1f] font-normal">{form.email}</strong>.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="bg-[#FAF7F2] border-b border-[#e5e5ea] pt-24 sm:pt-32 pb-12 sm:pb-16 px-5 text-center">
        <p className="text-[10px] tracking-[0.6em] uppercase text-[#C9A96E] mb-5 animate-fade-in">
          Online Buchung
        </p>
        <h1 className="text-5xl sm:text-7xl lg:text-8xl font-extralight text-[#1d1d1f] tracking-[-0.04em] leading-none mb-4 animate-fade-up">
          Termin buchen
        </h1>
        <p className="text-sm sm:text-base text-[#6e6e73] font-light animate-fade-up" style={{ animationDelay: "120ms" }}>
          In drei Schritten zu Ihrem Shooting-Termin
        </p>
      </section>

      {/* ── Step content ──────────────────────────────────────────────── */}
      <section className="py-12 sm:py-20 px-5 sm:px-8">
        <div className="max-w-xl mx-auto">

          <StepDots step={step} />

          {/* ── Step 1: Kategorie ──────────────────────────────────── */}
          {step === 1 && (
            <div className="animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-[-0.03em] mb-7 text-center">
                Welche Leistung?
              </h2>

              {/* 2×2 grid */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-2.5">
                {categories.slice(0, 4).map((cat) => (
                  <CategoryCard
                    key={cat.id} cat={cat}
                    selected={category === cat.id}
                    onSelect={() => setCategory(cat.id)}
                  />
                ))}
              </div>
              {/* Full-width last card */}
              <CategoryCard
                cat={categories[4]}
                selected={category === categories[4].id}
                onSelect={() => setCategory(categories[4].id)}
                wide
              />

              <button
                disabled={!category}
                onClick={() => setStep(2)}
                className="mt-8 w-full min-h-[52px] bg-[#1d1d1f] text-white text-[11px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-all duration-200 disabled:opacity-20 disabled:cursor-not-allowed active:scale-[0.98]"
              >
                Weiter →
              </button>
            </div>
          )}

          {/* ── Step 2: Datum & Zeit ───────────────────────────────── */}
          {step === 2 && (
            <div className="animate-fade-up">
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-[-0.03em] mb-7 text-center">
                Wann soll es sein?
              </h2>

              {/* Calendar card */}
              <div className="bg-white border border-[#e5e5ea] rounded-3xl overflow-hidden shadow-sm mb-4">
                {/* Month nav */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#f5f5f7]">
                  <button
                    onClick={prevMonth}
                    className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] text-xl transition-colors active:scale-90"
                  >‹</button>
                  <span className="text-[12px] font-medium tracking-[0.2em] uppercase text-[#1d1d1f]">
                    {MONTHS[month]} {year}
                  </span>
                  <button
                    onClick={nextMonth}
                    className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-[#f5f5f7] text-[#6e6e73] hover:text-[#1d1d1f] text-xl transition-colors active:scale-90"
                  >›</button>
                </div>

                <div className="px-4 pt-3 pb-5">
                  {/* Day headers */}
                  <div className="grid grid-cols-7 mb-2">
                    {DAYS.map(d => (
                      <div key={d} className="text-center text-[10px] tracking-widest uppercase text-[#6e6e73] font-medium py-1">
                        {d}
                      </div>
                    ))}
                  </div>
                  {/* Day cells */}
                  <div className="grid grid-cols-7 gap-0.5">
                    {Array(firstDay).fill(null).map((_, i) => <div key={`e${i}`} />)}
                    {Array(daysInMonth).fill(null).map((_, i) => {
                      const day     = i + 1;
                      const dateStr = `${day}. ${MONTHS[month]} ${year}`;
                      const isPast  = new Date(year, month, day) < new Date(today.getFullYear(), today.getMonth(), today.getDate());
                      const isSel   = selectedDate === dateStr;
                      return (
                        <button
                          key={day}
                          disabled={isPast}
                          onClick={() => { setSelectedDate(dateStr); setSelectedTime(""); }}
                          className={`aspect-square min-h-[36px] flex items-center justify-center text-[13px] rounded-full transition-all duration-150 ${
                            isSel   ? "bg-[#1d1d1f] text-white font-medium scale-110 shadow-md"
                            : isPast ? "text-[#D4C5A9] cursor-not-allowed"
                                     : "text-[#1d1d1f] hover:bg-[#f5f5f7] active:scale-95"
                          }`}
                        >
                          {day}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Time slots — animate in when date is picked */}
              {selectedDate && (
                <div className="mb-6 animate-fade-up">
                  <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4 text-center">
                    {selectedDate}
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {TIMES.map((t) => (
                      <button
                        key={t}
                        onClick={() => setSelectedTime(t)}
                        className={`min-h-[48px] text-sm font-light border rounded-2xl transition-all duration-150 active:scale-95 ${
                          selectedTime === t
                            ? "bg-[#1d1d1f] text-white border-[#1d1d1f] scale-[1.03]"
                            : "border-[#e5e5ea] text-[#1d1d1f] hover:border-[#C9A96E] bg-white"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex gap-3 mt-8">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 min-h-[52px] border border-[#e5e5ea] text-[#1d1d1f] text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:border-[#1d1d1f] transition-colors active:scale-[0.98]"
                >
                  ← Zurück
                </button>
                <button
                  disabled={!selectedDate || !selectedTime}
                  onClick={() => setStep(3)}
                  className="flex-[2] min-h-[52px] bg-[#1d1d1f] text-white text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-all disabled:opacity-20 disabled:cursor-not-allowed active:scale-[0.98]"
                >
                  Weiter →
                </button>
              </div>
            </div>
          )}

          {/* ── Step 3: Kontakt ────────────────────────────────────── */}
          {step === 3 && (
            <form
              onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              className="animate-fade-up"
            >
              <h2 className="text-2xl sm:text-3xl font-extralight text-[#1d1d1f] tracking-[-0.03em] mb-7 text-center">
                Fast geschafft!
              </h2>

              {/* Booking summary */}
              <div className="bg-[#FAF7F2] border border-[#D4C5A9] rounded-2xl p-5 mb-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-[#C9A96E] mb-4">Ihre Auswahl</p>
                <div className="flex items-center gap-4">
                  {selectedCat?.img && (
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden shrink-0">
                      <Image src={selectedCat.img} alt={selectedCat.label} fill unoptimized
                        className="object-cover" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-medium text-[#1d1d1f]">{selectedCat?.label}</p>
                    <p className="text-[12px] text-[#6e6e73] mt-0.5 font-light">
                      {selectedDate} · {selectedTime} Uhr
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Name *",   key: "name",  type: "text",  placeholder: "Ihr vollständiger Name", required: true  },
                  { label: "E-Mail *", key: "email", type: "email", placeholder: "ihre@email.com",          required: true  },
                  { label: "Telefon",  key: "phone", type: "tel",   placeholder: "+49 ...",                 required: false },
                ].map(({ label, key, type, placeholder, required }) => (
                  <div key={key}>
                    <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">
                      {label}
                    </label>
                    <input
                      required={required}
                      type={type}
                      value={form[key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                      className="w-full border border-[#e5e5ea] rounded-2xl px-5 py-4 text-sm text-[#1d1d1f] placeholder-[#c4c4c6] focus:outline-none focus:border-[#1d1d1f] transition-colors bg-white"
                      placeholder={placeholder}
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] tracking-[0.4em] uppercase text-[#6e6e73] block mb-2">
                    Nachricht
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className="w-full border border-[#e5e5ea] rounded-2xl px-5 py-4 text-sm text-[#1d1d1f] placeholder-[#c4c4c6] focus:outline-none focus:border-[#1d1d1f] transition-colors resize-none bg-white"
                    placeholder="Erzählen Sie mir von Ihrem Projekt…"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-8">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="flex-1 min-h-[52px] border border-[#e5e5ea] text-[#1d1d1f] text-[10px] tracking-[0.3em] uppercase py-4 rounded-full hover:border-[#1d1d1f] transition-colors active:scale-[0.98]"
                >
                  ← Zurück
                </button>
                <button
                  type="submit"
                  className="flex-[2] min-h-[52px] bg-[#1d1d1f] text-white text-[11px] tracking-[0.3em] uppercase py-4 rounded-full hover:bg-black transition-all active:scale-[0.98]"
                >
                  Termin bestätigen
                </button>
              </div>

              <p className="text-center text-[11px] text-[#6e6e73] mt-6 font-light">
                Kostenlos · Kein Risiko · Antwort innerhalb 24h
              </p>
            </form>
          )}

        </div>
      </section>
    </div>
  );
}
