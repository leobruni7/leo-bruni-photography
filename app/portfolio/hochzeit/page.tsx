import GalleryPage from "@/components/GalleryPage";

const images = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80",
  "https://images.unsplash.com/photo-1525772764200-be829a350797?w=800&q=80",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
  "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
  "https://images.unsplash.com/photo-1537633552985-df8429e8048b?w=800&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
];

export default function HochzeitPage() {
  return (
    <GalleryPage
      title="Hochzeit Fotografie"
      subtitle="Emotionen & Erinnerungen"
      heroImg="https://images.unsplash.com/photo-1519741497674-611481863552?w=1800&q=90"
      images={images}
      description="Ihr schönster Tag, für immer festgehalten. Ich begleite Sie unaufdringlich und mit Feingefühl — von der Vorbereitung bis zum letzten Tanz. Natürlich, authentisch, zeitlos."
    />
  );
}
