export type SocialPlatform = {
  id: string;
  label: string;
  handle: string;
  href: string;
  desc: string;
  priority: "primary" | "secondary";
};

// ── Tragen Sie hier Ihre echten URLs ein ──────────────────────────────────
export const SOCIAL: SocialPlatform[] = [
  {
    id: "instagram",
    label: "Instagram",
    handle: "@leobruni.photo",
    href: "https://www.instagram.com/leobruni.photo",
    desc: "Tägliche Einblicke & Behind-the-Scenes",
    priority: "primary",
  },
  {
    id: "youtube",
    label: "YouTube",
    handle: "Leo Bruni Photography",
    href: "https://www.youtube.com/@leobruniphoto",
    desc: "Full-Length Films & Tutorials",
    priority: "primary",
  },
  {
    id: "tiktok",
    label: "TikTok",
    handle: "@leobruni.photo",
    href: "https://www.tiktok.com/@leobruni.photo",
    desc: "Kurzvideos & Reels",
    priority: "primary",
  },
  {
    id: "facebook",
    label: "Facebook",
    handle: "Leo Bruni Photography",
    href: "https://www.facebook.com/leobruniphotography",
    desc: "Events & Neuigkeiten",
    priority: "secondary",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    handle: "leobruni.photo",
    href: "https://www.pinterest.com/leobruniphoto",
    desc: "Moodboards für Food & Hochzeit",
    priority: "secondary",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "Leo Bruni",
    href: "https://www.linkedin.com/in/leobruni",
    desc: "Business & Architektur-Projekte",
    priority: "secondary",
  },
  {
    id: "vimeo",
    label: "Vimeo",
    handle: "Leo Bruni",
    href: "https://vimeo.com/leobruni",
    desc: "Professionelles Video-Portfolio",
    priority: "secondary",
  },
  {
    id: "x",
    label: "X",
    handle: "@leobruni_photo",
    href: "https://x.com/leobruni_photo",
    desc: "News & Gedanken zur Fotografie",
    priority: "secondary",
  },
];

export const PRIMARY_SOCIAL = SOCIAL.filter((s) => s.priority === "primary");
export const ALL_SOCIAL = SOCIAL;
