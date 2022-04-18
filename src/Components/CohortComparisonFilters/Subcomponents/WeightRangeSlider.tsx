import React from "react";
import { Range } from "../../../types";
import RangeSlider from "../../Common/RangeSlider/RangeSlider";

interface Props {
  range: Range;
  updateRange: (range: Range) => void;
}

const WeightRangeSlider = (props: Props) => {
  const { range, updateRange } = props;

  const weightFormatter = (weight: number, rangeType?: "min" | "max") => {
    let prefix = "Under";
    if (rangeType === "max") {
      prefix = "Over";
    }

    return `${prefix} ${weight} ${range.unit}`;
  };

  return (
    <RangeSlider
      title="Weight Range (lbs)"
      range={range}
      updateRange={updateRange}
      rangeParameters={{
        // values are in lbs
        max: 295,
        min: 70,
        step: 15,
      }}
      toolTipFormatter={weightFormatter}
    />
  );
};

export default WeightRangeSlider;
