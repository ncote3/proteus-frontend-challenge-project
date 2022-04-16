export type Unit = "inches" | "pounds";

export interface Range {
  upper: number;
  lower: number;
  unit: Unit;
}

export interface Sport {
  name: string;
  positions: string[];
}
