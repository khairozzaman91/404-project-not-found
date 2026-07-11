import { useRef, useState } from "react";
import PolygonCanvas from "./PolygonCanvas";
import PolygonList from "./PolygonList";
import Toolbar from "./Toolbar";

export default function ImageViewer({ selectedImage }: any) {
  const canvasRef = useRef<any>(null);
  const [polygonList, setPolygonList] = useState<number[][]>([]);
  const [selectedPolygon, setSelectedPolygon] = useState<number | null>(null);

  return (
    <div className="flex h-full gap-4 p-4">

      <div className="flex-[0.7] flex flex-col">
        <Toolbar 
          onFinish={() => canvasRef.current?.finishPolygon()}
          onUndo={() => canvasRef.current?.undoPoint()}
          onClear={() => canvasRef.current?.clearCurrentPolygon()}
        />
        <div className="flex-1 border-2 border-dashed border-slate-300 rounded-lg overflow-hidden">
          <PolygonCanvas 
            ref={canvasRef} 
            imageUrl={selectedImage?.image} 
            polygons={polygonList} 
            onPolygonsChange={setPolygonList} 
            isDrawing={true} 
          />
        </div>
      </div>
      

      <div className="flex-[0.3]">
        <PolygonList 
          polygonList={polygonList} 
          selectedPolygon={selectedPolygon} 
          setSelectedPolygon={setSelectedPolygon} 
        />
      </div>
    </div>
  );
}