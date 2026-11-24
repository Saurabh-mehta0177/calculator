
'use client'

import type { Projection } from './moneyUtils'
import { formatCompact } from './moneyUtils'

export default function MoneyChart({
  projections,
  currency,
}: {
  projections: Projection[]
  currency: string
}) {
  const maxValue = Math.max(
    1,
    ...projections.flatMap(item => [
      item.wealth,
      item.dailySaving,
      item.noSaving,
    ])
  )

  const createPoints = (key: keyof Projection) =>
    projections.map((item, index) => {
      const x =
        (index / Math.max(1, projections.length - 1)) * 600

      const y = 180 - (Number(item[key]) / maxValue) * 160

      return `${x},${y}`
    }).join(' ')

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">

      <div className="mb-7">
        <div className="mb-3 inline-flex rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-extrabold text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400">
          GROWTH VISUALIZATION
        </div>

        <h2 className="text-xl font-extrabold text-slate-900 dark:text-white">
          Your Financial Future Timeline
        </h2>

        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Visualize how your money could grow over time.
        </p>
      </div>

      <div className="mb-5 flex flex-wrap gap-4 text-xs font-bold">
        <span className="flex items-center gap-2 text-blue-600">
          <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
          Regular Savings
        </span>

        <span className="flex items-center gap-2 text-emerald-600">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
          ₹100 Daily
        </span>

        <span className="flex items-center gap-2 text-amber-600">
          <span className="h-2.5 w-2.5 rounded-full bg-amber-500" />
          No New Savings
        </span>
      </div>

      <div className="overflow-hidden">
        <svg
          viewBox="0 0 600 200"
          role="img"
          aria-label="Projected wealth growth comparison chart"
          className="h-auto w-full overflow-visible text-slate-300 dark:text-slate-700"
        >
          {[40, 80, 120, 160].map(y => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="600"
              y2={y}
              stroke="currentColor"
              strokeDasharray="4 5"
            />
          ))}

          <polyline
            points={createPoints('wealth')}
            fill="none"
            stroke="#3b82f6"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          <polyline
            points={createPoints('dailySaving')}
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeDasharray="7 5"
          />

          <polyline
            points={createPoints('noSaving')}
            fill="none"
            stroke="#f59e0b"
            strokeWidth="3"
            strokeDasharray="5 5"
          />
        </svg>
      </div>

      <div className="mt-5 flex justify-between text-xs font-semibold text-slate-400">
        <span>Today</span>
        <span>Future</span>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {projections.filter(item =>
          item.year === 0 ||
          item.year % 5 === 0 ||
          item.year === projections.length - 1
        ).map(item => (
          <div
            key={item.year}
            className="rounded-xl bg-slate-50 p-3 dark:bg-slate-800"
          >
            <p className="text-xs text-slate-400">
              Year {item.year}
            </p>
            <p className="mt-1 break-all text-sm font-extrabold text-slate-800 dark:text-white">
              {formatCompact(item.wealth, currency)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
