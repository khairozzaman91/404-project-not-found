import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

interface TaskCardProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
  onEdit: (id: number) => void;
}

function TaskCard({
  id,
  title,
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


  return (
    <div
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className={`
        rounded-lg
        p-4
        shadow
        border
        transition-all
        ${
          isDragging
            ? "bg-gray-300 border-gray-500 shadow-2xl"
            : "bg-white border-transparent"
        }
      `}
    >

      <div className="flex items-center justify-between">

        {/* Task Title */}
        <p className="text-sm font-medium">
          {title}
        </p>


        {/* Action Buttons */}
        <div 
          className="flex items-center gap-3"
          onPointerDown={(e) => {
            e.stopPropagation();
          }}
        >

          {/* Edit Button */}
          <button
            type="button"
            onClick={() => onEdit(id)}
            className="
              text-blue-600
              hover:text-blue-800
            "
          >
            ✏️
          </button>


          {/* Delete Button */}
          <button
            type="button"
            onClick={() => onDelete(id)}
            className="
              text-red-600
              hover:text-red-800
            "
          >
            🗑
          </button>

        </div>


      </div>

    </div>
  );
}

export default TaskCard;