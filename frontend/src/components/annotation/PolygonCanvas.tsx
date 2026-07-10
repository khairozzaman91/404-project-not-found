import { useEffect, useState } from "react";
import {
  Stage,
  Layer,
  Image as KonvaImage,
  Circle,
  Line,
} from "react-konva";

interface PolygonCanvasProps {
  imageUrl?: string;
  isDrawing: boolean;
}

    function PolygonCanvas({
      imageUrl,
      isDrawing,
    }: PolygonCanvasProps)  {
      const [image, setImage] = useState<HTMLImageElement | null>(null);
      const [points, setPoints] = useState<number[]>([]);
      const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    if (!imageUrl) {
      setImage(null);
      setPoints([]);
      setIsClosed(false);
      return;
    }

    const img = new window.Image();
    img.src = imageUrl;

    img.onload = () => {
      setImage(img);
      setPoints([]);
      setIsClosed(false);
    };
  }, [imageUrl]);

        const handleStageClick = (e: any) => {
        
          if (!isDrawing) return;
          if (isClosed) return;

          const stage = e.target.getStage();
          const pointer = stage.getPointerPosition();

          if (!pointer) return;

          setPoints((prev) => [
            ...prev,
            pointer.x,
            pointer.y,
          ]);
        };

  const handleDoubleClick = () => {
    // Minimum 3 points required
    if (points.length >= 6) {
      setIsClosed(true);
    }
  };

  return (
    <div className="flex h-full w-full items-center justify-center">
      <Stage
        width={600}
        height={300}
        onClick={handleStageClick}
        onDblClick={handleDoubleClick}
      >
        <Layer>
          {image && (
            <KonvaImage
              image={image}
              width={700}
              height={400}
            />
          )}

          {points.length >= 2 && (
            <Line
              points={points}
              closed={isClosed}
              stroke="red"
              strokeWidth={2}
              fill={isClosed ? "rgba(255,0,0,0.25)" : undefined}
            />
          )}

          {points.map((_, index) => {
            if (index % 2 !== 0) return null;

            return (
              <Circle
                key={index}
                x={points[index]}
                y={points[index + 1]}
                radius={4}
                fill="red"
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
}

export default PolygonCanvas;