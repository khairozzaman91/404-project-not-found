interface UploadSectionProps {
  onUpload: () => void;
  onFileChange: (
    event: React.ChangeEvent<HTMLInputElement>
  ) => void;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onSave: () => void;
}

function UploadSection({
  onUpload,
  onFileChange,
  fileInputRef,
  onSave,
}: UploadSectionProps) {
  return (
    <div className="flex items-center justify-between rounded-lg bg-white p-1 shadow">
      <>
        <button
          onClick={onUpload}
          className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
        >
          📂 Upload Image
        </button>

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={onFileChange}
        />
      </>

      <button
        onClick={onSave}
        className="rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700"
      >
        💾 Save Annotation
      </button>
    </div>
  );
}

export default UploadSection;