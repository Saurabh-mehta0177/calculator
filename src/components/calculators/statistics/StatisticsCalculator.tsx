
"use client";

import { useState } from "react";
import { calculateStatistics } from "@/lib/calculator/statistics/statistics";

export default function StatisticsCalculator() {
  const [input, setInput] = useState("10,20,30,40,50");
  const [error, setError] = useState("");
  const [result, setResult] = useState<ReturnType<
    typeof calculateStatistics
  > | null>(null);

  function calculate() {
    try {
      const values = input
        .split(/[\s,;]+/)
        .filter(Boolean)
        .map(Number);

      const output = calculateStatistics(values);

      setResult(output);
      setError("");
    } catch (err) {
      setResult(null);
      setError(
        err instanceof Error ? err.message : "Calculation failed"
      );
    }
  }

  const labels: Record<string, string> = {
    count: "Count",
    sum: "Sum",
    mean: "Mean",
    median: "Median",
    mode: "Mode",
    min: "Minimum",
    max: "Maximum",
    range: "Range",
    variance: "Population Variance",
    standardDeviation: "Population Standard Deviation",
    populationVariance: "Population Variance",
    sampleVariance: "Sample Variance",
  };

  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">

      <div>
        <h2 className="text-2xl font-extrabold text-white">
          Statistics Calculator
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Analyze datasets and calculate descriptive statistics.
        </p>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-bold text-slate-400">
          Enter numbers (comma or space separated)
        </span>

        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          rows={5}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-white outline-none focus:border-blue-500"
          placeholder="10, 20, 30, 40, 50"
        />
      </label>

      <button
        type="button"
        onClick={calculate}
        className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-500"
      >
        Analyze Dataset
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      {result && (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs text-slate-500">
                {labels[key] ?? key}
              </p>

              <p className="mt-2 break-all text-lg font-bold text-emerald-400">
                {Array.isArray(value)
                  ? value.length ? value.join(", ") : "No mode"
                  : value === null
                    ? "N/A"
                    : Number(value).toLocaleString("en-IN", {
                        maximumFractionDigits: 6,
                      })}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-slate-500">
        Population and sample variance are reported separately.
        A dataset without repeated values has no mode.
      </p>
    </div>
  );
}
