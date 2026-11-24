
'use client'

import { useMemo, useState } from 'react'

import PercentageInputs from './PercentageInputs'
import PercentageResultComponent from './PercentageResult'
//import PercentageResult from './PercentageResult'
//import PercentageChart from './PercentageChart'
import PercentageChart from './percentageChart'
import PercentageGuide from './PercentageGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculatePercentage } from '../lib/percentage-calculation'

export default function PercentageCalculator() {
  const [calculationType, setCalculationType] = useState<
    'of' | 'what-percent' | 'increase' | 'decrease'
  >('of')

  const [firstValue, setFirstValue] = useState(20)
  const [secondValue, setSecondValue] = useState(500)

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Percentage Calculation
  const result = useMemo(
    () =>
      calculatePercentage({
        calculationType,
        firstValue,
        secondValue,
      }),
    [calculationType, firstValue, secondValue]
  )

  return (
    <main className="percentage-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-fuchsia-700 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-violet-100">
            Smart Percentage Calculator
          </p>

          <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Percentage Calculator
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-violet-50 sm:text-base">
            Calculate percentages, find what percentage one number
            represents of another, and calculate percentage increases
            or decreases. Adjust the values to get instant results.
          </p>

        </div>

      </header>

      {/* MAIN LAYOUT WITH SIDEBAR */}
      <div
        className={`grid items-start gap-6 transition-all duration-300 ${
          sidebarOpen
            ? 'lg:grid-cols-[240px_minmax(0,1fr)]'
            : 'lg:grid-cols-1'
        }`}
      >

        {/* LEFT SIDEBAR */}
        <div className="min-w-0">
          <Sidebar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />
        </div>

        {/* RIGHT CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* INPUT SECTION */}
            <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-2xl dark:bg-violet-950/50">
                  %
                </span>

                <div>

                  <h2 className="text-xl font-extrabold">
                    Your Percentage Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>

                </div>

              </div>

              <PercentageInputs
                calculationType={calculationType}
                firstValue={firstValue}
                secondValue={secondValue}
                onTypeChange={setCalculationType}
                onFirstValueChange={setFirstValue}
                onSecondValueChange={setSecondValue}
                onReset={() => {
                  setCalculationType('of')
                  setFirstValue(20)
                  setSecondValue(500)
                }}
              />

            </section>

            {/* RESULTS SECTION */}
            <section className="min-w-0 space-y-6">

              {/* MAIN RESULT */}
              <div className="rounded-3xl border border-violet-100 bg-gradient-to-br from-violet-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-violet-900/60 dark:from-violet-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-violet-100 text-xl dark:bg-violet-900/60">
                    📊
                  </span>

                  <p className="text-sm font-bold text-violet-800 dark:text-violet-300">
                    Your Calculated Percentage Result
                  </p>

                </div>

                <div className="mt-4">
                  {/* <PercentageResult result={result} /> */}
                  <PercentageResultComponent result={result} />
                </div>

                <p className="mt-3 text-xs leading-5 text-slate-500 dark:text-slate-400">
                  Your result updates automatically whenever you
                  change the calculation type or input values.
                </p>

              </div>

              {/* PERCENTAGE BREAKDOWN */}
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-violet-50 text-xl dark:bg-violet-950/50">
                    🧮
                  </span>

                  <div>

                    <h2 className="text-lg font-extrabold">
                      Percentage Breakdown
                    </h2>

                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                      Understand your percentage calculation
                    </p>

                  </div>

                </div>

                <PercentageChart
                  result={result}
                  firstValue={firstValue}
                  secondValue={secondValue}
                  calculationType={calculationType}
                />

              </div>

            </section>

          </div>

        </div>

      </div>

      {/* COMPLETE PERCENTAGE GUIDE */}
      <PercentageGuide />

    </main>
  )
}
