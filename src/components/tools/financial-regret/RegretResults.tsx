

'use client'

import type { FinancialRegretResult } from '@/lib/financialRegret'
import { getCurrency } from '@/lib/currency/currencies'

type Props = {
  result: FinancialRegretResult
  currency: string
}

export default function RegretResults({
  result,
  currency,
}: Props) {
  const selectedCurrency = getCurrency(currency)

  const formatMoney = (value: number) =>
    `${selectedCurrency.symbol} ${value.toLocaleString('en-IN', {
      maximumFractionDigits: 0,
    })}`

  const cards = [
    {
      title: 'Total Amount Invested',
      value: result.totalInvested,
      icon: '💰',
      description: 'Your total monthly contributions',
      color: 'blue',
    },
    {
      title: 'Estimated Returns',
      value: result.estimatedReturns,
      icon: '📈',
      description: 'Potential investment growth',
      color: 'emerald',
    },
    {
      title: 'Estimated Corpus',
      value: result.estimatedCorpus,
      icon: '🏆',
      description: 'Your potential final wealth',
      color: 'violet',
    },
  ]

  const investedPercentage =
    result.estimatedCorpus > 0
      ? (result.totalInvested / result.estimatedCorpus) * 100
      : 0

  const growthPercentage =
    result.estimatedCorpus > 0
      ? (result.estimatedReturns / result.estimatedCorpus) * 100
      : 0

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8 dark:border-slate-800 dark:bg-slate-900">

      {/* HEADER */}

      <div className="mb-8">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold tracking-wider text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          STEP 02 · YOUR RESULTS
        </div>

        <h2 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
          Your Financial Regret Results
        </h2>

        <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
          Discover how your earlier savings could have
          grown into potential wealth over time.
        </p>
      </div>

      {/* MAIN CORPUS CARD */}

      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 p-6 text-white shadow-xl shadow-blue-950/10 sm:p-8">

        {/* Decorative circles */}

        <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-blue-400/10 blur-2xl" />

        <div className="pointer-events-none absolute -bottom-20 -left-16 h-48 w-48 rounded-full bg-indigo-400/10 blur-2xl" />

        <div className="relative">

          <div className="flex items-center gap-2 text-sm font-semibold text-blue-200">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10">
              ✨
            </span>
            Estimated Wealth You Could Have Built
          </div>

          <p className="mt-6 text-sm font-medium text-blue-200">
            Your Potential Investment Corpus
          </p>

          <h3 className="mt-2 break-words text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            {formatMoney(result.estimatedCorpus)}
          </h3>

          <div className="mt-7 grid grid-cols-2 gap-3">

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs text-blue-200">
                Investment Period
              </p>

              <p className="mt-2 text-xl font-extrabold">
                {result.totalMonths} Months
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
              <p className="text-xs text-blue-200">
                Assumed Annual Return
              </p>

              <p className="mt-2 text-xl font-extrabold">
                {result.annualReturn}%
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* RESULT CARDS */}

      <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

        {cards.map((card) => {

          const styles = {
            blue: {
              icon: 'bg-blue-50 text-blue-600 dark:bg-blue-950/50 dark:text-blue-400',
              border: 'hover:border-blue-200 dark:hover:border-blue-800',
            },
            emerald: {
              icon: 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400',
              border: 'hover:border-emerald-200 dark:hover:border-emerald-800',
            },
            violet: {
              icon: 'bg-violet-50 text-violet-600 dark:bg-violet-950/50 dark:text-violet-400',
              border: 'hover:border-violet-200 dark:hover:border-violet-800',
            },
          }

          const style = styles[card.color as keyof typeof styles]

          return (
            <div
              key={card.title}
              className={`rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900 ${style.border}`}
            >

              <div className="flex items-center justify-between gap-3">

                <span className={`flex h-11 w-11 items-center justify-center rounded-xl text-xl ${style.icon}`}>
                  {card.icon}
                </span>

              </div>

              <p className="mt-5 text-sm font-semibold text-slate-500 dark:text-slate-400">
                {card.title}
              </p>

              <h3 className="mt-2 break-words text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {formatMoney(card.value)}
              </h3>

              <p className="mt-2 text-xs text-slate-400">
                {card.description}
              </p>

            </div>
          )
        })}

      </div>

      {/* WEALTH GROWTH BREAKDOWN */}

      <div className="mt-7 rounded-3xl border border-slate-200 p-5 sm:p-6 dark:border-slate-800">

        <div className="flex flex-wrap items-center justify-between gap-3">

          <div>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white">
              Wealth Growth Breakdown
            </h3>

            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
              See how your potential wealth is divided
            </p>
          </div>

          <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            100% Corpus
          </span>

        </div>

        {/* PROGRESS BAR */}

        <div className="mt-6 flex h-4 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">

          <div
            className="h-full bg-blue-500 transition-all duration-700"
            style={{
              width: `${investedPercentage}%`,
            }}
          />

          <div
            className="h-full bg-emerald-500 transition-all duration-700"
            style={{
              width: `${growthPercentage}%`,
            }}
          />

        </div>

        {/* LEGEND */}

        <div className="mt-6 space-y-4">

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-blue-500" />

              <span className="text-sm text-slate-600 dark:text-slate-300">
                Your Contributions
              </span>
            </div>

            <strong className="text-sm text-slate-900 dark:text-white">
              {formatMoney(result.totalInvested)}
            </strong>

          </div>

          <div className="flex items-center justify-between gap-3">

            <div className="flex items-center gap-3">
              <span className="h-3 w-3 rounded-full bg-emerald-500" />

              <span className="text-sm text-slate-600 dark:text-slate-300">
                Estimated Growth
              </span>
            </div>

            <strong className="text-sm text-emerald-600 dark:text-emerald-400">
              +{formatMoney(result.estimatedReturns)}
            </strong>

          </div>

          <div className="border-t border-slate-200 pt-4 dark:border-slate-800">

            <div className="flex items-center justify-between gap-3">
              <strong className="text-sm text-slate-800 dark:text-white">
                Final Estimated Corpus
              </strong>

              <strong className="text-lg font-extrabold text-blue-700 dark:text-blue-400">
                {formatMoney(result.estimatedCorpus)}
              </strong>
            </div>

          </div>

        </div>

      </div>

      {/* WEALTH GAP */}

      <div className="mt-7 overflow-hidden rounded-3xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-50 p-5 sm:p-6 dark:border-amber-900/40 dark:from-amber-950/30 dark:to-orange-950/20">

        <div className="flex items-center gap-3">

          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-100 text-xl dark:bg-amber-900/40">
            💡
          </div>

          <div>
            <h3 className="font-extrabold text-amber-950 dark:text-amber-200">
              Your Hypothetical Wealth Gap
            </h3>

            <p className="mt-1 text-xs text-amber-700 dark:text-amber-400">
              Potential wealth compared with saving nothing
            </p>
          </div>

        </div>

        <h4 className="mt-5 break-words text-3xl font-black tracking-tight text-amber-700 dark:text-amber-300 sm:text-4xl">
          {formatMoney(result.estimatedCorpus)}
        </h4>

        <p className="mt-4 text-xs leading-6 text-amber-800 dark:text-amber-300/80">
          This amount represents a hypothetical investment
          outcome based on your selected inputs. It is not
          an actual financial loss, guaranteed return, or
          measurement of historical market performance.
        </p>

      </div>

      {/* DISCLAIMER */}

      <div className="mt-6 flex gap-3 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800/60">

        <span className="text-lg">ⓘ</span>

        <p className="text-xs leading-6 text-slate-500 dark:text-slate-400">
          This calculator provides illustrative estimates
          only. Actual returns depend on market conditions,
          investment costs, taxes and other factors.
          Past hypothetical results do not guarantee
          future performance.
        </p>

      </div>

    </section>
  )
}
