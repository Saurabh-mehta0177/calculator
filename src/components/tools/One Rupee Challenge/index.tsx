

"use client";

import { useEffect, useMemo, useState } from "react";

import {
  DEFAULT_CHALLENGE_STATE,
  getChallengeTarget,
  getExpectedAmount,
  getLocalDate,
  getTotalSaved,
  formatINR,
  STORAGE_KEY,
  type ChallengeState,
} from "@/lib/one-rupee-challenge";

import ChallengeSelector from "./ChallengeSelector";
import ChallengeInputs from "./ChallengeInputs";
import ChallengeStats from "./ChallengeStats";
import ChallengeCalendar from "./ChallengeCalendar";
import ChallengeBadges from "./ChallengeBadges";

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 outline-none transition placeholder:font-normal placeholder:text-slate-400 focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:border-emerald-500";

const primaryButton =
  "w-full rounded-xl bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-emerald-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-emerald-700 hover:to-green-700 hover:shadow-xl active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50";

export default function OneRupeeChallenge() {
  const [state, setState] = useState<ChallengeState>(
    DEFAULT_CHALLENGE_STATE
  );

  const [hydrated, setHydrated] = useState(false);
  const [amount, setAmount] = useState(10);
  const [note, setNote] = useState("");
  const [avoidedAmount, setAvoidedAmount] = useState(0);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        const parsed = JSON.parse(stored) as ChallengeState;

        if (
          parsed &&
          Array.isArray(parsed.entries) &&
          Array.isArray(parsed.completedDates)
        ) {
          setState({
            ...DEFAULT_CHALLENGE_STATE,
            ...parsed,
          });
        }
      }
    } catch {
      console.error("Unable to load saving challenge data.");
    } finally {
      setHydrated(true);
    }
  }, []);

  useEffect(() => {
    if (!hydrated) return;

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(state)
    );
  }, [state, hydrated]);

  const totalSaved = useMemo(
    () => getTotalSaved(state),
    [state]
  );

  const target = getChallengeTarget(state);

  const progress = Math.min(
    100,
    target > 0 ? Math.round((totalSaved / target) * 100) : 0
  );

  function updateField(
    field: string,
    value: number | string
  ) {
    setState((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function changeChallenge(
    type: ChallengeState["type"]
  ) {
    setState((previous) => ({
      ...DEFAULT_CHALLENGE_STATE,
      type,
      startDate: getLocalDate(),
      customAmount: previous.customAmount,
      customDuration: previous.customDuration,
    }));

    setAmount(
      type === "weekly" ? 100 : type === "52week" ? 1 : 10
    );

    setNote("");
    setAvoidedAmount(0);
  }

  function addSaving() {
    if (state.type === "nospend") return;

    if (!Number.isFinite(amount) || amount <= 0) return;

    const today = getLocalDate();

    setState((previous) => ({
      ...previous,
      entries: [
        ...previous.entries.filter(
          (entry) => entry.date !== today
        ),
        {
          date: today,
          amount,
          note: note.trim(),
        },
      ],
      completedDates: [
        ...new Set([...previous.completedDates, today]),
      ],
    }));

    setNote("");
  }

  function toggleDate(date: string) {
    setState((previous) => {
      const completed = previous.completedDates.includes(date);

      return {
        ...previous,
        completedDates: completed
          ? previous.completedDates.filter((d) => d !== date)
          : [...previous.completedDates, date],
      };
    });
  }

  function addAvoidedSpending() {
    if (
      !Number.isFinite(avoidedAmount) ||
      avoidedAmount <= 0
    ) {
      return;
    }

    setState((previous) => ({
      ...previous,
      avoidedSpending:
        previous.avoidedSpending + avoidedAmount,
      completedDates: [
        ...new Set([
          ...previous.completedDates,
          getLocalDate(),
        ]),
      ],
    }));

    setAvoidedAmount(0);
  }

  function resetChallenge() {
    const confirmed = window.confirm(
      "Are you sure you want to reset this challenge? All saved progress will be deleted."
    );

    if (!confirmed) return;

    setState({
      ...DEFAULT_CHALLENGE_STATE,
      type: state.type,
      startDate: getLocalDate(),
    });

    setAmount(10);
    setNote("");
    setAvoidedAmount(0);
  }

  const isWeekly =
    state.type === "weekly" || state.type === "52week";

  const elapsedPeriod = useMemo(() => {
    const start = new Date(`${state.startDate}T00:00:00`);
    const today = new Date(`${getLocalDate()}T00:00:00`);

    if (Number.isNaN(start.getTime())) return 0;

    const days = Math.max(
      0,
      Math.floor(
        (today.getTime() - start.getTime()) / 86400000
      )
    );

    return isWeekly
      ? Math.min(52, Math.floor(days / 7) + 1)
      : Math.min(
          state.type === "custom"
            ? state.customDuration
            : state.type === "nospend"
              ? 30
              : 365,
          days + 1
        );
  }, [state, isWeekly]);

  const expectedAmount = getExpectedAmount(
    state,
    elapsedPeriod || 1
  );

  if (!hydrated) {
    return (
      <main className="flex min-h-[60vh] items-center justify-center bg-slate-50 px-4 dark:bg-slate-950">
        <div className="text-center">
          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-emerald-100 border-t-emerald-600 dark:border-slate-700 dark:border-t-emerald-400" />
          <p className="mt-4 text-sm font-semibold text-slate-500 dark:text-slate-400">
            Loading your saving challenge...
          </p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 px-4 py-7 transition-colors duration-300 dark:bg-slate-950 sm:px-6 sm:py-10">
      <div className="mx-auto max-w-6xl">

        {/* HERO */}
        <header className="relative mb-9 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-emerald-900 to-teal-900 px-5 py-10 text-center shadow-xl shadow-emerald-950/10 sm:px-10 sm:py-14">
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-teal-300/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-white/10 px-4 py-2 text-[10px] font-extrabold uppercase tracking-[0.2em] text-emerald-200 sm:text-xs">
              ✨ Smart Saving Tool
            </span>

            <div className="mx-auto mt-7 flex h-20 w-20 items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-5xl shadow-xl backdrop-blur-sm">
              💰
            </div>

            <h1 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl">
              One Rupee Saving Challenge
            </h1>

            <p className="mt-4 text-lg font-bold text-emerald-300 sm:text-2xl">
              Small Savings Today, Bigger Dreams Tomorrow
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-emerald-100/80">
              Start small, stay consistent and turn your daily
              savings into something meaningful. Track your
              progress, unlock achievements and reach your goals.
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                🌱 Build Habits
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                📈 Track Progress
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-sm">
                🏆 Earn Rewards
              </div>
            </div>
          </div>
        </header>

        <div className="space-y-7">

          {/* CHALLENGE SELECTOR */}
          <ChallengeSelector
            selected={state.type}
            onChange={changeChallenge}
          />

          {/* SETTINGS */}
          <ChallengeInputs
            state={state}
            onChange={updateField}
          />

          {/* STATS */}
          <ChallengeStats state={state} />

          {/* OVERALL PROGRESS */}
          <section className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50 p-5 dark:border-emerald-900/50 dark:from-emerald-950/40 dark:to-teal-950/30 sm:p-7">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-emerald-700 dark:text-emerald-400">
                  Your saving journey
                </p>

                <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white">
                  You're making progress!
                </h2>
              </div>

              <span className="rounded-xl bg-white px-4 py-2 text-xl font-black text-emerald-700 shadow-sm dark:bg-slate-900 dark:text-emerald-400">
                {progress}%
              </span>
            </div>

            <div
              className="mt-6 h-4 overflow-hidden rounded-full bg-emerald-100 dark:bg-slate-800"
              role="progressbar"
              aria-valuenow={progress}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label="Saving target progress"
            >
              <div
                className="h-full rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-700"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-3 flex flex-wrap justify-between gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-300">
              <span>{formatINR(totalSaved)} saved</span>
              <span>{formatINR(target)} target</span>
            </div>
          </section>

          {/* SAVING ENTRY */}
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
            <div className="mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
                Take action today
              </span>

              <h2 className="mt-2 text-xl font-extrabold text-slate-900 dark:text-white sm:text-2xl">
                {state.type === "nospend"
                  ? "Track Avoided Spending"
                  : "Record Your Savings"}
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
                {state.type === "nospend"
                  ? "Record money you saved by avoiding unnecessary purchases."
                  : "Add your saving amount and celebrate another step towards your goal."}
              </p>
            </div>

            {state.type === "nospend" ? (
              <div className="space-y-5">
                <div className="rounded-2xl bg-orange-50 p-4 dark:bg-orange-950/30">
                  <p className="text-xs font-semibold text-orange-700 dark:text-orange-400">
                    Total avoided spending
                  </p>

                  <p className="mt-2 text-3xl font-black text-orange-700 dark:text-orange-300">
                    {formatINR(state.avoidedSpending)}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="avoided-amount"
                    className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    Amount You Avoided Spending (₹)
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-emerald-600 dark:text-emerald-400">
                      ₹
                    </span>

                    <input
                      id="avoided-amount"
                      type="number"
                      min="1"
                      value={avoidedAmount || ""}
                      onChange={(e) =>
                        setAvoidedAmount(Number(e.target.value))
                      }
                      placeholder="Enter amount"
                      className={`${inputClass} pl-9`}
                    />
                  </div>
                </div>

                <button
                  type="button"
                  onClick={addAvoidedSpending}
                  disabled={avoidedAmount <= 0}
                  className={primaryButton}
                >
                  + Add Avoided Spending
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 dark:border-emerald-900/50 dark:bg-emerald-950/30">
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    Suggested saving for this period
                  </p>

                  <p className="mt-2 text-2xl font-black text-emerald-700 dark:text-emerald-300">
                    {formatINR(expectedAmount)}
                  </p>
                </div>

                <div>
                  <label
                    htmlFor="saving-amount"
                    className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    Saving Amount (₹)
                  </label>

                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 font-bold text-emerald-600 dark:text-emerald-400">
                      ₹
                    </span>

                    <input
                      id="saving-amount"
                      type="number"
                      min="1"
                      value={amount}
                      onChange={(e) =>
                        setAmount(Number(e.target.value))
                      }
                      placeholder="Enter saving amount"
                      className={`${inputClass} pl-9`}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="saving-note"
                    className="mb-2 block text-sm font-bold text-slate-700 dark:text-slate-300"
                  >
                    Saving Note
                    <span className="ml-2 font-normal text-slate-400">
                      (Optional)
                    </span>
                  </label>

                  <input
                    id="saving-note"
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="e.g. Saved from today's expenses"
                    className={inputClass}
                  />
                </div>

                <button
                  type="button"
                  onClick={addSaving}
                  disabled={!Number.isFinite(amount) || amount <= 0}
                  className={primaryButton}
                >
                  + Record Today's Saving
                </button>
              </div>
            )}
          </section>

          {/* CALENDAR */}
          <ChallengeCalendar
            state={state}
            onToggle={toggleDate}
          />

          {/* BADGES */}
          <ChallengeBadges state={state} />

          {/* MOTIVATION */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-emerald-950 to-teal-950 px-6 py-10 text-center shadow-xl sm:px-10 sm:py-12">
            <div className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />

            <div className="relative">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-4xl">
                🚀
              </div>

              <h2 className="mt-5 text-2xl font-black text-white sm:text-3xl">
                Every Rupee Counts!
              </h2>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-emerald-100/80">
                Your financial goals are built one small step
                at a time. Keep saving, stay consistent and
                celebrate every milestone along the way.
              </p>

              <p className="mt-6 text-sm font-bold text-emerald-300">
                Small Steps. Big Dreams. 💚
              </p>
            </div>
          </section>

          {/* RESET */}
          <div className="flex justify-center">
            <button
              type="button"
              onClick={resetChallenge}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 bg-white px-6 py-3 text-sm font-bold text-red-600 transition-all hover:border-red-400 hover:bg-red-50 dark:border-red-900/50 dark:bg-slate-900 dark:text-red-400 dark:hover:bg-red-950/30"
            >
              ↻ Reset Challenge
            </button>
          </div>

          {/* DISCLAIMER */}
          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/50 dark:bg-amber-950/20">
            <div className="flex items-start gap-3">
              <span className="text-xl">⚠️</span>

              <div>
                <h3 className="font-extrabold text-amber-900 dark:text-amber-300">
                  Important Disclaimer
                </h3>

                <p className="mt-2 text-xs leading-6 text-amber-800 dark:text-amber-200/80">
                  This tool is designed for educational purposes
                  and personal savings tracking. It does not hold,
                  transfer or deposit money. All information is
                  stored locally in your browser. Actual savings
                  depend on your own contributions and spending
                  decisions.
                </p>
              </div>
            </div>
          </section>

        </div>

        {/* FOOTER */}
        <footer className="py-8 text-center">
          <p className="text-xs font-medium text-slate-400 dark:text-slate-500">
            Made for smarter saving habits 💚
          </p>
        </footer>
      </div>
    </main>
  );
}
