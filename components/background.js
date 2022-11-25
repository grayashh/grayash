import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense, useEffect, useRef } from "react";

export default function Background() {
  const Rendering = dynamic(() => import("../components/rendering"), {
    ssr: false,
  });
  const canvasRef = useRef < HTMLCanvasElement > null;

  return (
    <Suspense fallback={null}>
      <Canvas
        itemRef={canvasRef}
        shadows
        flat
        linear
        style={{
          position: "fixed",
          zIndex: "0",
        }}
      >
        <Rendering />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
}
