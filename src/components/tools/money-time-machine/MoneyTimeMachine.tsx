
'use client'

import { useMemo, useState } from 'react'

import MoneyInputs from './MoneyInputs'
import MoneyResults from './MoneyResults'
import MoneyChart from './MoneyChart'
import MoneyGuide from './MoneyGuide'

import {
  calculateProjection,
  DEFAULT_VALUES,
  type MoneyInputs as MoneyValues,
} from './moneyUtils'

export default function MoneyTimeMachine() {
  const [values, setValues] =
    useState<MoneyValues>(DEFAULT_VALUES)

  const [currency, setCurrency] = useState('INR')

  const handleChange = (
    field: keyof MoneyValues,
    value: number
  ) => {
    setValues(previous => ({
      ...previous,
      [field]: value,
    }))
  }

  const handleReset = () => {
    setValues(DEFAULT_VALUES)
    setCurrency('INR')
  }

  const projections = useMemo(
    () => calculateProjection(values),
    [values]
  )

  return (
    <main className="w-full space-y-8">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 p-7 text-white shadow-xl sm:p-10">

        <div className="relative z-10">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-extrabold tracking-wider">
            ⏳ FINANCIAL FUTURE SIMULATOR
          </span>

          <h1 className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
            Money Time Machine
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Discover how your income, savings and investments
            could shape your financial future. Calculate your
            potential wealth with our free financial calculator.
          </p>

        </div>

        <div className="pointer-events-none absolute -right-16 -top-20 h-72 w-72 rounded-full border-[40px] border-white/10" />

      </section>

      {/* INPUT + RESULTS */}
      <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

        {/* LEFT SIDE - INPUTS */}
        <div className="min-w-0 lg:col-span-5">
          <MoneyInputs
            values={values}
            currency={currency}
            onChange={handleChange}
            onCurrencyChange={setCurrency}
            onReset={handleReset}
          />
        </div>

        {/* RIGHT SIDE - RESULTS */}
        <div className="min-w-0 lg:col-span-7">
          <MoneyResults
            projections={projections}
            years={values.years}
            currency={currency}
          />
        </div>

      </section>

      {/* FULL WIDTH GRAPH */}
      <section className="w-full">
        <MoneyChart
          projections={projections}
          currency={currency}
        />
      </section>

      {/* DISCLAIMER */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900">

        <h2 className="text-sm font-extrabold text-slate-800 dark:text-white">
          Financial Disclaimer
        </h2>

        <p className="mt-2 text-xs leading-6 text-slate-500 dark:text-slate-400">
          This calculator provides illustrative estimates only
          and does not constitute financial or investment advice.
          Returns are hypothetical and are not guaranteed.
          Taxes, inflation, fees and market fluctuations are not
          included.
        </p>

      </section>
     <MoneyGuide/>

    </main>
  )
}
