import React from "react";
import { Range } from "../../../types";
import RangeSlider from "../../Common/RangeSlider/RangeSlider";

const INCHES_IN_FEET = 12;
const FIVE_FEET_TWO_INCHES_IN_INCHES = 62;
const SIX_FEET_TEN_INCHES_IN_INCHES = 82;

interface Props {
  range: Range;
  updateRange: (range: Range) => void;
}

const HeightRangeSlider = (props: Props) => {
  const { range, updateRange } = props;

  const feetInchesFormatter = (
    inches: number,
    rangeType?: "upper" | "lower"
  ) => {
    const feetCount = Math.floor(inches / INCHES_IN_FEET);
    const inchesRemainder = inches % INCHES_IN_FEET;

    let prefix = "Under";
    if (rangeType === "upper") {
      prefix = "Over";
    }

    return `${prefix} ${feetCount}' ${inchesRemainder}"`;
  };

  return (
    <RangeSlider
      title="Height Range (feet-inches)"
      range={range}
      updateRange={updateRange}
      toolTipFormatter={feetInchesFormatter}
      rangeParameters={{
        // using named constants to clarify conversion
        upper: SIX_FEET_TEN_INCHES_IN_INCHES,
        lower: FIVE_FEET_TWO_INCHES_IN_INCHES,
        increment: 4,
      }}
    />
  );
};

export default HeightRangeSlider;
