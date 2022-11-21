import React, { Component } from "react";
import Spline from "@splinetool/react-spline";

class Background extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return <Spline scene="/3d.splinecode" />;
  }
}

export default Background;
