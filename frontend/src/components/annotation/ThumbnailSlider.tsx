export default function ThumbnailSlider({ images, onSelect }: any) {
  return (
    <div className="flex gap-2 overflow-x-auto p-2 border-t">
      {images.map((img: any, index: number) => (
        <img
          key={index}
          src={img.image}
          alt={`Thumbnail ${index}`}
          className="w-16 h-16 object-cover cursor-pointer rounded border hover:opacity-80"
          onClick={() => onSelect(img)}
        />
      ))}
    </div>
  );
}