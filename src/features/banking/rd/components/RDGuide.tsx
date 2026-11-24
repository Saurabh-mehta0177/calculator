
import Link from 'next/link'

const faqs = [
  {
    q: 'What is a Recurring Deposit (RD)?',
    a: 'A Recurring Deposit is a savings scheme in which you deposit a fixed amount every month for a selected tenure and earn interest according to the bank terms.',
  },
  {
    q: 'How does an RD work?',
    a: 'You choose a monthly deposit, interest rate and tenure. You deposit the selected amount regularly and receive your deposits plus applicable interest at maturity.',
  },
  {
    q: 'What is the RD maturity formula?',
    a: 'RD maturity is calculated by adding the future value of all monthly installments. The exact formula depends on the bank compounding method and installment dates.',
  },
  {
    q: 'How is RD interest calculated?',
    a: 'Interest is calculated on each installment for its eligible deposit period. Many Indian banks use quarterly compounding, subject to their product terms.',
  },
  {
    q: 'Is RD better than FD?',
    a: 'RD is suitable for regular monthly savings, whereas FD is generally suitable when you have a lump sum amount available to invest.',
  },
  {
    q: 'Can I open an RD for one year?',
    a: 'Many banks offer one-year RD schemes. Available tenures differ between banks.',
  },
  {
    q: 'Can I withdraw RD before maturity?',
    a: 'Premature closure may be allowed subject to bank conditions, reduced interest and applicable penalties.',
  },
  {
    q: 'Is RD interest taxable?',
    a: 'RD interest is generally taxable under applicable Indian income-tax rules. Tax and TDS provisions depend on current law.',
  },
  {
    q: 'What happens if I miss an RD installment?',
    a: 'The bank may charge a penalty or apply other conditions for missed installments. Check your bank agreement.',
  },
  {
    q: 'Can students open an RD?',
    a: 'Many banks allow minors to hold RD accounts through a parent or guardian, subject to bank rules.',
  },
  {
    q: 'Can senior citizens get higher RD interest?',
    a: 'Some banks offer additional interest rates to eligible senior citizens. Rates and eligibility vary.',
  },
  {
    q: 'Is RD safe?',
    a: 'The safety depends on the institution. Eligible bank deposits in India are covered by DICGC insurance up to ₹5 lakh per depositor per insured bank, including principal and interest.',
  },
  {
    q: 'What is the minimum RD amount?',
    a: 'The minimum monthly deposit depends on the bank and the selected RD product.',
  },
  {
    q: 'Can I change my monthly RD amount?',
    a: 'A standard RD generally has a fixed monthly installment. Changing it depends on the bank product rules.',
  },
  {
    q: 'How can I calculate RD maturity?',
    a: 'Enter your monthly deposit, interest rate and tenure in our RD calculator to estimate your maturity amount.',
  },
]

const advantages = [
  'Encourages regular monthly savings.',
  'Helps develop financial discipline.',
  'Suitable for people with regular income.',
  'Allows investment through smaller installments.',
  'Helps plan short-term financial goals.',
  'Provides interest according to deposit terms.',
]

const disadvantages = [
  'Requires regular monthly installments.',
  'Missed installments may attract penalties.',
  'Premature closure may reduce returns.',
  'Returns depend on the applicable interest rate.',
  'Interest is generally taxable.',
]

const sections = [
  ['What is RD?', '#what-is-rd'],
  ['How RD Works', '#how-rd-works'],
  ['RD Formula', '#rd-formula'],
  ['Calculation Example', '#example'],
  ['Benefits', '#benefits'],
  ['Limitations', '#limitations'],
  ['RD vs FD', '#rd-vs-fd'],
  ['Who Should Invest?', '#who-should-invest'],
  ['FAQs', '#faqs'],
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
}: {
  id: string
  eyebrow: string
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className="rd-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
    >
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-emerald-600 dark:text-emerald-400">
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

export default function RDGuide() {
  return (
    <main className="rd-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-teal-600 to-cyan-700 p-7 text-white shadow-xl sm:p-11">

        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">

          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Recurring Deposit (RD) Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-emerald-50 sm:text-base">
            Learn everything about recurring deposits, RD interest calculation,
            maturity formula, benefits, limitations and frequently asked questions.
          </p>

          <Link
            href="/rd-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Your RD →
          </Link>

        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="rd-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">

        <h2 className="text-lg font-extrabold">On This Page</h2>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-emerald-50 hover:text-emerald-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-emerald-950"
            >
              → {label}
            </a>
          ))}
        </div>
      </nav>

      {/* WHAT IS RD */}
      <GuideSection
        id="what-is-rd"
        eyebrow="Introduction"
        title="What is a Recurring Deposit?"
        description="A Recurring Deposit is a savings product offered by banks and financial institutions where you deposit a fixed amount at regular intervals, usually every month, for a predetermined period."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Unlike a Fixed Deposit, where you generally invest a lump sum at
          the beginning, an RD allows you to save smaller amounts regularly.
          The bank pays interest according to the applicable rate, compounding
          method and account terms. At maturity, you receive your accumulated
          deposits and applicable interest.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['💰', 'Monthly Savings', 'Deposit a fixed amount every month.'],
            ['📅', 'Fixed Tenure', 'Select an available deposit period.'],
            ['🏆', 'Maturity Benefit', 'Receive deposits and applicable interest.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl bg-emerald-50 p-5 dark:bg-emerald-950/30">
              <span className="text-3xl">{icon}</span>
              <h3 className="mt-3 font-extrabold text-emerald-800 dark:text-emerald-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* HOW IT WORKS */}
      <GuideSection
        id="how-rd-works"
        eyebrow="Working Process"
        title="How Does an RD Work?"
        description="An RD follows a simple monthly savings process."
      >
        <div className="space-y-4">
          {[
            ['01', 'Choose Monthly Deposit', 'Decide how much you want to save every month.'],
            ['02', 'Select Tenure', 'Choose a deposit period offered by your bank.'],
            ['03', 'Check Interest Rate', 'Understand the applicable rate and compounding rules.'],
            ['04', 'Make Monthly Deposits', 'Pay installments on time according to your account schedule.'],
            ['05', 'Receive Maturity Amount', 'Receive your deposits and applicable interest at maturity.'],
          ].map(([number, title, desc]) => (
            <div key={number} className="flex gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-emerald-100 font-black text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
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
        id="rd-formula"
        eyebrow="Mathematics"
        title="RD Maturity Amount Formula"
        description="The maturity amount is calculated by adding the future value of each monthly installment."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Quarterly Compounding Approximation
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              M = P × Σ (1 + r/400)<sup>k/3</sup>
            </p>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-400">
            The sum is calculated over all monthly installments. The value k
            represents the remaining months for each installment.
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
                ['M', 'Estimated maturity amount'],
                ['P', 'Monthly deposit'],
                ['r', 'Annual interest rate in percentage'],
                ['k', 'Remaining months for an installment'],
                ['400', 'Annual percentage rate converted to quarterly rate'],
                ['3', 'Months in one quarter'],
              ].map(([symbol, meaning]) => (
                <tr key={symbol} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-3 font-bold text-emerald-700 dark:text-emerald-300">{symbol}</td>
                  <td className="px-3 py-3 text-slate-600 dark:text-slate-300">{meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
          <h3 className="font-extrabold text-amber-800 dark:text-amber-300">
            Important Calculation Note
          </h3>
          <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-200">
            This formula is an approximation used by this calculator.
            Actual bank calculations can differ because of installment
            dates, deposit timing, compounding conventions and rounding.
            Always check the bank's maturity quotation.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="RD Calculation Example"
        description="Suppose you deposit ₹5,000 every month at an assumed annual interest rate of 7% for 5 years."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Monthly Deposit', '₹5,000'],
            ['Interest Rate', '7% p.a.'],
            ['Tenure', '5 Years'],
            ['Total Investment', '₹3,00,000'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Total investment is calculated as ₹5,000 × 60 months = ₹3,00,000.
          Interest is calculated on each installment for its applicable period.
          The maturity amount depends on the bank's calculation convention.
        </p>

        <Link
          href="/rd-calculator"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Calculate Your RD →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of Recurring Deposit"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {advantages.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30">
              <span className="font-black text-emerald-600">✓</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* LIMITATIONS */}
      <GuideSection
        id="limitations"
        eyebrow="Things To Consider"
        title="Limitations of RD"
      >
        <div className="space-y-3">
          {disadvantages.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20">
              <span className="font-bold text-rose-600">!</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* RD VS FD */}
      <GuideSection
        id="rd-vs-fd"
        eyebrow="Comparison"
        title="RD vs FD: What Is the Difference?"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="rounded-l-xl px-4 py-4">Feature</th>
                <th className="px-4 py-4">RD</th>
                <th className="rounded-r-xl px-4 py-4">FD</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Investment', 'Monthly installments', 'Lump sum'],
                ['Saving Style', 'Regular savings', 'One-time investment'],
                ['Deposit', 'Fixed monthly amount', 'Initial lump sum'],
                ['Suitable For', 'Monthly savers', 'People with available savings'],
                ['Interest', 'Depends on RD terms', 'Depends on FD terms'],
                ['Maturity', 'Selected tenure', 'Selected tenure'],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-100 dark:border-slate-800">
                  
{row.map((cell, i) => (
  <td
    key={`${row[0]}-${i}`}
    className={`px-4 py-4 ${
      i === 0
        ? 'font-bold'
        : 'text-slate-600 dark:text-slate-300'
    }`}
  >
    {cell}
  </td>
))}

                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Link href="/fd-guide" className="mt-5 inline-flex text-sm font-bold text-emerald-700 hover:underline dark:text-emerald-400">
          Read FD Complete Guide →
        </Link>
      </GuideSection>

      {/* WHO SHOULD INVEST */}
      <GuideSection
        id="who-should-invest"
        eyebrow="Suitability"
        title="Who Should Consider an RD?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          RD may be suitable for salaried individuals, students and people
          with regular income who want to save a fixed amount every month.
          It can help people plan short-term financial goals while building
          a disciplined savings habit. Consider your liquidity needs,
          bank terms and financial goals before opening an account.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About RD"
        description="Find answers to common questions about RD accounts, interest rates, maturity and withdrawals."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="rd-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-bold text-slate-800 dark:text-slate-100 sm:p-5">
                <span>{faq.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-emerald-700 shadow-sm transition group-open:rotate-45 dark:bg-slate-700 dark:text-emerald-300">
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
      <section className="rounded-3xl bg-gradient-to-br from-emerald-700 to-teal-600 p-7 text-center text-white shadow-xl sm:p-10">
        <h2 className="text-2xl font-black sm:text-3xl">
          Ready to Calculate Your RD?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-50">
          Enter your monthly deposit, interest rate and tenure to estimate
          your recurring deposit maturity amount.
        </p>

        <Link
          href="/rd-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
        >
          Open RD Calculator →
        </Link>
      </section>

    </main>
  )
}
