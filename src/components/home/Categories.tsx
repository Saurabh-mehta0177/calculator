
import Link from 'next/link'
import { categories, tools } from '@/data/tools'

const categoryStyles = [
  {
    gradient: 'from-blue-500 to-cyan-500',
    background: 'bg-blue-50 dark:bg-blue-950/40',
    text: 'text-blue-600 dark:text-blue-400',
  },
  {
    gradient: 'from-emerald-500 to-teal-500',
    background: 'bg-emerald-50 dark:bg-emerald-950/40',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    gradient: 'from-purple-500 to-pink-500',
    background: 'bg-purple-50 dark:bg-purple-950/40',
    text: 'text-purple-600 dark:text-purple-400',
  },
  {
    gradient: 'from-orange-500 to-amber-500',
    background: 'bg-orange-50 dark:bg-orange-950/40',
    text: 'text-orange-600 dark:text-orange-400',
  },
  {
    gradient: 'from-indigo-500 to-violet-500',
    background: 'bg-indigo-50 dark:bg-indigo-950/40',
    text: 'text-indigo-600 dark:text-indigo-400',
  },
]

export default function Categories() {
  return (
    <section
      aria-labelledby="categories-heading"
      className="relative"
    >
      {/* SECTION HEADER */}
      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 dark:border-blue-900/50 dark:bg-blue-950/40">
            <span className="h-2 w-2 rounded-full bg-blue-500" />

            <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-400">
              Explore Our Tools
            </span>
          </div>

          <h2
            id="categories-heading"
            className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl"
          >
            Financial Calculator{' '}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
            Explore free financial calculators for banking, loans,
            investments and everyday financial planning.
          </p>
        </div>

        <Link
          href="/tools"
          className="group inline-flex w-fit items-center gap-2 rounded-xl border border-blue-100 bg-white px-4 py-3 text-sm font-bold text-blue-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:text-blue-400"
        >
          View All Tools

          <span className="transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* CATEGORY GRID */}
      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">

        {categories.map((category, index) => {
          const categoryTools = tools.filter(
            (tool) => tool.category === category.name
          )

          const style =
            categoryStyles[index % categoryStyles.length]

          return (
            <article
              key={category.name}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_45px_rgba(37,99,235,0.12)] dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-900"
            >
              {/* SUBTLE HOVER ACCENT */}
              <div
                aria-hidden="true"
                className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${style.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              {/* CATEGORY HEADER */}
              <div className="flex items-start gap-4">

                <div
                  className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${style.background} text-3xl transition-transform duration-300 group-hover:scale-105`}
                >
                  {category.icon}

                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-white bg-gradient-to-br ${style.gradient} dark:border-gray-900`}
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-extrabold text-gray-900 dark:text-white">
                    {category.name}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-gray-500 dark:text-gray-400">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* CATEGORY TOOL COUNT */}
              <div className="mt-5 flex items-center justify-between">
                <span className="text-xs font-semibold text-gray-400 dark:text-gray-500">
                  Available calculators
                </span>

                <span
                  className={`rounded-full px-2.5 py-1 text-xs font-extrabold ${style.background} ${style.text}`}
                >
                  {categoryTools.length} Tools
                </span>
              </div>

              {/* TOOL LINKS */}
              <div className="mt-3 flex-1 space-y-1 border-t border-gray-100 pt-3 dark:border-gray-800">

                {categoryTools.length > 0 ? (
                  categoryTools.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      className="group/tool flex min-h-11 items-center justify-between gap-3 rounded-xl px-3 py-2.5 transition-all duration-200 hover:translate-x-1 hover:bg-blue-50 dark:hover:bg-blue-950/30"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gray-50 text-base transition-colors group-hover/tool:bg-white dark:bg-gray-800 dark:group-hover/tool:bg-gray-900"
                        >
                          {tool.icon}
                        </span>

                        <span className="text-sm font-semibold text-gray-700 transition-colors group-hover/tool:text-blue-700 dark:text-gray-300 dark:group-hover/tool:text-blue-400">
                          {tool.name}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className="shrink-0 text-sm text-gray-400 transition-all group-hover/tool:translate-x-1 group-hover/tool:text-blue-600 dark:group-hover/tool:text-blue-400"
                      >
                        →
                      </span>
                    </Link>
                  ))
                ) : (
                  <p className="px-3 py-4 text-sm text-gray-500 dark:text-gray-400">
                    More calculators coming soon.
                  </p>
                )}
              </div>

              {/* CATEGORY FOOTER */}
              <div className="mt-4 border-t border-gray-100 pt-4 dark:border-gray-800">
                <Link
                  href="/tools"
                  className={`inline-flex items-center gap-2 text-xs font-extrabold ${style.text}`}
                >
                  Explore all calculators

                  <span className="transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          )
        })}

      </div>
    </section>
  )
}
