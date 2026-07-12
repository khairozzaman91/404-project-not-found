interface ThumbnailSliderProps {
  images: any[];
  selectedImage: any;
  onSelect: (img: any) => void;
  onDelete: (id: number) => void;
}

export default function ThumbnailSlider({
  images,
  selectedImage,
  onSelect,
  onDelete,
}: ThumbnailSliderProps) {
  return (
    <div className="flex gap-2 overflow-x-auto border-t p-2">
      {images.map((img: any) => {
        const isSelected = selectedImage?.id === img.id;

        return (
          <div
            key={img.id}
            className="relative shrink-0"
          >
            <img
              src={img.image}
              alt="Thumbnail"
              onClick={() => onSelect(img)}
              className={`h-16 w-16 cursor-pointer rounded border object-cover transition ${
                isSelected
                  ? "border-blue-600 ring-2 ring-blue-500"
                  : "border-gray-300 hover:opacity-80"
              }`}
            />

            {isSelected && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(img.id);
                }}
                className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white shadow-lg"
                title="Delete Image"
              >
                🗑️
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}