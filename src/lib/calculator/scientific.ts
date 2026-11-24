
import { evaluateExpression } from "./parser";
import { toPlainNumber } from "./formatter";
import type { AngleMode } from "./types";

export function calculateScientific(
  expression: string,
  angleMode: AngleMode,
  previousAnswer = 0
) {
  const result = evaluateExpression(
    expression,
    angleMode,
    previousAnswer
  );

  return {
    value: result,
    formatted: toPlainNumber(result),
  };
}

export function calculatePercentage(
  value: number,
  percentage: number
) {
  return (value * percentage) / 100;
}

export function calculateReciprocal(value: number) {
  if (value === 0) {
    throw new Error("Cannot divide by zero");
  }

  return 1 / value;
}

export function calculateSquare(value: number) {
  return value * value;
}

export function calculateCube(value: number) {
  return value * value * value;
}
