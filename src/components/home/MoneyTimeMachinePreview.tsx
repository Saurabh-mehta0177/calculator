
import Link from 'next/link'

const features = [
  'Explore your potential wealth over 5 or 10 years',
  'Compare Dream Life, Normal Life and Tough Life',
  'See how income and expenses affect your savings',
  'Understand the impact of long-term investments',
]

export default function MoneyTimeMachinePreview() {
  return (
    <section
      aria-labelledby="money-future-heading"
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-10 [.reading_&]:bg-none [.reading_&]:bg-[#f7f4ec] [.reading_&]:text-stone-900 [.reading_&]:shadow-none"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl [.reading_&]:hidden"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-blue-200 [.reading_&]:border-stone-300 [.reading_&]:bg-stone-200 [.reading_&]:text-stone-700">
            <span aria-hidden="true">✦</span>
            SMART FINANCIAL PLANNING TOOL
          </span>

          <h2
            id="money-future-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl [.reading_&]:text-stone-950"
          >
            Money Time Machine
            <span className="mt-2 block text-blue-300 [.reading_&]:text-blue-800">
              Where Will Your Money Be in 10 Years?
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base [.reading_&]:text-stone-700">
            Take a journey into your financial future. Discover how
            your income, monthly expenses, savings and investments
            could shape your wealth over the next 5 or 10 years.
            Compare different financial situations and explore
            possible paths towards your financial goals.
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-3 text-sm leading-6 text-blue-100 [.reading_&]:text-stone-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-400/15 text-xs font-bold text-blue-300 [.reading_&]:bg-blue-100 [.reading_&]:text-blue-800"
                >
                  ✓
                </span>

                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <Link
            href="/Moneyfuture"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-900 [.reading_&]:border [.reading_&]:border-stone-300 [.reading_&]:bg-stone-800 [.reading_&]:text-white [.reading_&]:hover:bg-stone-700 [.reading_&]:focus-visible:ring-stone-700 [.reading_&]:focus-visible:ring-offset-[#f7f4ec]"
          >
            Explore Your Financial Future
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Financial Preview */}
        <aside
          aria-label="Illustrative financial savings and wealth projection example"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-lg backdrop-blur-md sm:p-6 [.reading_&]:border-stone-300 [.reading_&]:bg-white [.reading_&]:shadow-sm"
        >
          <p className="text-sm font-semibold text-blue-200 [.reading_&]:text-stone-700">
            Your Financial Future
          </p>

          {/* Daily Saving */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-blue-200/80 [.reading_&]:text-stone-600">
                Start with a small habit
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl [.reading_&]:text-stone-950">
                ₹100
              </p>

              <p className="mt-2 text-sm text-blue-200 [.reading_&]:text-stone-600">
                Potential daily savings
              </p>
            </div>

            <span
              aria-hidden="true"
              className="text-5xl sm:text-6xl"
            >
              🚀
            </span>
          </div>

          {/* Savings Example */}
          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] p-4 [.reading_&]:border-stone-200 [.reading_&]:bg-stone-100">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-200/80 [.reading_&]:text-stone-600">
              Savings after 10 years
            </p>

            <p className="mt-2 text-3xl font-extrabold tracking-tight text-green-300 [.reading_&]:text-emerald-800">
              ₹3,65,000
            </p>

            <p className="mt-2 text-xs leading-5 text-blue-200 [.reading_&]:text-stone-600">
              Based on saving ₹100 every day for 365 days per year,
              without investment returns.
            </p>
          </div>

          {/* Scenario Information */}
          <div className="mt-5 grid grid-cols-3 gap-2">

            <div className="rounded-xl bg-blue-400/10 p-3 text-center [.reading_&]:bg-blue-50">
              <span className="text-xl">🌟</span>
              <p className="mt-2 text-xs font-bold text-blue-200 [.reading_&]:text-blue-800">
                Dream Life
              </p>
            </div>

            <div className="rounded-xl bg-green-400/10 p-3 text-center [.reading_&]:bg-green-50">
              <span className="text-xl">🏡</span>
              <p className="mt-2 text-xs font-bold text-green-200 [.reading_&]:text-green-800">
                Normal Life
              </p>
            </div>

            <div className="rounded-xl bg-amber-400/10 p-3 text-center [.reading_&]:bg-amber-50">
              <span className="text-xl">📊</span>
              <p className="mt-2 text-xs font-bold text-amber-200 [.reading_&]:text-amber-800">
                Tough Life
              </p>
            </div>

          </div>

          <p className="mt-4 text-xs leading-5 text-blue-200/80 [.reading_&]:text-stone-600">
            Illustrative savings example only. Actual financial
            outcomes depend on savings habits, investment returns,
            expenses and market conditions.
          </p>
        </aside>

      </div>
    </section>
  )
}
