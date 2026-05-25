"use client";
import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { type LangCode } from "@/lib/i18n";

type LanguageContextType = {
  lang: LangCode;
  setLang: (l: LangCode) => void;
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "de",
  setLang: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<LangCode>("de");

  useEffect(() => {
    const saved = localStorage.getItem("lb_lang") as LangCode | null;
    if (saved && ["de", "en", "it", "es", "fr"].includes(saved)) {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: LangCode) => {
    setLangState(l);
    localStorage.setItem("lb_lang", l);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
