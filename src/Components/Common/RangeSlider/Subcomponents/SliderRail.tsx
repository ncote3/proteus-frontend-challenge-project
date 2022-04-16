// Inspired by https://github.com/sghall/react-compound-slider/blob/master/docs/src/demos/tooltips/components.tsx
import React from "react";
import { GetRailProps } from "react-compound-slider";

const railOuterStyle = {
  position: "absolute" as "absolute",
  transform: "translate(0%, -50%)",
  width: "100%",
  height: 42,
  borderRadius: 7,
  cursor: "pointer",
};

const railInnerStyle = {
  position: "absolute" as "absolute",
  width: "100%",
  height: 14,
  transform: "translate(0%, -50%)",
  borderRadius: 7,
  pointerEvents: "none" as "none",
  backgroundColor: "rgb(155,155,155)",
};

interface SliderRailProps {
  getRailProps: GetRailProps;
}

const SliderRail: React.FC<SliderRailProps> = ({ getRailProps }) => (
  <>
    <div style={railOuterStyle} {...getRailProps()} />
    <div style={railInnerStyle} />
  </>
);

export default SliderRail;
