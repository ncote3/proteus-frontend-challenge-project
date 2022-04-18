import React, { useState } from "react";
import { Range, Sport } from "../../types";
import HeightRangeSlider from "./Subcomponents/HeightRangeSlider";
import SportPositionSelectionSection from "./Subcomponents/SportPositionSelectionSection/SportPositionSelectionSection";
import WeightRangeSlider from "./Subcomponents/WeightRangeSlider";
import "./styles.css";

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
    <div className="comparison_filters__container ">
      <h2 className="container_header">Cohort Comparison Filters</h2>
      <div className="scroll_bar">
        <WeightRangeSlider
          range={weightRange}
          updateRange={updateWeightRange}
        />
        <HeightRangeSlider
          range={heightRange}
          updateRange={updateHeightRange}
        />
        <SportPositionSelectionSection
          sportsList={sportsList}
          selectedSport={sportSelection}
          updateSelectedSport={updateSportSelection}
          selectedPosition={positionSelection}
          updateSelectedPosition={updatePositionSelection}
        />
      </div>

      <div className="submission_buttons__container">
        <div className="cancel_button" onClick={() => console.info("Cancel")}>
          Cancel
        </div>
        <div
          onClick={() =>
            console.info(
              weightRange,
              heightRange,
              sportSelection,
              positionSelection
            )
          }
          className="submit_button"
        >
          Apply Filters
        </div>
      </div>
    </div>
  );
};

export default CohortComparisonFilters;
