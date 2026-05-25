export type SocialPlatform = {
  id: string;
  label: string;
  handle: string;
  href: string;
  desc: string;
  priority: "primary" | "secondary";
};

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
    handle: "@leobruniphoto",
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
    handle: "leobruniphoto",
    href: "https://www.facebook.com/leobruniphoto",
    desc: "Events & Neuigkeiten",
    priority: "secondary",
  },
  {
    id: "pinterest",
    label: "Pinterest",
    handle: "leobruniphoto",
    href: "https://www.pinterest.com/leobruniphoto",
    desc: "Moodboards für Food & Hochzeit",
    priority: "secondary",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    handle: "in/leobruni",
    href: "https://www.linkedin.com/in/leobruni",
    desc: "Business & Architektur-Projekte",
    priority: "secondary",
  },
  {
    id: "vimeo",
    label: "Vimeo",
    handle: "leobruniphoto",
    href: "https://vimeo.com/leobruniphoto",
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
