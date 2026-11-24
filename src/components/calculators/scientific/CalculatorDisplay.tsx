
"use client";

import { Copy, Delete } from "lucide-react";
import { useState } from "react";
import { formatScientific } from "@/lib/calculator/formatter";

interface Props {
  expression: string;
  result: string;
  error: string;
  onExpressionChange: (value: string) => void;
  onBackspace: () => void;
}

export default function CalculatorDisplay({
  expression,
  result,
  error,
  onExpressionChange,
  onBackspace,
}: Props) {
  const [copied, setCopied] = useState(false);

  async function copyResult() {
    if (!result || result === "Error") return;

    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="
      rounded-3xl border border-slate-700
      bg-gradient-to-br from-slate-900
      to-[#101B30] p-5 sm:p-7
      shadow-xl shadow-black/20
    ">

      <div className="mb-5 flex items-center justify-between">

        <span className="
          text-xs font-bold uppercase
          tracking-widest text-slate-500
        ">
          Expression
        </span>

        <button
          type="button"
          onClick={onBackspace}
          className="
            rounded-lg p-2 text-slate-400
            hover:bg-slate-800 hover:text-white
          "
          title="Backspace"
          aria-label="Backspace"
        >
          <Delete size={19} />
        </button>

      </div>

      <input
        type="text"
        value={expression}
        onChange={(e) => onExpressionChange(e.target.value)}
        placeholder="Enter expression..."
        aria-label="Mathematical expression"
        autoComplete="off"
        spellCheck={false}
        className="
          w-full border-0 bg-transparent
          text-right text-xl font-medium
          text-slate-300 outline-none
          placeholder:text-slate-600
          sm:text-2xl
        "
      />

      <div className="
        mt-6 border-t border-slate-800
        pt-5 text-right
      ">

        <p className="
          mb-2 text-[10px] font-bold
          uppercase tracking-widest
          text-slate-500
        ">
          Result
        </p>

        <div className="
          flex items-center justify-end gap-3
        ">

          <p className="
            min-w-0 break-all text-3xl
            font-extrabold tracking-tight
            text-emerald-400 sm:text-5xl
          ">
            {error || result || "0"}
          </p>

          <button
            type="button"
            onClick={copyResult}
            disabled={!result || result === "Error" || !!error}
            className="
              shrink-0 rounded-lg p-2
              text-slate-500 hover:bg-slate-800
              hover:text-white disabled:opacity-30
            "
            aria-label="Copy result"
            title={copied ? "Copied" : "Copy result"}
          >
            <Copy size={17} />
          </button>

        </div>

      </div>

    </div>
  );
}
