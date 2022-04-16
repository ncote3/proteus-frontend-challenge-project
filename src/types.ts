export type Unit = "inches" | "pounds";

export interface Range {
  max: number;
  min: number;
  unit: Unit;
}

export interface Sport {
  name: string;
  positions: string[];
}

export interface RangeParameters {
  max: number;
  min: number;
  step: number;
}

export interface ShowAllParameters {
  showAllText: string;
  showAllTrigger: number;
}
