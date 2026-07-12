
import ThumbnailSlider from "../../components/annotation/ThumbnailSlider";
import { useEffect, useRef, useState } from "react";
import DashboardLayout from "../../components/layout/DashboardLayout";
import PolygonCanvas from "../../components/annotation/PolygonCanvas";
import type { PolygonCanvasRef } from "../../components/annotation/PolygonCanvas";
import type { ImageItem } from "../../types/annotation";
import ImageNavigation from "../Annotation/ImageNavigation"
import UploadSection from "../Annotation/UploadSection";
import PolygonList from "../Annotation/PolygonList";
import AnnotationToolbar from "../Annotation/AnnotationToolbar";


import {
  getImages,
  uploadImage,
  saveAnnotation,
  getAnnotations,
  deleteImage,
} from "../../services/annotation";

function AnnotationPage() {
  
      const [images, setImages] = useState<ImageItem[]>([]);
      const [selectedImage, setSelectedImage] =
        useState<ImageItem | null>(null);
      const [isDrawing, setIsDrawing] = useState(false);
      
      const fileInputRef = useRef<HTMLInputElement>(null);
      const canvasRef = useRef<PolygonCanvasRef>(null);
      const [polygonList, setPolygonList] = useState<number[][]>([]);
      const [selectedPolygon, setSelectedPolygon] = useState<number | null>(null);

        useEffect(() => {
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
      setSelectedPolygon(null);
    };


    const handleDeleteImage = async (imageId: number) => {
          const confirmDelete = window.confirm("Delete this image?");

          if (!confirmDelete) return;

          try {
            await deleteImage(imageId);

            const updatedImages = images.filter(
              (img) => img.id !== imageId
            );

            setImages(updatedImages);

            if (updatedImages.length > 0) {
              const nextImage = updatedImages[0];
              setSelectedImage(nextImage);

              // Load annotations for the newly selected image
              await loadAnnotations(nextImage.id);
            } else {
              setSelectedImage(null);
              setPolygonList([]);
            }
          } catch (error) {
            console.error(error);
            alert("Failed to delete image.");
          }
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
            alert("Failed to save annotations.");
          }
        };


    const loadAnnotations = async (imageId: number) => {
      try {
        const data = await getAnnotations(imageId);
        
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
          <ImageNavigation
              currentIndex={
                selectedImage
                  ? images.findIndex((img) => img.id === selectedImage.id)
                  : 0
              }
              totalImages={images.length}
              onPrevious={handlePrevious}
              onNext={handleNext}
            />

        {/* Upload & Save */}
            <UploadSection
              fileInputRef={fileInputRef}
              onUpload={() => fileInputRef.current?.click()}
              onFileChange={handleUpload}
              onSave={handleSaveAnnotation}
            />

        {/* Image Viewer + Polygon Panel */}
        <div className="flex h-65 gap-4">

            {/* Image Viewer */}
            <div className="flex flex-[0.4] items-center justify-center rounded-lg border-2 border-dashed border-slate-300 bg-white">

              <PolygonCanvas
                ref={canvasRef}
                imageUrl={selectedImage?.image}
                isDrawing={isDrawing}
                polygons={polygonList}
                onPolygonsChange={setPolygonList}
              />

            </div>

            {/* Polygon List */}
             <PolygonList
              polygons={polygonList}
              selectedPolygon={selectedPolygon}
              onSelect={setSelectedPolygon}
              />

          </div>

       
       {/* Annotation Toolbar */}

       <AnnotationToolbar
          isDrawing={isDrawing}
          selectedPolygon={selectedPolygon}
          onDraw={handleDrawPolygon}
          onUndo={handleUndoPoint}
          onClear={handleClearPolygon}
          onDelete={handleDeletePolygon}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
        />

        {/* Images Slider */}
        <ThumbnailSlider
          images={images}
          selectedImage={selectedImage}
          onSelect={(image: ImageItem) => {
            setSelectedImage(image);
            setSelectedPolygon(null);
          }}
          onDelete={handleDeleteImage}
        />

      </div>
    </DashboardLayout>
  );
}

export default AnnotationPage;