import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import dynamic from "next/dynamic";
import { Suspense } from "react";

const Rendering = dynamic(() => import("../components/rendering"), {
  ssr: false,
});

export default function Background() {
  return (
    <Suspense fallback={null}>
      <Canvas
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
