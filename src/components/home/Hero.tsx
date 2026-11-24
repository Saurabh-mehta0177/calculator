
import Link from 'next/link'

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-teal-500 via-cyan-700 to-blue-900 px-5 py-10 text-white shadow-xl shadow-blue-500/10 sm:px-10 sm:py-16 lg:px-12"
    >
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 right-1/4 -z-10 h-64 w-64 rounded-full bg-indigo-300/20 blur-3xl"
      />

      <div className="relative z-10 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold tracking-wider text-blue-100">
          <span aria-hidden="true">✦</span>
          SMART FINANCIAL TOOLS
        </span>

        <h1
          id="hero-heading"
          className="mt-6 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
        >
          Make Better Financial Decisions
        </h1>

        <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base sm:leading-8">
          Calculate EMI, fixed deposits, loans, and investments with free
          online financial calculators. Explore the numbers, compare
          possibilities, and make more informed financial decisions.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/emi-calculator"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-blue-700 shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
          >
            Calculate EMI
            <span aria-hidden="true">→</span>
          </Link>

          <Link
            href="/tools"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-blue-700"
          >
            Explore All Tools
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  )
}