
'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import { tools } from '@/data/tools'

export default function ToolSearch() {
  const [search, setSearch] = useState('')

  const filteredTools = useMemo(() => {
    const query = search.trim().toLowerCase()

    if (!query) return []

    return tools.filter((tool) =>
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    )
  }, [search])

  return (
    <section
      aria-label="Search financial calculators"
      className="relative isolate overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-5 shadow-sm dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30 sm:p-8"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-blue-400/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-20 -z-10 h-64 w-64 rounded-full bg-indigo-400/10 blur-3xl"
      />

      <div className="relative">

        {/* Heading */}
        <div className="mb-7 text-center">

          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
            <span>✨</span>
            SMART CALCULATOR SEARCH
          </span>

          <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl">
            Find Your Perfect Financial Calculator
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
            Search free online financial calculators for EMI,
            home loans, fixed deposits, recurring deposits,
            SIP investments, GST and more. Get quick estimates
            to help plan your finances.
          </p>

        </div>

        {/* Search Box */}
        <div className="mx-auto max-w-3xl">

          <div className="group relative">

            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-2xl transition group-focus-within:scale-110"
            >
              🔍
            </span>

            <input
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search EMI, SIP, FD, RD, GST calculator..."
              aria-label="Search financial calculators"
              className="h-16 w-full rounded-2xl border border-gray-200 bg-white pl-14 pr-14 text-sm font-medium text-gray-900 shadow-lg shadow-blue-900/5 outline-none transition duration-300 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:placeholder:text-gray-500"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch('')}
                aria-label="Clear search"
                className="absolute right-4 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 text-xl text-gray-500 transition hover:bg-red-100 hover:text-red-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-red-950"
              >
                ×
              </button>
            )}

          </div>

          {/* Popular Searches */}
          <div className="mt-5 flex flex-wrap items-center justify-center gap-2">

            <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
              Popular:
            </span>

            {['EMI', 'SIP', 'FD', 'RD', 'GST'].map((keyword) => (
              <button
                key={keyword}
                type="button"
                onClick={() => setSearch(keyword)}
                className="rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-bold text-gray-600 transition hover:border-blue-400 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500 dark:hover:bg-blue-950 dark:hover:text-blue-300"
              >
                {keyword}
              </button>
            ))}

          </div>

        </div>

        {/* Search Results */}
        {search.trim() && (

          <div className="mx-auto mt-8 max-w-5xl">

            {filteredTools.length > 0 ? (

              <>

                <div className="mb-5 flex flex-wrap items-center justify-between gap-3">

                  <div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      Search Results
                    </h3>

                    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                      Calculators matching "{search}"
                    </p>
                  </div>

                  <span className="rounded-full bg-blue-100 px-4 py-2 text-xs font-bold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                    {filteredTools.length} Calculator(s) Found
                  </span>

                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

                  {filteredTools.map((tool) => (

                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-600"
                    >

                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 text-2xl transition group-hover:scale-110 dark:from-blue-950 dark:to-indigo-950">
                        {tool.icon}
                      </span>

                      <span className="min-w-0 flex-1">

                        <span className="block truncate text-sm font-bold text-gray-900 transition group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                          {tool.name}
                        </span>

                        <span className="mt-1 block text-xs text-gray-500 dark:text-gray-400">
                          {tool.category}
                        </span>

                      </span>

                      <span
                        aria-hidden="true"
                        className="text-lg text-blue-500 transition group-hover:translate-x-1"
                      >
                        →
                      </span>

                    </Link>

                  ))}

                </div>

              </>

            ) : (

              <div className="rounded-2xl border border-dashed border-gray-300 bg-white/70 px-5 py-10 text-center dark:border-gray-700 dark:bg-gray-900/70">

                <div className="text-5xl" aria-hidden="true">
                  🔎
                </div>

                <h3 className="mt-4 text-lg font-bold text-gray-900 dark:text-white">
                  No Calculator Found
                </h3>

                <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500 dark:text-gray-400">
                  We couldn't find a calculator matching "{search}".
                  Try another keyword such as EMI, SIP, FD, RD or GST.
                </p>

                <button
                  type="button"
                  onClick={() => setSearch('')}
                  className="mt-5 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-blue-700"
                >
                  Clear Search
                </button>

              </div>

            )}

          </div>

        )}

        {/* Bottom Information */}
        {!search.trim() && (

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-t border-blue-100 pt-6 text-xs font-medium text-gray-500 dark:border-gray-800 dark:text-gray-400">

            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Free Financial Calculators
            </span>

            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Instant Calculation
            </span>

            <span className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              Mobile Friendly
            </span>

          </div>

        )}

      </div>

    </section>
  )
}
