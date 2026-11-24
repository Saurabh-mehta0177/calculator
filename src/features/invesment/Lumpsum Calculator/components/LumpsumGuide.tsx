import Link from 'next/link'

export default function LumpsumGuide() {
  const faqs = [
    {
      question: 'What is a lump sum investment?',
      answer:
        'A lump sum investment means investing a single amount of money at once. The investment can grow over time through returns and compounding.',
    },
    {
      question: 'How is lump sum investment calculated?',
      answer:
        'The future value is estimated using the compound interest formula: A = P × (1 + r/n)^(n×t), where P is the principal, r is the annual rate, n is the compounding frequency, and t is the number of years.',
    },
    {
      question: 'Is lump sum investment better than SIP?',
      answer:
        'It depends on your financial goals, risk tolerance, and when you have the money available. A lump sum invests the full amount immediately, while SIP invests smaller amounts at regular intervals.',
    },
    {
      question: 'Are lump sum returns guaranteed?',
      answer:
        'No. Returns from market-linked investments are not guaranteed and can fluctuate. The calculator provides an estimate based on the return rate you enter.',
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

      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Investment Guide
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Lump Sum Investment Calculator
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          A lump sum calculator helps estimate how much a one-time investment
          could grow over a selected period. Enter your initial investment,
          expected annual return, and investment duration to get an estimated
          future value.
        </p>

        <Link
          href="/lumpsum-calculator"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Calculate Lump Sum Returns
        </Link>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          What is a Lump Sum Investment?
        </h2>

        <p className="leading-7 text-slate-600">
          A lump sum investment is made by investing a single amount at one
          time instead of contributing money regularly. The amount may earn
          returns over the investment period, and those returns may compound
          when they remain invested.
        </p>

        <p className="leading-7 text-slate-600">
          Lump sum investing can be useful when you already have money available
          to invest, such as savings or a bonus. Before investing, consider your
          time horizon, financial goals, and ability to handle market
          fluctuations.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">
          Lump Sum Investment Formula
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          For an investment with compound returns, the estimated future value
          can be calculated using this formula:
        </p>

        <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 p-4 text-center">
          <p className="whitespace-nowrap text-lg font-bold text-slate-900">
            A = P × (1 + r / n) <sup>n × t</sup>
          </p>
        </div>

        <ul className="space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-800">A:</strong> Estimated future
            value
          </li>
          <li>
            <strong className="text-slate-800">P:</strong> Initial investment
            amount
          </li>
          <li>
            <strong className="text-slate-800">r:</strong> Annual rate of return
            in decimal form
          </li>
          <li>
            <strong className="text-slate-800">n:</strong> Compounding
            frequency per year
          </li>
          <li>
            <strong className="text-slate-800">t:</strong> Investment duration
            in years
          </li>
        </ul>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          This is an estimate based on the assumed rate and compounding
          frequency. Actual investment returns may differ.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Example of Lump Sum Investment
        </h2>

        <p className="leading-7 text-slate-600">
          Suppose you invest ₹1,00,000 for 10 years and assume an annual return
          of 12%, compounded annually. Using the compound interest formula, the
          estimated future value would be approximately ₹3,10,585.
        </p>

        <p className="leading-7 text-slate-600">
          This example is for illustration only. It does not represent a
          guaranteed return or a prediction of any particular investment.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Benefits of Lump Sum Investing
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
            <li>Invests the available amount immediately.</li>
            <li>Can benefit from compounding over a longer period.</li>
            <li>Requires no recurring investment schedule.</li>
            <li>Useful when you have a clear long-term investment plan.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Things to Consider
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
            <li>The full amount is exposed to market movements from the start.</li>
            <li>Returns from market-linked investments are not guaranteed.</li>
            <li>Keep emergency savings separate from investment money.</li>
            <li>Choose investments based on your goals and risk tolerance.</li>
          </ul>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Lump Sum vs SIP
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-800">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Lump Sum</th>
                <th className="p-4 font-semibold">SIP</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="p-4 font-medium text-slate-800">Investment</td>
                <td className="p-4">One-time amount</td>
                <td className="p-4">Regular installments</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Timing</td>
                <td className="p-4">Invested at one time</td>
                <td className="p-4">Invested over time</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-slate-800">Suitable for</td>
                <td className="p-4">Available capital</td>
                <td className="p-4">Regular savings</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-7 text-slate-600">
          Neither approach is automatically better for everyone. The right
          choice depends on when you have money available, your investment
          horizon, and how much risk you can accept.
        </p>

        <p className="leading-7 text-slate-600">
          You can also compare regular investing with our{' '}
          <Link
            href="/sip-calculator"
            className="font-semibold text-emerald-700 underline underline-offset-4 hover:text-emerald-800"
          >
            SIP Calculator
          </Link>
          .
        </p>
      </div>

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

              <p className="mt-3 leading-7 text-slate-600">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}