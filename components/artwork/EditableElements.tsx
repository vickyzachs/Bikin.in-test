import { EditableElement } from "@/types/artwork";

interface Props {
  element: EditableElement;
}

export default function EditableArea({ element }: Props) {
  return (
    <div
      className="
        absolute
        border-2
        border-dashed
        border-blue-500
        bg-blue-100/40
        flex
        items-center
        justify-center
        text-xs
        font-medium
      "
      style={{
        left: `${element.xAxis}%`,
        top: `${element.yAxis}%`,
        width: `${element.size}px`,
        height: `${element.size}px`,
      }}
    >
      {element.label}
    </div>
  );
}
