export default function ImageUploader({ onImageUpload }: any) {
  return (
    <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg text-center">
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => onImageUpload(e.target.files?.[0])}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-500 file:text-white"
      />
      <p className="mt-2 text-xs text-gray-500">Select an image to start annotation</p>
    </div>
  );
}