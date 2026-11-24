
import Link from 'next/link'

export default function PPFGuide() {
  const faqs = [
    {
      question: 'What is a Public Provident Fund (PPF)?',
      answer:
        'The Public Provident Fund (PPF) is a government-backed long-term savings scheme in India. It helps individuals build savings through regular contributions while earning interest at a rate notified by the government.',
    },
    {
      question: 'What is the minimum and maximum PPF investment?',
      answer:
        'The minimum investment in a PPF account is ₹500 per financial year, while the maximum investment is ₹1.5 lakh per financial year. These limits are subject to applicable government rules.',
    },
    {
      question: 'What is the maturity period of a PPF account?',
      answer:
        'A PPF account has a maturity period of 15 years, calculated from the end of the financial year in which the account was opened. After maturity, it can be extended in blocks of five years, subject to applicable rules.',
    },
    {
      question: 'How is PPF interest calculated?',
      answer:
        'PPF interest is calculated monthly on the lowest balance between the close of the fifth day and the end of the month. Interest is credited to the account annually.',
    },
    {
      question: 'Is PPF investment tax-free?',
      answer:
        'PPF generally falls under the Exempt-Exempt-Exempt (EEE) tax category, subject to applicable tax laws. Eligible contributions may qualify for deductions under Section 80C when the old tax regime applies.',
    },
    {
      question: 'Can I withdraw money from my PPF account?',
      answer:
        'Partial withdrawals are permitted from a PPF account after completing the required period and subject to prescribed conditions. Premature closure is also permitted only in specified circumstances under applicable rules.',
    },
    {
      question: 'Are PPF returns guaranteed?',
      answer:
        'PPF is a government-backed savings scheme. Its interest rate is notified by the government and may change quarterly. The applicable rate can therefore vary during the investment period.',
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

  return (
    <section className="mt-10 space-y-8">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* PPF Introduction */}
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Investment Guide
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          PPF Calculator - Public Provident Fund
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          A PPF calculator helps you estimate the maturity amount of your
          Public Provident Fund investment. Enter your yearly investment
          amount and expected PPF interest rate to calculate your
          estimated investment value after 15 years.
        </p>

        <Link
          href="/ppf-calculator"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Calculate PPF Returns
        </Link>
      </div>

      {/* What is PPF */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          What is a Public Provident Fund (PPF)?
        </h2>

        <p className="leading-7 text-slate-600">
          The Public Provident Fund (PPF) is a long-term savings scheme
          introduced by the Government of India. It is designed to
          encourage individuals to save regularly and build a financial
          corpus over time.
        </p>

        <p className="leading-7 text-slate-600">
          Individuals can invest between ₹500 and ₹1.5 lakh in a PPF
          account during a financial year. The scheme has a lock-in
          period of 15 years and offers government-notified interest
          rates.
        </p>

        <p className="leading-7 text-slate-600">
          PPF is commonly used for long-term financial goals such as
          retirement planning, children's education, and wealth
          accumulation.
        </p>
      </div>

      {/* PPF Formula */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">
          PPF Interest Calculation Formula
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          PPF interest is calculated monthly on the lowest balance
          between the close of the fifth day and the end of each month.
          Interest is credited annually.
        </p>

        <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 p-4 text-center">
          <p className="whitespace-nowrap text-lg font-bold text-slate-900">
            Monthly Interest = Minimum Monthly Balance × (Annual Rate / 12)
          </p>
        </div>

        <ul className="space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-800">
              Monthly Balance:
            </strong>{' '}
            Eligible account balance for the month.
          </li>
          <li>
            <strong className="text-slate-800">
              Annual Rate:
            </strong>{' '}
            Government-notified annual PPF interest rate.
          </li>
          <li>
            <strong className="text-slate-800">
              12:
            </strong>{' '}
            Number of months in a year.
          </li>
        </ul>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          Actual PPF interest depends on the monthly eligible balance
          and applicable government-notified interest rates.
        </p>
      </div>

      {/* PPF Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          PPF Investment Example
        </h2>

        <p className="leading-7 text-slate-600">
          Suppose you invest ₹1,50,000 every financial year in your
          PPF account for 15 years. If you assume an annual interest
          rate of 7.1% throughout the investment period and make
          contributions at the beginning of each financial year,
          your estimated maturity amount would be approximately
          ₹40.68 lakh.
        </p>

        <p className="leading-7 text-slate-600">
          Your total investment over 15 years would be ₹22.5 lakh,
          and the remaining amount would represent estimated
          accumulated interest.
        </p>

        <p className="leading-7 text-slate-600">
          This example is for illustration only. The actual maturity
          amount may differ because PPF interest rates are subject
          to periodic government revisions.
        </p>
      </div>

      {/* Benefits and Considerations */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Benefits of PPF Investment
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
            <li>Government-backed long-term savings scheme.</li>
            <li>Attractive tax benefits under applicable tax rules.</li>
            <li>Compounding helps build long-term savings.</li>
            <li>Minimum investment starts at just ₹500 per year.</li>
            <li>Suitable for long-term financial planning.</li>
            <li>Eligible balance and interest receive statutory protection.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Things to Consider
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
            <li>PPF has a 15-year maturity period.</li>
            <li>Annual investment is capped at ₹1.5 lakh.</li>
            <li>Interest rates can change quarterly.</li>
            <li>Premature withdrawals are restricted.</li>
            <li>Partial withdrawals are subject to eligibility rules.</li>
            <li>Tax benefits depend on the applicable tax regime.</li>
          </ul>
        </div>
      </div>

      {/* PPF vs Other Investments */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          PPF vs Fixed Deposit vs ELSS
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-800">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">PPF</th>
                <th className="p-4 font-semibold">FD</th>
                <th className="p-4 font-semibold">ELSS</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Returns
                </td>
                <td className="p-4">Government-notified rate</td>
                <td className="p-4">Bank-specific rate</td>
                <td className="p-4">Market-linked</td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Risk
                </td>
                <td className="p-4">Government-backed</td>
                <td className="p-4">Depends on institution</td>
                <td className="p-4">Market risk</td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Lock-in
                </td>
                <td className="p-4">15 years</td>
                <td className="p-4">Depends on FD type</td>
                <td className="p-4">3 years</td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Tax Benefits
                </td>
                <td className="p-4">Subject to tax rules</td>
                <td className="p-4">Depends on FD type</td>
                <td className="p-4">Subject to tax rules</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-7 text-slate-600">
          PPF, Fixed Deposits, and ELSS serve different financial
          purposes. PPF is generally considered for long-term
          government-backed savings, while FDs provide fixed-term
          deposits and ELSS offers market-linked investment exposure.
        </p>
      </div>

      {/* PPF Investment Tips */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Tips to Maximize Your PPF Investment
        </h2>

        <ul className="list-disc space-y-3 pl-5 leading-7 text-slate-600">
          <li>
            <strong className="text-slate-800">
              Invest early in the financial year:
            </strong>{' '}
            Depositing eligible contributions before the fifth day
            of a month can help maximize interest for that month.
          </li>

          <li>
            <strong className="text-slate-800">
              Invest regularly:
            </strong>{' '}
            Make consistent annual contributions to build your
            long-term savings.
          </li>

          <li>
            <strong className="text-slate-800">
              Understand the tax rules:
            </strong>{' '}
            Check the applicable tax regime and eligibility before
            claiming deductions.
          </li>

          <li>
            <strong className="text-slate-800">
              Plan for the maturity period:
            </strong>{' '}
            Consider your long-term financial goals before investing
            because PPF has a 15-year lock-in period.
          </li>
        </ul>
      </div>

      {/* FAQ */}
      <div className="space-y-5">
        <h2 className="text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-2xl border border-slate-200 bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                {faq.question}

                <span className="text-xl text-emerald-700 transition group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-3 leading-7 text-slate-600">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
