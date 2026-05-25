import GalleryPage from "@/components/GalleryPage";

const images = [
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
  "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=800&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=1200&q=80",
  "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&q=80",
  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80",
  "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?w=800&q=80",
  "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
  "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&q=80",
];

export default function FoodPage() {
  return (
    <GalleryPage
      title="Food Fotografie"
      subtitle="Kulinarik"
      heroImg="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1800&q=90"
      images={images}
      description="Jedes Gericht ist ein Kunstwerk. Meine Food-Fotografie verbindet technische Präzision mit künstlerischem Gespür — für Restaurants, Verlage, Foodmarken und Agenturen."
    />
  );
}
