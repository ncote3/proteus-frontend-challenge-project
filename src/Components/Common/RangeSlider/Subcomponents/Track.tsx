// Inspired by https://github.com/sghall/react-compound-slider/blob/master/docs/src/demos/tooltips/components.tsx

import React from "react";
import { GetTrackProps, SliderItem } from "react-compound-slider";

interface TrackProps {
  source: SliderItem;
  target: SliderItem;
  getTrackProps: GetTrackProps;
  disabled?: boolean;
}

const Track: React.FC<TrackProps> = ({
  source,
  target,
  getTrackProps,
  disabled,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        transform: "translate(0%, -50%)",
        height: 14,
        zIndex: 1,
        backgroundColor: disabled ? "#999" : "#6d4b51",
        borderRadius: 7,
        cursor: "pointer",
        left: `${source.percent}%`,
        width: `${target.percent - source.percent}%`,
      }}
      {...getTrackProps()}
    />
  );
};

export default Track;
