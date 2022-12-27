import * as THREE from "three";
import { useMemo, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Line, useCursor } from "@react-three/drei";

export default function Logo({ route, ...props }) {
  const mesh = useRef(null);
  const [hovered, hover] = useState(false);
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );

  useCursor(hovered);
  useFrame((state, delta) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8);
    mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8);
    mesh.current.rotation.z -= delta / 4;
  });

  return (
    <group ref={mesh} {...props}>
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="rgb(99, 102, 241)"
        lineWidth={0.15}
      />
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="rgb(99, 102, 241)"
        lineWidth={0.15}
        rotation={[0, 0, 1]}
      />
      {/* @ts-ignore */}
      <Line
        worldUnits
        points={points}
        color="rgb(99, 102, 241)"
        lineWidth={0.15}
        rotation={[0, 0, -1]}
      />
      <mesh
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
        onClick={() => (mesh.current.rotation.y = 0)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial
          roughness={0}
          color={hovered ? "rgb(79,70,229)" : "rgb(99, 102, 241)"}
        />
      </mesh>
    </group>
  );
}
