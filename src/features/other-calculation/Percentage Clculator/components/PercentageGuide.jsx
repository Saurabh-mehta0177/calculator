
import Link from 'next/link'

const faqs = [
  {
    q: 'What is a percentage?',
    a: 'A percentage is a way of expressing a number as a fraction of 100. The symbol % is used to represent percentage.'
  },
  {
    q: 'How do you calculate percentage?',
    a: 'To calculate percentage, divide the obtained value by the total value and multiply the result by 100.'
  },
  {
    q: 'What is the basic percentage formula?',
    a: 'The basic formula is Percentage = (Value / Total Value) × 100.'
  },
  {
    q: 'How do I calculate 20% of a number?',
    a: 'Multiply the given number by 20 and divide the result by 100. For example, 20% of 500 is 100.'
  },
  {
    q: 'How to calculate percentage increase?',
    a: 'Subtract the original value from the new value, divide the difference by the original value and multiply by 100.'
  },
  {
    q: 'How to calculate percentage decrease?',
    a: 'Subtract the new value from the original value, divide the difference by the original value and multiply by 100.'
  },
  {
    q: 'How to convert a fraction into a percentage?',
    a: 'Divide the numerator by the denominator and multiply the result by 100.'
  },
  {
    q: 'How to convert a decimal into percentage?',
    a: 'Multiply the decimal number by 100 and add the percentage symbol.'
  },
  {
    q: 'How to calculate marks percentage?',
    a: 'Divide the marks obtained by the maximum possible marks and multiply by 100.'
  },
  {
    q: 'What is the difference between percentage and percentage points?',
    a: 'Percentage points represent the arithmetic difference between two percentages, while percentage change measures relative change.'
  },
  {
    q: 'Can percentage be more than 100?',
    a: 'Yes. A percentage can exceed 100 when the value is greater than the reference total.'
  },
  {
    q: 'How can I calculate percentage easily?',
    a: 'Use our online percentage calculator. Enter the required values to calculate percentages, increases, decreases and differences instantly.'
  },
]

const sections = [
  ['What is Percentage?', '#what-is-percentage'],
  ['How Percentage Works', '#how-percentage-works'],
  ['Percentage Formula', '#percentage-formula'],
  ['Calculation Examples', '#examples'],
  ['Percentage Increase', '#increase'],
  ['Percentage Decrease', '#decrease'],
  ['Fraction & Decimal', '#conversion'],
  ['Benefits', '#benefits'],
  ['FAQs', '#faqs'],
]

const advantages = [
  'Makes numerical comparisons easier.',
  'Helps calculate exam marks and scores.',
  'Useful for discounts and shopping.',
  'Helps understand profit and loss.',
  'Useful in business and financial calculations.',
  'Makes data and statistics easier to understand.',
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
}

function GuideSection({
  id,
  eyebrow,
  title,
  description,
  children,
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
    >
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-violet-600 dark:text-violet-400">
        {eyebrow}
      </p>

      <h2 className="mt-2 text-2xl font-black text-slate-900 dark:text-white sm:text-3xl">
        {title}
      </h2>

      {description && (
        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      )}

      <div className="mt-6">{children}</div>
    </section>
  )
}

export default function PercentageGuide() {
  return (
    <main className="mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600 p-7 text-white shadow-xl sm:p-11">

        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-16 h-64 w-64 rounded-full bg-pink-300/10 blur-3xl" />

        <div className="relative max-w-3xl">

          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            MATHEMATICS KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Percentage Calculator – Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-purple-50 sm:text-base">
            Learn how to calculate percentages, percentage increase,
            percentage decrease, fractions, decimals and more with
            simple formulas and practical examples.
          </p>

          <Link
            href="/percentage-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-purple-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Percentage →
          </Link>

          <div className="mt-8 flex flex-wrap gap-3">
            {['Easy Formulas', 'Step-by-Step Examples', 'Free Calculator'].map((item) => (
              <span key={item} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold">
                ✓ {item}
              </span>
            ))}
          </div>

        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">

        <h2 className="text-lg font-extrabold">On This Page</h2>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-violet-50 hover:text-violet-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-violet-950"
            >
              → {label}
            </a>
          ))}
        </div>
      </nav>

      {/* WHAT IS PERCENTAGE */}
      <GuideSection
        id="what-is-percentage"
        eyebrow="Introduction"
        title="What is a Percentage?"
        description="A percentage is a mathematical concept used to represent a number as a fraction of 100."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          The word percentage means per hundred. It is widely used in
          everyday calculations, including school marks, discounts,
          business, interest rates, statistics and financial planning.
          The percentage symbol (%) represents a value out of 100.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['📊', 'Easy Comparison', 'Compare different values using a common scale.'],
            ['🎓', 'Exam Results', 'Calculate marks and academic performance.'],
            ['🛍️', 'Daily Shopping', 'Understand discounts and price reductions.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl bg-violet-50 p-5 dark:bg-violet-950/30">
              <span className="text-3xl">{icon}</span>
              <h3 className="mt-3 font-extrabold text-violet-800 dark:text-violet-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* HOW IT WORKS */}
      <GuideSection
        id="how-percentage-works"
        eyebrow="Working Process"
        title="How Does Percentage Work?"
        description="Percentage calculations follow a simple mathematical process."
      >
        <div className="space-y-4">
          {[
            ['01', 'Identify the Value', 'Find the number or amount you want to calculate.'],
            ['02', 'Identify the Total', 'Determine the total or reference value.'],
            ['03', 'Divide the Values', 'Divide the obtained value by the total value.'],
            ['04', 'Multiply by 100', 'Multiply the result by 100 to convert it into a percentage.'],
            ['05', 'Get Your Result', 'Add the percentage symbol to the final answer.'],
          ].map(([number, title, desc]) => (
            <div key={number} className="flex gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-violet-100 font-black text-violet-700 dark:bg-violet-950 dark:text-violet-300">
                {number}
              </span>
              <div>
                <h3 className="font-extrabold">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* FORMULA */}
      <GuideSection
        id="percentage-formula"
        eyebrow="Mathematics"
        title="Percentage Formula"
        description="Use this basic formula to calculate the percentage of any value."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-400">
            Basic Percentage Formula
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              Percentage = (Value / Total) × 100
            </p>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-400">
            Divide the obtained value by the total value and multiply
            the result by 100.
          </p>
        </div>

        <h3 className="mt-7 text-lg font-extrabold">Formula Variables</h3>

        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[300px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-700">
                <th className="px-3 py-3">Symbol</th>
                <th className="px-3 py-3">Meaning</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Value', 'Obtained or selected value'],
                ['Total', 'Total or reference value'],
                ['100', 'Percentage conversion factor'],
                ['%', 'Percentage symbol'],
              ].map(([symbol, meaning]) => (
                <tr key={symbol} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-3 font-bold text-violet-700 dark:text-violet-300">{symbol}</td>
                  <td className="px-3 py-3 text-slate-600 dark:text-slate-300">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </GuideSection>

      {/* EXAMPLES */}
      <GuideSection
        id="examples"
        eyebrow="Practical Examples"
        title="Percentage Calculation Examples"
        description="Understand percentage calculations with these simple examples."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            {
              title: 'Example 1: Find 20% of 500',
              formula: '(20 / 100) × 500',
              result: '100',
            },
            {
              title: 'Example 2: Marks Percentage',
              formula: '(450 / 500) × 100',
              result: '90%',
            },
            {
              title: 'Example 3: Find 25% of 800',
              formula: '(25 / 100) × 800',
              result: '200',
            },
            {
              title: 'Example 4: Percentage of 30 out of 60',
              formula: '(30 / 60) × 100',
              result: '50%',
            },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-violet-100 bg-violet-50 p-5 dark:border-violet-900 dark:bg-violet-950/30">
              <h3 className="font-extrabold text-violet-800 dark:text-violet-300">{item.title}</h3>
              <p className="mt-3 font-mono text-sm text-slate-600 dark:text-slate-300">{item.formula}</p>
              <div className="mt-4 flex items-center justify-between rounded-xl bg-white p-4 dark:bg-slate-800">
                <span className="text-sm font-semibold text-slate-500">Answer</span>
                <span className="text-2xl font-black text-violet-700 dark:text-violet-300">{item.result}</span>
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/percentage-calculator"
          className="mt-6 inline-flex rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-violet-700"
        >
          Try Percentage Calculator →
        </Link>
      </GuideSection>

      {/* INCREASE */}
      <GuideSection
        id="increase"
        eyebrow="Advanced Calculation"
        title="How to Calculate Percentage Increase?"
        description="Percentage increase measures how much a value has grown compared to its original value."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-400">
            Percentage Increase Formula
          </p>
          <p className="mt-5 font-mono text-lg leading-9 sm:text-2xl">
            ((New Value - Original Value) / Original Value) × 100
          </p>
        </div>

        <div className="mt-5 rounded-2xl bg-violet-50 p-5 dark:bg-violet-950/30">
          <h3 className="font-extrabold">Example</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Suppose a product price increases from ₹500 to ₹600.
          </p>
          <p className="mt-3 font-mono text-sm leading-7 text-violet-700 dark:text-violet-300">
            ((600 - 500) / 500) × 100 = 20%
          </p>
          <p className="mt-2 text-sm font-bold text-violet-800 dark:text-violet-300">
            Percentage Increase = 20%
          </p>
        </div>
      </GuideSection>

      {/* DECREASE */}
      <GuideSection
        id="decrease"
        eyebrow="Advanced Calculation"
        title="How to Calculate Percentage Decrease?"
        description="Percentage decrease shows how much a value has reduced compared to its original value."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-pink-400">
            Percentage Decrease Formula
          </p>
          <p className="mt-5 font-mono text-lg leading-9 sm:text-2xl">
            ((Original Value - New Value) / Original Value) × 100
          </p>
        </div>

        <div className="mt-5 rounded-2xl bg-pink-50 p-5 dark:bg-pink-950/30">
          <h3 className="font-extrabold">Example</h3>
          <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
            Suppose a product price decreases from ₹1,000 to ₹800.
          </p>
          <p className="mt-3 font-mono text-sm leading-7 text-pink-700 dark:text-pink-300">
            ((1000 - 800) / 1000) × 100 = 20%
          </p>
          <p className="mt-2 text-sm font-bold text-pink-800 dark:text-pink-300">
            Percentage Decrease = 20%
          </p>
        </div>
      </GuideSection>

      {/* CONVERSION */}
      <GuideSection
        id="conversion"
        eyebrow="Number Conversion"
        title="Fraction and Decimal to Percentage"
        description="Convert fractions and decimal values into percentages using simple formulas."
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-violet-50 p-5 dark:bg-violet-950/30">
            <h3 className="font-extrabold text-violet-800 dark:text-violet-300">Fraction to Percentage</h3>
            <p className="mt-3 font-mono text-sm">(Numerator / Denominator) × 100</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Example: 1/4 × 100 = 25%</p>
          </div>

          <div className="rounded-2xl bg-fuchsia-50 p-5 dark:bg-fuchsia-950/30">
            <h3 className="font-extrabold text-fuchsia-800 dark:text-fuchsia-300">Decimal to Percentage</h3>
            <p className="mt-3 font-mono text-sm">Decimal × 100</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">Example: 0.75 × 100 = 75%</p>
          </div>
        </div>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of Percentage Calculations"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {advantages.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-violet-50 p-4 dark:bg-violet-950/30">
              <span className="font-black text-violet-600">✓</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About Percentage"
        description="Find answers to common questions about percentage formulas, calculations and conversions."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-bold text-slate-800 dark:text-slate-100 sm:p-5">
                <span>{faq.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-violet-700 shadow-sm transition group-open:rotate-45 dark:bg-slate-700 dark:text-violet-300">
                  +
                </span>
              </summary>

              <div className="border-t border-slate-200 px-4 py-4 text-sm leading-7 text-slate-600 dark:border-slate-700 dark:text-slate-300 sm:px-5">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </GuideSection>

      {/* CTA */}
      <section className="rounded-3xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-600 p-7 text-center text-white shadow-xl sm:p-10">
        <h2 className="text-2xl font-black sm:text-3xl">
          Ready to Calculate Your Percentage?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-purple-50">
          Calculate percentages, percentage increases, decreases and
          differences instantly with our free online percentage calculator.
        </p>

        <Link
          href="/percentage-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-purple-800 shadow-lg transition hover:-translate-y-1"
        >
          Open Percentage Calculator →
        </Link>
      </section>

    </main>
  )
}
