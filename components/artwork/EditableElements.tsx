import { EditableElement } from "@/types/artwork";

interface Props {
  element: EditableElement;
}

export default function EditableArea({ element }: Props) {
  return (
    <div
      className="
        absolute
        z-10
        border-2
        border-dashed
        border-cyan-400
        bg-cyan-300/20
        rounded-md
        flex
        items-center
        justify-center
        text-xs
        font-semibold
        text-cyan-700
      "
      style={{
        left: `${element.xAxis}%`,
        top: `${element.yAxis}%`,
        width: `${element.size}px`,
        height: `${element.size}px`,
        transform: "translate(-50%, -50%)",
      }}
    >
      {element.label}
    </div>
  );
}
