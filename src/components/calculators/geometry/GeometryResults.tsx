
"use client";

import type { GeometryResult } from "@/lib/calculator/geometry/types";

interface Props {
  result: GeometryResult | null;
}

export default function GeometryResultCard({ result }: Props) {
  if (!result) {
    return (
      <div className="rounded-2xl border border-dashed border-slate-700 p-8 text-center text-sm text-slate-500">
        Enter dimensions and calculate to see results.
      </div>
    );
  }

  const labels: Record<string, string> = {
    area: "Area",
    perimeter: "Perimeter",
    circumference: "Circumference",
    volume: "Volume",
    surfaceArea: "Total Surface Area",
    lateralSurfaceArea: "Lateral Surface Area",
    diagonal: "Diagonal",
    slantHeight: "Slant Height",
  };

  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <h3 className="mb-5 text-lg font-bold text-white">
        Calculation Results
      </h3>

      <div className="grid grid-cols-2 gap-3">
        {Object.entries(result).map(([key, value]) => (
          <div
            key={key}
            className="rounded-xl border border-slate-800 bg-slate-950 p-4"
          >
            <p className="text-xs text-slate-500">
              {labels[key] ?? key}
            </p>

            <p className="mt-2 break-all text-xl font-bold text-emerald-400">
              {Number(value).toLocaleString("en-IN", {
                maximumFractionDigits: 6,
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
