
import type { ShapeConfig } from "./types";

export const SHAPES: ShapeConfig[] = [
  {
    id: "square",
    name: "Square",
    category: "2d",
    description: "Four equal sides",
    inputs: ["side"],
  },
  {
    id: "rectangle",
    name: "Rectangle",
    category: "2d",
    description: "Length and width",
    inputs: ["length", "width"],
  },
  {
    id: "circle",
    name: "Circle",
    category: "2d",
    description: "Circular geometry",
    inputs: ["radius"],
  },
  {
    id: "triangle",
    name: "Triangle",
    category: "2d",
    description: "Three-sided polygon",
    inputs: ["a", "b", "c"],
  },
  {
    id: "parallelogram",
    name: "Parallelogram",
    category: "2d",
    description: "Opposite sides parallel",
    inputs: ["base", "height", "side"],
  },
  {
    id: "trapezoid",
    name: "Trapezoid",
    category: "2d",
    description: "One pair of parallel sides",
    inputs: ["a", "b", "height"],
  },
  {
    id: "cube",
    name: "Cube",
    category: "3d",
    description: "Six equal square faces",
    inputs: ["side"],
  },
  {
    id: "cuboid",
    name: "Cuboid",
    category: "3d",
    description: "Three dimensions",
    inputs: ["length", "width", "height"],
  },
  {
    id: "sphere",
    name: "Sphere",
    category: "3d",
    description: "Three-dimensional sphere",
    inputs: ["radius"],
  },
  {
    id: "cylinder",
    name: "Cylinder",
    category: "3d",
    description: "Circular base and height",
    inputs: ["radius", "height"],
  },
  {
    id: "cone",
    name: "Cone",
    category: "3d",
    description: "Circular base and apex",
    inputs: ["radius", "height"],
  },
  {
    id: "hemisphere",
    name: "Hemisphere",
    category: "3d",
    description: "Half of a sphere",
    inputs: ["radius"],
  },
];

export const INPUT_LABELS: Record<string, string> = {
  side: "Side",
  length: "Length",
  width: "Width",
  radius: "Radius",
  height: "Height",
  a: "Side A",
  b: "Side B",
  c: "Side C",
  base: "Base",
};
