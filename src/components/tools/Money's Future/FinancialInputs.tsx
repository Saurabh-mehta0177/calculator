
'use client'

import type { MoneyInputs } from '@/data/MoneyFuture'

type InputKey =
  | 'monthlyIncome'
  | 'monthlyExpenses'
  | 'currentSavings'
  | 'monthlyInvestment'

interface Props {
  inputs: MoneyInputs
  onChange: (key: keyof MoneyInputs, value: number) => void
  onReset: () => void
}

const fields = [
  {
    key: 'monthlyIncome',
    label: 'Monthly Income',
    description: 'Your monthly take-home income',
    min: 0,
    max: 1000000,
    step: 1000,
    icon: '💰',
  },
  {
    key: 'monthlyExpenses',
    label: 'Monthly Expenses',
    description: 'Your total monthly spending',
    min: 0,
    max: 500000,
    step: 1000,
    icon: '🛍️',
  },
  {
    key: 'currentSavings',
    label: 'Current Savings',
    description: 'Money already saved',
    min: 0,
    max: 50000000,
    step: 10000,
    icon: '🏦',
  },
  {
    key: 'monthlyInvestment',
    label: 'Monthly Investment',
    description: 'Your monthly investment amount',
    min: 0,
    max: 500000,
    step: 500,
    icon: '📈',
  },
] as const

function money(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}

export default function FinancialInputs({
  inputs,
  onChange,
  onReset,
}: Props) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-extrabold text-slate-900 dark:text-white">
            Your Financial Details
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Start with your current financial situation.
          </p>
        </div>

        <button
          type="button"
          onClick={onReset}
          className="rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-bold text-slate-600 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-300"
        >
          ↺ Reset
        </button>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {fields.map((field) => {
          const value = inputs[field.key] as number

          const progress = Math.min(
            100,
            Math.max(0, (value / field.max) * 100),
          )

          return (
            <div
              key={field.key}
              className="rounded-2xl border border-slate-200 p-5 transition hover:border-indigo-300 hover:shadow-md dark:border-slate-700"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50 text-xl dark:bg-indigo-950">
                  {field.icon}
                </span>

                <div>
                  <label className="text-sm font-bold text-slate-800 dark:text-white">
                    {field.label}
                  </label>

                  <p className="mt-1 text-xs text-slate-500">
                    {field.description}
                  </p>
                </div>
              </div>

              <output className="mt-5 block text-2xl font-extrabold text-indigo-700 dark:text-indigo-300">
                {money(value)}
              </output>

              <input
                type="range"
                aria-label={field.label}
                min={field.min}
                max={field.max}
                step={field.step}
                value={value}
                onChange={(e) =>
                  onChange(
                    field.key as InputKey,
                    Number(e.target.value),
                  )
                }
                className="mt-5 h-2 w-full cursor-pointer appearance-none rounded-full accent-indigo-600"
                style={{
                  background: `linear-gradient(to right, #6366f1 ${progress}%, #e2e8f0 ${progress}%)`,
                }}
              />

              <div className="mt-2 flex justify-between text-xs text-slate-400">
                <span>₹{field.min.toLocaleString('en-IN')}</span>
                <span>₹{field.max.toLocaleString('en-IN')}</span>
              </div>

              <input
                type="number"
                aria-label={`${field.label} exact value`}
                min={field.min}
                max={field.max}
                step={field.step}
                value={value}
                onChange={(e) => {
                  if (e.target.value === '') return

                  const number = Number(e.target.value)

                  if (Number.isFinite(number)) {
                    onChange(
                      field.key as InputKey,
                      Math.min(
                        field.max,
                        Math.max(field.min, number),
                      ),
                    )
                  }
                }}
                className="mt-4 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold outline-none focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              />
            </div>
          )
        })}
      </div>

      <div className="mt-6 rounded-2xl bg-gradient-to-r from-indigo-50 to-blue-50 p-5 dark:from-indigo-950/40 dark:to-blue-950/40">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-slate-800 dark:text-white">
              Investment Duration
            </h3>

            <p className="mt-1 text-xs text-slate-500">
              How far into the future?
            </p>
          </div>

          <span className="rounded-xl bg-white px-4 py-2 text-lg font-extrabold text-indigo-700 dark:bg-slate-900 dark:text-indigo-300">
            {inputs.years} Years
          </span>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[5, 10, 15, 20].map((year) => (
            <button
              key={year}
              type="button"
              onClick={() => onChange('years', year)}
              className={`rounded-xl border px-4 py-3 text-sm font-bold transition ${
                inputs.years === year
                  ? 'border-indigo-600 bg-indigo-600 text-white'
                  : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              }`}
            >
              {year} Years
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
