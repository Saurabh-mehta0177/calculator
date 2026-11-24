
import Link from 'next/link'

const guides = [
  {
    category: 'LOAN GUIDE',
    title: 'What Is EMI and How Is It Calculated?',
    description:
      'Understand Equated Monthly Instalments, principal amount, interest rate and loan tenure.',
    icon: '🧮',
    href: '/emi-calculator',
    readTime: '5 min read',
  },
  {
    category: 'INVESTMENT GUIDE',
    title: 'What Is SIP and How Does It Work?',
    description:
      'Learn how Systematic Investment Plans work and how regular investing can build wealth.',
    icon: '📈',
    href: '/sip-calculator',
    readTime: '5 min read',
  },
  {
    category: 'BANKING GUIDE',
    title: 'Fixed Deposit: Interest and Maturity Explained',
    description:
      'Understand fixed deposit interest, investment duration and maturity calculations.',
    icon: '🏦',
    href: '/fd-calculator',
    readTime: '4 min read',
  },
]

export default function LatestGuides() {
  return (
    <section
      aria-labelledby="guides-heading"
      className="text-gray-900 dark:text-gray-100 [.reading_&]:text-stone-900"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-blue-700 dark:text-blue-300 [.reading_&]:text-stone-700">
            Financial Knowledge
          </span>

          <h2
            id="guides-heading"
            className="mt-2 text-2xl font-extrabold tracking-tight text-gray-950 dark:text-white sm:text-3xl [.reading_&]:text-stone-950"
          >
            Financial Guides &amp; Learning
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-300 [.reading_&]:text-stone-700">
            Learn important financial concepts with simple explanations.
          </p>
        </div>

        <Link
          href="/tools"
          className="inline-flex min-h-11 w-fit items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-blue-300 dark:hover:bg-white/10 dark:focus-visible:ring-blue-300 [.reading_&]:text-stone-800 [.reading_&]:hover:bg-stone-200"
        >
          Browse all tools
          <span aria-hidden="true">→</span>
        </Link>
      </div>

      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {guides.map((guide) => (
          <article
            key={guide.title}
            className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-200 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-blue-700 [.reading_&]:border-stone-300 [.reading_&]:bg-[#fffdf7] [.reading_&]:shadow-none [.reading_&]:hover:border-stone-500"
          >
            <div className="flex h-32 items-center justify-center border-b border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-100 text-5xl dark:border-gray-800 dark:from-blue-950/60 dark:to-indigo-950/60 [.reading_&]:border-stone-200 [.reading_&]:from-[#f3efe4] [.reading_&]:to-[#e9e2d3]">
              <span aria-hidden="true">{guide.icon}</span>
            </div>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-xs font-bold tracking-wider text-blue-700 dark:text-blue-300 [.reading_&]:text-stone-700">
                  {guide.category}
                </span>

                <span className="text-xs text-gray-500 dark:text-gray-400 [.reading_&]:text-stone-600">
                  {guide.readTime}
                </span>
              </div>

              <h3 className="mt-4 text-lg font-bold leading-7 text-gray-950 transition-colors group-hover:text-blue-700 dark:text-white dark:group-hover:text-blue-300 [.reading_&]:text-stone-950 [.reading_&]:group-hover:text-stone-700">
                {guide.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-300 [.reading_&]:text-stone-700">
                {guide.description}
              </p>

              <div className="mt-auto pt-5">
                <Link
                  href={guide.href}
                  aria-label={`Explore calculator: ${guide.title}`}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg text-sm font-bold text-blue-700 transition-colors hover:text-blue-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-blue-300 dark:hover:text-blue-200 dark:focus-visible:ring-blue-300 [.reading_&]:text-stone-800 [.reading_&]:hover:text-stone-950"
                >
                  Explore Calculator
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}