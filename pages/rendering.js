const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

export default function Rendering() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <Spline scene="https://prod.spline.design/uAXONVPhbrhy3Tzi/scene.splinecode" />
  );
}
