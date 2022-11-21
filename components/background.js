import React from "react";
import Spline from "@splinetool/react-spline";

class Background extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Spline scene="https://prod.spline.design/3ioTEE5tnYDlyNJV/scene.splinecode" />
    );
  }
}

export default Background;
