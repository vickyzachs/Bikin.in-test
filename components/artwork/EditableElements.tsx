import type { EditableElement } from "@/types/artwork";

interface EditableElementProps {
  element: {
    id: string;
    label: string;
    type: string;

    image: string | null;

    xAxis: number;
    yAxis: number;

    size: number;
  };
}

export default function EditableElement({ element }: EditableElementProps) {
  return (
    <div
      className="absolute"
      style={{
        left: `${element.xAxis}%`,
        top: `${element.yAxis}%`,
        width: `${element.size}%`,
        maxWidth: "300px",
        transform: "translate(-50%, -50%)",
      }}
    >
      {element.image ? (
        <img
          src={element.image}
          alt={element.label}
          className="w-full h-auto object-contain"
        />
      ) : (
        <div
          className="
            border-2
            border-dashed
            border-cyan-400
            bg-cyan-100/60
            rounded-lg
            flex
            items-center
            justify-center
            text-xs
            font-semibold
            text-cyan-800
            aspect-square
          "
        >
          {element.label}
        </div>
      )}
    </div>
  );
}
