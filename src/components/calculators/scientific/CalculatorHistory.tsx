
"use client";

import {
  History,
  Trash2,
  RotateCcw,
} from "lucide-react";

import type {
  CalculationHistoryItem,
} from "@/lib/calculator/types";

interface Props {
  history: CalculationHistoryItem[];
  onSelect: (expression: string) => void;
  onClear: () => void;
}

export default function CalculatorHistory({
  history,
  onSelect,
  onClear,
}: Props) {
  return (
    <section className="
      rounded-3xl border border-slate-800
      bg-[#0B1424] p-5 sm:p-6
    ">

      <div className="
        mb-5 flex items-center
        justify-between gap-3
      ">

        <div className="flex items-center gap-3">

          <div className="
            rounded-xl bg-blue-500/10
            p-2.5 text-blue-400
          ">
            <History size={19} />
          </div>

          <div>
            <h3 className="
              text-sm font-extrabold text-white
            ">
              Calculation History
            </h3>

            <p className="
              mt-1 text-xs text-slate-500
            ">
              {history.length} saved calculations
            </p>
          </div>

        </div>

        <button
          type="button"
          onClick={onClear}
          disabled={history.length === 0}
          className="
            flex items-center gap-2
            rounded-lg px-3 py-2
            text-xs font-bold text-rose-400
            hover:bg-rose-500/10
            disabled:opacity-30
          "
        >
          <Trash2 size={15} />
          Clear
        </button>

      </div>

      {history.length === 0 ? (
        <div className="
          rounded-2xl border border-dashed
          border-slate-700 py-10
          text-center
        ">
          <History
            size={30}
            className="mx-auto text-slate-600"
          />

          <p className="
            mt-3 text-sm font-semibold
            text-slate-400
          ">
            No calculations yet
          </p>

          <p className="
            mt-1 text-xs text-slate-600
          ">
            Your calculations will appear here.
          </p>
        </div>
      ) : (
        <div className="max-h-[360px] space-y-2 overflow-y-auto">

          {history.map((item) => (
            <div
              key={item.id}
              className="
                flex items-center
                justify-between gap-3
                rounded-xl border
                border-slate-800
                bg-slate-900/70 p-3
              "
            >

              <button
                type="button"
                onClick={() => onSelect(item.expression)}
                className="min-w-0 flex-1 text-left"
              >

                <p className="
                  truncate text-xs
                  text-slate-400
                ">
                  {item.expression}
                </p>

                <p className="
                  mt-1 break-all text-base
                  font-bold text-emerald-400
                ">
                  = {item.result}
                </p>

                <p className="
                  mt-1 text-[10px]
                  text-slate-600
                ">
                  {new Date(item.timestamp).toLocaleString("en-IN")}
                </p>

              </button>

              <button
                type="button"
                onClick={() => onSelect(item.expression)}
                aria-label="Reuse calculation"
                title="Reuse expression"
                className="
                  rounded-lg p-2
                  text-blue-400 hover:bg-blue-500/10
                "
              >
                <RotateCcw size={17} />
              </button>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}
