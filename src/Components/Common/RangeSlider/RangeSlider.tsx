import React from "react";
import { Handles, Rail, Slider, Tracks } from "react-compound-slider";
import { Range, RangeParameters } from "../../../types";
import Handle from "./Subcomponents/Handle";
import SliderRail from "./Subcomponents/SliderRail";
import Track from "./Subcomponents/Track";

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

  const sliderStyle = {
    position: "relative" as "relative",
    width: "100%",
  };

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
      <Slider
        mode={2}
        step={rangeParameters.step}
        domain={[rangeParameters.min, rangeParameters.max]}
        rootStyle={sliderStyle}
        onChange={_handleSliderChange}
        values={[range.max, range.min]}
      >
        {/* @ts-ignore*/}
        <Rail>
          {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
        </Rail>
        {/* @ts-ignore */}
        <Handles>
          {({ handles, activeHandleID, getHandleProps }) => (
            <div className="slider-handles">
              {handles.map((handle) => (
                <Handle
                  key={handle.id}
                  handle={handle}
                  domain={[rangeParameters.min, rangeParameters.max]}
                  isActive={handle.id === activeHandleID}
                  getHandleProps={getHandleProps}
                />
              ))}
            </div>
          )}
        </Handles>
        {/* @ts-ignore */}
        <Tracks left={false} right={false}>
          {({ tracks, getTrackProps }) => (
            <div className="slider-tracks">
              {tracks.map(({ id, source, target }) => (
                <Track
                  key={id}
                  source={source}
                  target={target}
                  getTrackProps={getTrackProps}
                />
              ))}
            </div>
          )}
        </Tracks>
      </Slider>
    </div>
  );
};

export default RangeSlider;
