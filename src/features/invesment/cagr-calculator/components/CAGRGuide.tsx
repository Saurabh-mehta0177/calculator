import Link from 'next/link'

const faqs = [
  {
    question: 'What does CAGR mean?',
    answer:
      'CAGR stands for Compound Annual Growth Rate. It represents the annualized growth rate of an investment over a period, assuming the investment grew at a steady compounded rate.',
  },
  {
    question: 'Is CAGR the same as the actual yearly return?',
    answer:
      'No. CAGR is a smoothed annualized rate. It does not show the ups and downs that may have occurred during the investment period.',
  },
  {
    question: 'Can CAGR be negative?',
    answer:
      'Yes. If the final investment value is lower than the initial investment, CAGR is negative and indicates that the investment lost value over the period.',
  },
  {
    question: 'Does CAGR include additional investments or withdrawals?',
    answer:
      'The standard CAGR formula assumes a single initial investment and one final value, with no additional contributions or withdrawals in between. For cash flows at different times, a different return calculation may be more appropriate.',
  },
  {
    question: 'Is a higher CAGR always better?',
    answer:
      'Not necessarily. Compare investments over similar time periods and consider risk, volatility, fees, taxes, and your financial goals—not just the CAGR.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function CAGRGuide() {
  return (
    <section className="mt-10 space-y-8 text-slate-800 dark:text-slate-200">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <header className="relative isolate overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-700 via-violet-700 to-fuchsia-800 p-6 text-white shadow-xl sm:p-9">
        <div className="pointer-events-none absolute -right-16 -top-20 -z-10 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-12 -z-10 h-64 w-64 rounded-full bg-fuchsia-300/10 blur-3xl" />

        <p className="text-xs font-bold uppercase tracking-[0.22em] text-indigo-100">
          Investment Growth Guide
        </p>

        <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
          CAGR Calculator
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-indigo-50 sm:text-base">
          Find the annualized growth rate of an investment between its starting
          value and ending value. Enter your initial investment, final value
          and holding period to estimate the compounded annual growth rate.
        </p>

        <Link
          href="/cagr-calculator"
          className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-bold text-indigo-700 shadow-sm transition hover:bg-indigo-50"
        >
          Calculate Your CAGR
        </Link>
      </header>

      {/* WHAT IS CAGR */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          What is CAGR?
        </h2>

        <p className="leading-7 text-slate-600 dark:text-slate-300">
          CAGR stands for <strong>Compound Annual Growth Rate</strong>. It
          describes the annualized rate at which an investment would have
          grown from its initial value to its final value if it had grown at a
          steady compounded rate over the entire period.
        </p>

        <p className="leading-7 text-slate-600 dark:text-slate-300">
          Actual investment returns rarely move in a straight line. CAGR
          simplifies that journey into one annual rate, making it easier to
          compare growth over different time periods. It does not, however,
          show the volatility or the sequence of returns along the way.
        </p>
      </section>

      {/* FORMULA */}
      <section className="rounded-3xl border border-indigo-100 bg-white p-6 shadow-sm dark:border-indigo-900/60 dark:bg-slate-900 sm:p-8">
        <div className="flex items-start gap-4">
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-indigo-50 text-2xl dark:bg-indigo-950/60">
            ∑
          </span>

          <div>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white">
              CAGR Formula
            </h2>

            <p className="mt-2 leading-7 text-slate-600 dark:text-slate-300">
              CAGR is calculated using the initial value, final value and
              number of years invested.
            </p>
          </div>
        </div>

        <div className="my-6 overflow-x-auto rounded-2xl bg-indigo-50 px-4 py-6 text-center dark:bg-indigo-950/40">
          <p className="whitespace-nowrap text-xl font-bold text-indigo-800 dark:text-indigo-200 sm:text-2xl">
            CAGR = (Final Value / Initial Value)
            <sup>1 / Years</sup> − 1
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Initial Value
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              The amount invested at the beginning.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Final Value
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              The investment value at the end of the period.
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-4 dark:bg-slate-800/70">
            <p className="text-sm font-bold text-slate-900 dark:text-white">
              Years
            </p>
            <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
              The total holding period in years.
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm leading-6 text-slate-500 dark:text-slate-400">
          The formula assumes a single initial investment with no additional
          deposits or withdrawals during the period. The calculator expresses
          the result as a percentage.
        </p>
      </section>

      {/* EXAMPLE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          CAGR Calculation Example
        </h2>

        <p className="leading-7 text-slate-600 dark:text-slate-300">
          Suppose an investment grows from ₹1,00,000 to ₹2,00,000 over 5 years.
          The investment has doubled in value during that period.
        </p>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Initial investment
            </p>
            <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              ₹1,00,000
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Final value
            </p>
            <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              ₹2,00,000
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
              Investment period
            </p>
            <p className="mt-2 text-2xl font-black text-slate-900 dark:text-white">
              5 years
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900/60 dark:bg-emerald-950/30 sm:p-6">
          <p className="text-sm font-bold uppercase tracking-wide text-emerald-800 dark:text-emerald-300">
            Estimated CAGR
          </p>

          <p className="mt-2 text-3xl font-black text-emerald-900 dark:text-emerald-200">
            14.87% per year
          </p>

          <p className="mt-3 text-sm leading-6 text-emerald-800 dark:text-emerald-300">
            This means the investment’s equivalent compounded annual growth
            rate was approximately 14.87% over the five-year period. It does
            not mean the investment earned exactly 14.87% in each individual
            year.
          </p>
        </div>
      </section>

      {/* HOW TO USE */}
      <section className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          How to Use the CAGR Calculator
        </h2>

        <ol className="mt-5 space-y-4">
          {[
            {
              title: 'Enter your initial investment',
              description:
                'Add the amount you invested at the beginning of the period.',
            },
            {
              title: 'Enter the final investment value',
              description:
                'Use the value of the investment at the end of the selected period.',
            },
            {
              title: 'Choose the investment duration',
              description:
                'Enter how many years passed between the initial and final values.',
            },
            {
              title: 'Review the CAGR result',
              description:
                'The calculator estimates the annualized compounded growth rate using your inputs.',
            },
          ].map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-indigo-100 text-sm font-extrabold text-indigo-700 dark:bg-indigo-950 dark:text-indigo-300">
                {index + 1}
              </span>

              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* CAGR VS ABSOLUTE RETURN */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          CAGR vs Absolute Return
        </h2>

        <p className="leading-7 text-slate-600 dark:text-slate-300">
          Absolute return shows the total percentage gain or loss over the
          entire investment period. CAGR converts that total change into an
          annualized compounded rate.
        </p>

        <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-800 dark:bg-slate-800 dark:text-slate-100">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Absolute Return</th>
                <th className="p-4 font-semibold">CAGR</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 text-slate-600 dark:divide-slate-800 dark:text-slate-300">
              <tr>
                <td className="p-4 font-semibold text-slate-800 dark:text-slate-100">
                  Shows
                </td>
                <td className="p-4">Total gain or loss</td>
                <td className="p-4">Annualized compounded growth</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-800 dark:text-slate-100">
                  Considers time
                </td>
                <td className="p-4">No annualization</td>
                <td className="p-4">Yes</td>
              </tr>

              <tr>
                <td className="p-4 font-semibold text-slate-800 dark:text-slate-100">
                  Useful for
                </td>
                <td className="p-4">Overall performance</td>
                <td className="p-4">Comparing growth across periods</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* USES AND LIMITATIONS */}
      <section className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/70 p-6 dark:border-emerald-900/50 dark:bg-emerald-950/20">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Where CAGR Can Help
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <li>Compare investment growth over different periods.</li>
            <li>Review historical growth of a single investment.</li>
            <li>Understand an annualized growth rate for a long-term goal.</li>
            <li>Compare historical performance alongside risk and fees.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/70 p-6 dark:border-amber-900/50 dark:bg-amber-950/20">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Important Limitations
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-600 dark:text-slate-300">
            <li>It does not show yearly fluctuations or volatility.</li>
            <li>It does not guarantee future investment returns.</li>
            <li>It assumes no additional investments or withdrawals.</li>
            <li>It does not automatically account for fees, taxes or inflation.</li>
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="space-y-5">
        <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900 dark:text-white">
                {faq.question}

                <span className="text-xl text-indigo-600 transition group-open:rotate-45 dark:text-indigo-300">
                  +
                </span>
              </summary>

              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </section>

      {/* DISCLAIMER */}
      <aside className="rounded-2xl border border-slate-200 bg-slate-50 p-5 dark:border-slate-800 dark:bg-slate-900/70">
        <p className="text-sm leading-6 text-slate-500 dark:text-slate-400">
          <strong className="text-slate-700 dark:text-slate-200">
            Disclaimer:
          </strong>{' '}
          This calculator provides an estimate based on the values entered.
          CAGR is a historical or assumed annualized rate, not a promise of
          future performance. Investment values can rise or fall, and actual
          results may be affected by market conditions, costs and taxes.
        </p>
      </aside>
    </section>
  )
}