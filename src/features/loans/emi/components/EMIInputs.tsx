


'use client'

import { getCurrency } from '@/lib/currency/currencies'
import CurrencySelector from '@/lib/currency/CurrencySelector'

interface EMIInputsProps {
  amount: number
  interestRate: number
  years: number
  currency: string
  onAmountChange: (value: number) => void
  onInterestChange: (value: number) => void
  onYearsChange: (value: number) => void
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
}: SliderFieldProps) {
  const progress = max > min ? ((value - min) / (max - min)) * 100 : 0

  return (
    <div className="emi-field space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {title}
          </label>
          <p className="mt-1 text-xs text-slate-400">{help}</p>
        </div>

        <output className="rounded-xl bg-indigo-50 px-3 py-2 text-base font-extrabold tabular-nums text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300">
          {display}
        </output>
      </div>

      {/* RANGE SLIDER */}
      <input
        aria-label={title}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="emi-range h-2 w-full cursor-pointer appearance-none rounded-full accent-indigo-600"
        style={{
          background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
        }}
      />

      <div className="flex justify-between text-xs font-medium text-slate-400">
        <span>{min.toLocaleString('en-IN')}</span>
        <span>{max.toLocaleString('en-IN')}</span>
      </div>

      {/* MANUAL INPUT */}
      <input
        aria-label={`${title} exact value`}
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => {
          const number = Number(e.target.value)
          if (e.target.value === '') return
          onChange(Math.min(max, Math.max(min, number)))
        }}
        className="emi-number w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none transition focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
    </div>
  )
}

export default function EMIInputs({
  amount,
  interestRate,
  years,
  currency,
  onAmountChange,
  onInterestChange,
  onYearsChange,
  onCurrencyChange,
}: EMIInputsProps) {
  const selectedCurrency = getCurrency(currency)

  const money = (value: number) =>
    `${selectedCurrency.symbol} ${value.toLocaleString('en-IN')}`

  return (
    <div className="space-y-8">
      {/* CURRENCY */}
      <CurrencySelector
        value={currency}
        onChange={onCurrencyChange}
      />

      {/* LOAN AMOUNT */}
      <SliderField
        title="Loan Amount"
        value={amount}
        min={10000}
        max={10000000}
        step={10000}
        display={money(amount)}
        help="Total amount you want to borrow"
        onChange={onAmountChange}
      />

      {/* INTEREST RATE */}
      <SliderField
        title="Interest Rate (p.a.)"
        value={interestRate}
        min={1}
        max={30}
        step={0.1}
        display={`${interestRate.toFixed(1)}%`}
        help="Annual interest rate offered by the lender"
        onChange={onInterestChange}
      />

      {/* LOAN TENURE */}
      <SliderField
        title="Loan Tenure"
        value={years}
        min={1}
        max={30}
        step={1}
        display={`${years} ${years === 1 ? 'Year' : 'Years'}`}
        help="Duration of the loan in years"
        onChange={onYearsChange}
      />

      {/* RESET */}
      <button
        type="button"
        onClick={() => {
          onAmountChange(500000)
          onInterestChange(8.5)
          onYearsChange(5)
          onCurrencyChange('INR')
        }}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-indigo-500 hover:bg-indigo-50 hover:text-indigo-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-indigo-950/40"
      >
        ↺ Reset Calculator
      </button>
    </div>
  )
}