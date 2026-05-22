import artworkData from "@/data/artwork.json";
import { Artwork } from "@/types/artwork";

import Navbar from "@/components/artwork/NavigationBar";
import ArtworkPreview from "@/components/artwork/ArtworkPreview";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";

const artwork = (artworkData as Artwork[])[0];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      <section className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-[1fr_420px] gap-8">
          {/* LEFT */}
          <ArtworkPreview artwork={artwork} />

          {/* RIGHT */}
          <ArtworkDetail artwork={artwork} />
        </div>
      </section>
    </main>
  );
}
