import React from "react";
import { render, screen } from "@testing-library/react";
import CohortComparisonFilters from "../../../Components/CohortComparisonFilters/CohortComparisonFilters";
import * as MOCKS from "../../../__MOCKS__/mockInputs";

const SPORTS_POSITION_TEST_ID = "sports_position";
jest.mock(
  "../../../Components/CohortComparisonFilters/Subcomponents/SportPositionSelectionSection/SportPositionSelectionSection.tsx",
  () => () => <div data-testid={SPORTS_POSITION_TEST_ID} />
);

const WEIGHT_SLIDER_TEST_ID = "weight";
jest.mock(
  "../../../Components/CohortComparisonFilters/Subcomponents/WeightRangeSlider.tsx",
  () => () => <div data-testid={WEIGHT_SLIDER_TEST_ID} />
);

const HEIGHT_SLIDER_TEST_ID = "height";
jest.mock(
  "../../../Components/CohortComparisonFilters/Subcomponents/HeightRangeSlider.tsx",
  () => () => <div data-testid={HEIGHT_SLIDER_TEST_ID} />
);

describe("Requirements", () => {
  it("renders a scrollable container with a cancel and apply button", () => {
    render(
      <CohortComparisonFilters
        initialWeightRange={MOCKS.initialWeightRange}
        initialHeightRange={MOCKS.initialHeightRange}
        sportsList={MOCKS.sportsList}
      />
    );

    expect(screen.getByText("Apply Filters")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();

    expect(screen.getByTestId(SPORTS_POSITION_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(WEIGHT_SLIDER_TEST_ID)).toBeInTheDocument();
    expect(screen.getByTestId(HEIGHT_SLIDER_TEST_ID)).toBeInTheDocument();
  });

  it("renders a weight range", () => {
    render(
      <CohortComparisonFilters
        initialWeightRange={MOCKS.initialWeightRange}
        initialHeightRange={MOCKS.initialHeightRange}
        sportsList={MOCKS.sportsList}
      />
    );

    expect(screen.getByTestId(WEIGHT_SLIDER_TEST_ID)).toBeInTheDocument();
  });

  it("renders a height range", () => {
    render(
      <CohortComparisonFilters
        initialWeightRange={MOCKS.initialWeightRange}
        initialHeightRange={MOCKS.initialHeightRange}
        sportsList={MOCKS.sportsList}
      />
    );

    expect(screen.getByTestId(HEIGHT_SLIDER_TEST_ID)).toBeInTheDocument();
  });

  it("renders a sports selector and position selector", () => {
    render(
      <CohortComparisonFilters
        initialWeightRange={MOCKS.initialWeightRange}
        initialHeightRange={MOCKS.initialHeightRange}
        sportsList={MOCKS.sportsList}
      />
    );

    expect(screen.getByTestId(SPORTS_POSITION_TEST_ID)).toBeInTheDocument();
  });
});
