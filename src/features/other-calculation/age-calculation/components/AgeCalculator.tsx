
'use client'

import { useState } from 'react'

import AgeInputs from './AgeInputs'
import AgeResult from './AgeResult'
import AgeGuide from './AgeGuide'

import Sidebar from '@/components/layout/Sidebar'

import { calculateAge } from '../lib/age-calculation'

export default function AgeCalculator() {
  const [dateOfBirth, setDateOfBirth] = useState('')

  const [result, setResult] = useState<
    ReturnType<typeof calculateAge> | null
  >(null)

  const [error, setError] = useState('')

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // Age Calculation
  const handleCalculate = () => {
    if (!dateOfBirth) {
      setError('Please enter your date of birth.')
      setResult(null)
      return
    }

    const calculated = calculateAge(dateOfBirth)

    if (!calculated) {
      setError('Please enter a valid date of birth.')
      setResult(null)
      return
    }

    setError('')
    setResult(calculated)
  }

  // Reset Calculator
  const handleReset = () => {
    setDateOfBirth('')
    setResult(null)
    setError('')
  }

  return (
    <main className="mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 px-6 py-9 text-white shadow-xl sm:px-9 sm:py-11">

        <div className="pointer-events-none absolute -right-12 -top-20 -z-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-24 left-1/3 -z-10 h-56 w-56 rounded-full bg-pink-300/20 blur-3xl" />

        <div className="relative z-10 max-w-3xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-purple-100 backdrop-blur-sm">
            <span>🎂</span>
            Your Personal Age Tracker
          </div>

          <h1 className="mt-5 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
            Age Calculator
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-purple-50 sm:text-base">
            Discover your exact age in years, months and days.
            Explore how many days you have lived, find your next
            birthday and make every year count!
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-xs font-semibold sm:text-sm">

            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              🎈 Exact Age
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              📅 Next Birthday
            </span>

            <span className="rounded-full bg-white/15 px-4 py-2 backdrop-blur-sm">
              ⏳ Total Days Lived
            </span>

          </div>

        </div>

        <div className="pointer-events-none absolute bottom-5 right-7 hidden text-7xl opacity-20 sm:block lg:text-9xl">
          🎂
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

        {/* RIGHT AGE CALCULATOR CONTENT */}
        <div className="min-w-0">

          {/* INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* AGE INPUT SECTION */}
            <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-4">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-violet-50 text-2xl dark:bg-violet-950/50">
                  🎂
                </div>

                <div>

                  <h2 className="text-xl font-extrabold">
                    Calculate Your Age
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Enter your birthday to get started.
                  </p>

                </div>

              </div>

              <AgeInputs
                dateOfBirth={dateOfBirth}
                onDateChange={(value) => {
                  setDateOfBirth(value)
                  setError('')
                  setResult(null)
                }}
                onCalculate={handleCalculate}
                onReset={handleReset}
              />

              {error && (
                <div
                  role="alert"
                  className="mt-5 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700 dark:border-red-900 dark:bg-red-950/40 dark:text-red-400"
                >
                  <span className="text-lg">⚠️</span>
                  <p>{error}</p>
                </div>
              )}

              {/* PRIVACY NOTE */}
              <div className="mt-6 flex items-center gap-3 rounded-2xl bg-violet-50 p-4 dark:bg-violet-950/30">

                <span className="text-xl">🔒</span>

                <p className="text-xs leading-5 text-violet-800 dark:text-violet-300">
                  Your birthday is used to calculate your age.
                  No unnecessary personal details are required.
                </p>

              </div>

            </section>

            {/* AGE RESULTS SECTION */}
            <section className="min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-6 flex items-center gap-4">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-pink-50 text-2xl dark:bg-pink-950/50">
                  📅
                </div>

                <div>

                  <h2 className="text-xl font-extrabold">
                    Your Age Results
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Your personal age breakdown.
                  </p>

                </div>

              </div>

              {result ? (
                <div className="animate-in fade-in duration-500">
                  <AgeResult result={result} />
                </div>
              ) : (
                <div className="flex min-h-[340px] flex-col items-center justify-center rounded-2xl border-2 border-dashed border-violet-200 bg-gradient-to-br from-violet-50 to-pink-50 px-5 py-10 text-center dark:border-violet-900/60 dark:from-violet-950/30 dark:to-pink-950/20">

                  <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-white text-4xl shadow-md dark:bg-slate-800">
                    🎁
                  </div>

                  <h3 className="text-lg font-extrabold text-slate-800 dark:text-white">
                    Your Age Story Starts Here!
                  </h3>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                    Enter your date of birth and click the calculate
                    button to discover your exact age and birthday details.
                  </p>

                  <div className="mt-6 flex flex-wrap justify-center gap-2">

                    <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-violet-700 shadow-sm dark:bg-slate-800 dark:text-violet-300">
                      🎂 Your Age
                    </span>

                    <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-pink-700 shadow-sm dark:bg-slate-800 dark:text-pink-300">
                      📆 Birthday
                    </span>

                    <span className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-purple-700 shadow-sm dark:bg-slate-800 dark:text-purple-300">
                      ⏳ Days Lived
                    </span>

                  </div>

                </div>
              )}

            </section>

          </div>

        </div>

      </div>

      {/* COMPLETE AGE GUIDE */}
      <AgeGuide />

    </main>
  )
}
