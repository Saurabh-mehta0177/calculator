
"use client";

import { useState } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  ReferenceLine,
} from "recharts";

import { generateGraph } from "@/lib/calculator/graphing/graph";

export default function GraphingCalculator() {
  const [expression, setExpression] = useState("sin(x)");
  const [min, setMin] = useState("-10");
  const [max, setMax] = useState("10");
  const [points, setPoints] = useState<
    ReturnType<typeof generateGraph>
  >([]);
  const [error, setError] = useState("");

  function plot() {
    try {
      const data = generateGraph(
        expression,
        Number(min),
        Number(max),
        0.1,
        "RAD"
      );

      setPoints(data);
      setError("");
    } catch (err) {
      setPoints([]);
      setError(
        err instanceof Error ? err.message : "Graph failed"
      );
    }
  }

  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">
      <h2 className="text-2xl font-extrabold text-white">
        Graphing Calculator
      </h2>

      <p className="text-sm text-slate-400">
        Plot mathematical functions using x.
      </p>

      <label className="block">
        <span className="mb-2 block text-xs text-slate-400">
          Function f(x)
        </span>
        <input
          value={expression}
          onChange={(e) => setExpression(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          placeholder="sin(x)"
        />
      </label>

      <div className="grid grid-cols-2 gap-3">
        <label>
          <span className="mb-2 block text-xs text-slate-400">
            Minimum X
          </span>
          <input
            type="number"
            value={min}
            onChange={(e) => setMin(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          />
        </label>

        <label>
          <span className="mb-2 block text-xs text-slate-400">
            Maximum X
          </span>
          <input
            type="number"
            value={max}
            onChange={(e) => setMax(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          />
        </label>
      </div>

      <button
        type="button"
        onClick={plot}
        className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white"
      >
        Plot Graph
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      <div className="h-[350px] rounded-2xl border border-slate-800 bg-slate-950 p-3">
        {points.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={points}>
              <CartesianGrid stroke="#334155" strokeDasharray="3 3" />
              <XAxis
                dataKey="x"
                type="number"
                domain={["dataMin", "dataMax"]}
                stroke="#94A3B8"
              />
              <YAxis stroke="#94A3B8" />
              <ReferenceLine y={0} stroke="#64748b" />
              <ReferenceLine x={0} stroke="#64748b" />
              <Tooltip
                contentStyle={{
                  background: "#0F172A",
                  border: "1px solid #334155",
                  borderRadius: 12,
                }}
              />
              <Line
                type="monotone"
                dataKey="y"
                stroke="#34D399"
                strokeWidth={2}
                dot={false}
                connectNulls={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-slate-500">
            Your graph will appear here.
          </div>
        )}
      </div>

      <p className="text-xs text-slate-500">
        Graphing currently uses radians and samples the function at fixed intervals.
        Discontinuities and sharp features may need finer sampling.
      </p>
    </div>
  );
}
