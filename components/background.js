import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import Rendering from "./rendering";

export default function Background() {
  const canvasRef = useRef < HTMLCanvasElement > null;

  return (
    <Suspense fallback={null}>
      <Canvas
        ref={canvasRef}
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
