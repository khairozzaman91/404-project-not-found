import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface TaskCardProps {
  serial: number;
  id: number;
  title: string;
  dueDate: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

function TaskCard({
  serial,
  id,
  title,
  dueDate,
  onDelete,
  onEdit,
}: TaskCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    isDragging,
  } = useDraggable({
    id: id.toString(),
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    opacity: isDragging ? 0.6 : 1,
  };

  const formattedDate = new Date(dueDate).toLocaleDateString("en-US", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`
        group
        rounded-lg
        border
        bg-white
        p-3
        transition-all
        ${
          isDragging
            ? "border-gray-500 bg-gray-300 shadow-xl scale-[1.02]"
            : "border-slate-200 shadow hover:shadow-md"
        }
      `}
    >
      {/* Drag Handle */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab"
      >
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-500">
            #{serial}
          </span>

          <h3 className="flex-1 text-base font-semibold text-slate-800">
            {title}
          </h3>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-2 flex items-center justify-between">
        <p className="text-xs text-slate-500">
          📅 {formattedDate}
        </p>

        <div className="flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
          <button
            onClick={() => onEdit(id)}
            className="text-blue-600 hover:text-blue-800"
          >
            ✏️
          </button>

          <button
            onClick={() => onDelete(id)}
            className="text-red-600 hover:text-red-800"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;