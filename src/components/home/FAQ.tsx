
import { faqs } from '@/data/faqs'

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative"
    >
      {/* SECTION HEADER */}
      <div className="text-center">

        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 dark:border-blue-900/50 dark:bg-blue-950/40">
          <span className="text-sm">💬</span>

          <span className="text-xs font-extrabold uppercase tracking-widest text-blue-700 dark:text-blue-400">
            Frequently Asked Questions
          </span>
        </div>

        <h2
          id="faq-heading"
          className="text-2xl font-black tracking-tight text-gray-900 dark:text-white sm:text-3xl"
        >
          Common Questions About{' '}
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Our Calculators
          </span>
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-500 dark:text-gray-400">
          Find clear answers to common questions about financial
          calculators, loans, deposits and investments.
        </p>

      </div>

      {/* FAQ ACCORDION */}
      <div className="mx-auto mt-8 max-w-3xl space-y-3">

        {faqs.map((faq, index) => (
          <details
            key={faq.question}
            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 open:border-blue-200 open:shadow-[0_12px_35px_rgba(37,99,235,0.08)] hover:border-blue-200 dark:border-gray-800 dark:bg-gray-900 dark:open:border-blue-900 dark:hover:border-gray-700"
          >
            {/* ACTIVE ACCENT */}
            <div
              aria-hidden="true"
              className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 transition-opacity duration-300 group-open:opacity-100"
            />

            <summary className="flex cursor-pointer list-none items-center gap-4 p-4 sm:p-5 [&::-webkit-details-marker]:hidden">

              {/* QUESTION NUMBER */}
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-extrabold text-blue-700 transition-colors group-open:bg-gradient-to-br group-open:from-blue-600 group-open:to-purple-600 group-open:text-white dark:bg-blue-950/50 dark:text-blue-400">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* QUESTION */}
              <span className="flex-1 text-sm font-bold leading-6 text-gray-800 transition-colors group-open:text-blue-700 dark:text-gray-200 dark:group-open:text-blue-400 sm:text-base">
                {faq.question}
              </span>

              {/* ACCORDION ICON */}
              <span
                aria-hidden="true"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 text-lg text-gray-500 transition-all duration-300 group-open:rotate-45 group-open:border-blue-200 group-open:bg-blue-50 group-open:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:group-open:border-blue-900 dark:group-open:bg-blue-950/50 dark:group-open:text-blue-400"
              >
                +
              </span>

            </summary>

            {/* ANSWER */}
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-in-out group-open:grid-rows-[1fr]">

              <div className="overflow-hidden">
                <div className="ml-4 border-t border-gray-100 px-4 pb-5 pt-4 dark:border-gray-800 sm:ml-5 sm:px-5">

                  <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                    {faq.answer}
                  </p>

                </div>
              </div>

            </div>

          </details>
        ))}

      </div>

      {/* FOOTER */}
      <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 to-purple-50 p-5 dark:border-blue-900/50 dark:from-blue-950/30 dark:to-purple-950/30">

        <div className="flex items-start gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-xl shadow-sm dark:bg-gray-900">
            💡
          </span>

          <div>
            <h3 className="text-sm font-extrabold text-gray-900 dark:text-white">
              Still have questions?
            </h3>

            <p className="mt-1 text-xs leading-6 text-gray-600 dark:text-gray-400">
              Explore our financial calculators and guides to learn
              more about your financial calculations.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}
