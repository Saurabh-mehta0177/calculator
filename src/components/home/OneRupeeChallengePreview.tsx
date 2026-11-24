
import Link from 'next/link'

const features = [
  'Build a daily ₹10 saving habit',
  'Try the weekly ₹100 saving challenge',
  'Complete the 52-week savings challenge',
  'Explore the 30-day no-spend challenge',
  'Track progress and earn achievement badges',
]

export default function OneRupeeChallengePreview() {
  return (
    <section
      aria-labelledby="one-rupee-heading"
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-950 via-green-950 to-slate-950 px-5 py-8 text-white shadow-xl sm:px-8 sm:py-10 lg:px-10 [.reading_&]:bg-none [.reading_&]:bg-[#f7f4ec] [.reading_&]:text-stone-900 [.reading_&]:shadow-none"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-emerald-400/20 blur-3xl [.reading_&]:hidden"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-green-500/20 blur-3xl [.reading_&]:hidden"
      />

      <div className="relative grid items-center gap-8 lg:grid-cols-2 lg:gap-12">

        {/* Left Content */}
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wide text-emerald-200 [.reading_&]:border-stone-300 [.reading_&]:bg-stone-200 [.reading_&]:text-stone-700">
            <span aria-hidden="true">✦</span>
            SMART SAVING CHALLENGE
          </span>

          <h2
            id="one-rupee-heading"
            className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl [.reading_&]:text-stone-950"
          >
            One Rupee Challenge
            <span className="mt-2 block text-emerald-300 [.reading_&]:text-emerald-800">
              Small Savings. Big Dreams.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-emerald-100 sm:text-base [.reading_&]:text-stone-700">
            Building a saving habit does not always require a
            large amount of money. Start with small contributions,
            explore fun savings challenges and track your progress
            as you work towards your financial goals.
          </p>

          {/* Features */}
          <ul className="mt-6 space-y-3 text-sm leading-6 text-emerald-100 [.reading_&]:text-stone-700">
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

          {/* CTA */}
          <Link
            href="/one-rupee-challenge"
            className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-green-950 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-green-900 [.reading_&]:border [.reading_&]:border-stone-300 [.reading_&]:bg-stone-800 [.reading_&]:text-white [.reading_&]:hover:bg-stone-700 [.reading_&]:focus-visible:ring-stone-700 [.reading_&]:focus-visible:ring-offset-[#f7f4ec]"
          >
            Start Your Saving Challenge
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        {/* Right Preview Card */}
        <aside
          aria-label="Illustrative daily and yearly savings example"
          className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-lg backdrop-blur-md sm:p-6 [.reading_&]:border-stone-300 [.reading_&]:bg-white [.reading_&]:shadow-sm"
        >
          <div className="flex items-center justify-between gap-3">
            <p className="text-sm font-semibold text-emerald-200 [.reading_&]:text-stone-700">
              Your Saving Journey
            </p>

            <span className="rounded-full bg-green-400/15 px-3 py-1 text-xs font-bold text-green-200 [.reading_&]:bg-green-100 [.reading_&]:text-green-800">
              START TODAY
            </span>
          </div>

          {/* Daily Savings */}
          <div className="mt-7 flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-emerald-200/80 [.reading_&]:text-stone-600">
                Your daily saving goal
              </p>

              <p className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl [.reading_&]:text-stone-950">
                ₹10
              </p>

              <p className="mt-2 text-sm text-emerald-200 [.reading_&]:text-stone-600">
                Small steps, consistent habits
              </p>
            </div>

            <span aria-hidden="true" className="text-5xl sm:text-6xl">
              🌱
            </span>
          </div>

          {/* Yearly Savings */}
          <div className="mt-7 rounded-xl border border-white/10 bg-white/[0.06] p-4 [.reading_&]:border-stone-200 [.reading_&]:bg-stone-100">
            <p className="text-xs font-medium uppercase tracking-wider text-emerald-200/80 [.reading_&]:text-stone-600">
              Potential savings in one year
            </p>

            <p className="mt-2 text-3xl font-extrabold tracking-tight text-green-300 [.reading_&]:text-emerald-800">
              ₹3,650
            </p>

            <p className="mt-2 text-xs leading-5 text-emerald-200 [.reading_&]:text-stone-600">
              Based on saving ₹10 every day for 365 days,
              without investment returns.
            </p>
          </div>

          {/* Challenge Highlights */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl bg-white/[0.07] p-4 [.reading_&]:bg-orange-50">
              <span aria-hidden="true" className="text-2xl">
                🔥
              </span>

              <p className="mt-2 text-lg font-extrabold text-white [.reading_&]:text-stone-900">
                52 Weeks
              </p>

              <p className="text-xs text-emerald-200 [.reading_&]:text-stone-600">
                Saving Challenge
              </p>
            </div>

            <div className="rounded-xl bg-white/[0.07] p-4 [.reading_&]:bg-amber-50">
              <span aria-hidden="true" className="text-2xl">
                🏆
              </span>

              <p className="mt-2 text-lg font-extrabold text-white [.reading_&]:text-stone-900">
                Badges
              </p>

              <p className="text-xs text-emerald-200 [.reading_&]:text-stone-600">
                Track Achievements
              </p>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-emerald-200/80 [.reading_&]:text-stone-600">
            This is an illustrative savings example, not a
            guaranteed financial outcome. Actual savings depend
            on your contributions and consistency.
          </p>
        </aside>
      </div>
    </section>
  )
}
