interface AnnotationToolbarProps {
  isDrawing: boolean;
  selectedPolygon: number | null;
  onDraw: () => void;
  onUndo: () => void;
  onClear: () => void;
  onDelete: () => void;
  onZoomIn: () => void;
  onZoomOut: () => void;
}

function AnnotationToolbar({
  isDrawing,
  selectedPolygon,
  onDraw,
  onUndo,
  onClear,
  onDelete,
  onZoomIn,
  onZoomOut,
}: AnnotationToolbarProps) {
  return (
    <div className="flex flex-wrap gap-2 rounded-lg bg-white p-3 shadow">
      <button
        onClick={onDraw}
        className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${
          isDrawing
            ? "bg-indigo-800"
            : "bg-indigo-600 hover:bg-indigo-700"
        }`}
      >
        {isDrawing ? "✅ Finish Polygon" : "🖊 Draw Polygon"}
      </button>

      <button
        onClick={onUndo}
        className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
      >
        ↩ Undo Point
      </button>

      <button
        onClick={onClear}
        className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
      >
        ❌ Clear
      </button>

      <button
        onClick={onDelete}
        disabled={selectedPolygon === null}
        className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
      >
        🗑 Delete Polygon
      </button>

      <button
        onClick={onZoomIn}
        className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        🔍 Zoom In
      </button>

      <button
        onClick={onZoomOut}
        className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
      >
        🔎 Zoom Out
      </button>
    </div>
  );
}

export default AnnotationToolbar;