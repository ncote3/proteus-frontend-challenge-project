// Inspired by https://github.com/sghall/react-compound-slider/blob/master/docs/src/demos/tooltips/components.tsx

import React, { useState } from "react";
import { GetHandleProps, SliderItem } from "react-compound-slider";

interface Props {
  isActive: boolean;
  domain: number[];
  handle: SliderItem;
  getHandleProps: GetHandleProps;
  disabled?: boolean;
}

const Handle = (props: Props) => {
  const {
    domain: [min, max],
    handle: { id, value, percent },
    isActive,
    disabled,
    getHandleProps,
  } = props;

  const [mouseOver, setMouseover] = useState<Boolean>(false);

  return (
    <>
      {(mouseOver || isActive) && !disabled ? (
        <div
          style={{
            left: `${percent}%`,
            position: "absolute",
            marginLeft: "-11px",
            marginTop: "-35px",
          }}
        >
          <div className="tooltip">
            <span className="tooltiptext">Value: {value}</span>
          </div>
        </div>
      ) : null}
      <div
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 400,
          width: 26,
          height: 42,
          cursor: "pointer",
          backgroundColor: "none",
        }}
        {...getHandleProps(id, {
          onMouseEnter: setMouseover(true),
          onMouseLeave: setMouseover(false),
        })}
      />
      <div
        role="slider"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={value}
        style={{
          left: `${percent}%`,
          position: "absolute",
          transform: "translate(-50%, -50%)",
          WebkitTapHighlightColor: "rgba(0,0,0,0)",
          zIndex: 300,
          width: 24,
          height: 24,
          border: 0,
          borderRadius: "50%",
          boxShadow: "1px 1px 1px 1px rgba(0, 0, 0, 0.2)",
          backgroundColor: disabled ? "#666" : "#8b6068",
        }}
      />
    </>
  );
};

export default Handle;
