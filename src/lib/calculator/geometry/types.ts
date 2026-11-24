
export type GeometryCategory = "2d" | "3d";

export type ShapeType =
  | "square"
  | "rectangle"
  | "circle"
  | "triangle"
  | "parallelogram"
  | "trapezoid"
  | "cube"
  | "cuboid"
  | "sphere"
  | "cylinder"
  | "cone"
  | "hemisphere";

export interface ShapeConfig {
  id: ShapeType;
  name: string;
  category: GeometryCategory;
  description: string;
  inputs: string[];
}

export interface GeometryInput {
  [key: string]: number;
}

export interface GeometryResult {
  area?: number;
  perimeter?: number;
  circumference?: number;
  volume?: number;
  surfaceArea?: number;
  lateralSurfaceArea?: number;
  diagonal?: number;
  height?: number;
  slantHeight?: number;
}
