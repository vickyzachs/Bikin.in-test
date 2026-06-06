import Image from "next/image";
import { Artwork } from "@/types/artwork";
import EditableArea from "./EditableElements";

interface Props {
  artwork: Artwork;
}

export default function ArtworkPreview({ artwork }: Props) {
  const front = artwork.design.sheets[0].sides.front;

  return (
    <div className="space-y-5">
      {/* Preview Box */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
        <div className="relative w-full aspect-[3/4]">
          <Image
            src={front.background}
            alt={artwork.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>

        {/* Dynamic editable elements */}
        {front.elements.map((element) => (
          <EditableArea key={element.id} element={element} />
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex justify-center gap-3">
        <ToolButton label="⟲" />
        <ToolButton label="⟳" />
        <ToolButton label="+" />
        <ToolButton label="−" />

        <div className="px-4 py-2 rounded-full bg-white shadow-sm text-gray-900">
          Scale: 80%
        </div>
      </div>
    </div>
  );
}

function ToolButton({ label }: { label: string }) {
  return (
    <button
      className="
        w-10
        h-10
        rounded-full
        bg-white
        border
        border-gray-300
        shadow-sm
        text-gray-800
        font-semibold
        hover:bg-gray-100
        hover:border-gray-400
        transition
      "
    >
      {label}
    </button>
  );
}
