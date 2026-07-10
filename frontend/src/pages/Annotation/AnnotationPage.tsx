import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import { getImages, uploadImage } from "../../services/annotation";
import PolygonCanvas from "../../components/annotation/PolygonCanvas";


function AnnotationPage() {
  const [images, setImages] = useState<any[]>([]);
  const [selectedImage, setSelectedImage] = useState<any>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  

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

  const handlePrevious = () => {
  if (!selectedImage) return;

  const currentIndex = images.findIndex(
    (img) => img.id === selectedImage.id
  );

  if (currentIndex > 0) {
    setSelectedImage(images[currentIndex - 1]);
  }
};

const handleNext = () => {
  if (!selectedImage) return;

  const currentIndex = images.findIndex(
    (img) => img.id === selectedImage.id
  );

  if (currentIndex < images.length - 1) {
    setSelectedImage(images[currentIndex + 1]);
  }
};

  return (
    <DashboardLayout title="🖍 Image Annotation">
      <div className="space-y-4">

        {/* Image Navigation */}
        <div className="flex items-center justify-center gap-8 rounded-lg bg-white p-1 shadow">

        <button
            onClick={handlePrevious}
            disabled={
                !selectedImage ||
                images.findIndex((img) => img.id === selectedImage.id) === 0
            }
            className="rounded border px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
            ← Previous
            </button>

                <h2 className="font-semibold text-slate-700">
                    Image {selectedImage ? images.findIndex(img => img.id === selectedImage.id) + 1 : 0} / {images.length}
                </h2>

                <button
                    onClick={handleNext}
                    disabled={
                        !selectedImage ||
                        images.findIndex((img) => img.id === selectedImage.id) === images.length - 1
                    }
                    className="rounded border px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
                    >
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

            {/* Image Viewer */}
            <div className="flex flex-[0.7] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white">

              <PolygonCanvas
                  imageUrl={selectedImage?.image}
                  isDrawing={isDrawing}
                />

            </div>

            {/* Polygon List */}
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
       {/* Annotation Toolbar */}
          <div className="flex flex-wrap gap-2 rounded-lg bg-white p-3 shadow">

             <button
              onClick={() => setIsDrawing((prev) => !prev)}
              className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${
                isDrawing
                  ? "bg-indigo-800"
                  : "bg-indigo-600 hover:bg-indigo-700"
              }`}
            >
              {isDrawing ? "✏️ Drawing..." : "🖊 Draw Polygon"}
            </button>

            <button className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600">
              ↩ Undo Point
            </button>

            <button className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800">
              ❌ Clear
            </button>

            <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700">
              🗑 Delete Polygon
            </button>

            <button className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700">
              💾 Save Annotation
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