

"use client";

import {
  getBadges,
  type ChallengeState,
} from "@/lib/one-rupee-challenge";

export default function ChallengeBadges({
  state,
}: {
  state: ChallengeState;
}) {
  const badges = getBadges(state);

  const unlockedCount = badges.filter(
    (badge) => badge.unlocked
  ).length;

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-amber-600 dark:text-amber-400">
            Celebrate milestones
          </span>

          <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
            Your Achievements
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Every small step deserves a celebration.
          </p>
        </div>

        <div className="rounded-2xl bg-amber-50 px-4 py-3 dark:bg-amber-950/30">
          <p className="text-xs font-semibold text-amber-700 dark:text-amber-400">
            Badges unlocked
          </p>

          <p className="mt-1 text-2xl font-black text-amber-700 dark:text-amber-300">
            {unlockedCount}
            <span className="ml-1 text-sm font-semibold">
              / {badges.length}
            </span>
          </p>
        </div>
      </div>

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {badges.map((badge) => (
          <div
            key={badge.id}
            className={`group relative overflow-hidden rounded-2xl border p-5 text-center transition-all duration-300 ${
              badge.unlocked
                ? "border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 hover:-translate-y-1 hover:shadow-md dark:border-amber-900/60 dark:from-amber-950/40 dark:to-orange-950/20"
                : "border-slate-200 bg-slate-50 opacity-65 dark:border-slate-700 dark:bg-slate-800/70"
            }`}
          >
            <div
              className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl text-4xl ${
                badge.unlocked
                  ? "bg-white shadow-sm dark:bg-slate-800"
                  : "bg-slate-200 grayscale dark:bg-slate-700"
              }`}
            >
              {badge.icon}
            </div>

            <h3 className="mt-4 text-sm font-extrabold text-slate-900 dark:text-white">
              {badge.name}
            </h3>

            <p className="mt-2 min-h-10 text-xs leading-5 text-slate-500 dark:text-slate-400">
              {badge.description}
            </p>

            <div className="mt-4">
              {badge.unlocked ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                  ✓ Unlocked
                </span>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-200 px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-500 dark:bg-slate-700 dark:text-slate-300">
                  🔒 Locked
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
