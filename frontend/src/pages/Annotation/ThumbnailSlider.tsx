import { Trash2 } from "lucide-react";
import type { ImageItem } from "../../types/annotation";

interface ThumbnailSliderProps {
  images: ImageItem[];
  selectedImage: ImageItem | null;
  onSelect: (image: ImageItem) => void;
  onDelete: (id: number) => void;
}

function ThumbnailSlider({
  images,
  selectedImage,
  onSelect,
  onDelete,
}: ThumbnailSliderProps) {
  return (
    <div className="rounded-lg bg-white p-3 shadow">
      <h3 className="mb-3 text-sm font-semibold">Images</h3>

      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((image) => (
          <div key={image.id} className="group relative">
            <div
              onClick={() => onSelect(image)}
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

            <button
              onClick={(e) => {
                e.stopPropagation();
                onDelete(image.id);
              }}
              className="absolute -right-1 -top-1 hidden rounded-full bg-red-600 p-1 text-white shadow group-hover:block"
            >
              <Trash2 size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ThumbnailSlider;