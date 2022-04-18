import React from "react";
import InputRange from "react-input-range";
import { Range, RangeParameters } from "../../../types";
import "react-input-range/lib/css/index.css";

interface Props {
  title: string;
  rangeParameters: RangeParameters;
  range: Range;
  updateRange: (range: Range) => void;
  toolTipFormatter?: (value: number, rangeType?: "min" | "max") => string;
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
              max: rangeParameters.max,
              min: rangeParameters.min,
            })
          }
        >
          Clear
        </div>
      </div>
    );
  };

  const _handleSliderChange = (domain: readonly number[]) => {};

  return (
    <div>
      {_renderHeader()}
      <form style={{ margin: "0 auto", padding: "10px 30px 0" }}>
        <InputRange
          maxValue={20}
          minValue={0}
          formatLabel={(value) => `${value} kg`}
          value={{
            min: 5,
            max: 10,
          }}
          onChange={(value) => null}
          onChangeComplete={(value) => console.log(value)}
        />
      </form>
    </div>
  );
};

export default RangeSlider;
