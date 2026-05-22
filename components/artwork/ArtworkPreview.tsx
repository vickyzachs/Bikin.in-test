import { Artwork } from "@/types/artwork";
import EditableArea from "./EditableElements";

interface Props {
  artwork: Artwork;
}

export default function ArtworkPreview({ artwork }: Props) {
  return (
    <div className="relative bg-gray-100 rounded-xl p-6">
      <img
        src={artwork.design.backgroundUrl}
        alt={artwork.title}
        className="w-full rounded-lg"
      />

      {artwork.design.elements.map((element) => (
        <EditableArea key={element.id} element={element} />
      ))}
    </div>
  );
}
