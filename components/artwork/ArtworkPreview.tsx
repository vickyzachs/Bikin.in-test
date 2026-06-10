import Image from "next/image";
import EditableElement from "./EditableElements";
import { Prisma } from "@prisma/client";

type ArtworkWithRelations = Prisma.ArtworkGetPayload<{
  include: {
    user: true;
    sheets: {
      include: {
        elements: true;
      };
    };
  };
}>;
interface Props {
  artwork: ArtworkWithRelations;
}

export default function ArtworkPreview({ artwork }: Props) {
  const sheet = artwork.sheets[0];
  if (!sheet) {
    return <div className="bg-white rounded-xl p-4">No Sheet Found</div>;
  }
  return (
    <div className="space-y-5">
      {/* Preview Box */}
      <div className="relative w-full aspect-[4/5] overflow-hidden rounded-xl">
        <div className="relative w-full aspect-[3/4]">
          {sheet.background && (
            <Image
              src={sheet.background}
              alt={artwork.title}
              fill
              sizes="(max-width:768px) 100vw, 50vw"
              className="object-contain rounded-lg"
            />
          )}
        </div>

        {sheet.elements.map((element) => (
          <EditableElement key={element.id} element={element} />
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
