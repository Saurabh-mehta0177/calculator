
import Link from 'next/link'

const features = [
  'Calculate hypothetical past savings',
  'Estimate potential investment growth',
  'Compare contributions with an estimated corpus',
  'Explore the impact of starting earlier',
]

export default function FinancialRegretPreview() {
  return (
    <section
      aria-labelledby="financial-regret-heading"
      className="relative isolate overflow-hidden rounded-3xl border border-indigo-800/40 bg-gradient-to-br from-indigo-950 via-blue-950 to-slate-950 px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-10"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-indigo-500/20 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-20 -z-10 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-blue-200">
            <span aria-hidden="true" className="mr-2">✦</span>
            FINANCIAL PLANNING TOOL
          </span>

          <h2
            id="financial-regret-heading"
            className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl"
          >
            Financial Regret Calculator
          </h2>

          <p className="mt-3 text-lg font-semibold leading-snug text-blue-200 sm:text-xl">
            What if you had started saving earlier?
          </p>

          <p className="mt-4 max-w-xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore how starting to save earlier could affect your potential
            wealth. Compare hypothetical savings and investment growth to
            understand the long-term impact of time and consistent contributions.
          </p>

          <ul className="mt-6 grid gap-3 text-sm text-blue-100 sm:grid-cols-2">
            {features.map((feature) => (
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
            href="/financial-regret"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-950"
          >
            Try the Financial Regret Calculator
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside
          aria-label="Illustrative savings example"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-lg backdrop-blur-md sm:p-7"
        >
          <p className="text-sm font-semibold text-blue-200">
            Hypothetical example
          </p>

          <div className="mt-5">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-200/80">
              Monthly savings
            </p>
            <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl">
              ₹2,000
            </p>
            <p className="mt-2 text-sm text-blue-200">
              Every month for 5 years
            </p>
          </div>

          <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.06] p-4 sm:p-5">
            <p className="text-xs font-medium uppercase tracking-wider text-blue-200/80">
              Estimated hypothetical corpus
            </p>
            <p className="mt-2 text-3xl font-extrabold tracking-tight text-emerald-300 sm:text-4xl">
              ₹1,64,897
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-200">
              Based on an assumed 12% annual return
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-blue-200/80">
            This is an illustration, not a prediction or actual historical
            return. Investment returns are not guaranteed.
          </p>
        </aside>
      </div>
    </section>
  )
}