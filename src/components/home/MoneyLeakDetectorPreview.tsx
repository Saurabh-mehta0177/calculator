
import Link from 'next/link'

const features = [
  'See where your money goes each month',
  'Identify flexible or avoidable expenses',
  'Find potential monthly savings',
  'Estimate your yearly savings potential',
]

export default function MoneyLeakDetectorPreview() {
  return (
    <section
      aria-labelledby="money-leak-heading"
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-green-900 to-teal-950 px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-10 [.reading_&]:bg-none [.reading_&]:bg-[#f7f4ec] [.reading_&]:text-stone-900 [.reading_&]:shadow-none"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-green-400/20 blur-3xl [.reading_&]:hidden"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-green-200 [.reading_&]:border-stone-300 [.reading_&]:bg-stone-200 [.reading_&]:text-stone-700">
            <span aria-hidden="true">✦</span>
            PERSONAL FINANCE TOOL
          </span>

          <h2
            id="money-leak-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl [.reading_&]:text-stone-950"
          >
            Money Leak Detector
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-green-100 sm:text-base [.reading_&]:text-stone-700">
            Find out where your money goes each month. Review your spending,
            spot expenses you may be able to reduce, and explore how small
            changes could add up over time.
          </p>

          <ul className="mt-6 space-y-3 text-sm leading-6 text-green-100 [.reading_&]:text-stone-700">
            {features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span
                  aria-hidden="true"
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-400/15 text-xs font-bold text-emerald-300 [.reading_&]:bg-emerald-100 [.reading_&]:text-emerald-800"
                >
                  ✓
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/money-leak-detector"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-green-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-green-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-900 [.reading_&]:border [.reading_&]:border-stone-300 [.reading_&]:bg-stone-800 [.reading_&]:text-white [.reading_&]:hover:bg-stone-700 [.reading_&]:focus-visible:ring-stone-700 [.reading_&]:focus-visible:ring-offset-[#f7f4ec]"
          >
            Detect Money Leaks
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <aside
          aria-label="Illustrative monthly and yearly savings example"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-lg backdrop-blur-md sm:p-6 [.reading_&]:border-stone-300 [.reading_&]:bg-white [.reading_&]:shadow-sm"
        >
          <p className="text-sm font-semibold text-green-200 [.reading_&]:text-stone-700">
            Illustrative savings example
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-green-200/80 [.reading_&]:text-stone-600">
                Potential monthly savings
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl [.reading_&]:text-stone-950">
                ₹4,700
              </p>

              <p className="mt-2 text-sm text-green-200 [.reading_&]:text-stone-600">
                Per month
              </p>
            </div>

            <span aria-hidden="true" className="text-4xl sm:text-5xl">
              💰
            </span>
          </div>

          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] p-4 [.reading_&]:border-stone-200 [.reading_&]:bg-stone-100">
            <p className="text-xs font-medium uppercase tracking-wider text-green-200/80 [.reading_&]:text-stone-600">
              Potential savings in one year
            </p>

            <p className="mt-2 text-3xl font-extrabold tracking-tight text-green-300 [.reading_&]:text-emerald-800">
              ₹56,400
            </p>

            <p className="mt-2 text-xs leading-5 text-green-200 [.reading_&]:text-stone-600">
              Example assumes the same savings amount each month for 12 months.
            </p>
          </div>

          <p className="mt-4 text-xs leading-5 text-green-200/80 [.reading_&]:text-stone-600">
            These figures are illustrative, not a promise of savings. Actual
            results depend on your spending and the changes you make.
          </p>
        </aside>
      </div>
    </section>
  )
}
