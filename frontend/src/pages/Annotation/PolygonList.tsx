interface PolygonListProps {
  polygons: number[][];
  selectedPolygon: number | null;
  onSelect: (index: number) => void;
}

function PolygonList({
  polygons,
  selectedPolygon,
  onSelect,
}: PolygonListProps) {
  return (
    <div className="flex flex-[0.3] flex-col rounded-lg bg-white p-3 shadow">
      <h3 className="mb-3 text-sm font-semibold">
        Polygon List
      </h3>

      <div className="flex-1 space-y-2 overflow-y-auto">
        {polygons.map((_, index) => (
          <div
            key={index}
            onClick={() => onSelect(index)}
            className={`cursor-pointer rounded border p-2 text-sm ${
              selectedPolygon === index
                ? "border-red-700 bg-red-50"
                : "hover:bg-slate-100"
            }`}
          >
             Polygon #{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PolygonList;