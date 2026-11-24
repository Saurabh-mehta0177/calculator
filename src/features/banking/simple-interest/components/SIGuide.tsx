import Link from 'next/link'

const faqs = [
  {
    q: 'What is Simple Interest (SI)?',
    a: 'Simple Interest is the interest calculated only on the original principal amount for the entire tenure. It does not compound on previously earned interest.',
  },
  {
    q: 'How does Simple Interest work?',
    a: 'You invest or borrow a principal amount at a fixed annual rate for a selected time period. Interest is calculated only on the principal and remains the same every year (for full years).',
  },
  {
    q: 'What is the Simple Interest formula?',
    a: 'The standard formula is SI = (P × R × T) / 100, where P is principal, R is annual rate of interest in percent, and T is time in years. The maturity amount is P + SI.',
  },
  {
    q: 'How is Simple Interest different from Compound Interest?',
    a: 'In Simple Interest, interest is calculated only on the principal. In Compound Interest, interest is calculated on principal plus previously earned interest, so returns grow faster over time.',
  },
  {
    q: 'When is Simple Interest used?',
    a: 'Simple Interest is commonly used for short-term loans, some personal loans, car loans in certain structures, and basic educational examples. Many bank deposits use compound interest instead.',
  },
  {
    q: 'Is Simple Interest better than Compound Interest?',
    a: 'It depends on the situation. Simple Interest is usually cheaper for borrowers and lower for investors. Compound Interest generally gives higher returns to the investor and higher cost to the borrower.',
  },
  {
    q: 'Can time be in months for Simple Interest?',
    a: 'Yes. If time is given in months, convert it to years by dividing by 12 (for example, 6 months = 0.5 years) before using the formula.',
  },
  {
    q: 'Is Simple Interest taxable?',
    a: 'Interest income is generally taxable under applicable Indian income-tax rules. Tax treatment depends on the source of income and current law.',
  },
  {
    q: 'Does Simple Interest change every year?',
    a: 'No. For a fixed principal, rate and full-year periods, the interest amount remains the same each year because it is calculated only on the original principal.',
  },
  {
    q: 'What is the maturity amount in Simple Interest?',
    a: 'Maturity amount (or total amount) = Principal + Simple Interest. Formula: A = P + (P × R × T) / 100, or A = P × (1 + RT/100).',
  },
  {
    q: 'Can I use Simple Interest for RD or FD calculations?',
    a: 'Most bank RDs and FDs use compound interest (often quarterly). Simple Interest is a different method and usually underestimates bank deposit maturity amounts.',
  },
  {
    q: 'What happens if I repay a Simple Interest loan early?',
    a: 'Interest is generally charged only for the period the money was used. Exact terms depend on the lender agreement and any prepayment charges.',
  },
  {
    q: 'Is Simple Interest safe to understand?',
    a: 'Yes. The calculation is straightforward and transparent, which makes it easy to understand for students, beginners and short-term financial planning.',
  },
  {
    q: 'What is the minimum principal for Simple Interest?',
    a: 'There is no universal minimum. It depends on the product, loan or investment scheme you choose.',
  },
  {
    q: 'How can I calculate Simple Interest quickly?',
    a: 'Enter principal, annual interest rate and time period in our Simple Interest calculator to get SI and maturity amount instantly.',
  },
]

const advantages = [
  'Very easy to understand and calculate.',
  'Interest remains predictable over the tenure.',
  'Usually lower cost for borrowers compared to compound interest.',
  'Transparent — no compounding surprises.',
  'Useful for short-term loans and basic financial planning.',
  'Helps students and beginners learn interest concepts clearly.',
]

const disadvantages = [
  'Gives lower returns to investors than compound interest.',
  'Not commonly used for most bank deposits (FD/RD).',
  'Does not reward longer tenure as strongly as compounding.',
  'May not match actual bank or product calculations.',
  'Interest income is generally taxable.',
]

const sections = [
  ['What is SI?', '#what-is-si'],
  ['How SI Works', '#how-si-works'],
  ['SI Formula', '#si-formula'],
  ['Calculation Example', '#example'],
  ['Benefits', '#benefits'],
  ['Limitations', '#limitations'],
  ['SI vs CI', '#si-vs-ci'],
  ['Who Should Use?', '#who-should-use'],
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
      className="si-guide-card scroll-mt-28 rounded-3xl border border-black-200 bg-white p-5 shadow-sm dark:border-pink-800 dark:bg-slate-900 sm:p-8"
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

export default function SIGuide() {
  return (
    <main className="si-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-red-700 via-purple-600 to-cyan-700 p-7 text-white shadow-xl sm:p-11">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Simple Interest (SI) Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-emerald-50 sm:text-base">
            Learn everything about Simple Interest — formula, calculation method,
            examples, benefits, limitations and frequently asked questions.
          </p>

          <Link
            href="/simple-interest-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Simple Interest →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="si-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
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

      {/* WHAT IS SI */}
      <GuideSection
        id="what-is-si"
        eyebrow="Introduction"
        title="What is Simple Interest?"
        description="Simple Interest is the interest earned or paid only on the original principal amount for a given period of time. It does not take into account any interest that was previously earned."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Unlike Compound Interest, where interest is added to the principal
          and itself earns interest, Simple Interest remains fixed relative
          to the original principal. This makes it easy to calculate and
          predict. It is widely taught in schools and is still used in some
          short-term loans and basic financial products.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['💰', 'Principal Based', 'Interest is calculated only on the original amount.'],
            ['📅', 'Fixed Rate & Time', 'Rate and tenure decide the total interest.'],
            ['🧮', 'Easy Formula', 'SI = (P × R × T) / 100 — simple and transparent.'],
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
        id="how-si-works"
        eyebrow="Working Process"
        title="How Does Simple Interest Work?"
        description="Simple Interest follows a straightforward calculation process."
      >
        <div className="space-y-4">
          {[
            ['01', 'Choose Principal', 'Decide the amount you want to invest or borrow.'],
            ['02', 'Select Interest Rate', 'Note the annual rate of interest offered or charged.'],
            ['03', 'Decide Time Period', 'Choose how many years (or convert months to years).'],
            ['04', 'Apply the Formula', 'Calculate SI = (P × R × T) / 100.'],
            ['05', 'Find Maturity Amount', 'Add principal and interest to get the final amount.'],
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
        id="si-formula"
        eyebrow="Mathematics"
        title="Simple Interest Formula"
        description="The Simple Interest and maturity amount formulas are straightforward and widely used."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Standard Simple Interest Formula
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              SI = (P × R × T) / 100
            </p>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-400">
            Maturity / Total Amount
          </p>

          <div className="mt-3 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              A = P + SI &nbsp; or &nbsp; A = P × (1 + RT/100)
            </p>
          </div>
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
                ['SI', 'Simple Interest amount'],
                ['P', 'Principal (original amount)'],
                ['R', 'Annual rate of interest in percentage'],
                ['T', 'Time period in years'],
                ['A', 'Maturity / Total amount (Principal + Interest)'],
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
            Important Note
          </h3>
          <p className="mt-2 text-sm leading-7 text-amber-900 dark:text-amber-200">
            If time is given in months, convert it to years (months ÷ 12)
            before using the formula. Actual product terms, fees or bank
            conventions may differ from this basic calculation.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="Simple Interest Calculation Example"
        description="Suppose you invest ₹1,00,000 at an annual interest rate of 7% for 5 years under Simple Interest."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Principal', '₹1,00,000'],
            ['Interest Rate', '7% p.a.'],
            ['Time Period', '5 Years'],
            ['Simple Interest', '₹35,000'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Calculation: SI = (1,00,000 × 7 × 5) / 100 = ₹35,000.
          Maturity Amount = ₹1,00,000 + ₹35,000 = ₹1,35,000.
        </p>

        <Link
          href="/simple-interest-calculator"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Calculate Your SI →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of Simple Interest"
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
        title="Limitations of Simple Interest"
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

      {/* SI VS CI */}
      <GuideSection
        id="si-vs-ci"
        eyebrow="Comparison"
        title="Simple Interest vs Compound Interest"
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[450px] text-left text-sm">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-800">
                <th className="rounded-l-xl px-4 py-4">Feature</th>
                <th className="px-4 py-4">Simple Interest</th>
                <th className="rounded-r-xl px-4 py-4">Compound Interest</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Interest Calculated On', 'Only principal', 'Principal + previous interest'],
                ['Growth Pattern', 'Linear / steady', 'Exponential over time'],
                ['Formula Complexity', 'Very simple', 'Slightly more complex'],
                ['Investor Returns', 'Generally lower', 'Generally higher'],
                ['Borrower Cost', 'Usually lower', 'Usually higher'],
                ['Common Use', 'Short-term loans, education', 'FDs, RDs, most investments'],
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
          href="/compound-interest-calculator"
          className="mt-5 inline-flex text-sm font-bold text-emerald-700 hover:underline dark:text-emerald-400"
        >
          Try Compound Interest Calculator →
        </Link>
      </GuideSection>

      {/* WHO SHOULD USE */}
      <GuideSection
        id="who-should-use"
        eyebrow="Suitability"
        title="Who Should Use Simple Interest?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Simple Interest is ideal for students learning finance basics,
          people comparing short-term loan costs, and anyone who wants a
          transparent, easy-to-understand interest calculation. For long-term
          savings and most bank deposits, compound interest products (such as
          FD or RD) are usually more relevant. Always check the actual terms
          of the product or loan before making a decision.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About Simple Interest"
        description="Find answers to common questions about Simple Interest formula, calculation, tax and comparison with compound interest."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="si-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
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
          Ready to Calculate Simple Interest?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-50">
          Enter principal, interest rate and time period to instantly find
          Simple Interest and maturity amount.
        </p>

        <Link
          href="/simple-interest-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
        >
          Open Simple Interest Calculator →
        </Link>
      </section>

    </main>
  )
}