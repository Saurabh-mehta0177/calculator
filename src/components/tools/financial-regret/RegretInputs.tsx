

'use client'

import { getCurrency } from '@/lib/currency/currencies'
import CurrencySelector from '@/lib/currency/CurrencySelector'
import type { FinancialRegretInputs } from '@/lib/financialRegret'

type Props = {
  values: FinancialRegretInputs
  currency: string
  onChange: (
    field: keyof FinancialRegretInputs,
    value: number
  ) => void
  onCurrencyChange: (value: string) => void
}

interface SliderFieldProps {
  title: string
  value: number
  min: number
  max: number
  step?: number
  display: string
  help: string
  onChange: (value: number) => void
  color?: 'blue' | 'emerald'
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
}: SliderFieldProps) {
  const progress = ((value - min) / (max - min)) * 100
  const accent = color === 'emerald' ? '#10b981' : '#3b82f6'

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <label className="text-sm font-bold text-slate-700 dark:text-slate-200">
            {title}
          </label>
          <p className="mt-1 text-xs text-slate-400">
            {help}
          </p>
        </div>

        <output
          className={`rounded-xl px-4 py-2 text-lg font-extrabold tabular-nums ${
            color === 'emerald'
              ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300'
              : 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300'
          }`}
        >
          {display}
        </output>
      </div>

      <input
        aria-label={title}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-2 w-full cursor-pointer appearance-none rounded-full accent-blue-600"
        style={{
          background: `linear-gradient(to right, ${accent} 0%, ${accent} ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
        }}
      />

      <div className="flex justify-between text-xs font-medium text-slate-400">
        <span>{min.toLocaleString('en-IN')}</span>
        <span>{max.toLocaleString('en-IN')}</span>
      </div>

      <input
        aria-label={`${title} exact value`}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
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

export default function RegretInputs({
  values,
  currency,
  onChange,
  onCurrencyChange,
}: Props) {
  const selectedCurrency = getCurrency(currency)

  const money = (value: number) =>
    `${selectedCurrency.symbol} ${value.toLocaleString('en-IN')}`

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">

      {/* HEADER */}
      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-extrabold tracking-wider text-blue-600 dark:bg-blue-950/40 dark:text-blue-400">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          STEP 01 · YOUR INPUTS
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Your Past Saving Plan
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Imagine how much wealth you could have created
          if you had started investing earlier.
        </p>
      </div>

      <div className="space-y-8">

        {/* CURRENCY SELECTOR */}
        <div className="rounded-2xl border border-slate-100 bg-slate-50/80 p-4 dark:border-slate-800 dark:bg-slate-800/50">
          <CurrencySelector
            value={currency}
            onChange={onCurrencyChange}
          />
        </div>

        {/* MONTHLY SAVING */}
        <SliderField
          title="Monthly Saving Amount"
          value={values.monthlySaving}
          min={500}
          max={50000}
          step={500}
          display={money(values.monthlySaving)}
          help="How much could you have invested every month?"
          onChange={(value) =>
            onChange('monthlySaving', value)
          }
        />

        {/* INVESTMENT DURATION */}
        <SliderField
          title="Investment Duration"
          value={values.years}
          min={1}
          max={30}
          display={`${values.years} ${
            values.years === 1 ? 'Year' : 'Years'
          }`}
          help="How many years earlier could you have started?"
          onChange={(value) =>
            onChange('years', value)
          }
        />

        {/* ANNUAL RETURN */}
        <SliderField
          title="Hypothetical Annual Return"
          value={values.annualReturn}
          min={0}
          max={20}
          step={0.5}
          display={`${values.annualReturn.toFixed(1)}%`}
          help="Choose an assumed annual investment return"
          color="emerald"
          onChange={(value) =>
            onChange('annualReturn', value)
          }
        />

        {/* DISCLAIMER */}
        <div className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50/70 p-4 dark:border-amber-900/40 dark:bg-amber-950/20">
          <span className="text-lg">ⓘ</span>

          <p className="text-xs leading-6 text-amber-800 dark:text-amber-300">
            Returns are hypothetical and provided for
            illustration only. Actual investment returns
            may vary and are not guaranteed.
          </p>
        </div>

        {/* RESET */}
        <button
          type="button"
          onClick={() => {
            onChange('monthlySaving', 10000)
            onChange('years', 10)
            onChange('annualReturn', 12)
            onCurrencyChange('INR')
          }}
          className="w-full rounded-xl border border-slate-200 px-4 py-3.5 text-sm font-bold text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300 dark:hover:bg-blue-950/30"
        >
          ↺ Reset Calculator
        </button>

      </div>
    </section>
  )
}
