import React from "react";
import { Range } from "../../../types";
import RangeSlider from "../../Common/RangeSlider/RangeSlider";

interface Props {
  range: Range;
  updateRange: (range: Range) => void;
}

const WeightRangeSlider = (props: Props) => {
  const { range, updateRange } = props;

  return (
    <RangeSlider
      title="Weight Range (lbs)"
      range={range}
      updateRange={updateRange}
    />
  );
};

export default WeightRangeSlider;
