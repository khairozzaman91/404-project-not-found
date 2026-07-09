import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getImages, uploadImage } from "../../services/annotation";

function AnnotationPage() {
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadImages = async () => {
    try {
      const data = await getImages();
      setImages(data);

      if (data.length > 0) {
        setSelectedImage(data[0]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    loadImages();
  }, []);

  const handleUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (!file) return;

    try {
      await uploadImage(file);
      await loadImages();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <DashboardLayout title="🖍 Image Annotation">
      <div className="space-y-4">

        {/* Image Navigation */}
        <div className="flex items-center justify-center gap-8 rounded-lg bg-white p-1 shadow">
          <button className="rounded border px-4 py-2 hover:bg-slate-100">
            ← Previous
          </button>

          <h2 className="font-semibold text-slate-700">
            Image {selectedImage ? images.findIndex(img => img.id === selectedImage.id) + 1 : 0} / {images.length}
          </h2>

          <button className="rounded border px-4 py-2 hover:bg-slate-100">
            Next →
          </button>
        </div>

        {/* Upload & Save */}
        <div className="flex items-center justify-between rounded-lg bg-white p-1 shadow">
          <>
            <button
              onClick={() => fileInputRef.current?.click()}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              📂 Upload Image
            </button>

            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              hidden
              onChange={handleUpload}
            />
          </>

          <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
            💾 Save Annotation
          </button>
        </div>

        {/* Image Viewer + Polygon Panel */}
        <div className="flex h-65 gap-4">

          <div className="flex flex-[0.7] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white">

            {selectedImage ? (
              <img
                src={selectedImage.image}
                alt="Selected"
                className="h-full w-full rounded-lg object-contain"
              />
            ) : (
              <div className="text-center font-semibold text-slate-500">
                IMAGE VIEWER
              </div>
            )}

          </div>

          <div className="flex flex-[0.3] flex-col rounded-lg bg-white p-3 shadow">
            <h3 className="mb-3 text-sm font-semibold">
              Polygon List
            </h3>

            <div className="flex-1 space-y-2 overflow-y-auto">
              <div className="rounded border p-2 text-sm">
                ● Polygon #1
              </div>
            </div>
          </div>

        </div>

        {/* Delete & Clear Buttons */}
        <div className="flex gap-2">
          <button className="w-32 rounded-lg bg-red-600 py-2 text-xs text-white hover:bg-red-700">
            🗑 Delete
          </button>

          <button className="w-32 rounded-lg bg-slate-700 py-2 text-xs text-white hover:bg-slate-800">
            ❌ Clear
          </button>
        </div>

        {/* Images Slider */}
        <div className="rounded-lg bg-white p-3 shadow">
          <h3 className="mb-3 text-sm font-semibold">
            Images
          </h3>

          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">

            {images.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image)}
                className={`h-12 w-12 shrink-0 cursor-pointer overflow-hidden rounded border-2 transition ${
                  selectedImage?.id === image.id
                    ? "border-blue-600"
                    : "border-slate-300"
                }`}
              >
                <img
                  src={image.image}
                  alt=""
                  className="h-full w-full object-cover"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </DashboardLayout>
  );
}

export default AnnotationPage;