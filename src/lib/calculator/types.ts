

export type CalculatorTab =
  | "scientific"
  | "geometry"
  | "programmer"
  | "statistics"
  | "engineering"
  | "finance"
  | "graphing"
  | "converter"
  | "history";


export type AngleMode = "DEG" | "RAD";

export type NumberFormat =
  | "standard"
  | "scientific"
  | "engineering";

export interface CalculationRecord {
  id: string;
  expression: string;
  result: string;
  timestamp: number;
  category: CalculatorTab;
}

export interface CalculatorSettings {
  angleMode: AngleMode;
  numberFormat: NumberFormat;
  decimalPlaces: number;
  soundEnabled: boolean;
  vibrationEnabled: boolean;
}

export interface CalculatorResult {
  label: string;
  value: number | string;
  unit?: string;
  description?: string;
}

export interface CalculatorError {
  message: string;
  field?: string;
}

export interface UnitOption {
  label: string;
  value: string;
  factor?: number;
}

export interface GeometryInput {
  shape: string;
  dimensions: Record<string, number>;
}

export interface StatisticsData {
  values: number[];
  count: number;
  sum: number;
  mean: number;
  median: number;
  mode: number[];
  minimum: number;
  maximum: number;
  range: number;
  variance: number;
  standardDeviation: number;
}

export interface FinanceInput {
  principal: number;
  annualRate: number;
  years: number;
  compoundingFrequency: number;
}

export const DEFAULT_SETTINGS: CalculatorSettings = {
  angleMode: "DEG",
  numberFormat: "standard",
  decimalPlaces: 6,
  soundEnabled: false,
  vibrationEnabled: false,
};



export interface CalculationHistoryItem {
  id: string;
  expression: string;
  result: string;
  timestamp: number;
}
