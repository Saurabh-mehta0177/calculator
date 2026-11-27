
const benefits = [
  {
    icon: '🆓',
    title: '100% Free Financial Calculators',
    description:
      'Access our collection of free online financial calculators without subscriptions, registration fees or hidden charges.',
    color: 'from-blue-500 to-indigo-500',
    bg: 'bg-blue-50 dark:bg-blue-950/40',
  },
  {
    icon: '⚡',
    title: 'Fast & Instant Results',
    description:
      'Calculate loan EMIs, savings, deposits and investment estimates quickly with easy-to-use calculator tools.',
    color: 'from-amber-400 to-orange-500',
    bg: 'bg-orange-50 dark:bg-orange-950/30',
  },
  {
    icon: '🎯',
    title: 'Simple & Easy to Understand',
    description:
      'Understand your financial calculations with clear inputs, transparent assumptions and easy-to-read results.',
    color: 'from-purple-500 to-pink-500',
    bg: 'bg-purple-50 dark:bg-purple-950/30',
  },
  {
    icon: '📱',
    title: 'Mobile-Friendly Experience',
    description:
      'Use our responsive financial calculators on smartphones, tablets and desktop computers.',
    color: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50 dark:bg-cyan-950/30',
  },
  {
    icon: '🔒',
    title: 'Privacy-Focused Calculations',
    description:
      'Use our calculators without creating an account. Your financial calculations are designed to be simple and accessible.',
    color: 'from-emerald-500 to-green-500',
    bg: 'bg-green-50 dark:bg-green-950/30',
  },
  {
    icon: '📊',
    title: 'Wide Range of Financial Tools',
    description:
      'Explore calculators for loans, EMI, fixed deposits, recurring deposits, investments, savings and everyday financial planning.',
    color: 'from-indigo-500 to-violet-500',
    bg: 'bg-indigo-50 dark:bg-indigo-950/30',
  },
]

export default function WhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="relative isolate overflow-hidden rounded-3xl border border-gray-200 bg-gradient-to-br from-slate-50 via-white to-blue-50 px-5 py-10 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30 sm:px-8 sm:py-14 lg:px-10"
    >
      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 -z-10 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl"
      />

      {/* Section Heading */}
      <div className="relative mx-auto max-w-3xl text-center">

        <span className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-blue-700 dark:border-blue-800 dark:bg-blue-950/60 dark:text-blue-300">
          ✨ Why Choose SmartMoneyTools
        </span>

        <h2
          id="why-choose-heading"
          className="mt-5 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-3xl lg:text-4xl"
        >
          Smart Tools for Better Financial Planning
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400 sm:text-base">
          Take control of your financial decisions with easy-to-use
          online calculators. Estimate loan payments, understand
          investment growth, calculate savings and explore useful
          financial tools in one convenient place.
        </p>

      </div>

      {/* Benefits Grid */}
      <div className="relative mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

        {benefits.map((benefit, index) => (

          <article
            key={benefit.title}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1.5 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 dark:border-gray-800 dark:bg-gray-900 dark:hover:border-blue-700"
          >

            {/* Top Accent */}
            <div
              className={`absolute left-0 top-0 h-1 w-0 bg-gradient-to-r ${benefit.color} transition-all duration-300 group-hover:w-full`}
            />

            {/* Icon */}
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${benefit.bg} text-3xl transition duration-300 group-hover:scale-110 group-hover:rotate-3`}
            >
              <span aria-hidden="true">
                {benefit.icon}
              </span>
            </div>

            {/* Card Content */}
            <h3 className="mt-5 text-base font-bold leading-6 text-gray-900 dark:text-white">
              {benefit.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600 dark:text-gray-400">
              {benefit.description}
            </p>

            {/* Bottom Indicator */}
            <div className="mt-5 flex items-center gap-2">

              <span
                className={`h-1.5 w-8 rounded-full bg-gradient-to-r ${benefit.color}`}
              />

              <span className="text-xs font-medium text-gray-400 dark:text-gray-500">
                FinanceTools Benefit {index + 1}
              </span>

            </div>

          </article>

        ))}

      </div>

      {/* Bottom Information */}
      <div className="relative mt-10 rounded-2xl border border-blue-100 bg-blue-50/80 p-5 text-center dark:border-blue-900/60 dark:bg-blue-950/30 sm:p-6">

        <div className="text-3xl" aria-hidden="true">
          💡
        </div>

        <h3 className="mt-3 text-lg font-bold text-gray-900 dark:text-white">
          Make More Informed Financial Decisions
        </h3>

        <p className="mx-auto mt-2 max-w-2xl text-sm leading-7 text-gray-600 dark:text-gray-400">
          From calculating monthly loan EMIs to estimating long-term
          savings and investment growth, FinanceTools helps you
          understand important financial numbers before making decisions.
        </p>

        <p className="mt-3 text-xs leading-6 text-gray-500 dark:text-gray-500">
          Calculator results are estimates based on the information
          and assumptions entered. Actual financial outcomes may vary.
        </p>

      </div>

    </section>
  )
}
