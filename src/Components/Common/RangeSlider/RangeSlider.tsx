import React from "react";
import InputRange from "react-input-range";
import { Range, RangeParameters } from "../../../types";
import "react-input-range/lib/css/index.css";
import "./styles.css";
import "./sliderStyles.css";

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
      <div className="header">
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

  const _handleSliderFormatting = (value: number) => {
    let formatted = `${value} ${range.unit}`;

    if (toolTipFormatter) {
      let rangeType: "min" | "max" = "min";

      if (value === range.max) {
        rangeType = "max";
      }

      formatted = toolTipFormatter(value, rangeType);
    }

    return formatted;
  };

  return (
    <div className="range_slider__container">
      {_renderHeader()}
      <form>
        <InputRange
          maxValue={rangeParameters.max}
          minValue={rangeParameters.min}
          step={rangeParameters.step}
          formatLabel={(value) => _handleSliderFormatting(value)}
          value={{
            min: range.min,
            max: range.max,
          }}
          onChange={(newRange) =>
            updateRange({
              ...range,
              ...(newRange as { min: number; max: number }),
            })
          }
        />
      </form>
    </div>
  );
};

export default RangeSlider;
