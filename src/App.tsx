import React from "react";
import "./App.css";
import CohortComparisonFilters from "./Components/CohortComparisonFilters/CohortComparisonFilters";
import { Range, Sport } from "./types";

function App() {
  const initialWeightRange: Range = {
    max: 0,
    min: 0,
    unit: "pounds",
  };

  const initialHeightRange: Range = {
    max: 0,
    min: 0,
    unit: "inches",
  };

  const names = [
    "Baseball",
    "Basketball",
    "Football",
    "Hockey",
    "Soccer",
    "Softball",
    "Track & Field",
    "Volleyball",
    "Golf",
    "Tennis",
    "Weightlifting",
    "Sport1",
    "Sport2",
    "Sport3",
    "Sport4",
    "Sport5",
  ];
  const positions = [
    "Position1",
    "Position2",
    "Position3",
    "Position4",
    "Position5",
  ];

  const sportsList: Sport[] = names.map((name) => {
    return {
      positions,
      name,
    };
  });

  return (
    <div className="App">
      <CohortComparisonFilters
        initialWeightRange={initialWeightRange}
        initialHeightRange={initialHeightRange}
        sportsList={sportsList}
      />
    </div>
  );
}

export default App;
