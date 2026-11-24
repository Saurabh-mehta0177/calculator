
'use client'

import type { Projection } from './moneyUtils'
import { formatMoney, formatCompact } from './moneyUtils'

type Props = {
  projections: Projection[]
  years: number
  currency: string
}

export default function MoneyResults({
  projections,
  years,
  currency,
}: Props) {
  const final = projections[projections.length - 1]

  const cards = [
    {
      title: 'Regular Savings',
      value: final.wealth,
      description: 'Your monthly savings plan',
      color: 'blue',
    },
    {
      title: '₹100 Daily Savings',
      value: final.dailySaving,
      description: 'Investing ₹100 every day',
      color: 'emerald',
    },
    {
      title: 'No New Savings',
      value: final.noSaving,
      description: 'Only existing wealth grows',
      color: 'amber',
    },
  ]

  const styles = {
    blue: 'border-blue-200 bg-blue-50 text-blue-700 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300',
    emerald: 'border-emerald-200 bg-emerald-50 text-emerald-700 dark:border-emerald-900 dark:bg-emerald-950/30 dark:text-emerald-300',
    amber: 'border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-900 dark:bg-amber-950/30 dark:text-amber-300',
  }

  const timeline = projections.filter(item =>
    item.year === 0 ||
    item.year === 1 ||
    item.year % 5 === 0 ||
    item.year === years
  )

  return (
    <div className="space-y-8">

      <section className="relative overflow-hidden rounded-3xl border border-blue-200 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-7 text-white shadow-xl shadow-blue-500/10 sm:p-10">
        <div className="relative z-10">
          <div className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider">
            YOUR FINANCIAL FUTURE
          </div>

          <p className="mt-7 text-sm font-semibold text-blue-100">
            PROJECTED WEALTH AFTER {years} YEARS
          </p>

          <h2 className="mt-3 break-all text-4xl font-black tracking-tight sm:text-5xl">
            {formatMoney(final.wealth, currency)}
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100">
            Your estimated future wealth based on your current
            savings plan and selected return assumptions.
          </p>
        </div>

        <div className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full border-[35px] border-white/10" />
        <div className="pointer-events-none absolute -bottom-24 right-20 h-64 w-64 rounded-full bg-white/5 blur-2xl" />
      </section>

      <section>
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
          Compare Your Financial Scenarios
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          See how different saving habits may affect your future wealth.
        </p>

        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {cards.map(card => (
            <div
              key={card.title}
              className={`rounded-2xl border p-5 ${styles[card.color as keyof typeof styles]}`}
            >
              <p className="text-sm font-extrabold">
                {card.title}
              </p>

              <h3 className="mt-5 break-all text-2xl font-black">
                {formatCompact(card.value, currency)}
              </h3>

              <p className="mt-2 text-xs opacity-75">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
          Your Year-by-Year Financial Journey
        </h2>

        <div className="mt-6 space-y-3">
          {timeline.map(item => (
            <div
              key={item.year}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800"
            >
              <div>
                <p className="font-bold text-slate-900 dark:text-white">
                  {item.year === 0 ? 'Today' : `After ${item.year} Years`}
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Regular savings plan
                </p>
              </div>

              <p className="text-lg font-extrabold text-blue-600 dark:text-blue-400">
                {formatCompact(item.wealth, currency)}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
