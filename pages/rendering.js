const Spline = dynamic(() => import("@splinetool/react-spline"), {
  ssr: false,
});

import dynamic from "next/dynamic";

export default function Rendering() {
  return <Spline scene="/scene.splinecode" />;
}
