import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PolygonCanvas from "../../components/annotation/PolygonCanvas";
import type { PolygonCanvasRef } from "../../components/annotation/PolygonCanvas";
import {
  getImages,
  uploadImage,
  saveAnnotation,
  getAnnotations,
} from "../../services/annotation";



function AnnotationPage() {
      const [images, setImages] = useState<any[]>([]);
      const [selectedImage, setSelectedImage] = useState<any>(null);
      const [isDrawing, setIsDrawing] = useState(false);
      
      const fileInputRef = useRef<HTMLInputElement>(null);
      const canvasRef = useRef<PolygonCanvasRef>(null);
      const [polygonList, setPolygonList] = useState<number[][]>([]);
      const [selectedPolygon, setSelectedPolygon] = useState<number | null>(null);

        useEffect(() => {
            console.log("polygonList:", polygonList);
          }, [polygonList]);

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


      useEffect(() => {
      if (selectedImage) {
        loadAnnotations(selectedImage.id);
      }
    }, [selectedImage]);


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
            setSelectedPolygon(null);
            setPolygonList([]);
          }
        };

          const handleNext = () => {
            if (!selectedImage) return;

            const currentIndex = images.findIndex(
              (img) => img.id === selectedImage.id
            );

            if (currentIndex < images.length - 1) {
              setSelectedImage(images[currentIndex + 1]);
              setSelectedPolygon(null);
              setPolygonList([]);
            }
          };

    const handleDrawPolygon = () => {
      if (!isDrawing) {
        setIsDrawing(true);
        return;
      }

      canvasRef.current?.finishPolygon();
      setIsDrawing(false);
    };

    const handleUndoPoint = () => {
      canvasRef.current?.undoPoint();
    };

    const handleClearPolygon = () => {
      canvasRef.current?.clearCurrentPolygon();
    };

    const handleDeletePolygon = () => {
      if (selectedPolygon === null) return;

      canvasRef.current?.deletePolygon(selectedPolygon);
       console.log("After delete:", polygonList);
      setSelectedPolygon(null);
    };

    const handleZoomIn = () => {
      canvasRef.current?.zoomIn();
    };

    const handleZoomOut = () => {
      canvasRef.current?.zoomOut();
    };


        const handleSaveAnnotation = async () => {
          if (!selectedImage) return;

          try {
            await saveAnnotation(
              selectedImage.id,
              polygonList
            );

            alert("Annotations saved successfully!");

            await loadAnnotations(selectedImage.id);
          } catch (error) {
            console.error(error);
            alert("Failed to save annotations.");
          }
        };


    const loadAnnotations = async (imageId: number) => {
      try {
        const data = await getAnnotations(imageId);
        console.log("DB Response:", data);

        setPolygonList(
          data.map((item: any) => item.points)
        );
      } catch (error) {
        console.error(error);
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

          <button
          onClick={handleSaveAnnotation}
          className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
        >
          💾 Save Annotation
        </button>
        </div>

        {/* Image Viewer + Polygon Panel */}
        <div className="flex h-65 gap-4">

            {/* Image Viewer */}
            <div className="flex flex-[0.7] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white">

              <PolygonCanvas
                ref={canvasRef}
                imageUrl={selectedImage?.image}
                isDrawing={isDrawing}
                polygons={polygonList}
                onPolygonsChange={setPolygonList}
              />

            </div>

            {/* Polygon List */}
            <div className="flex flex-[0.3] flex-col rounded-lg bg-white p-3 shadow">

              <h3 className="mb-3 text-sm font-semibold">
                Polygon List
              </h3>

                <div className="flex-1 space-y-2 overflow-y-auto">
                    {polygonList.map((_, index) => (
                            <div
                              key={index}
                              onClick={() => setSelectedPolygon(index)}
                              className={`rounded border p-2 text-sm cursor-pointer ${
                                selectedPolygon === index
                                  ? "border-red-700 bg-red-50"
                                  : "hover:bg-slate-100"
                              }`}
                            >
                        ● Polygon #{index + 1}
                      </div>
                    ))}
                  </div>

            </div>

          </div>

       
       {/* Annotation Toolbar */}
          <div className="flex flex-wrap gap-2 rounded-lg bg-white p-3 shadow">

            <button
                onClick={handleDrawPolygon}
                className={`rounded-lg px-4 py-2 text-sm font-medium text-white ${
                  isDrawing
                    ? "bg-indigo-800"
                    : "bg-indigo-600 hover:bg-indigo-700"
                }`}
              >
                {isDrawing ? "✅ Finish Polygon" : "🖊 Draw Polygon"}
              </button>

             <button
                onClick={handleUndoPoint}
                className="rounded-lg bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600"
              >
                ↩ Undo Point
              </button>

          <button
            onClick={handleClearPolygon}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800"
          >
            ❌ Clear
          </button>

          <button
            onClick={handleDeletePolygon}
            disabled={selectedPolygon === null}
            className="rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50"
          >
            🗑 Delete Polygon
          </button>

            <button
              onClick={handleZoomIn}
              className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
            >
              🔍 Zoom In
            </button>

            <button
              onClick={handleZoomOut}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              🔎 Zoom Out
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
                onClick={() => {
                    setSelectedImage(image);
                    setSelectedPolygon(null);
                  }}
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
