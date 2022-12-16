import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload } from "@react-three/drei";

export default function Scene({ children, ...props }) {
  // Everything defined in here will persist between route changes, only children are swapped
  return (
    <Canvas
      {...props}
      style={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        top: 0,
        zIndex: 0,
      }}
    >
      {children}
      <Preload all />
      <directionalLight intensity={0.75} />
      <ambientLight intensity={0.75} />
      <OrbitControls />
    </Canvas>
  );
}
