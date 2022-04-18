import React from "react";
import "./App.css";
import CohortComparisonFilters from "./Components/CohortComparisonFilters/CohortComparisonFilters";
import * as MOCKS from "./__MOCKS__/mockInputs";

function App() {
  return (
    <div className="app__container">
      <div className="app__container--Cohort_Comparison_Filters scroll-bar">
        <CohortComparisonFilters
          initialWeightRange={MOCKS.initialWeightRange}
          initialHeightRange={MOCKS.initialHeightRange}
          sportsList={MOCKS.sportsList}
        />
      </div>
    </div>
  );
}

export default App;
