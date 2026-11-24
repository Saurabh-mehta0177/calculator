

"use client";

import {
  CHALLENGES,
  type ChallengeType,
} from "@/lib/one-rupee-challenge";

interface Props {
  selected: ChallengeType;
  onChange: (type: ChallengeType) => void;
}

const icons: Record<ChallengeType, string> = {
  daily: "🌱",
  weekly: "💰",
  "52week": "📈",
  nospend: "🛍️",
  custom: "🎯",
};

export default function ChallengeSelector({
  selected,
  onChange,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="mb-6">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Start your journey
        </span>

        <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
          Choose Your Saving Challenge
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Pick a saving plan that matches your goals and build
          a consistent saving habit.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CHALLENGES.map((challenge) => {
          const active = selected === challenge.id;

          return (
            <button
              key={challenge.id}
              type="button"
              onClick={() => onChange(challenge.id)}
              aria-pressed={active}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                active
                  ? "border-emerald-500 bg-emerald-50 shadow-md ring-2 ring-emerald-500/20 dark:border-emerald-500 dark:bg-emerald-950/40"
                  : "border-slate-200 bg-slate-50 hover:border-emerald-300 dark:border-slate-700 dark:bg-slate-800/70 dark:hover:border-emerald-600"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm dark:bg-slate-700">
                  {icons[challenge.id]}
                </div>

                {active && (
                  <span className="rounded-full bg-emerald-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-white">
                    Selected
                  </span>
                )}
              </div>

              <h3 className="mt-5 font-extrabold text-slate-900 dark:text-white">
                {challenge.name}
              </h3>

              <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {challenge.description}
              </p>

              <div className="mt-5 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-700">
                <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400">
                  {challenge.duration} {challenge.unit}
                  {challenge.duration === 1 ? "" : "s"}
                </span>

                <span className="text-lg text-emerald-600 transition-transform group-hover:translate-x-1 dark:text-emerald-400">
                  →
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
