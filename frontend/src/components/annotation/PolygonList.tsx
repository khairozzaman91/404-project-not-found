export default function PolygonList({ polygonList, selectedPolygon, setSelectedPolygon }: any) {
  return (
    <div className="flex flex-col rounded-lg bg-white p-3 shadow h-full">
      <h3 className="mb-3 text-sm font-semibold">Polygon List</h3>
      <div className="flex-1 space-y-2 overflow-y-auto">
        {polygonList.map((_: any, index: number) => (
          <div
            key={index}
            onClick={() => setSelectedPolygon(index)}
            className={`rounded border p-2 text-sm cursor-pointer ${
              selectedPolygon === index ? "border-red-700 bg-red-50" : "hover:bg-slate-100"
            }`}
          >
            ● Polygon #{index + 1}
          </div>
        ))}
      </div>
    </div>
  );
}