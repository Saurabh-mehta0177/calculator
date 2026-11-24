
"use client";

import { useState } from "react";
import {
  complexAdd,
  complexMultiply,
  complexDivide,
  matrixMultiply,
  solveQuadratic,
  type Complex,
} from "@/lib/calculator/engineering/engineering";

type Mode = "complex" | "quadratic" | "matrix";

export default function EngineeringCalculator() {
  const [mode, setMode] = useState<Mode>("complex");
  const [a, setA] = useState("2");
  const [b, setB] = useState("3");
  const [c, setC] = useState("1");
  const [d, setD] = useState("4");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");

  function calculate() {
    try {
      const n = (value: string) => {
        const parsed = Number(value);

        if (!Number.isFinite(parsed)) {
          throw new Error("Enter valid numbers");
        }

        return parsed;
      };

      let answer: unknown;

      if (mode === "complex") {
        const first: Complex = {
          real: n(a),
          imaginary: n(b),
        };

        const second: Complex = {
          real: n(c),
          imaginary: n(d),
        };

        answer = {
          addition: complexAdd(first, second),
          multiplication: complexMultiply(first, second),
          division: complexDivide(first, second),
        };
      } else if (mode === "quadratic") {
        answer = solveQuadratic(
          n(a),
          n(b),
          n(c)
        );
      } else {
        answer = matrixMultiply(
          [
            [n(a), n(b)],
            [n(c), n(d)],
          ],
          [
            [n(a), n(c)],
            [n(b), n(d)],
          ]
        );
      }

      setOutput(JSON.stringify(answer, null, 2));
      setError("");
    } catch (err) {
      setOutput("");
      setError(
        err instanceof Error ? err.message : "Calculation failed"
      );
    }
  }

  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">
      <h2 className="text-2xl font-extrabold text-white">
        Engineering Calculator
      </h2>

      <div className="grid grid-cols-3 gap-2">
        {(["complex", "quadratic", "matrix"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setMode(item);
              setOutput("");
              setError("");
            }}
            className={`rounded-xl p-3 text-xs font-bold capitalize ${
              mode === item
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-3">
        {[
          ["Value A", a, setA],
          ["Value B", b, setB],
          ["Value C", c, setC],
          ["Value D", d, setD],
        ].map(([label, value, setter]) => (
          <label key={label as string}>
            <span className="mb-2 block text-xs text-slate-400">
              {label as string}
            </span>
            <input
              type="number"
              step="any"
              value={value as string}
              onChange={(event) =>
                (setter as (value: string) => void)(
                  event.target.value
                )
              }
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </label>
        ))}
      </div>

      <button
        type="button"
        onClick={calculate}
        className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white"
      >
        Calculate
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      {output && (
        <pre className="overflow-auto rounded-xl bg-slate-950 p-4 text-sm text-emerald-400">
          {output}
        </pre>
      )}
    </div>
  );
}
