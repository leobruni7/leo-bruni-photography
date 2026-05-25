import GalleryPage from "@/components/GalleryPage";

const images = [
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80",
  "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800&q=80",
  "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=800&q=80",
  "https://images.unsplash.com/photo-1481026469463-66327c86e544?w=1200&q=80",
  "https://images.unsplash.com/photo-1460317442991-0ec209397118?w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?w=800&q=80",
  "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=800&q=80",
  "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&q=80",
];

export default function ArchitekturPage() {
  return (
    <GalleryPage
      title="Architektur Fotografie"
      subtitle="Raum & Struktur"
      heroImg="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=90"
      images={images}
      description="Architektur ist gefrorene Musik. Ich zeige Gebäude, Räume und Strukturen in ihrem besten Licht — für Architekten, Immobilienentwickler, Hotels und Designstudios."
    />
  );
}
