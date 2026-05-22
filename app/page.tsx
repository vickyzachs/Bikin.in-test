import artworkData from "@/data/artwork.json";
import { Artwork } from "@/types/artwork";

import Navbar from "@/components/artwork/NavigationBar";
import ArtworkPreview from "@/components/artwork/ArtworkPreview";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";

const artwork = artworkData as Artwork;

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="max-w-7xl mx-auto px-8 py-10">
        <div className="grid grid-cols-2 gap-10">
          <ArtworkPreview artwork={artwork} />
          <ArtworkDetail artwork={artwork} />
        </div>
      </section>
    </main>
  );
}
