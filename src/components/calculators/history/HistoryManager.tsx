
"use client";

import { useEffect, useState } from "react";
import {
  HISTORY_KEY,
  exportHistoryCSV,
  type HistoryRecord,
} from "@/lib/calculator/history/history";

export default function HistoryManager() {
  const [records, setRecords] = useState<HistoryRecord[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(HISTORY_KEY);

      if (raw) {
        const parsed: unknown = JSON.parse(raw);

        if (Array.isArray(parsed)) {
          setRecords(parsed.slice(0, 500));
        }
      }
    } catch {
      setRecords([]);
    }
  }, []);

  function clear() {
    setRecords([]);
    localStorage.removeItem(HISTORY_KEY);
  }

  function download() {
    const csv = exportHistoryCSV(records);
    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = "financetools-history.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  return (
    <div className="space-y-5 rounded-3xl border border-slate-800 bg-[#0B1424] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-2xl font-extrabold text-white">
            Calculation History
          </h2>
          <p className="mt-2 text-xs text-slate-400">
            {records.length} records
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={download}
            disabled={records.length === 0}
            className="rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white disabled:opacity-40"
          >
            Export CSV
          </button>

          <button
            type="button"
            onClick={clear}
            className="rounded-xl bg-rose-500/10 px-4 py-2 text-xs font-bold text-rose-400"
          >
            Clear
          </button>
        </div>
      </div>

      {records.length === 0 ? (
        <p className="rounded-xl border border-dashed border-slate-700 p-8 text-center text-sm text-slate-500">
          No universal history records available.
        </p>
      ) : (
        <div className="space-y-2">
          {records.map((record) => (
            <div key={record.id} className="rounded-xl bg-slate-900 p-4">
              <div className="flex justify-between gap-3">
                <span className="text-xs font-bold text-blue-400">
                  {record.module}
                </span>
                <span className="text-[10px] text-slate-500">
                  {new Date(record.timestamp).toLocaleString("en-IN")}
                </span>
              </div>

              <p className="mt-2 break-all text-sm text-slate-300">
                {record.expression}
              </p>

              <p className="mt-1 break-all font-bold text-emerald-400">
                {record.result}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
