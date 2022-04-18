import { Sport, Range } from "../types";

export const initialWeightRange: Range = {
  max: 295,
  min: 70,
  unit: "lbs",
};

export const initialHeightRange: Range = {
  max: 82,
  min: 62,
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
