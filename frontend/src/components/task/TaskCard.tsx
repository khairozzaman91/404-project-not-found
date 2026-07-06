interface TaskCardProps {
  id: number;
  title: string;
  onDelete: (id: number) => void;
}

function TaskCard({
  id,
  title,
  onDelete,
}: TaskCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">

      <div className="flex items-center justify-between">

        <p className="text-sm font-medium">
          {title}
        </p>

        <button
          onClick={() => onDelete(id)}
          className="text-red-600 hover:text-red-800"
        >
          🗑
        </button>

      </div>

    </div>
  );
}

export default TaskCard;