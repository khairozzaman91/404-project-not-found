import DashboardLayout from "../../components/layout/DashboardLayout";

function AnnotationPage() {
  return (
    <DashboardLayout title="🖍 Image Annotation">
      <div className="space-y-4">

        {/* Image Navigation */}
        <div className="flex items-center justify-center gap-8 rounded-lg bg-white p-2 shadow">
          <button className="rounded border px-4 py-2 hover:bg-slate-100">← Previous</button>
          <h2 className="font-semibold text-slate-700">Image 1 / 1</h2>
          <button className="rounded border px-4 py-2 hover:bg-slate-100">Next →</button>
        </div>

        {/* Upload & Save */}
        <div className="flex items-center justify-between rounded-lg bg-white p-2 shadow">
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">📂 Upload Image</button>
          <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">💾 Save Annotation</button>
        </div>

        {/* Image Viewer + Polygon Panel (Flex Layout for equal height) */}
        <div className="flex h-[300px] gap-4">
          <div className="flex-[0.7] flex items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white">
             <div className="text-center font-semibold text-slate-500">IMAGE VIEWER</div>
          </div>

          <div className="flex-[0.3] flex flex-col rounded-lg bg-white p-3 shadow">
            <h3 className="mb-3 text-sm font-semibold">Polygon List</h3>
            <div className="flex-1 space-y-2 overflow-y-auto">
              <div className="rounded border p-2 text-sm">● Polygon #1</div>
            </div>
          </div>
        </div>

        {/* Delete & Clear Buttons */}
        <div className="flex gap-2">
          <button className="w-32 rounded-lg bg-red-600 py-2 text-xs text-white hover:bg-red-700">🗑 Delete</button>
          <button className="w-32 rounded-lg bg-slate-700 py-2 text-xs text-white hover:bg-slate-800">❌ Clear</button>
        </div>
    
        {/* Images Slider */}
        <div className="rounded-lg bg-white p-3 shadow">
          <h3 className="mb-3 text-sm font-semibold">Images</h3>
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {Array.from({ length: 15 }).map((_, index) => (
              <div key={index} className="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded border bg-slate-100 text-[10px] hover:border-blue-500 transition-colors">
                🖼 {index + 1}
              </div>
            ))}
          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default AnnotationPage;