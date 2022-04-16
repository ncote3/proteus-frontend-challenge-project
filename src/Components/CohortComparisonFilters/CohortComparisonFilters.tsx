import React from "react";
import { Range, Sport } from "../../types";
import HeightRangeSlider from "./Subcomponents/HeightRangeSlider";
import SportPositionSelectionSection from "./Subcomponents/SportPositionSelectionSection";
import WeightRangeSlider from "./Subcomponents/WeightRangeSlider";

interface Props {
  initialWeightRange: Range;
  initialHeightRange: Range;
  sportsList: Sport[];
}

const CohortComparisonFilters = (props: Props) => {
  const { initialWeightRange, initialHeightRange, sportsList } = props;

  return (
    <div>
      <h2>Cohort Comparison Filters</h2>
      <WeightRangeSlider
        range={undefined as unknown as Range}
        updateRange={function (range: Range): void {
          throw new Error("Function not implemented.");
        }}
      />
      <HeightRangeSlider
        range={undefined as unknown as Range}
        updateRange={function (range: Range): void {
          throw new Error("Function not implemented.");
        }}
      />
      <SportPositionSelectionSection sportsList={sportsList} />
      <div>
        <div onClick={() => null}>Cancel</div>
        <div onClick={() => null}>Apply Filters</div>
      </div>
    </div>
  );
};

export default CohortComparisonFilters;
