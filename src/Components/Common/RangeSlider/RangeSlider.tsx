import React from "react";
import { Range } from "../../../types";

interface Props {
  title: string;
  range: Range;
  updateRange: (range: Range) => void;
  toolTipFormatter?: (value: number, rangeType?: "upper" | "lower") => string;
}

const RangeSlider = (props: Props) => {
  return <div></div>;
};

export default RangeSlider;
