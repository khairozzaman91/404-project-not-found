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
    cursor: "grab",
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
      {...listeners}
      {...attributes}
      className={`
        rounded-lg
        border
        p-3
        transition-all
        ${
          isDragging
            ? "bg-gray-300 border-gray-500 shadow-xl scale-[1.02]"
            : "bg-white border-slate-200 shadow hover:shadow-md"
        }
      `}
    >
      {/* Serial + Title */}
      <div className="flex items-center gap-2">
        <span className="text-xs font-semibold text-slate-500">
          #{serial}
        </span>

        <h3 className="flex-1 text-base font-semibold text-slate-800">
          {title}
        </h3>
      </div>

      {/* Date + Actions */}
      <div
        className="mt-2 flex items-center justify-between"
        onPointerDown={(e) => e.stopPropagation()}
      >
        <p className="flex items-center gap-1 text-xs text-slate-500">
          📅 {formattedDate}
        </p>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => onEdit(id)}
            className="text-lg text-blue-600 transition hover:text-blue-800"
            title="Edit Task"
          >
            ✏️
          </button>

          <button
            type="button"
            onClick={() => onDelete(id)}
            className="text-lg text-red-600 transition hover:text-red-800"
            title="Delete Task"
          >
            🗑️
          </button>
        </div>
      </div>
    </div>
  );
}

export default TaskCard;