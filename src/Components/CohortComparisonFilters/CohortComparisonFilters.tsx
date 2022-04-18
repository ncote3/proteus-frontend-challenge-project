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

  const titleStyles: React.CSSProperties = {
    textAlign: "left",
  };
  const comparisonFiltersContainerStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    rowGap: "1.5em",
  };
  const submissionContainerStyle: React.CSSProperties = {
    display: "flex",
    justifyContent: "flex-end",
    columnGap: "1.5em",
    alignItems: "center",
    borderTop: "1px solid lightgrey",
    padding: "1em",
  };
  const cancelButtonStyles: React.CSSProperties = {
    fontWeight: "500",
  };
  const submitButtonStyles: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    borderRadius: "40px",
    paddingLeft: ".75em",
    paddingRight: ".75em",
    paddingTop: ".4em",
    paddingBottom: ".4em",
    fontSize: "11pt",
  };

  return (
    <div style={comparisonFiltersContainerStyles}>
      <h2 style={titleStyles}>Cohort Comparison Filters</h2>
      <WeightRangeSlider range={weightRange} updateRange={updateWeightRange} />
      <HeightRangeSlider range={heightRange} updateRange={updateHeightRange} />
      <SportPositionSelectionSection
        sportsList={sportsList}
        selectedSport={sportSelection}
        updateSelectedSport={updateSportSelection}
        selectedPosition={positionSelection}
        updateSelectedPosition={updatePositionSelection}
      />
      <div style={submissionContainerStyle}>
        <div style={cancelButtonStyles} onClick={() => console.info("Cancel")}>
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
          style={submitButtonStyles}
        >
          Apply Filters
        </div>
      </div>
    </div>
  );
};

export default CohortComparisonFilters;
