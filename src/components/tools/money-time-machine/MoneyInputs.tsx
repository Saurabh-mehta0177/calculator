
'use client'

import { getCurrency } from '@/lib/currency/currencies'
import CurrencySelector from '@/lib/currency/CurrencySelector'
import type { MoneyInputs as MoneyValues } from './moneyUtils'

type Props = {
  values: MoneyValues
  currency: string
  onChange: (field: keyof MoneyValues, value: number) => void
  onCurrencyChange: (value: string) => void
  onReset: () => void
}

function SliderField({
  title,
  value,
  min,
  max,
  step = 1,
  display,
  help,
  onChange,
  color = 'blue',
}: {
  title: string
  value: number
  min: number
  max: number
  step?: number
  display: string
  help: string
  onChange: (value: number) => void
  color?: 'blue' | 'emerald'
}) {
  const progress = ((value - min) / (max - min)) * 100
  const accent = color === 'emerald' ? '#10b981' : '#3b82f6'

  return (
    <div className="space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
            {title}
          </label>
          <p className="mt-1 text-xs text-slate-400">{help}</p>
        </div>

        <output className={`rounded-xl px-4 py-2 text-sm font-extrabold tabular-nums ${
          color === 'emerald'
            ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
            : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
        }`}>
          {display}
        </output>
      </div>

      <input
        type="range"
        aria-label={title}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full"
        style={{
          accentColor: accent,
          background: `linear-gradient(to right, ${accent} ${progress}%, #e2e8f0 ${progress}%)`,
        }}
      />

      <div className="flex justify-between text-xs text-slate-400">
        <span>{min.toLocaleString('en-IN')}</span>
        <span>{max.toLocaleString('en-IN')}</span>
      </div>

      <input
        type="number"
        aria-label={`${title} exact value`}
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => {
          if (e.target.value === '') return
          const number = Number(e.target.value)
          if (Number.isFinite(number)) {
            onChange(Math.min(max, Math.max(min, number)))
          }
        }}
        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-bold text-slate-800 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
    </div>
  )
}

export default function MoneyInputs({
  values,
  currency,
  onChange,
  onCurrencyChange,
  onReset,
}: Props) {
  const selectedCurrency = getCurrency(currency)

  const money = (value: number) =>
    `${selectedCurrency.symbol} ${value.toLocaleString('en-IN')}`

  const monthlySavings = Math.max(
    0,
    values.salary - values.expenses
  )

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">

      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold tracking-wider text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          STEP 01 · YOUR INPUTS
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Your Financial Situation
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Adjust your income, expenses and investment assumptions
          to explore your potential financial future.
        </p>
      </div>

      <div className="mb-8 rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/50">
        <CurrencySelector
          value={currency}
          onChange={onCurrencyChange}
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <SliderField
          title="Monthly Salary"
          value={values.salary}
          min={0}
          max={500000}
          step={1000}
          display={money(values.salary)}
          help="Your monthly take-home income"
          onChange={v => onChange('salary', v)}
        />

        <SliderField
          title="Monthly Expenses"
          value={values.expenses}
          min={0}
          max={500000}
          step={1000}
          display={money(values.expenses)}
          help="Your monthly living expenses"
          onChange={v => onChange('expenses', v)}
        />

        <SliderField
          title="Current Savings"
          value={values.savings}
          min={0}
          max={10000000}
          step={10000}
          display={money(values.savings)}
          help="Your existing savings and investments"
          onChange={v => onChange('savings', v)}
        />

        <div className="flex flex-col justify-center rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50 p-5 dark:border-blue-900/50 dark:from-blue-950/40 dark:to-indigo-950/40">
          <p className="text-sm font-bold text-slate-600 dark:text-slate-300">
            Monthly Savings
          </p>
          <h3 className="mt-3 break-all text-2xl font-extrabold text-blue-700 dark:text-blue-300">
            {money(monthlySavings)}
          </h3>
          <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
            Salary minus monthly expenses
          </p>
        </div>
      </div>

      <div className="my-8 border-t border-slate-100 dark:border-slate-800" />

      <div className="space-y-8">
        <SliderField
          title="Annual Salary Increase"
          value={values.salaryGrowth}
          min={0}
          max={20}
          display={`${values.salaryGrowth}%`}
          help="Expected yearly income growth"
          onChange={v => onChange('salaryGrowth', v)}
        />

        <SliderField
          title="Expected Annual Return"
          value={values.annualReturn}
          min={0}
          max={20}
          step={0.5}
          display={`${values.annualReturn.toFixed(1)}%`}
          help="Assumed annual investment return"
          color="emerald"
          onChange={v => onChange('annualReturn', v)}
        />

        <SliderField
          title="Investment Timeline"
          value={values.years}
          min={1}
          max={30}
          display={`${values.years} Years`}
          help="How far into the future do you want to look?"
          onChange={v => onChange('years', v)}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-amber-100 bg-amber-50/70 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
        <p className="text-xs leading-6 text-amber-800 dark:text-amber-300">
          ⓘ All projections are estimates based on hypothetical
          assumptions. Actual returns are not guaranteed.
        </p>
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-6 w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-950/30"
      >
        ↺ Reset Calculator
      </button>
    </section>
  )
}
