
export type ChallengeType =
  | "daily"
  | "weekly"
  | "52week"
  | "nospend"
  | "custom";

export interface ChallengeConfig {
  id: ChallengeType;
  name: string;
  description: string;
  duration: number;
  unit: "day" | "week";
  target: number;
}

export interface SavingEntry {
  date: string;
  amount: number;
  note?: string;
}

export interface ChallengeState {
  type: ChallengeType;
  startDate: string;
  customAmount: number;
  customDuration: number;
  entries: SavingEntry[];
  completedDates: string[];
  avoidedSpending: number;
}

export const STORAGE_KEY = "financetools-one-rupee-v1";

export const DEFAULT_CHALLENGE_STATE: ChallengeState = {
  type: "daily",
  startDate: getLocalDate(),
  customAmount: 10,
  customDuration: 30,
  entries: [],
  completedDates: [],
  avoidedSpending: 0,
};

export const CHALLENGES: ChallengeConfig[] = [
  {
    id: "daily",
    name: "Daily ₹10 Challenge",
    description: "Save ₹10 every day for one year.",
    duration: 365,
    unit: "day",
    target: 3650,
  },
  {
    id: "weekly",
    name: "Weekly ₹100 Challenge",
    description: "Save ₹100 every week for 52 weeks.",
    duration: 52,
    unit: "week",
    target: 5200,
  },
  {
    id: "52week",
    name: "52 Week Challenge",
    description: "Increase your savings by ₹1 every week.",
    duration: 52,
    unit: "week",
    target: 1378,
  },
  {
    id: "nospend",
    name: "30 Day No-Spend Challenge",
    description: "Avoid unnecessary purchases for 30 days.",
    duration: 30,
    unit: "day",
    target: 0,
  },
  {
    id: "custom",
    name: "Custom Saving Challenge",
    description: "Create your own saving goal.",
    duration: 30,
    unit: "day",
    target: 300,
  },
];

export function getLocalDate(date = new Date()): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export function getChallengeDuration(
  state: ChallengeState
): number {
  if (state.type === "custom") {
    return Math.max(1, state.customDuration);
  }

  return (
    CHALLENGES.find((item) => item.id === state.type)?.duration ?? 30
  );
}

export function getChallengeTarget(
  state: ChallengeState
): number {
  if (state.type === "custom") {
    return state.customAmount * state.customDuration;
  }

  return (
    CHALLENGES.find((item) => item.id === state.type)?.target ?? 0
  );
}

export function getExpectedAmount(
  state: ChallengeState,
  period: number
): number {
  switch (state.type) {
    case "daily":
      return 10;

    case "weekly":
      return 100;

    case "52week":
      return period;

    case "custom":
      return state.customAmount;

    default:
      return 0;
  }
}

export function getTotalSaved(state: ChallengeState): number {
  return state.entries.reduce(
    (total, entry) => total + Math.max(0, entry.amount),
    0
  );
}

export function getProgress(
  saved: number,
  target: number
): number {
  if (target <= 0) return 0;

  return Math.min(
    100,
    Math.round((saved / target) * 100)
  );
}

export function getElapsedPeriods(
  state: ChallengeState
): number {
  const start = new Date(`${state.startDate}T00:00:00`);
  const today = new Date(`${getLocalDate()}T00:00:00`);

  if (Number.isNaN(start.getTime())) return 0;

  const diff = Math.max(
    0,
    today.getTime() - start.getTime()
  );

  const days = Math.floor(diff / 86400000);

  if (state.type === "weekly" || state.type === "52week") {
    return Math.min(
      getChallengeDuration(state),
      Math.floor(days / 7) + 1
    );
  }

  return Math.min(
    getChallengeDuration(state),
    days + 1
  );
}

export function getStreak(
  completedDates: string[]
): number {
  const dates = new Set(completedDates);
  const today = new Date();

  if (!dates.has(getLocalDate(today))) {
    today.setDate(today.getDate() - 1);
  }

  let streak = 0;

  while (dates.has(getLocalDate(today))) {
    streak++;
    today.setDate(today.getDate() - 1);
  }

  return streak;
}

export function getBadges(state: ChallengeState) {
  const saved = getTotalSaved(state);
  const streak = getStreak(state.completedDates);
  const progress = getProgress(
    saved,
    getChallengeTarget(state)
  );

  return [
    {
      id: "first",
      name: "First Saver",
      icon: "🌱",
      description: "Save your first amount.",
      unlocked: saved > 0,
    },
    {
      id: "week",
      name: "7 Day Streak",
      icon: "🔥",
      description: "Complete 7 consecutive days.",
      unlocked: streak >= 7,
    },
    {
      id: "month",
      name: "30 Day Champion",
      icon: "🥇",
      description: "Reach a 30 day streak.",
      unlocked: streak >= 30,
    },
    {
      id: "half",
      name: "Halfway Hero",
      icon: "⭐",
      description: "Complete 50% of your target.",
      unlocked: progress >= 50,
    },
    {
      id: "master",
      name: "Saving Master",
      icon: "🏆",
      description: "Complete your saving target.",
      unlocked: progress >= 100,
    },
  ];
}

export function getCalendarData(
  completedDates: string[],
  startDate: string,
  duration: number
) {
  const completed = new Set(completedDates);
  const start = new Date(`${startDate}T00:00:00`);

  if (Number.isNaN(start.getTime())) return [];

  return Array.from({ length: duration }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);

    const key = getLocalDate(date);

    return {
      date: key,
      day: index + 1,
      completed: completed.has(key),
      isToday: key === getLocalDate(),
    };
  });
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}
