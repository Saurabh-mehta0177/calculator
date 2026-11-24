
"use client";

import type { ChallengeState } from "@/lib/one-rupee-challenge";

interface Props {
  state: ChallengeState;
  onChange: (field: string, value: number | string) => void;
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-emerald-500";

export default function ChallengeInputs({
  state,
  onChange,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Personalize your plan
        </span>

        <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
          Challenge Settings
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Adjust your starting date and saving preferences.
        </p>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <label
            htmlFor="challenge-start-date"
            className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
          >
            Start Date
          </label>

          <input
            id="challenge-start-date"
            type="date"
            value={state.startDate}
            onChange={(e) => onChange("startDate", e.target.value)}
            className={inputClass}
          />

          <p className="mt-2 text-xs text-slate-400">
            Select when your challenge begins.
          </p>
        </div>

        {state.type === "custom" && (
          <>
            <div>
              <label
                htmlFor="custom-saving-amount"
                className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                Daily Saving Amount (₹)
              </label>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-emerald-600 dark:text-emerald-400">
                  ₹
                </span>

                <input
                  id="custom-saving-amount"
                  type="number"
                  min="1"
                  value={state.customAmount}
                  onChange={(e) =>
                    onChange(
                      "customAmount",
                      Math.max(1, Number(e.target.value))
                    )
                  }
                  className={`${inputClass} pl-9`}
                />
              </div>

              <p className="mt-2 text-xs text-slate-400">
                Amount you plan to save each day.
              </p>
            </div>

            <div>
              <label
                htmlFor="custom-duration"
                className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
              >
                Duration (Days)
              </label>

              <input
                id="custom-duration"
                type="number"
                min="1"
                max="3650"
                value={state.customDuration}
                onChange={(e) =>
                  onChange(
                    "customDuration",
                    Math.min(
                      3650,
                      Math.max(1, Number(e.target.value))
                    )
                  )
                }
                className={inputClass}
              />

              <p className="mt-2 text-xs text-slate-400">
                Choose your challenge duration.
              </p>
            </div>
          </>
        )}
      </div>

      {state.type !== "custom" && (
        <div className="mt-5 flex items-start gap-3 rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/60 dark:bg-emerald-950/30">
          <span className="text-xl">💡</span>
          <p className="text-xs leading-6 text-emerald-800 dark:text-emerald-300">
            Your challenge duration is automatically determined
            by the selected saving plan.
          </p>
        </div>
      )}
    </section>
  );
}
