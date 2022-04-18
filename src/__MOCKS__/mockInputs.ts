import { Sport, Range } from "../types";

export const initialWeightRange: Range = {
  max: 0,
  min: 0,
  unit: "pounds",
};

export const initialHeightRange: Range = {
  max: 0,
  min: 0,
  unit: "inches",
};

export const names = [
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
export const positions = [
  "Position1",
  "Position2",
  "Position3",
  "Position4",
  "Position5",
];

export const sportsList: Sport[] = names.map((name) => {
  return {
    positions,
    name,
  };
});
