import { useDroppable } from "@dnd-kit/core";

interface ColumnProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

function Column({
  id,
  title,
  children,
}: ColumnProps) {

  const {
    setNodeRef,
    isOver,
  } = useDroppable({
    id,
  });

  return (
    <div
      ref={setNodeRef}
      className={`
        rounded-xl
        p-4
        transition-all
        ${
          isOver
            ? "bg-blue-100 border-2 border-blue-500"
            : "bg-slate-100"
        }
      `}
    >
      <h2 className="mb-4 text-lg font-semibold">
        {title}
      </h2>

      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
}

export default Column;