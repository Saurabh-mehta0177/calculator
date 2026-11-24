
"use client";

import { useMemo, useState } from "react";

import { SHAPES } from "@/lib/calculator/geometry/shapes";
import { calculateGeometry } from "@/lib/calculator/geometry/calculations";

import type {
  GeometryInput,
  GeometryResult,
  ShapeType,
} from "@/lib/calculator/geometry/types";

import GeometryInputs from "./GeometryInputs";
//import GeometryResultCard from "./GeometryResult";
import GeometryResultCard from "./GeometryResults";

export default function GeometryCalculator() {
  const [category, setCategory] = useState<"2d" | "3d">("2d");
  const [shapeId, setShapeId] = useState<ShapeType>("square");
  const [values, setValues] = useState<GeometryInput>({});
  const [result, setResult] = useState<GeometryResult | null>(null);
  const [error, setError] = useState("");

  const availableShapes = useMemo(
    () => SHAPES.filter((shape) => shape.category === category),
    [category]
  );

  const shape = SHAPES.find((item) => item.id === shapeId)!;

  function changeCategory(value: "2d" | "3d") {
    setCategory(value);

    const first = SHAPES.find((item) => item.category === value)!;

    setShapeId(first.id);
    setValues({});
    setResult(null);
    setError("");
  }

  function changeShape(id: ShapeType) {
    setShapeId(id);
    setValues({});
    setResult(null);
    setError("");
  }

  function handleChange(key: string, value: number) {
    setValues((previous) => ({
      ...previous,
      [key]: value,
    }));

    setResult(null);
    setError("");
  }

  function calculate() {
    try {
      const output = calculateGeometry(shapeId, values);

      setResult(output);
      setError("");
    } catch (err) {
      setResult(null);

      setError(
        err instanceof Error
          ? err.message
          : "Calculation failed"
      );
    }
  }

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">
        <h2 className="text-2xl font-extrabold text-white">
          Geometry Calculator
        </h2>

        <p className="mt-2 text-sm text-slate-400">
          Calculate dimensions, area, perimeter, surface area and volume.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          {(["2d", "3d"] as const).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => changeCategory(item)}
              className={`rounded-xl py-4 font-bold transition ${
                category === item
                  ? "bg-blue-600 text-white"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700"
              }`}
            >
              {item.toUpperCase()} Geometry
            </button>
          ))}
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-3">
          {availableShapes.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => changeShape(item.id)}
              className={`rounded-xl border p-3 text-left text-sm font-bold ${
                shapeId === item.id
                  ? "border-blue-500 bg-blue-500/10 text-blue-400"
                  : "border-slate-800 bg-slate-900 text-slate-400 hover:border-slate-600"
              }`}
            >
              {item.name}
              <span className="mt-1 block text-[10px] font-normal opacity-70">
                {item.description}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
        <GeometryInputs
          shape={shape}
          values={values}
          onChange={handleChange}
          onCalculate={calculate}
        />

        <div className="space-y-4">
          {error && (
            <p role="alert" className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400">
              {error}
            </p>
          )}

          <GeometryResultCard result={result} />
        </div>
      </div>
    </div>
  );
}
