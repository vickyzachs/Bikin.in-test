import { Artwork } from "@/types/artwork";

interface Props {
  artwork: Artwork;
}

export default function ArtworkDetail({ artwork }: Props) {
  return (
    <div className="space-y-4">
      <p className="text-sm text-gray-500">{artwork.product}</p>

      <h1 className="text-3xl font-bold">{artwork.title}</h1>

      <p className="text-gray-600">{artwork.description}</p>

      <div className="space-y-2 text-sm">
        <p>SKU: {artwork.sku}</p>
        <p>Views: {artwork.views}</p>
        <p>Wishlist: {artwork.wishlist}</p>
      </div>
    </div>
  );
}
