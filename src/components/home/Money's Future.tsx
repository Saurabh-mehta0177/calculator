
import Link from 'next/link'

export default function MoneyFuturePreview() {
  return (
    <section
      aria-labelledby="money-future-heading"
      className="relative isolate overflow-hidden rounded-3xl border border-slate-800/20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-10"
    >
      {/* Decorative background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-16 -z-10 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-blue-200">
            <span aria-hidden="true">✦</span>
            FINANCIAL PLANNING TOOL
          </span>

          <h2
            id="money-future-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            Your Money’s Future
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
            Discover how your income, expenses, and investments could shape
            your financial future. Explore three possible scenarios and see
            how different choices may affect your money over time.
          </p>

          <ul className="mt-6 space-y-3 text-sm leading-6 text-blue-100">
            {[
              'Compare Dream Life, Normal Life, and Tough Life',
              'Explore your estimated 5- and 10-year wealth',
              'See how salary and expenses may change',
              'Estimate the future value of your investments',
            ].map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-300"
                >
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/Moneyfuture"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
          >
            Explore Money’s Future
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside
          aria-label="Illustrative financial future preview"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-lg backdrop-blur-md sm:p-6"
        >
          <p className="text-sm font-semibold text-blue-200">
            Your financial future
          </p>

          <div className="mt-5 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-blue-200/80">
                Example monthly investment
              </p>
              <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
                ₹5,000
              </p>
              <p className="mt-2 text-sm text-blue-200">
                Every month
              </p>
            </div>

            <span aria-hidden="true" className="text-4xl sm:text-5xl">
              🚀
            </span>
          </div>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-200/80">
              Scenario planning
            </p>
            <p className="mt-2 text-2xl font-extrabold text-emerald-300 sm:text-3xl">
              3 Possible Lives
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-200">
              Explore different paths for one financial journey.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
              <span aria-hidden="true" className="text-xl">🌟</span>
              <p className="mt-2 text-xs font-bold text-blue-100">Dream</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
              <span aria-hidden="true" className="text-xl">📈</span>
              <p className="mt-2 text-xs font-bold text-blue-100">Normal</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/[0.06] p-3">
              <span aria-hidden="true" className="text-xl">💡</span>
              <p className="mt-2 text-xs font-bold text-blue-100">Tough</p>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-blue-200/80">
            These are hypothetical scenarios, not guaranteed financial outcomes.
          </p>
        </aside>
      </div>
    </section>
  )
}