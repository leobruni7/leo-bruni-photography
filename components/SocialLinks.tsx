import { SOCIAL, PRIMARY_SOCIAL, ALL_SOCIAL, type SocialPlatform } from "@/lib/social";

// ── Brand SVG Icons ───────────────────────────────────────────────────────
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function IconYouTube({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function IconTikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.08a8.16 8.16 0 004.77 1.52V7.17a4.87 4.87 0 01-1-.48z" />
    </svg>
  );
}

function IconFacebook({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function IconPinterest({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
    </svg>
  );
}

function IconLinkedIn({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconVimeo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M23.977 6.416c-.105 2.338-1.739 5.543-4.894 9.609-3.268 4.247-6.026 6.37-8.29 6.37-1.409 0-2.578-1.294-3.553-3.881L5.322 11.4C4.603 8.816 3.834 7.522 3.01 7.522c-.179 0-.806.378-1.881 1.132L0 7.197a315.065 315.065 0 003.501-3.128C5.08 2.701 6.266 1.984 7.055 1.91c1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.507.539 2.45 1.131 3.674 1.776 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.868 3.434-5.757 6.762-5.637 2.473.06 3.628 1.664 3.48 4.807z" />
    </svg>
  );
}

function IconX({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const ICONS: Record<string, React.FC<{ className?: string }>> = {
  instagram: IconInstagram,
  youtube: IconYouTube,
  tiktok: IconTikTok,
  facebook: IconFacebook,
  pinterest: IconPinterest,
  linkedin: IconLinkedIn,
  vimeo: IconVimeo,
  x: IconX,
};

// ── Variants ─────────────────────────────────────────────────────────────

/** Footer variant — small icon buttons on dark bg */
export function SocialIconsFooter() {
  return (
    <div className="flex flex-wrap gap-3">
      {ALL_SOCIAL.map((s) => {
        const Icon = ICONS[s.id];
        return (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            title={s.label}
            aria-label={s.label}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#C9A96E] flex items-center justify-center transition-colors duration-200 group"
          >
            <Icon className="w-[15px] h-[15px] text-white/70 group-hover:text-white transition-colors" />
          </a>
        );
      })}
    </div>
  );
}

/** Kontakt variant — icon + label + handle cards on light bg */
export function SocialCardsLight({ only }: { only?: "primary" | "all" }) {
  const list = only === "primary" ? PRIMARY_SOCIAL : ALL_SOCIAL;
  return (
    <div className="flex flex-col gap-2">
      {list.map((s) => {
        const Icon = ICONS[s.id];
        return (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 py-2.5 border-b border-[#f0f0f0] last:border-0 hover:border-[#D4C5A9] transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-[#f5f5f7] group-hover:bg-[#FAF7F2] flex items-center justify-center shrink-0 transition-colors">
              <Icon className="w-[14px] h-[14px] text-[#6e6e73] group-hover:text-[#C9A96E] transition-colors" />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-light text-[#1d1d1f] group-hover:text-[#C9A96E] transition-colors leading-tight">{s.label}</p>
              <p className="text-[11px] text-[#6e6e73] truncate">{s.handle}</p>
            </div>
            <span className="ml-auto text-[#D4C5A9] group-hover:text-[#C9A96E] transition-colors text-xs shrink-0">→</span>
          </a>
        );
      })}
    </div>
  );
}

/** Full grid — for a dedicated social section */
export function SocialGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
      {ALL_SOCIAL.map((s) => {
        const Icon = ICONS[s.id];
        return (
          <a
            key={s.id}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`group block p-5 rounded-2xl border transition-all duration-300 hover:shadow-md ${
              s.priority === "primary"
                ? "border-[#D4C5A9] bg-[#FAF7F2] hover:border-[#C9A96E]"
                : "border-[#e5e5ea] bg-white hover:border-[#D4C5A9]"
            }`}
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                s.priority === "primary" ? "bg-[#C9A96E]" : "bg-[#f5f5f7]"
              }`}>
                <Icon className={`w-5 h-5 ${s.priority === "primary" ? "text-white" : "text-[#6e6e73]"}`} />
              </div>
              {s.priority === "primary" && (
                <span className="text-[9px] tracking-[0.3em] uppercase text-[#C9A96E] bg-[#C9A96E]/10 px-2 py-1 rounded-full">
                  Aktiv
                </span>
              )}
            </div>
            <p className="text-sm font-medium text-[#1d1d1f] mb-0.5">{s.label}</p>
            <p className="text-[11px] text-[#6e6e73] mb-3">{s.handle}</p>
            <p className="text-[11px] text-[#6e6e73] leading-relaxed">{s.desc}</p>
          </a>
        );
      })}
    </div>
  );
}
