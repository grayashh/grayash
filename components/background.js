import Spline from "@splinetool/react-spline";

import dynamic from "next/dynamic";

let DynamicSpline = dynamic(() => Promise.resolve(Spline), {
  ssr: false,
});

export default function Back() {
  return <DynamicSpline scene="3d.spline" />;
}
