interface TaskCardProps {
  title: string;
}

function TaskCard({
  title,
}: TaskCardProps) {
  return (
    <div className="rounded-lg bg-white p-4 shadow">
      <p className="text-sm font-medium">
        {title}
      </p>
    </div>
  );
}

export default TaskCard;