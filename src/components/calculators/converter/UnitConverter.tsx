
"use client";

import { useState } from "react";

import {
  convertUnit,
  getUnits,
  type UnitCategory,
} from "@/lib/calculator/converter/converter";

export default function UnitConverter() {
  const [category, setCategory] = useState<UnitCategory>("length");
  const [value, setValue] = useState("100");
  const [from, setFrom] = useState("meter");
  const [to, setTo] = useState("kilometer");
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState("");

  const units = getUnits(category);

  function changeCategory(next: UnitCategory) {
    const available = getUnits(next);

    setCategory(next);
    setFrom(available[0]);
    setTo(available[1] ?? available[0]);
    setResult(null);
    setError("");
  }

  function calculate() {
    try {
      const output = convertUnit(
        Number(value),
        category,
        from,
        to
      );

      setResult(output);
      setError("");
    } catch (err) {
      setResult(null);
      setError(
        err instanceof Error ? err.message : "Conversion failed"
      );
    }
  }

  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">
      <h2 className="text-2xl font-extrabold text-white">
        Unit Converter
      </h2>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {(
          ["length", "weight", "temperature", "volume", "time"] as const
        ).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => changeCategory(item)}
            className={`rounded-xl p-3 text-xs font-bold capitalize ${
              category === item
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <label className="block">
        <span className="mb-2 block text-xs text-slate-400">
          Value
        </span>
        <input
          type="number"
          step="any"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
        />
      </label>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label>
          <span className="mb-2 block text-xs text-slate-400">
            From
          </span>
          <select
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </label>

        <label>
          <span className="mb-2 block text-xs text-slate-400">
            To
          </span>
          <select
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          >
            {units.map((unit) => (
              <option key={unit} value={unit}>{unit}</option>
            ))}
          </select>
        </label>
      </div>

      <button
        type="button"
        onClick={calculate}
        className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white"
      >
        Convert
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      {result !== null && (
        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-5">
          <p className="text-xs text-emerald-400">
            Conversion Result
          </p>
          <p className="mt-2 break-all text-3xl font-extrabold text-white">
            {result.toLocaleString("en-IN", {
              maximumFractionDigits: 10,
            })}
          </p>
          <p className="mt-2 text-xs text-slate-400">
            {value} {from} = {result} {to}
          </p>
        </div>
      )}
    </div>
  );
}
