import React, { FC } from "react";
import "./Playground.css";

interface PlaygroundProps {}

const Playground: FC<PlaygroundProps> = () => (
  <div className="outerWrapper">
    <div className="innerWrapper">
      <div className="playground">
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
        <div className="field"></div>
      </div>
    </div>
  </div>
);

export default Playground;
