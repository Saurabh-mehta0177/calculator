
'use client'

import { useMemo, useState } from 'react'

import GSTInputs from './GSTInputs'
import GSTResult from './GSTResult'
import GSTChart from './GSTChart'
import GSTGuide from './GSTGuide'

import Sidebar from '@/components/layout/Sidebar'
import { calculateGST } from '../lib/gst-calculation'

export default function GSTCalculator() {
  const [amount, setAmount] = useState(10000)
  const [gstRate, setGstRate] = useState(18)

  const [calculationType, setCalculationType] = useState<
    'exclusive' | 'inclusive'
  >('exclusive')

  const [taxType, setTaxType] = useState<'intra' | 'inter'>('intra')

  // Sidebar state
  const [sidebarOpen, setSidebarOpen] = useState(true)

  // GST calculation
  const result = useMemo(
    () =>
      calculateGST({
        amount,
        gstRate,
        calculationType,
        taxType,
      }),
    [amount, gstRate, calculationType, taxType]
  )

  // Chart calculation
  const chartData = useMemo(() => {
    const safeAmount = Math.max(0, Number(amount) || 0)
    const safeRate = Math.max(0, Number(gstRate) || 0)

    let taxableAmount = 0
    let gstAmount = 0
    let finalAmount = 0

    if (calculationType === 'exclusive') {
      taxableAmount = safeAmount
      gstAmount = (taxableAmount * safeRate) / 100
      finalAmount = taxableAmount + gstAmount
    } else {
      finalAmount = safeAmount
      taxableAmount = finalAmount / (1 + safeRate / 100)
      gstAmount = finalAmount - taxableAmount
    }

    taxableAmount = Number(taxableAmount.toFixed(2))
    gstAmount = Number(gstAmount.toFixed(2))
    finalAmount = Number(finalAmount.toFixed(2))

    const cgst =
      taxType === 'intra'
        ? Number((gstAmount / 2).toFixed(2))
        : 0

    const sgst =
      taxType === 'intra'
        ? Number((gstAmount - cgst).toFixed(2))
        : 0

    const igst =
      taxType === 'inter'
        ? gstAmount
        : 0

    return {
      taxableAmount,
      gstAmount,
      finalAmount,
      cgst,
      sgst,
      igst,
    }
  }, [amount, gstRate, calculationType, taxType])

  // Reset calculator
  const handleReset = () => {
    setAmount(10000)
    setGstRate(18)
    setCalculationType('exclusive')
    setTaxType('intra')
  }

  return (
    <main className="gst-page mx-auto w-full max-w-7xl space-y-7 px-4 py-6 text-slate-900 transition-colors duration-300 dark:text-slate-100 sm:px-6 lg:px-8">

      {/* HERO SECTION */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-800 px-6 py-8 text-white shadow-xl sm:px-9 sm:py-10">

        <div className="pointer-events-none absolute -right-12 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-16 left-1/3 h-48 w-48 rounded-full bg-indigo-300/20 blur-3xl" />

        <div className="relative z-10">

          <p className="text-xs font-bold uppercase tracking-[.22em] text-blue-100">
            Smart Tax Calculator
          </p>

          <div className="mt-3 flex items-center gap-3">

            <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/20 bg-white/15 text-2xl backdrop-blur-sm">
              🧾
            </span>

            <h1 className="text-3xl font-black tracking-tight sm:text-4xl">
              GST Calculator
            </h1>

          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-50 sm:text-base">
            Calculate Goods and Services Tax instantly. Add GST to an
            original amount or remove GST from an inclusive price.
            Get a detailed breakdown of CGST, SGST and IGST.
          </p>

          <div className="mt-5 flex flex-wrap gap-2">

            <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
              ✓ GST Inclusive & Exclusive
            </span>

            <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
              ✓ CGST & SGST
            </span>

            <span className="rounded-full border border-white/20 bg-white/15 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
              ✓ IGST Breakdown
            </span>

          </div>

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

        {/* RIGHT GST CALCULATOR CONTENT */}
        <div className="min-w-0 space-y-6">

          {/* GST INPUTS + RESULTS GRID */}
          <div className="grid items-start gap-6 lg:grid-cols-[1.05fr_.95fr]">

            {/* GST INPUT SECTION */}
            <section className="gst-surface min-w-0 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

              <div className="mb-7 flex items-center gap-3">

                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-blue-50 text-2xl dark:bg-blue-950/50">
                  🧾
                </span>

                <div>
                  <h2 className="text-xl font-extrabold">
                    Your GST Details
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Change values to update your calculation instantly.
                  </p>
                </div>

              </div>

              <GSTInputs
                amount={amount}
                gstRate={gstRate}
                calculationType={calculationType}
                taxType={taxType}
                onAmountChange={setAmount}
                onRateChange={setGstRate}
                onCalculationTypeChange={setCalculationType}
                onTaxTypeChange={setTaxType}
                onReset={handleReset}
              />

            </section>

            {/* GST RESULTS SECTION */}
            <section className="min-w-0 space-y-6">

              {/* GST RESULT */}
              <div className="gst-highlight rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white p-5 shadow-sm transition-colors duration-300 dark:border-blue-900/60 dark:from-blue-950/40 dark:to-slate-900 sm:p-7">

                <div className="flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/60">
                    💰
                  </span>

                  <p className="text-sm font-bold text-blue-800 dark:text-blue-300">
                    GST Calculation Results
                  </p>

                </div>

                <div className="mt-5">
                  <GSTResult result={result} />
                </div>

              </div>

              {/* GST CHART */}
              <div className="gst-surface rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900 sm:p-7">

                <div className="mb-5">

                  <h2 className="text-lg font-extrabold">
                    GST Breakdown Chart
                  </h2>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    Visual comparison of taxable amount and GST.
                  </p>

                </div>

                <GSTChart
                  amount={chartData.taxableAmount}
                  gstAmount={chartData.gstAmount}
                  finalAmount={chartData.finalAmount}
                  cgst={chartData.cgst}
                  sgst={chartData.sgst}
                  igst={chartData.igst}
                  taxType={taxType}
                />

              </div>

              {/* CALCULATION SUMMARY */}
              <div className="gst-surface rounded-3xl border border-blue-100 bg-blue-50 p-5 shadow-sm dark:border-blue-900/60 dark:bg-blue-950/30 sm:p-7">

                <div className="mb-5 flex items-center gap-3">

                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-xl dark:bg-blue-900/60">
                    📋
                  </span>

                  <h2 className="text-lg font-extrabold text-blue-900 dark:text-blue-300">
                    Calculation Summary
                  </h2>

                </div>

                <div className="space-y-3 text-sm text-blue-800 dark:text-blue-200">

                  <div className="flex justify-between gap-3">
                    <span>Entered Amount</span>
                    <span className="font-semibold">
                      ₹{amount.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>GST Rate</span>
                    <span className="font-semibold">
                      {gstRate}%
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>Calculation Type</span>
                    <span className="font-semibold">
                      {calculationType === 'exclusive'
                        ? 'GST Exclusive'
                        : 'GST Inclusive'}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>Tax Type</span>
                    <span className="font-semibold">
                      {taxType === 'intra'
                        ? 'Intra-state'
                        : 'Inter-state'}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>Taxable Amount</span>
                    <span className="font-semibold">
                      ₹{chartData.taxableAmount.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="flex justify-between gap-3">
                    <span>Total GST</span>
                    <span className="font-semibold">
                      ₹{chartData.gstAmount.toLocaleString('en-IN', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </span>
                  </div>

                  <div className="border-t border-blue-200 pt-4 dark:border-blue-800">

                    <div className="flex justify-between gap-3 text-base font-extrabold">
                      <span>Final Amount</span>

                      <span>
                        ₹{chartData.finalAmount.toLocaleString('en-IN', {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        })}
                      </span>
                    </div>

                  </div>

                </div>

              </div>

            </section>

          </div>

        </div>
      </div>

      {/* COMPLETE GST GUIDE */}
      <GSTGuide />

    </main>
  )
}
