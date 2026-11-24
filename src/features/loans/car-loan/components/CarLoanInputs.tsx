
'use client'

import { getCurrency } from '@/lib/currency/currencies'
import CurrencySelector from '@/lib/currency/CurrencySelector'

interface CarLoanInputsProps {
  carPrice: number
  downPayment: number
  interestRate: number
  years: number
  currency: string
  onCarPriceChange: (value: number) => void
  onDownPaymentChange: (value: number) => void
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
    <div className="car-loan-field space-y-3">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <label className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {title}
          </label>
          <p className="mt-1 text-xs text-slate-400">{help}</p>
        </div>

        <output className="rounded-xl bg-emerald-50 px-3 py-2 text-base font-extrabold tabular-nums text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300">
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
        className="car-loan-range h-2 w-full cursor-pointer appearance-none rounded-full accent-emerald-600"
        style={{
          background: `linear-gradient(to right, #10b981 0%, #10b981 ${progress}%, #e2e8f0 ${progress}%, #e2e8f0 100%)`,
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
        className="car-loan-number w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm font-semibold outline-none transition focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      />
    </div>
  )
}

export default function CarLoanInputs({
  carPrice,
  downPayment,
  interestRate,
  years,
  currency,
  onCarPriceChange,
  onDownPaymentChange,
  onInterestChange,
  onYearsChange,
  onCurrencyChange,
}: CarLoanInputsProps) {
  const selectedCurrency = getCurrency(currency)

  const money = (value: number) =>
    `${selectedCurrency.symbol} ${value.toLocaleString('en-IN')}`

  const loanAmount = Math.max(0, carPrice - downPayment)

  // Keep down payment within car price when car price changes
  const handleCarPriceChange = (value: number) => {
    onCarPriceChange(value)
    if (downPayment > value) {
      onDownPaymentChange(value)
    }
  }

  return (
    <div className="space-y-8">
      {/* CURRENCY */}
      <CurrencySelector
        value={currency}
        onChange={onCurrencyChange}
      />

      {/* CAR PRICE */}
      <SliderField
        title="Car Price"
        value={carPrice}
        min={100000}
        max={10000000}
        step={10000}
        display={money(carPrice)}
        help="On-road or ex-showroom price of the car"
        onChange={handleCarPriceChange}
      />

      {/* DOWN PAYMENT */}
      <div className="space-y-3">
        <SliderField
          title="Down Payment"
          value={downPayment}
          min={0}
          max={carPrice}
          step={5000}
          display={money(downPayment)}
          help="Amount you pay upfront"
          onChange={onDownPaymentChange}
        />

        <p className="rounded-xl bg-slate-50 px-4 py-2.5 text-sm font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
          Loan Amount:{' '}
          <span className="text-emerald-700 dark:text-emerald-300">
            {money(loanAmount)}
          </span>
        </p>
      </div>

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
        max={8}
        step={1}
        display={`${years} ${years === 1 ? 'Year' : 'Years'}`}
        help="Duration of the car loan (typically 1–7 years)"
        onChange={onYearsChange}
      />

      {/* RESET */}
      <button
        type="button"
        onClick={() => {
          onCarPriceChange(1500000)
          onDownPaymentChange(300000)
          onInterestChange(9)
          onYearsChange(5)
          onCurrencyChange('INR')
        }}
        className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm font-bold text-slate-600 transition hover:border-emerald-500 hover:bg-emerald-50 hover:text-emerald-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-emerald-950/40"
      >
        ↺ Reset Calculator
      </button>
    </div>
  )
}