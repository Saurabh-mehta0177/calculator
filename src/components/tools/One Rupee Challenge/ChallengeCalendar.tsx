
"use client";

import {
  getCalendarData,
  type ChallengeState,
} from "@/lib/one-rupee-challenge";

interface Props {
  state: ChallengeState;
  onToggle: (date: string) => void;
}

export default function ChallengeCalendar({
  state,
  onToggle,
}: Props) {
  const calendar = getCalendarData(
    state.completedDates,
    state.startDate,
    state.type === "weekly" || state.type === "52week"
      ? 52
      : state.type === "custom"
        ? state.customDuration
        : state.type === "nospend"
          ? 30
          : 365
  );

  const completedCount = calendar.filter(
    (item) => item.completed
  ).length;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            Stay consistent
          </span>

          <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
            Saving Progress Calendar
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Tap a day to mark your saving progress.
          </p>
        </div>

        <div className="rounded-2xl bg-emerald-50 px-4 py-3 dark:bg-emerald-950/40">
          <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
            Completed
          </p>

          <p className="mt-1 text-2xl font-black text-emerald-700 dark:text-emerald-300">
            {completedCount}
            <span className="ml-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
              / {calendar.length}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-7 grid grid-cols-5 gap-2 sm:grid-cols-7 md:grid-cols-10 lg:grid-cols-12">
        {calendar.map((item) => (
          <button
            key={item.date}
            type="button"
            onClick={() => onToggle(item.date)}
            aria-label={`${item.date}: ${
              item.completed ? "Completed" : "Not completed"
            }`}
            aria-pressed={item.completed}
            title={`${item.date} - ${
              item.completed ? "Completed" : "Pending"
            }`}
            className={`aspect-square min-w-0 rounded-xl border text-xs font-bold transition-all duration-200 hover:scale-105 ${
              item.completed
                ? "border-emerald-600 bg-emerald-500 text-white shadow-sm hover:bg-emerald-600"
                : item.isToday
                  ? "border-blue-500 bg-blue-50 text-blue-700 ring-2 ring-blue-100 dark:border-blue-400 dark:bg-blue-950/40 dark:text-blue-300 dark:ring-blue-900"
                  : "border-slate-200 bg-slate-50 text-slate-600 hover:border-emerald-300 hover:bg-emerald-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-emerald-600 dark:hover:bg-emerald-950/40"
            }`}
          >
            {item.day}
          </button>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-100 pt-5 dark:border-slate-800">
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="h-3 w-3 rounded bg-emerald-500" />
          Completed
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="h-3 w-3 rounded border-2 border-blue-500 bg-blue-50 dark:bg-blue-950" />
          Today
        </div>

        <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
          <span className="h-3 w-3 rounded border border-slate-300 bg-slate-100 dark:border-slate-600 dark:bg-slate-800" />
          Pending
        </div>
      </div>
    </section>
  );
}
