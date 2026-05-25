export type LangCode = "de" | "en" | "it" | "es" | "fr";

export const LANGUAGES = [
  { code: "de" as LangCode, label: "Deutsch",   flag: "🇩🇪", short: "DE" },
  { code: "en" as LangCode, label: "English",   flag: "🇬🇧", short: "EN" },
  { code: "it" as LangCode, label: "Italiano",  flag: "🇮🇹", short: "IT" },
  { code: "es" as LangCode, label: "Español",   flag: "🇪🇸", short: "ES" },
  { code: "fr" as LangCode, label: "Français",  flag: "🇫🇷", short: "FR" },
];

export const T = {
  // ── Navigation ────────────────────────────────────────────────────────
  nav_about:         { de: "Über mich",    en: "About",       it: "Chi sono",    es: "Sobre mí",    fr: "À propos"    },
  nav_portfolio:     { de: "Portfolio",    en: "Portfolio",   it: "Portfolio",   es: "Portfolio",   fr: "Portfolio"   },
  nav_food:          { de: "Food",         en: "Food",        it: "Cibo",        es: "Gastronomía", fr: "Cuisine"     },
  nav_wedding:       { de: "Hochzeit",     en: "Wedding",     it: "Matrimonio",  es: "Boda",        fr: "Mariage"     },
  nav_architecture:  { de: "Architektur",  en: "Architecture",it: "Architettura",es: "Arquitectura",fr: "Architecture"},
  nav_video:         { de: "Video",        en: "Video",       it: "Video",       es: "Vídeo",       fr: "Vidéo"       },
  nav_contact:       { de: "Kontakt",      en: "Contact",     it: "Contatto",    es: "Contacto",    fr: "Contact"     },
  nav_inquire:       { de: "Anfragen",     en: "Inquire",     it: "Richiesta",   es: "Consultar",   fr: "Demande"     },
  nav_book:          { de: "Buchen",       en: "Book",        it: "Prenota",     es: "Reservar",    fr: "Réserver"    },

  // ── Common UI ─────────────────────────────────────────────────────────
  book_cta:          { de: "Termin buchen",           en: "Book a session",         it: "Prenota una sessione", es: "Reservar sesión",         fr: "Réserver une séance"    },
  inquire_cta:       { de: "Jetzt anfragen",           en: "Get in touch",           it: "Contattami ora",       es: "Contactar ahora",         fr: "Me contacter"           },
  view_portfolio:    { de: "Portfolio ansehen",        en: "View portfolio",         it: "Vedi portfolio",       es: "Ver portfolio",           fr: "Voir le portfolio"      },
  send_message:      { de: "Nachricht senden",         en: "Send message",           it: "Invia messaggio",      es: "Enviar mensaje",          fr: "Envoyer le message"     },
  first_consult:     { de: "Kostenloses Erstgespräch", en: "Free consultation",      it: "Consulenza gratuita",  es: "Consulta gratuita",       fr: "Consultation gratuite"  },
  reply_24h:         { de: "Antwort innerhalb 24h",    en: "Reply within 24h",       it: "Risposta entro 24h",   es: "Respuesta en 24h",        fr: "Réponse sous 24h"       },
  all_works:         { de: "Alle Arbeiten",            en: "All works",              it: "Tutti i lavori",       es: "Todos los trabajos",      fr: "Tous les travaux"       },
  for_business:      { de: "Für Unternehmen & Brands", en: "For companies & brands", it: "Per aziende e brand",  es: "Para empresas y marcas",  fr: "Pour entreprises"       },
  for_private:       { de: "Für Privatpersonen",       en: "For private clients",    it: "Per privati",          es: "Para particulares",       fr: "Pour particuliers"      },

  // ── Footer ────────────────────────────────────────────────────────────
  footer_rights:     { de: "Alle Rechte vorbehalten.", en: "All rights reserved.",   it: "Tutti i diritti riservati.", es: "Todos los derechos reservados.", fr: "Tous droits réservés." },
  footer_start:      { de: "Starten",                  en: "Start",                  it: "Inizia",                     es: "Empezar",                        fr: "Commencer"             },
  footer_consult:    { de: "Kostenloses Erstgespräch — ich antworte innerhalb von 24 Stunden.",
                       en: "Free consultation — I reply within 24 hours.",
                       it: "Consulenza gratuita — rispondo entro 24 ore.",
                       es: "Consulta gratuita — respondo en 24 horas.",
                       fr: "Consultation gratuite — je réponds sous 24h." },
} as const;

export function t(key: keyof typeof T, lang: LangCode): string {
  return T[key][lang] ?? T[key]["de"];
}
