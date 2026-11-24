
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const categories = [
  {
    title: 'Banking & Deposit',
    icon: '🏦',
    color: 'from-emerald-500 to-teal-500',
    tools: [
      { name: 'FD Calculator', href: '/fd-calculator', icon: '💰' },
      { name: 'RD Calculator', href: '/rd-calculator', icon: '📅' },
      { name: 'Simple Interest', href: '/simple-interest', icon: '📊' },
      { name: 'Compound Interest', href: '/compound-interest', icon: '📈' },
    ],
  },
  {
    title: 'Loan & EMI',
    icon: '💳',
    color: 'from-blue-500 to-cyan-500',
    tools: [
      { name: 'EMI Calculator', href: '/emi-calculator', icon: '🧮' },
      { name: 'Home Loan', href: '/home-loan', icon: '🏠' },
      { name: 'Personal Loan', href: '/personal-loan', icon: '💵' },
      { name: 'Car Loan', href: '/car-loan', icon: '🚗' },
    ],
  },
  {
    title: 'Investment',
    icon: '📈',
    color: 'from-purple-500 to-pink-500',
    tools: [
      { name: 'SIP Calculator', href: '/sip-calculator', icon: '📊' },
      { name: 'Lumpsum Calculator', href: '/lumpsum-calculator', icon: '💹' },
      { name: 'CAGR Calculator', href: '/cagr-calculator', icon: '📉' },
      { name: 'PPF Calculator', href: '/ppf-calculator', icon: '🏛️' },
    ],
  },
  {
    title: 'Other Calculators',
    icon: '🔢',
    color: 'from-orange-500 to-amber-500',
    tools: [
      { name: 'GST Calculator', href: '/gst-calculator', icon: '🧾' },
      { name: 'Percentage Calculator', href: '/percentage-calculator', icon: '%' },
      { name: 'Age Calculator', href: '/age-calculator', icon: '🎂' },
      { name: 'Calculator', href: '/calculator', icon: '🔣' },
    ],
  },
  {
    title: 'Financial Comparison',
    icon: '⚖️',
    color: 'from-indigo-500 to-violet-500',
    tools: [
      { name: 'Compare All', href: '/compare', icon: '⚖️' },
      { name: 'FD vs SIP', href: '/compare/fd-vs-sip', icon: '🏦' },
      { name: 'SIP vs Lumpsum', href: '/compare/sip-vs-lumpsum', icon: '📈' },
      { name: 'PPF vs SIP', href: '/compare/ppf-vs-sip', icon: '🏛️' },
    ],
  },
]

interface SidebarProps {
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
}

export default function Sidebar({
  sidebarOpen,
  setSidebarOpen,
}: SidebarProps) {
  const pathname = usePathname()

  const [mobileOpen, setMobileOpen] = useState(false)
  const [search, setSearch] = useState('')
  const [expanded, setExpanded] = useState<string[]>([
    'Banking & Deposit',
    'Loan & EMI',
  ])

  const filteredCategories = categories
    .map((category) => ({
      ...category,
      tools: category.tools.filter((tool) =>
        tool.name.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((category) => category.tools.length > 0)

  function toggleCategory(title: string) {
    setExpanded((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title]
    )
  }

  function closeMobile() {
    setMobileOpen(false)
  }

  return (
    <div className="w-full min-w-0 shrink-0 lg:w-[280px]">

      {/* DESKTOP SIDEBAR CONTROL */}
      <div className="mb-3 hidden lg:block">
        <button
          type="button"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-expanded={sidebarOpen}
          className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-bold text-gray-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:text-blue-600 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-500"
        >
          <span className="text-xl">
            {sidebarOpen ? '☰' : '☷'}
          </span>

          {sidebarOpen ? 'Hide Sidebar' : 'Show Tools'}

          <span className="ml-auto text-blue-500 transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      </div>

      {/* MOBILE SIDEBAR CONTROL */}
      <button
        type="button"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-expanded={mobileOpen}
        className="mb-3 flex w-full items-center justify-between rounded-2xl border border-gray-200 bg-white p-4 text-sm font-bold text-gray-800 shadow-sm transition-all hover:border-blue-400 dark:border-gray-800 dark:bg-gray-900 dark:text-white lg:hidden"
      >
        <span className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 text-xl text-white shadow-lg">
            🧮
          </span>

          <span className="text-left">
            <span className="block">Financial Tools</span>
            <span className="mt-1 block text-xs font-normal text-gray-500 dark:text-gray-400">
              Explore all calculators
            </span>
          </span>
        </span>

        <span className="text-xl text-blue-600 dark:text-blue-400">
          {mobileOpen ? '−' : '+'}
        </span>
      </button>

      {/* SIDEBAR CONTENT */}
      <div
        className={`
          ${mobileOpen ? 'block' : 'hidden'}
          ${sidebarOpen ? 'lg:block' : 'lg:hidden'}
        `}
      >
         <aside className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_15px_50px_rgba(37,99,235,0.08)] transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 lg:sticky lg:top-24 lg:self-start"> 
         {/* <aside className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_15px_50px_rgba(37,99,235,0.08)] transition-colors duration-300 dark:border-gray-800 dark:bg-gray-900 lg:fixed lg:top-[100px] lg:w-[280px] lg:max-h-[calc(100vh-115px)] lg:overflow-y-auto"> */}

          {/* GRADIENT HEADER */}
          <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-5 text-white">
            <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
            <div className="absolute -bottom-10 left-10 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />

            <div className="relative flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/20 bg-white/15 text-2xl shadow-lg backdrop-blur">
                🧮
              </div>

              <div>
                <h2 className="text-lg font-extrabold tracking-tight">
                  Financial Tools
                </h2>

                <p className="mt-1 text-xs text-blue-100">
                  Calculate. Plan. Grow.
                </p>
              </div>
            </div>

            <div className="relative mt-4 flex items-center justify-between">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold">
                {categories.reduce(
                  (total, category) => total + category.tools.length,
                  0
                )} Free Calculators
              </span>

              <span className="text-2xl">🚀</span>
            </div>
          </div>

          {/* SEARCH */}
          <div className="border-b border-gray-100 p-4 dark:border-gray-800">
            <label
              htmlFor="calculator-search"
              className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400"
            >
              Find a calculator
            </label>

            <div className="relative">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>

              <input
                id="calculator-search"
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Search calculators..."
                className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3 pl-10 pr-10 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 dark:border-gray-700 dark:bg-gray-800 dark:text-white dark:focus:bg-gray-900"
              />

              {search && (
                <button
                  type="button"
                  onClick={() => setSearch('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-blue-600"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* CATEGORY LIST */}
          <div className="space-y-2 p-3">
            {filteredCategories.length === 0 ? (
              <div className="rounded-xl bg-gray-50 p-5 text-center dark:bg-gray-800">
                <p className="text-2xl">🔎</p>
                <p className="mt-2 text-sm font-bold text-gray-700 dark:text-gray-200">
                  No calculator found
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  Try another search term.
                </p>
              </div>
            ) : (
              filteredCategories.map((category) => {
                const isExpanded =
                  search.length > 0 ||
                  expanded.includes(category.title)

                const hasActiveTool = category.tools.some(
                  (tool) => pathname === tool.href
                )

                return (
                  <div
                    key={category.title}
                    className="rounded-xl border border-transparent transition-all duration-200 hover:border-gray-100 dark:hover:border-gray-800"
                  >
                    <button
                      type="button"
                      onClick={() => toggleCategory(category.title)}
                      aria-expanded={isExpanded}
                      className={`flex w-full items-center justify-between rounded-xl px-3 py-3 text-left transition-all duration-200 ${
                        hasActiveTool
                          ? 'bg-blue-50/80 dark:bg-blue-950/30'
                          : 'hover:bg-gray-50 dark:hover:bg-gray-800/70'
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} text-lg text-white shadow-md`}>
                          {category.icon}
                        </span>

                        <span className="min-w-0">
                          <span className={`block text-sm font-bold ${
                            hasActiveTool
                              ? 'text-blue-700 dark:text-blue-400'
                              : 'text-gray-700 dark:text-gray-200'
                          }`}>
                            {category.title}
                          </span>

                          <span className="mt-1 block text-xs text-gray-400">
                            {category.tools.length} calculators
                          </span>
                        </span>
                      </span>

                      <span className={`ml-2 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-sm text-gray-500 transition-transform duration-200 dark:bg-gray-800 ${
                        isExpanded ? 'rotate-180' : ''
                      }`}>
                        ⌄
                      </span>
                    </button>

                    {/* TOOL LINKS */}
                    {isExpanded && (
                      <div className="ml-5 space-y-1 border-l-2 border-blue-100 py-2 pl-3 dark:border-gray-700">
                        {category.tools.map((tool) => {
                          const active = pathname === tool.href

                          return (
                            <Link
                              key={tool.href}
                              href={tool.href}
                              onClick={closeMobile}
                              aria-current={active ? 'page' : undefined}
                              className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                                active
                                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 font-bold text-blue-700 shadow-sm dark:from-blue-500/10 dark:to-purple-500/10 dark:text-blue-400'
                                  : 'text-gray-600 hover:translate-x-1 hover:bg-gray-50 hover:text-blue-600 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-blue-400'
                              }`}
                            >
                              <span className="text-base transition-transform duration-200 group-hover:scale-110">
                                {tool.icon}
                              </span>

                              <span className="flex-1">
                                {tool.name}
                              </span>

                              {active && (
                                <span className="h-2 w-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)] dark:bg-blue-400" />
                              )}
                            </Link>
                          )
                        })}
                      </div>
                    )}
                  </div>
                )
              })
            )}
          </div>

          {/* FOOTER */}
          <div className="mx-3 mb-3 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-4 dark:border-blue-900/50 dark:from-blue-950/30 dark:to-purple-950/30">
            <div className="flex items-center gap-2">
              <span className="text-xl">💡</span>
              <p className="text-sm font-extrabold text-blue-900 dark:text-blue-300">
                Smart Financial Planning
              </p>
            </div>

            <p className="mt-2 text-xs leading-5 text-blue-700 dark:text-blue-400">
              Make informed financial decisions with our free calculators and easy-to-understand guides.
            </p>

            <Link
              href="/tools"
              onClick={closeMobile}
              className="group mt-3 flex items-center justify-between rounded-lg bg-white px-3 py-2.5 text-xs font-bold text-blue-700 shadow-sm transition-all hover:bg-blue-600 hover:text-white dark:bg-gray-900 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white"
            >
              Explore All Tools
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>

        </aside>
      </div>
    </div>
  )
}
