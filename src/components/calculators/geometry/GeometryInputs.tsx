
"use client";

import type {
  GeometryInput,
  ShapeConfig,
} from "@/lib/calculator/geometry/types";

import { INPUT_LABELS } from "@/lib/calculator/geometry/shapes";

interface Props {
  shape: ShapeConfig;
  values: GeometryInput;
  onChange: (key: string, value: number) => void;
  onCalculate: () => void;
}

export default function GeometryInputs({
  shape,
  values,
  onChange,
  onCalculate,
}: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="text-lg font-bold text-white">
        {shape.name} Dimensions
      </h3>

      <p className="mt-1 text-xs text-slate-500">
        {shape.description}
      </p>

      <div className="mt-5 space-y-4">
        {shape.inputs.map((key) => (
          <label key={key} className="block">
            <span className="mb-2 block text-xs font-bold text-slate-400">
              {INPUT_LABELS[key] ?? key}
            </span>

            <input
              type="number"
              min="0"
              step="any"
              value={values[key] ?? ""}
              onChange={(event) =>
                onChange(key, event.target.value === ""
                  ? 0
                  : Number(event.target.value))
              }
              placeholder={`Enter ${INPUT_LABELS[key] ?? key}`}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white outline-none focus:border-blue-500"
            />
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={onCalculate}
        className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-bold text-white transition hover:bg-blue-500"
      >
        Calculate Geometry
      </button>
    </div>
  );
}
