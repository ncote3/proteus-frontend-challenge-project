import React, { useState } from "react";
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

  const [weightRange, updateWeightRange] = useState<Range>(initialWeightRange);
  const [heightRange, updateHeightRange] = useState<Range>(initialHeightRange);
  const [sportSelection, updateSportSelection] = useState<string>("All");
  const [positionSelection, updatePositionSelection] = useState<string>("");

  return (
    <div>
      <h2>Cohort Comparison Filters</h2>
      {/* <WeightRangeSlider range={weightRange} updateRange={updateWeightRange} />
      <HeightRangeSlider range={heightRange} updateRange={updateHeightRange} /> */}
      <SportPositionSelectionSection
        sportsList={sportsList}
        selectedSport={sportSelection}
        updateSelectedSport={updateSportSelection}
        selectedPosition={positionSelection}
        updateSelectedPosition={updatePositionSelection}
      />
      <div>
        <div
          onClick={() =>
            console.info(
              weightRange,
              heightRange,
              sportSelection,
              positionSelection
            )
          }
        >
          Cancel
        </div>
        <div onClick={() => console.info("Cancel")}>Apply Filters</div>
      </div>
    </div>
  );
};

export default CohortComparisonFilters;
