interface ColumnProps {
  title: string;
  children: React.ReactNode;
}

function Column({
  title,
  children,
}: ColumnProps) {
  return (
    <div className="rounded-xl bg-slate-100 p-4">
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