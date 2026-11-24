
import { evaluateExpression } from "../parser";
import type { AngleMode } from "../types";

export interface GraphPoint {
  x: number;
  y: number | null;
}

export function generateGraph(
  expression: string,
  min: number,
  max: number,
  step: number,
  mode: AngleMode = "RAD"
): GraphPoint[] {
  if (
    !Number.isFinite(min) ||
    !Number.isFinite(max) ||
    !Number.isFinite(step) ||
    min >= max ||
    step <= 0
  ) {
    throw new Error("Invalid graph range");
  }

  const count = Math.floor((max - min) / step) + 1;

  if (count > 2000) {
    throw new Error("Graph range is too large");
  }

  const points: GraphPoint[] = [];

  for (let i = 0; i < count; i++) {
    const x = min + i * step;

    try {
      const y = evaluateExpression(
        expression.replace(/\bx\b/gi, `(${x})`),
        mode
      );

      points.push({
        x,
        y: Number.isFinite(y) ? y : null,
      });
    } catch {
      points.push({
        x,
        y: null,
      });
    }
  }

  return points;
}
