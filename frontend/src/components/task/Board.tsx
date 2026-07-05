interface BoardProps {
  children: React.ReactNode;
}

function Board({ children }: BoardProps) {
  return (
    <div className="grid grid-cols-3 gap-6">
      {children}
    </div>
  );
}

export default Board;