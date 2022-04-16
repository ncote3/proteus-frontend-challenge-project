import React from "react";
import { Range, RangeParameters } from "../../../types";

interface Props {
  title: string;
  rangeParameters: RangeParameters;
  range: Range;
  updateRange: (range: Range) => void;
  toolTipFormatter?: (value: number, rangeType?: "upper" | "lower") => string;
}

const RangeSlider = (props: Props) => {
  const { title, rangeParameters, range, updateRange, toolTipFormatter } =
    props;

  const _renderHeader = () => {
    return (
      <div>
        <div>{title}</div>
        <div
          onClick={() =>
            updateRange({
              ...range,
              upper: rangeParameters.upper,
              lower: rangeParameters.lower,
            })
          }
        >
          Clear
        </div>
      </div>
    );
  };

  return <div>{_renderHeader()}</div>;
};

export default RangeSlider;
