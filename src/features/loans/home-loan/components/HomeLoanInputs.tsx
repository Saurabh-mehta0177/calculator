
'use client'

import { getCurrency } from '@/lib/currency/currencies'
import CurrencySelector from '@/lib/currency/CurrencySelector'

interface HomeLoanInputsProps {
  principal: number
  interestRate: number
  years: number
  currency: string
  onPrincipalChange: (value: number) => void
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
    <div className="home-loan-field space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {title}
          </label>
          <p className="mt-1 text-xs text-slate-400">{help}</p>
        </div>

        <output className="rounded-xl bg-blue-50 px-3 py-2 text-base font-extrabold tabular-nums text-blue-700 dark:bg-blue-950/60 dark:text-blue-300">
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
        className="home-loan-range h-2 w-full cursor-pointer appearance-none rounded-full accent-blue-600"
        style={{
          background: `linear-gradient(to right, #3b82f6 0%, #3b82f6 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
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
        className="home-loan-number w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
    </div>
  )
}

export default function HomeLoanInputs({
  principal,
  interestRate,
  years,
  currency,
  onPrincipalChange,
  onInterestChange,
  onYearsChange,
  onCurrencyChange,
}: HomeLoanInputsProps) {
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

      {/* HOME LOAN AMOUNT */}
      <SliderField
        title="Home Loan Amount"
        value={principal}
        min={100000}
        max={100000000}
        step={100000}
        display={money(principal)}
        help="Total home loan amount you want to borrow"
        onChange={onPrincipalChange}
      />

      {/* INTEREST RATE */}
      <SliderField
        title="Interest Rate (p.a.)"
        value={interestRate}
        min={5}
        max={20}
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
        help="Duration of the home loan (typically up to 30 years)"
        onChange={onYearsChange}
      />

      {/* RESET */}
      <button
        type="button"
        onClick={() => {
          onPrincipalChange(3000000)
          onInterestChange(8.5)
          onYearsChange(20)
          onCurrencyChange('INR')
        }}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-blue-950/40"
      >
        ↺ Reset Calculator
      </button>
    </div>
  )
}