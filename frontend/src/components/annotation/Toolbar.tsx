export default function Toolbar({ onFinish, onUndo, onClear }: any) {
  return (
    <div className="flex gap-2 mb-4">
      <button onClick={onFinish} className="px-4 py-2 bg-blue-600 text-white rounded text-sm">Finish</button>
      <button onClick={onUndo} className="px-4 py-2 bg-gray-500 text-white rounded text-sm">Undo</button>
      <button onClick={onClear} className="px-4 py-2 bg-red-500 text-white rounded text-sm">Clear</button>
    </div>
  );
}