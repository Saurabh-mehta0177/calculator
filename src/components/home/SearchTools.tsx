
import ToolSearch from './ToolSearch'

export default function SearchTools() {
  return (
    <section
      aria-labelledby="search-tools-heading"
      className="relative isolate overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 px-5 py-8 shadow-sm dark:border-blue-900/50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 sm:px-8 sm:py-10 lg:px-10 [.reading_&]:border-stone-200 [.reading_&]:bg-none [.reading_&]:bg-[#f7f4ec] [.reading_&]:shadow-none"
    >
      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-400/10 blur-3xl [.reading_&]:hidden"
      />

      <div className="relative">

        {/* Heading */}
        <div className="mx-auto mb-8 max-w-2xl text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:border-blue-800 dark:bg-blue-900/40 dark:text-blue-300 [.reading_&]:border-stone-300 [.reading_&]:bg-stone-200 [.reading_&]:text-stone-700">
            <span aria-hidden="true">✦</span>
            Find Your Calculator
          </span>

          <h2
            id="search-tools-heading"
            className="mt-5 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl lg:text-4xl [.reading_&]:text-stone-950"
          >
            Search Financial Tools
            <span className="mt-2 block text-blue-600 dark:text-blue-400 [.reading_&]:text-blue-800">
              Find the Right Calculator in Seconds
            </span>
          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base [.reading_&]:text-stone-700">
            Looking for an EMI, SIP, FD, RD, GST or loan calculator?
            Search our collection of free financial tools and find
            the right calculator to plan your finances with confidence.
          </p>

        </div>

        {/* Search Box */}
        <div className="mx-auto max-w-3xl rounded-2xl border border-blue-100 bg-white p-3 shadow-lg shadow-blue-900/5 dark:border-slate-700 dark:bg-slate-800 [.reading_&]:border-stone-200 [.reading_&]:bg-white [.reading_&]:shadow-sm">

          <div className="flex items-center gap-3">

            {/* <span
              aria-hidden="true"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-600 dark:bg-blue-950 dark:text-blue-300 [.reading_&]:bg-blue-50 [.reading_&]:text-blue-800"
            >
              🔍
            </span> */}

            <div className="min-w-0 flex-1">
              <ToolSearch />
            </div>

          </div>

        </div>

        {/* Popular Search Keywords */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">

          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 [.reading_&]:text-stone-600">
            Popular searches:
          </span>

          {['EMI Calculator', 'SIP Calculator', 'FD Calculator', 'GST Calculator'].map((item) => (
            <span
              key={item}
              className="rounded-full border border-blue-100 bg-white/80 px-3 py-1.5 text-xs font-medium text-blue-700 dark:border-slate-700 dark:bg-slate-800 dark:text-blue-300 [.reading_&]:border-stone-300 [.reading_&]:bg-white [.reading_&]:text-stone-700"
            >
              {item}
            </span>
          ))}

        </div>

        {/* Bottom Information */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-medium text-slate-500 dark:text-slate-400 [.reading_&]:text-stone-600">

          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Free Financial Calculators
          </span>

          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Instant Calculations
          </span>

          <span className="flex items-center gap-2">
            <span className="text-green-600">✓</span>
            Easy to Use
          </span>

        </div>

      </div>
    </section>
  )
}
