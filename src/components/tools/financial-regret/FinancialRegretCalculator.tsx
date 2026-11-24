
'use client'

import { useMemo, useState } from 'react'

import {
  calculateFinancialRegret,
  type FinancialRegretInputs,
} from '@/lib/financialRegret'

import RegretInputs from './RegretInputs'
import RegretResults from './RegretResults'
import RegretGrowthChart from './RegretGrowthChart'
import RegretGuide from './RegretGuide'

export default function FinancialRegretCalculator() {
  const [values, setValues] = useState<FinancialRegretInputs>({
    monthlySaving: 2000,
    years: 5,
    annualReturn: 12,
  })

  const [currency, setCurrency] = useState('INR')

  const result = useMemo(
    () => calculateFinancialRegret(values),
    [values]
  )

  function handleChange(
    field: keyof FinancialRegretInputs,
    value: number
  ) {
    setValues((previous) => ({
      ...previous,
      [field]: value,
    }))
  }

  function resetCalculator() {
    setValues({
      monthlySaving: 2000,
      years: 5,
      annualReturn: 12,
    })

    setCurrency('INR')
  }

  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f7fc] px-4 py-8 sm:px-6 lg:py-12">

      <div className="mx-auto max-w-7xl">

        {/* HERO SECTION */}

        <section className="relative mb-10 overflow-hidden rounded-[2rem] bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-6 py-12 text-center shadow-2xl shadow-blue-950/10 sm:px-12 sm:py-16">

          <div className="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

          <div className="relative z-10">

            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[11px] font-bold tracking-[0.18em] text-blue-200 backdrop-blur-md">
              <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              EXCLUSIVE FINANCIAL TOOL
            </span>

            <h1 className="mt-7 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              Financial Regret
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                Calculator
              </span>
            </h1>

            <h2 className="mt-5 text-lg font-semibold text-blue-100 sm:text-2xl">
              What If You Had Started Saving Earlier?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Discover the potential wealth you could have built
              by starting your savings journey earlier. Explore
              the power of consistency, time and compound growth.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {[
                '📈 Wealth Projection',
                '💰 Monthly Savings',
                '⏳ Power of Compounding',
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-blue-100 backdrop-blur"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        </section>

        {/* CALCULATOR INTRO */}

        <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Investment Simulator
            </p>

            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
              Calculate Your Wealth Gap
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Adjust your investment details to explore your potential wealth.
            </p>
          </div>

          <div className="inline-flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2 text-xs font-bold text-emerald-700">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            Live Calculation
          </div>

        </div>

        {/* INPUT + RESULTS TWO COLUMN LAYOUT */}

        <section className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12">

          {/* LEFT: INPUTS */}

          <div className="min-w-0 lg:col-span-5">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-50 text-xl">
                ⚙️
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900">
                  Your Investment Details
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Customize your saving plan.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-4 shadow-lg shadow-slate-200/50 sm:p-6">

              <RegretInputs
                values={values}
                currency={currency}
                onChange={handleChange}
                onCurrencyChange={setCurrency}
              />

            </div>

          </div>

          {/* RIGHT: RESULTS */}

          <div className="min-w-0 lg:col-span-7">

            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-xl">
                📊
              </div>

              <div>
                <h3 className="font-extrabold text-slate-900">
                  Your Investment Results
                </h3>
                <p className="mt-1 text-xs text-slate-500">
                  Your projected wealth at a glance.
                </p>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200/80 bg-white p-4 shadow-lg shadow-slate-200/40 sm:p-6">

              <RegretResults
                result={result}
                currency={currency}
              />

            </div>

          </div>

        </section>

        {/* FULL WIDTH GROWTH CHART */}

        <section className="mt-8 overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-4 shadow-lg shadow-slate-200/40 sm:p-7">

          <div className="mb-6 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">

            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                Growth Visualization
              </span>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
                Your Wealth Growth Journey
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                Visualize how your hypothetical investment grows over time.
              </p>
            </div>

            <span className="inline-flex w-fit items-center gap-2 rounded-xl bg-blue-50 px-4 py-2 text-xs font-bold text-blue-700">
              📈 Investment Projection
            </span>

          </div>

          <div className="w-full min-w-0">
            <RegretGrowthChart
              result={result}
              currency={currency}
            />
          </div>

        </section>

        {/* MOTIVATIONAL SECTION */}

        <section className="relative mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-700 via-indigo-800 to-slate-950 px-6 py-12 text-white shadow-xl shadow-indigo-950/15 sm:px-12 sm:py-14">

          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border-[35px] border-white/5" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-blue-400/10 blur-2xl" />

          <div className="relative mx-auto max-w-2xl text-center">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-3xl shadow-lg backdrop-blur">
              🚀
            </div>

            <p className="mt-6 text-xs font-bold uppercase tracking-[0.2em] text-blue-200">
              Start Today, Grow Tomorrow
            </p>

            <h2 className="mt-3 text-2xl font-black leading-tight sm:text-4xl">
              Your Past Cannot Be Changed.
              <span className="block text-blue-200">
                Your Future Can.
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-blue-100">
              You cannot go back and start investing earlier.
              But you can start building better financial
              habits today. Even small regular savings
              can make a difference over time.
            </p>

          </div>
        </section>

        {/* RESET BUTTON */}

        <div className="mt-9 flex justify-center">

          <button
            type="button"
            onClick={resetCalculator}
            className="group inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-lg"
          >
            <span className="text-lg transition-transform duration-300 group-hover:-rotate-180">
              ↻
            </span>
            Reset Calculator
          </button>

        </div>

        {/* DISCLAIMER */}

        <section className="mt-9 rounded-2xl border border-amber-200/80 bg-amber-50/80 p-5 sm:p-6">

          <div className="flex items-start gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-lg">
              ⚠️
            </div>

            <div>
              <h3 className="font-extrabold text-amber-950">
                Important Financial Disclaimer
              </h3>

              <p className="mt-2 text-xs leading-6 text-amber-900/80 sm:text-sm">
                This calculator provides hypothetical investment
                projections based on the monthly saving amount,
                duration and assumed annual return entered by
                the user. It does not use actual historical market
                data and does not represent actual past investment
                performance. Returns are not guaranteed. Actual
                investment outcomes may be higher or lower,
                including the possibility of losses.
              </p>
            </div>

          </div>
        </section>

        {/* FOOTER */}

        <footer className="pb-3 pt-8 text-center">
          <p className="text-xs text-slate-400">
            Plan Smart. Save Consistently. Build Your Future.
          </p>
        </footer>

      </div>
      <RegretGuide/>
    </main>
  )
}
