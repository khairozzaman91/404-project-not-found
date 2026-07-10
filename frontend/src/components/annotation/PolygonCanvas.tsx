import {
  useEffect,
  useState,
  forwardRef,
  useImperativeHandle,
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
          >(({ imageUrl, isDrawing,polygons: externalPolygons = [], onPolygonsChange }, ref) => {
          const [image, setImage] = useState<HTMLImageElement | null>(null);
          const [currentPoints, setCurrentPoints] = useState<number[]>([]);
          const [canvasPolygons, setCanvasPolygons] = useState<number[][]>([]);
          const [scale, setScale] = useState(1);

          useEffect(() => {
                if (!imageUrl) {
                  setImage(null);
                  setCurrentPoints([]);
                  setCanvasPolygons([]);
                  return;
                }

            const img = new window.Image();
            img.src = imageUrl;

           img.onload = () => {
              setImage(img);
              setCurrentPoints([]);
              setCanvasPolygons([]);
              
            };

          }, [imageUrl]);
          useEffect(() => {
              setCanvasPolygons(externalPolygons);
            }, [externalPolygons]);

          const handleStageClick = (e: any) => {
            if (!isDrawing) return;

            const stage = e.target.getStage();
            const pointer = stage.getPointerPosition();

            if (!pointer) return;

            setCurrentPoints((prev) => [
              ...prev,
              pointer.x,
              pointer.y,
            ]);
          };

            const finishPolygon = () => {
              if (currentPoints.length < 6) return;

              setCanvasPolygons((prev) => {
                const updated = [...prev, currentPoints];

                onPolygonsChange?.(updated);

                return updated;
              });

              setCurrentPoints([]);
            };

            useImperativeHandle(ref, () => ({
                        finishPolygon,

                        undoPoint() {
                          setCurrentPoints((prev) =>
                            prev.slice(0, prev.length - 2)
                          );
                        },

                        clearCurrentPolygon() {
                          setCurrentPoints([]);
                        },

                        deletePolygon(index: number) {
                          setCanvasPolygons((prev) => {
                            const updated = prev.filter((_, i) => i !== index);

                            onPolygonsChange?.(updated);

                            return updated;
                          });
                        },

                        zoomIn() {
                          setScale((prev) => Math.min(prev + 0.2, 3));
                        },

                        zoomOut() {
                          setScale((prev) => Math.max(prev - 0.2, 0.5));
                        },
                      }));

          

  return (
    <div className="flex h-full w-full items-center justify-center">
          <Stage
            width={600}
            height={300}
            onClick={handleStageClick}
          >
            <Layer
              scaleX={scale}
              scaleY={scale}
              x={(600 - 600 * scale) / 2}
              y={(300 - 300 * scale) / 2}
            >
              {image && (
                <KonvaImage
                  image={image}
                  width={600}
                  height={300}
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
                <Line
                  points={currentPoints}
                  stroke="red"
                  strokeWidth={2}
                />
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
})

export default PolygonCanvas;