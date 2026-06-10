import Navbar from "@/components/artwork/NavigationBar";
import ArtworkPreview from "@/components/artwork/ArtworkPreview";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";

import { prisma } from "@/lib/prisma";

export default async function HomePage() {
  const artwork = await prisma.artwork.findFirst({
    include: {
      user: true,

      sheets: {
        include: {
          elements: true,
        },
      },
    },
  });

  if (!artwork) {
    return (
      <main className="p-10">
        <h1>No Artwork Found</h1>
      </main>
    );
  }
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
