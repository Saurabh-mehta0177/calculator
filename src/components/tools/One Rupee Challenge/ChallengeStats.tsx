

"use client";

import {
  formatINR,
  getChallengeTarget,
  getProgress,
  getStreak,
  getTotalSaved,
  type ChallengeState,
} from "@/lib/one-rupee-challenge";

export default function ChallengeStats({
  state,
}: {
  state: ChallengeState;
}) {
  const saved = getTotalSaved(state);
  const target = getChallengeTarget(state);
  const progress = getProgress(saved, target);
  const streak = getStreak(state.completedDates);

  const stats = [
    {
      title: "Total Saved",
      value: formatINR(saved),
      icon: "💰",
      color: "from-emerald-500 to-green-600",
      light: "bg-emerald-50 dark:bg-emerald-950/30",
      text: "text-emerald-600 dark:text-emerald-400",
      description: "Your savings so far",
    },
    {
      title: "Saving Target",
      value: formatINR(target),
      icon: "🎯",
      color: "from-blue-500 to-indigo-600",
      light: "bg-blue-50 dark:bg-blue-950/30",
      text: "text-blue-600 dark:text-blue-400",
      description: "Your challenge goal",
    },
    {
      title: "Current Streak",
      value: `${streak} Days`,
      icon: "🔥",
      color: "from-orange-500 to-amber-600",
      light: "bg-orange-50 dark:bg-orange-950/30",
      text: "text-orange-600 dark:text-orange-400",
      description: "Keep your momentum",
    },
    {
      title: "Progress",
      value: `${progress}%`,
      icon: "📈",
      color: "from-violet-500 to-purple-600",
      light: "bg-violet-50 dark:bg-violet-950/30",
      text: "text-violet-600 dark:text-violet-400",
      description: "Goal completion",
    },
  ];

  return (
    <section>
      <div className="mb-5">
        <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
          Your performance
        </span>

        <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
          Saving Overview
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 sm:p-6"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400">
                  {item.title}
                </p>

                <p className="mt-3 break-words text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                  {item.value}
                </p>
              </div>

              <div
                className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl text-2xl ${item.light}`}
              >
                {item.icon}
              </div>
            </div>

            <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <div
                className={`h-full rounded-full bg-gradient-to-r ${item.color} transition-all duration-500`}
                style={{
                  width:
                    item.title === "Progress"
                      ? `${Math.min(100, progress)}%`
                      : "70%",
                }}
              />
            </div>

            <p className="mt-3 text-xs text-slate-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
