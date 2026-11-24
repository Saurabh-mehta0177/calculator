
"use client";

import { useState } from "react";

import {
  calculateSIP,
  calculateLumpsum,
  calculateFD,
  calculateEMI,
  calculateRD,
} from "@/lib/calculator/finance/finance";

//import { formatINR } from "@/lib/calculator/formatter";
import { formatINR } from "@/lib/calculator/formatter";

type Mode = "sip" | "lumpsum" | "fd" | "rd" | "emi";

export default function FinanceCalculator() {
  const [mode, setMode] = useState<Mode>("sip");

  const [amount, setAmount] = useState("5000");
  const [rate, setRate] = useState("12");
  const [years, setYears] = useState("10");
  const [months, setMonths] = useState("120");

  const [result, setResult] = useState<Record<string, number> | null>(null);
  const [error, setError] = useState("");

  function calculate() {
    try {
      const p = Number(amount);
      const r = Number(rate);
      const y = Number(years);

      let output: Record<string, number>;

      switch (mode) {
        case "sip":
          output = calculateSIP(p, r, y);
          break;

        case "lumpsum":
          output = calculateLumpsum(p, r, y);
          break;

        case "fd":
          output = calculateFD(p, r, y);
          break;

        case "rd":
          output = calculateRD(p, r, Number(months));
          break;

        case "emi":
          output = calculateEMI(p, r, y);
          break;
      }

      setResult(output);
      setError("");
    } catch (err) {
      setResult(null);
      setError(
        err instanceof Error ? err.message : "Calculation failed"
      );
    }
  }

  return (
    <div className="space-y-6 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">

      <div>
        <h2 className="text-2xl font-extrabold text-white">
          Financial Calculator
        </h2>
        <p className="mt-2 text-sm text-slate-400">
          Calculate investments, deposits and loan repayments.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 sm:grid-cols-5">
        {(["sip", "lumpsum", "fd", "rd", "emi"] as const).map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setMode(item);
              setResult(null);
              setError("");
            }}
            className={`rounded-xl py-3 text-xs font-bold uppercase ${
              mode === item
                ? "bg-blue-600 text-white"
                : "bg-slate-800 text-slate-400"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label>
          <span className="mb-2 block text-xs text-slate-400">
            {mode === "sip" || mode === "rd"
              ? "Monthly Amount (₹)"
              : mode === "emi"
                ? "Loan Amount (₹)"
                : "Investment Amount (₹)"}
          </span>
          <input
            type="number"
            min="0"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          />
        </label>

        <label>
          <span className="mb-2 block text-xs text-slate-400">
            Annual Interest / Return (%)
          </span>
          <input
            type="number"
            min="0"
            step="any"
            value={rate}
            onChange={(e) => setRate(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
          />
        </label>

        {mode === "rd" ? (
          <label>
            <span className="mb-2 block text-xs text-slate-400">
              Duration (Months)
            </span>
            <input
              type="number"
              min="1"
              step="1"
              value={months}
              onChange={(e) => setMonths(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </label>
        ) : (
          <label>
            <span className="mb-2 block text-xs text-slate-400">
              Duration (Years)
            </span>
            <input
              type="number"
              min="0"
              step="any"
              value={years}
              onChange={(e) => setYears(e.target.value)}
              className="w-full rounded-xl border border-slate-700 bg-slate-950 p-3 text-white"
            />
          </label>
        )}
      </div>

      <button
        type="button"
        onClick={calculate}
        className="w-full rounded-xl bg-blue-600 py-3 font-bold text-white hover:bg-blue-500"
      >
        Calculate {mode.toUpperCase()}
      </button>

      {error && (
        <p role="alert" className="text-sm text-red-400">{error}</p>
      )}

      {result && (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {Object.entries(result).map(([key, value]) => (
            <div key={key} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
              <p className="text-xs capitalize text-slate-500">
                {key.replace(/([A-Z])/g, " $1")}
              </p>
              <p className="mt-2 break-all text-xl font-bold text-emerald-400">
                {formatINR(value)}
              </p>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs leading-5 text-slate-500">
        These are hypothetical estimates. Actual interest, taxes,
        fees and investment returns may differ.
      </p>
    </div>
  );
}
