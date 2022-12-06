import Spline from "@splinetool/react-spline";

export default function Rendering() {
  return (
    <Spline
      className="spline"
      style={{ position: "fixed", zIndex: 0 }}
      scene="/scene.splinecode"
    />
  );
}
