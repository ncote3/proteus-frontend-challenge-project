import React from "react";
import { Range } from "../../../types";

interface Props {
  range: Range;
  updateRange: (range: Range) => void;
  toolTipFormatter?: (value: number) => string;
}

const RangeSlider = (props: Props) => {
  return <div></div>;
};

export default RangeSlider;
