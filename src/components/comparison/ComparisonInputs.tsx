
"use client";

import type { ComparisonInputs as Inputs } from "@/lib/comparison/types";

interface Props {
  values: Inputs;
  onChange: (field: keyof Inputs, value: number) => void;
  onReset: () => void;
}

export default function ComparisonInputs({
  values,
  onChange,
  onReset,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-xl font-bold text-slate-900">
          Comparison Settings
        </h2>

        <button
          type="button"
          onClick={onReset}
          className="text-sm font-semibold text-blue-700 hover:underline"
        >
          Reset Values ↻
        </button>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Monthly Investment Amount (₹)
          </label>

          <input
            type="number"
            min="0"
            max="100000000"
            value={values.amount}
            onChange={(e) =>
              onChange(
                "amount",
                Math.min(
                  100000000,
                  Math.max(0, Number(e.target.value) || 0)
                )
              )
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg font-bold outline-none focus:border-blue-500"
          />

          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={Math.min(
              100000,
              Math.max(500, values.amount)
            )}
            onChange={(e) =>
              onChange("amount", Number(e.target.value))
            }
            className="mt-4 w-full accent-blue-600"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>₹500</span>
            <span>₹1,00,000</span>
          </div>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">
            Investment Duration (Years)
          </label>

          <input
            type="number"
            min="1"
            max="50"
            value={values.years}
            onChange={(e) =>
              onChange(
                "years",
                Math.min(
                  50,
                  Math.max(1, Number(e.target.value) || 1)
                )
              )
            }
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-lg font-bold outline-none focus:border-blue-500"
          />

          <input
            type="range"
            min="1"
            max="30"
            value={Math.min(30, values.years)}
            onChange={(e) =>
              onChange("years", Number(e.target.value))
            }
            className="mt-4 w-full accent-blue-600"
          />

          <div className="mt-2 flex justify-between text-xs text-slate-500">
            <span>1 Year</span>
            <span>30 Years</span>
          </div>
        </div>
      </div>
    </section>
  );
}
