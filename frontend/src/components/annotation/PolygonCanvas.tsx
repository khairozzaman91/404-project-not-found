import {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
  useRef,
} from "react";
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
  polygons?: number[][];
  onPolygonsChange?: (polygons: number[][]) => void;
}

export interface PolygonCanvasRef {
  finishPolygon: () => void;
  undoPoint: () => void;
  clearCurrentPolygon: () => void;
  deletePolygon: (index: number) => void;
  zoomIn: () => void;
  zoomOut: () => void;
}

const PolygonCanvas = forwardRef<
  PolygonCanvasRef,
  PolygonCanvasProps
>(({ imageUrl, isDrawing, polygons: externalPolygons = [], onPolygonsChange }, ref) => {

  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [currentPoints, setCurrentPoints] = useState<number[]>([]);
  const [canvasPolygons, setCanvasPolygons] = useState<number[][]>([]);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ width: 580, height: 420 });
  const [imageSize, setImageSize] = useState({ width: 580, height: 400 });
  const [imagePosition, setImagePosition] = useState({
      x: 0,
      y: 0,
    });
  const [scale, setScale] = useState(1);

  // Stage size update
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        setStageSize({
          width: Math.min(containerWidth - 40, 580),   
          height: 420,
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  // Image load + fit
  useEffect(() => {
    if (!imageUrl) {
      setImage(null);
      setCurrentPoints([]);
      return;
    }

    const img = new window.Image();
    img.src = imageUrl;

    
        img.onload = () => {
          setImage(img);

          const ratio = Math.min(
            stageSize.width / img.width,
            stageSize.height / img.height
          );

          const width = img.width * ratio;
          const height = img.height * ratio;

          setImageSize({
            width,
            height,
          });

          setImagePosition({
            x: (stageSize.width - width) / 2,
            y: (stageSize.height - height) / 2,
          });
        };

  }, [imageUrl, stageSize]);

  useEffect(() => {
    setCanvasPolygons(externalPolygons);
  }, [externalPolygons]);

        const handleStageClick = (e: any) => {
            if (!isDrawing) return;

            const stage = e.target.getStage();
            const layer = e.target.getLayer();

            if (!stage || !layer) return;

            const transform = layer.getAbsoluteTransform().copy();
            transform.invert();

            const pos = stage.getPointerPosition();

            if (!pos) return;

            const pointer = transform.point(pos);

            if (
              pointer.x < imagePosition.x ||
              pointer.x > imagePosition.x + imageSize.width ||
              pointer.y < imagePosition.y ||
              pointer.y > imagePosition.y + imageSize.height
            ) {
              return;
            }

            setCurrentPoints((prev) => [
              ...prev,
              pointer.x,
              pointer.y,
            ]);
          };

      const finishPolygon = () => {
            if (currentPoints.length < 6) return;

            const updated = [...canvasPolygons, currentPoints];

            setCanvasPolygons(updated);
            onPolygonsChange?.(updated);

            setCurrentPoints([]);
          };

      useImperativeHandle(ref, () => ({
        finishPolygon,
        undoPoint() {
          setCurrentPoints((prev) => prev.slice(0, prev.length - 2));
        },
        clearCurrentPolygon() {
          setCurrentPoints([]);
        },
        deletePolygon(index: number) {
          const updated = canvasPolygons.filter((_, i) => i !== index);
          setCanvasPolygons(updated);
          onPolygonsChange?.(updated);
        },
        zoomIn() {
          setScale((prev) => Math.min(prev + 0.2, 3));
        },
        zoomOut() {
          setScale((prev) => Math.max(prev - 0.2, 0.5));
        },
      }));

  return (
    <div 
      ref={containerRef}
      className="flex h-full w-full items-center justify-center overflow-hidden"
    >
      <Stage
        width={stageSize.width}
        height={stageSize.height}
        onClick={handleStageClick}
      >
        <Layer
          scaleX={scale}
          scaleY={scale}
          x={(stageSize.width - stageSize.width * scale) / 2}
          y={(stageSize.height - stageSize.height * scale) / 2}
        >
          {image && (
           <KonvaImage
              image={image}
              width={imageSize.width}
              height={imageSize.height}
              x={imagePosition.x}
              y={imagePosition.y}
              listening={false}
            />
          )}

          {canvasPolygons.map((polygon, index) => (
            <Line
              key={index}
              points={polygon}
              closed
              stroke="red"
              strokeWidth={2}
              fill="rgba(255,0,0,0.25)"
            />
          ))}

          {currentPoints.length >= 2 && (
            <Line points={currentPoints} stroke="red" strokeWidth={2} />
          )}

          {currentPoints.map((_, index) => {
            if (index % 2 !== 0) return null;
            return (
              <Circle
                key={index}
                x={currentPoints[index]}
                y={currentPoints[index + 1]}
                radius={4}
                fill="red"
              />
            );
          })}
        </Layer>
      </Stage>
    </div>
  );
});

export default PolygonCanvas;