
import Link from 'next/link'

const faqs = [
  {
    q: 'What is a Fixed Deposit (FD)?',
    a: 'A Fixed Deposit is a savings product in which you invest a lump sum amount for a fixed tenure and earn interest at a predetermined rate according to the bank or financial institution’s terms.',
  },
  {
    q: 'How does an FD work?',
    a: 'You deposit a lump sum amount, choose a tenure and interest payout option. The bank pays interest as per the applicable rate and compounding method. At maturity you receive the principal plus applicable interest (or interest is paid periodically if chosen).',
  },
  {
    q: 'What is the FD maturity formula?',
    a: 'For compounded FD, maturity is generally calculated as M = P × (1 + r/n)^(n×t), where P is principal, r is annual rate, n is compounding frequency per year and t is tenure in years. Exact calculation depends on the bank’s compounding method and product terms.',
  },
  {
    q: 'How is FD interest calculated?',
    a: 'Interest is calculated on the principal for the selected tenure. Most Indian banks compound interest quarterly, subject to the specific FD product terms and payout option (cumulative or non-cumulative).',
  },
  {
    q: 'Is FD better than RD?',
    a: 'FD is generally suitable when you have a lump sum available to invest. RD is better suited for regular monthly savings. Choice depends on your cash flow and financial goals.',
  },
  {
    q: 'Can I open an FD for one year?',
    a: 'Yes. Most banks offer one-year and other short-to-medium term FD options. Available tenures differ between banks and products.',
  },
  {
    q: 'Can I withdraw FD before maturity?',
    a: 'Premature withdrawal is usually allowed subject to bank conditions, reduced interest rate and applicable penalties or charges.',
  },
  {
    q: 'Is FD interest taxable?',
    a: 'FD interest is generally taxable under applicable Indian income-tax rules. TDS may be deducted as per current law and thresholds.',
  },
  {
    q: 'What happens if I break an FD early?',
    a: 'Banks typically apply a lower interest rate for the period the deposit was held and may levy a penalty. Check the specific product terms before closing early.',
  },
  {
    q: 'Can students open an FD?',
    a: 'Many banks allow minors to open FD accounts through a parent or guardian, subject to bank rules and KYC requirements.',
  },
  {
    q: 'Can senior citizens get higher FD interest?',
    a: 'Most banks offer additional interest rates to eligible senior citizens. Rates, age criteria and eligibility vary by bank and product.',
  },
  {
    q: 'Is FD safe?',
    a: 'Safety depends on the institution. Eligible bank deposits in India are covered by DICGC insurance up to ₹5 lakh per depositor per insured bank, including principal and interest.',
  },
  {
    q: 'What is the minimum FD amount?',
    a: 'The minimum deposit amount depends on the bank and the selected FD product. Many banks start from a few thousand rupees.',
  },
  {
    q: 'Can I change the FD tenure later?',
    a: 'Tenure is generally fixed at the time of booking. Changing it usually requires premature closure and booking a new deposit, subject to bank rules.',
  },
  {
    q: 'How can I calculate FD maturity?',
    a: 'Enter your principal amount, interest rate and tenure in our FD calculator to estimate the maturity amount and interest earned.',
  },
]

const advantages = [
  'Offers relatively predictable returns for the chosen tenure.',
  'Suitable for parking lump-sum savings safely.',
  'Available in multiple tenures to match short and medium-term goals.',
  'Senior citizens often get higher interest rates.',
  'Flexible interest payout options (cumulative or periodic).',
  'Eligible bank deposits enjoy DICGC insurance cover up to the prescribed limit.',
]

const disadvantages = [
  'Requires a lump-sum amount at the start.',
  'Premature withdrawal usually attracts penalty and lower interest.',
  'Returns may lag behind inflation in some periods.',
  'Interest is generally taxable.',
  'Liquidity is limited compared to savings accounts.',
  'Reinvestment risk exists when interest rates change at maturity.',
]

const sections = [
  ['What is FD?', '#what-is-fd'],
  ['How FD Works', '#how-fd-works'],
  ['FD Formula', '#fd-formula'],
  ['Calculation Example', '#example'],
  ['Benefits', '#benefits'],
  ['Limitations', '#limitations'],
  ['FD vs RD', '#fd-vs-rd'],
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
      className="fd-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
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

export default function FDGuide() {
  return (
    <div className="fd-guide w-full space-y-7">
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
            Fixed Deposit (FD) Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-emerald-50 sm:text-base">
            Learn everything about fixed deposits, FD interest calculation,
            maturity formula, benefits, limitations and frequently asked questions.
          </p>

          <Link
            href="/fd-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Your FD →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="fd-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
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

      {/* WHAT IS FD */}
      <GuideSection
        id="what-is-fd"
        eyebrow="Introduction"
        title="What is a Fixed Deposit?"
        description="A Fixed Deposit is a term deposit offered by banks and financial institutions where you invest a lump sum amount for a fixed period at a predetermined interest rate."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Unlike a Recurring Deposit, where you save a fixed amount every month,
          an FD requires a one-time lump-sum investment. The bank pays interest
          according to the applicable rate, compounding frequency and product terms.
          At maturity you receive your principal along with the applicable interest
          (in the case of cumulative FDs).
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['💰', 'Lump Sum Investment', 'Deposit a fixed amount at the start.'],
            ['📅', 'Fixed Tenure', 'Choose from available deposit periods.'],
            ['🏆', 'Maturity Benefit', 'Receive principal plus applicable interest.'],
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
        id="how-fd-works"
        eyebrow="Working Process"
        title="How Does an FD Work?"
        description="An FD follows a simple one-time investment process."
      >
        <div className="space-y-4">
          {[
            ['01', 'Choose Deposit Amount', 'Decide the lump-sum amount you want to invest.'],
            ['02', 'Select Tenure', 'Choose a deposit period offered by your bank.'],
            ['03', 'Check Interest Rate & Options', 'Understand the rate, compounding and payout type (cumulative / non-cumulative).'],
            ['04', 'Book the FD', 'Complete KYC and place the deposit as per bank process.'],
            ['05', 'Receive Maturity / Interest', 'Get maturity amount or periodic interest as chosen.'],
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
        id="fd-formula"
        eyebrow="Mathematics"
        title="FD Maturity Amount Formula"
        description="For a cumulative fixed deposit with compound interest, the maturity amount is generally calculated using the compound interest formula."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Compound Interest Formula (Common Approximation)
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              M = P × (1 + r/n)<sup>n×t</sup>
            </p>
          </div>

          <p className="mt-3 text-xs leading-6 text-slate-400">
            Where interest is compounded n times per year for t years.
            Many Indian banks use quarterly compounding (n = 4).
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
                ['M', 'Maturity amount'],
                ['P', 'Principal (deposit amount)'],
                ['r', 'Annual interest rate (in decimal)'],
                ['n', 'Number of times interest is compounded per year'],
                ['t', 'Tenure in years'],
              ].map(([symbol, meaning]) => (
                <tr key={symbol} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-3 font-bold text-emerald-700 dark:text-emerald-300">
                    {symbol}
                  </td>
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
            This formula is a standard approximation. Actual bank calculations can
            differ because of day-count conventions, compounding frequency, interest
            payout type, leap years and rounding rules. Always verify the maturity
            amount with your bank’s quotation or FD certificate.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="FD Calculation Example"
        description="Suppose you invest ₹1,00,000 at an assumed annual interest rate of 7% for 5 years with quarterly compounding."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Principal', '₹1,00,000'],
            ['Interest Rate', '7% p.a.'],
            ['Tenure', '5 Years'],
            ['Compounding', 'Quarterly'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Using the compound interest formula, the estimated maturity amount can be
          calculated. The exact interest earned depends on the bank’s compounding
          method and product terms. Use the FD calculator for a quick estimate.
        </p>

        <Link
          href="/fd-calculator"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Calculate Your FD →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of Fixed Deposit"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {advantages.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl bg-emerald-50 p-4 dark:bg-emerald-950/30"
            >
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
        title="Limitations of FD"
      >
        <div className="space-y-3">
          {disadvantages.map((item) => (
            <div
              key={item}
              className="flex gap-3 rounded-xl bg-rose-50 p-4 dark:bg-rose-950/20"
            >
              <span className="font-bold text-rose-600">!</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* FD VS RD */}
      <GuideSection
        id="fd-vs-rd"
        eyebrow="Comparison"
        title="FD vs RD: What Is the Difference?"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="rounded-l-xl px-4 py-4">Feature</th>
                <th className="px-4 py-4">FD</th>
                <th className="rounded-r-xl px-4 py-4">RD</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Investment', 'Lump sum', 'Monthly installments'],
                ['Saving Style', 'One-time investment', 'Regular savings'],
                ['Deposit', 'Initial principal', 'Fixed monthly amount'],
                ['Suitable For', 'People with available savings', 'Monthly savers'],
                ['Interest', 'Depends on FD terms', 'Depends on RD terms'],
                ['Maturity', 'Selected tenure', 'Selected tenure'],
              ].map((row) => (
                <tr key={row[0]} className="border-b border-slate-100 dark:border-slate-800">
                  {row.map((cell, i) => (
                    <td
                      key={`${row[0]}-${i}`}
                      className={`px-4 py-4 ${
                        i === 0 ? 'font-bold' : 'text-slate-600 dark:text-slate-300'
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

        <Link
          href="/rd-guide"
          className="mt-5 inline-flex text-sm font-bold text-emerald-700 hover:underline dark:text-emerald-400"
        >
          Read RD Complete Guide →
        </Link>
      </GuideSection>

      {/* WHO SHOULD INVEST */}
      <GuideSection
        id="who-should-invest"
        eyebrow="Suitability"
        title="Who Should Consider an FD?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Fixed Deposits may be suitable for individuals who have a lump sum available
          and want relatively stable returns for a chosen period. They can help with
          short-to-medium term goals such as education, travel, emergency corpus or
          parking surplus funds. Senior citizens often find FDs attractive due to
          higher rates offered by many banks. Always consider liquidity needs, tax
          implications, inflation and overall portfolio allocation before investing.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About FD"
        description="Find answers to common questions about FD accounts, interest rates, maturity and premature withdrawals."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="fd-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
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
          Ready to Calculate Your FD?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-50">
          Enter your principal amount, interest rate and tenure to estimate
          your fixed deposit maturity amount.
        </p>

        <Link
          href="/fd-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
        >
          Open FD Calculator →
        </Link>
      </section>
    </div>
  )
}