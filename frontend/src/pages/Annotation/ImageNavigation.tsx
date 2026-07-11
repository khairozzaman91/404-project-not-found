interface ImageNavigationProps {
  currentIndex: number;
  totalImages: number;
  onPrevious: () => void;
  onNext: () => void;
}

function ImageNavigation({
  currentIndex,
  totalImages,
  onPrevious,
  onNext,
}: ImageNavigationProps) {
  return (
    <div className="flex items-center justify-center gap-8 rounded-lg bg-white p-1 shadow">
      <button
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="rounded border px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        ← Previous
      </button>

      <h2 className="font-semibold text-slate-700">
        Image {totalImages === 0 ? 0 : currentIndex + 1} / {totalImages}
      </h2>

      <button
        onClick={onNext}
        disabled={currentIndex === totalImages - 1 || totalImages === 0}
        className="rounded border px-4 py-2 hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
      >
        Next →
      </button>
    </div>
  );
}

export default ImageNavigation;