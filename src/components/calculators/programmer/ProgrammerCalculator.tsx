
"use client";

import { useState } from "react";
import {
  convertBases,
  parseInteger,
  bitwiseOperation,
  type NumberBase,
} from "@/lib/calculator/programmer/programmer";

const BASES: NumberBase[] = [2, 8, 10, 16];

export default function ProgrammerCalculator() {
  const [base, setBase] = useState<NumberBase>(10);
  const [input, setInput] = useState("255");
  const [result, setResult] = useState<bigint | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    try {
      const value = parseInteger(input, base);
      setResult(value);
      setError("");
    } catch (err) {
      setResult(null);
      setError(
        err instanceof Error ? err.message : "Invalid input"
      );
    }
  }

  function bitwise(op: "AND" | "OR" | "XOR" | "NOT" | "LSHIFT" | "RSHIFT") {
    try {
      const a = parseInteger(input, base);
      const output = bitwiseOperation(a, 1n, op);

      setResult(output);
      setError("");
    } catch {
      setError("Invalid bitwise operation");
    }
  }

  const converted = result === null ? null : convertBases(result);

  return (
    <div className="space-y-6 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">

      <div>
        <h2 className="text-2xl font-extrabold text-white">
          Programmer Calculator
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Binary, octal, decimal and hexadecimal conversions.
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {BASES.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setBase(item);
              setInput("");
              setResult(null);
              setError("");
            }}
            className={`rounded-xl py-3 text-sm font-bold ${
              base === item
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            BASE {item}
          </button>
        ))}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter integer"
        className="w-full rounded-xl border border-slate-700 bg-slate-950 p-4 text-xl text-white outline-none focus:border-blue-500"
      />

      <button
        type="button"
        onClick={calculate}
        className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-500"
      >
        Convert Number
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      {converted && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Object.entries(converted).map(([key, value]) => (
            <div key={key} className="rounded-xl bg-slate-900 p-4">
              <p className="text-xs uppercase text-slate-500">{key}</p>
              <p className="mt-2 break-all font-bold text-emerald-400">
                {value}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="grid grid-cols-3 gap-2">
        {(["AND", "OR", "XOR", "NOT", "LSHIFT", "RSHIFT"] as const).map((op) => (
          <button
            key={op}
            type="button"
            onClick={() => bitwise(op)}
            className="rounded-xl bg-slate-800 py-3 text-xs font-bold text-blue-300 hover:bg-slate-700"
          >
            {op}
          </button>
        ))}
      </div>

      <p className="text-xs leading-5 text-slate-500">
        Bitwise operations use the entered integer and the constant 1.
        Shift operations shift by one bit.
      </p>
    </div>
  );
}
