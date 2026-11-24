
import Link from 'next/link'

export default function MoneyGuide() {
  const faqs = [
    {
      question: 'What is a Money Time Machine?',
      answer:
        'A Money Time Machine is a financial calculator that helps you understand how money may grow or lose purchasing power over time due to inflation, savings returns, and compounding.',
    },
    {
      question: 'How does the Money Time Machine work?',
      answer:
        'It estimates the future value of money using your initial amount, expected annual return, inflation rate, and investment duration. The result helps you understand the potential future value of your money.',
    },
    {
      question: 'How does inflation affect money over time?',
      answer:
        'Inflation reduces the purchasing power of money over time. This means the same amount of money may buy fewer goods and services in the future.',
    },
    {
      question: 'Are Money Time Machine results guaranteed?',
      answer:
        'No. The calculator provides estimates based on the assumptions you enter. Actual investment returns and inflation rates may change over time.',
    },
    {
      question: 'Why should I calculate the future value of money?',
      answer:
        'Calculating the future value of money can help with financial planning, retirement goals, savings decisions, and understanding the impact of inflation.',
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

      {/* Introduction */}
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 shadow-sm sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
          Financial Planning Guide
        </p>

        <h2 className="mt-2 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Money Time Machine Calculator
        </h2>

        <p className="mt-4 leading-7 text-slate-600">
          A Money Time Machine calculator helps you understand how the value
          of money can change over time. Estimate the future value of your
          savings, explore the impact of inflation, and see how investment
          returns may affect your financial future.
        </p>

        <Link
          href="/money-time-machine"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Explore Money Time Machine
        </Link>
      </div>

      {/* What is Money Time Machine */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          What is a Money Time Machine?
        </h2>

        <p className="leading-7 text-slate-600">
          A Money Time Machine is a financial planning tool that shows how
          money may change in value over a selected period. It helps you
          visualize the relationship between savings, investment growth,
          compound returns, and inflation.
        </p>

        <p className="leading-7 text-slate-600">
          For example, money invested today may grow over several years
          through compounding. However, inflation can reduce its purchasing
          power. Understanding both factors can help you make more informed
          financial decisions.
        </p>

        <p className="leading-7 text-slate-600">
          Whether you are saving for retirement, planning a major purchase,
          or building long-term wealth, estimating the future value of money
          can help you prepare for different financial scenarios.
        </p>
      </div>

      {/* Formula */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">
          Money Time Machine Formula
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          The future value of money can be estimated using the compound
          growth formula:
        </p>

        <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 p-4 text-center">
          <p className="whitespace-nowrap text-lg font-bold text-slate-900">
            FV = PV × (1 + r)<sup>t</sup>
          </p>
        </div>

        <p className="leading-7 text-slate-600">
          To understand the impact of inflation, you can also calculate
          the present purchasing power of a future amount:
        </p>

        <div className="my-5 overflow-x-auto rounded-xl bg-slate-50 p-4 text-center">
          <p className="whitespace-nowrap text-lg font-bold text-slate-900">
            Real Value = FV / (1 + i)<sup>t</sup>
          </p>
        </div>

        <ul className="space-y-2 text-slate-600">
          <li>
            <strong className="text-slate-800">FV:</strong> Future value
            of money
          </li>
          <li>
            <strong className="text-slate-800">PV:</strong> Present value
            or initial amount
          </li>
          <li>
            <strong className="text-slate-800">r:</strong> Annual growth
            or investment return rate in decimal form
          </li>
          <li>
            <strong className="text-slate-800">i:</strong> Annual inflation
            rate in decimal form
          </li>
          <li>
            <strong className="text-slate-800">t:</strong> Number of years
          </li>
        </ul>

        <p className="mt-4 text-sm leading-6 text-slate-500">
          These formulas provide estimates using constant annual rates.
          Actual investment returns and inflation can vary over time.
        </p>
      </div>

      {/* Example */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Example of Money Value Over Time
        </h2>

        <p className="leading-7 text-slate-600">
          Suppose you have ₹1,00,000 today and invest it for 10 years at
          an assumed annual return of 8%, compounded annually.
        </p>

        <p className="leading-7 text-slate-600">
          Using the compound growth formula:
        </p>

        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-5">
          <p className="text-sm font-semibold text-emerald-800">
            Investment Example
          </p>

          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <div>
              <p className="text-sm text-slate-500">Initial Amount</p>
              <p className="text-xl font-bold text-slate-900">
                ₹1,00,000
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Annual Return</p>
              <p className="text-xl font-bold text-slate-900">
                8%
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Investment Period</p>
              <p className="text-xl font-bold text-slate-900">
                10 Years
              </p>
            </div>

            <div>
              <p className="text-sm text-slate-500">Estimated Future Value</p>
              <p className="text-xl font-bold text-emerald-700">
                ₹2,15,892
              </p>
            </div>
          </div>
        </div>

        <p className="leading-7 text-slate-600">
          This means an initial investment of ₹1,00,000 could grow to
          approximately ₹2,15,892 after 10 years at an assumed annual
          return of 8%.
        </p>

        <p className="leading-7 text-slate-600">
          This example is for educational purposes only. It does not
          guarantee future investment performance.
        </p>
      </div>

      {/* Benefits and Considerations */}
      <div className="grid gap-5 md:grid-cols-2">
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Benefits of Money Time Machine
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
            <li>Understand how money may grow over time.</li>
            <li>Estimate the impact of compound returns.</li>
            <li>Understand the effect of inflation.</li>
            <li>Plan long-term savings and investment goals.</li>
            <li>Compare different financial scenarios.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-amber-100 bg-amber-50/60 p-6">
          <h3 className="text-lg font-bold text-slate-900">
            Things to Consider
          </h3>

          <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
            <li>Investment returns are not guaranteed.</li>
            <li>Inflation rates can change over time.</li>
            <li>Taxes and investment fees can affect returns.</li>
            <li>Long-term estimates depend on assumptions.</li>
            <li>Consider your financial goals and risk tolerance.</li>
          </ul>
        </div>
      </div>

      {/* Inflation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          How Inflation Changes the Value of Money
        </h2>

        <p className="leading-7 text-slate-600">
          Inflation refers to the general increase in prices of goods and
          services over time. When prices increase, the purchasing power
          of money decreases.
        </p>

        <p className="leading-7 text-slate-600">
          For example, if the annual inflation rate is 6%, something that
          costs ₹1,00,000 today may cost approximately ₹1,79,085 after
          10 years, assuming inflation remains constant.
        </p>

        <p className="leading-7 text-slate-600">
          This is why simply saving money may not always be enough to
          maintain purchasing power. Financial planning should consider
          both potential investment growth and inflation.
        </p>
      </div>

      {/* Investment Growth vs Inflation */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-900">
          Investment Growth vs Inflation
        </h2>

        <div className="overflow-x-auto rounded-2xl border border-slate-200">
          <table className="w-full min-w-[520px] border-collapse text-left text-sm">
            <thead className="bg-slate-50 text-slate-800">
              <tr>
                <th className="p-4 font-semibold">Feature</th>
                <th className="p-4 font-semibold">Investment Growth</th>
                <th className="p-4 font-semibold">Inflation</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-200 text-slate-600">
              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Meaning
                </td>
                <td className="p-4">
                  Increase in investment value
                </td>
                <td className="p-4">
                  Increase in general prices
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Impact
                </td>
                <td className="p-4">
                  Can increase wealth
                </td>
                <td className="p-4">
                  Reduces purchasing power
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Measurement
                </td>
                <td className="p-4">
                  Investment return rate
                </td>
                <td className="p-4">
                  Inflation rate
                </td>
              </tr>

              <tr>
                <td className="p-4 font-medium text-slate-800">
                  Planning Goal
                </td>
                <td className="p-4">
                  Grow money over time
                </td>
                <td className="p-4">
                  Maintain purchasing power
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="leading-7 text-slate-600">
          Understanding both investment growth and inflation helps you
          evaluate the real value of your money rather than looking only
          at the amount displayed in your account.
        </p>
      </div>

      {/* Financial Planning */}
      <div className="rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold text-slate-900">
          Why Financial Planning Matters
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Financial planning helps you prepare for future expenses,
          manage savings, and work towards long-term financial goals.
          Estimating how money changes over time can make it easier to
          understand how much you may need to save or invest.
        </p>

        <ul className="mt-4 list-disc space-y-2 pl-5 leading-6 text-slate-600">
          <li>Plan for retirement and long-term financial security.</li>
          <li>Estimate future education and family expenses.</li>
          <li>Understand the purchasing power of future savings.</li>
          <li>Set realistic financial goals.</li>
          <li>Make more informed saving and investment decisions.</li>
        </ul>
      </div>

      {/* FAQs */}
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

      {/* Final CTA */}
      <div className="rounded-3xl border border-emerald-100 bg-gradient-to-br from-emerald-50 via-white to-teal-50 p-6 text-center sm:p-8">
        <h2 className="text-2xl font-bold text-slate-900">
          See How Your Money Changes Over Time
        </h2>

        <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-600">
          Explore different financial scenarios, understand the impact
          of inflation, and estimate the future value of your money
          with the Money Time Machine calculator.
        </p>

        <Link
          href="/money-time-machine"
          className="mt-5 inline-flex items-center justify-center rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-emerald-800"
        >
          Try Money Time Machine
        </Link>
      </div>
    </section>
  )
}
