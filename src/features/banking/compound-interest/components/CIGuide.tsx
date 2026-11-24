import Link from 'next/link'

const faqs = [
  {
    q: 'What is Compound Interest (CI)?',
    a: 'Compound Interest is the interest calculated on the principal amount plus the interest that has already been earned in previous periods. This is often called “interest on interest”.',
  },
  {
    q: 'How does Compound Interest work?',
    a: 'Interest is added to the principal at regular intervals (yearly, half-yearly, quarterly, monthly, etc.). The next interest calculation uses the new higher principal, so the amount grows faster over time.',
  },
  {
    q: 'What is the Compound Interest formula?',
    a: 'The standard formula is A = P (1 + r/n)^(n×t), where A is the final amount, P is principal, r is annual rate (in decimal), n is compounding frequency per year, and t is time in years. Interest earned = A − P.',
  },
  {
    q: 'What is the difference between Simple Interest and Compound Interest?',
    a: 'Simple Interest is calculated only on the original principal. Compound Interest is calculated on principal plus previously earned interest, so returns grow faster, especially over longer periods.',
  },
  {
    q: 'What does compounding frequency mean?',
    a: 'Compounding frequency is how often interest is added to the principal in a year. Common options are annually (1), half-yearly (2), quarterly (4), monthly (12) and daily (365).',
  },
  {
    q: 'Is higher compounding frequency always better?',
    a: 'Yes, for the same annual rate, more frequent compounding generally produces a slightly higher final amount. The difference is small for short periods but becomes more noticeable over longer tenures.',
  },
  {
    q: 'Where is Compound Interest commonly used?',
    a: 'Most bank Fixed Deposits, Recurring Deposits, savings accounts, mutual funds and many investment products use some form of compound interest.',
  },
  {
    q: 'Is Compound Interest taxable?',
    a: 'Interest income is generally taxable under applicable Indian income-tax rules. Tax and TDS provisions depend on the product and current law.',
  },
  {
    q: 'How is Compound Interest different from RD or FD interest?',
    a: 'Bank FDs and RDs usually apply compound interest (often quarterly). The exact method, rounding and payout rules can differ between banks.',
  },
  {
    q: 'Can time be in months for Compound Interest?',
    a: 'Yes. Convert months to years (months ÷ 12) before using the formula, or use a calculator that accepts months directly.',
  },
  {
    q: 'What is the Rule of 72?',
    a: 'The Rule of 72 is a quick way to estimate how long it takes for money to double at a given compound rate. Divide 72 by the annual rate (for example, 72 ÷ 8 ≈ 9 years).',
  },
  {
    q: 'Does Compound Interest work against borrowers?',
    a: 'Yes. Loans and credit cards that use compound interest can grow the outstanding amount faster if not repaid on time, which is why understanding compounding is important for borrowers as well.',
  },
  {
    q: 'Is Compound Interest better for long-term investing?',
    a: 'Generally yes. The power of compounding becomes more visible over longer periods, which is why it is often recommended for long-term wealth building.',
  },
  {
    q: 'What is the maturity amount in Compound Interest?',
    a: 'Maturity (or final) amount A = P (1 + r/n)^(n×t). Interest earned is A minus the original principal P.',
  },
  {
    q: 'How can I calculate Compound Interest quickly?',
    a: 'Enter principal, annual rate, tenure and compounding frequency in our Compound Interest Calculator to get the final amount and interest earned instantly.',
  },
]

const advantages = [
  'Interest earns further interest (power of compounding).',
  'Wealth grows faster over longer periods.',
  'Widely used in FDs, RDs and investment products.',
  'Helps long-term financial goals and wealth creation.',
  'More frequent compounding can slightly improve returns.',
  'Encourages disciplined long-term investing.',
]

const disadvantages = [
  'Slightly more complex to calculate than simple interest.',
  'Works against borrowers if loans compound.',
  'Actual bank results may differ due to product rules and rounding.',
  'Interest income is generally taxable.',
  'Short-term difference versus simple interest may be small.',
]

const sections = [
  ['What is CI?', '#what-is-ci'],
  ['How CI Works', '#how-ci-works'],
  ['CI Formula', '#ci-formula'],
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
      className="ci-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
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

export default function CIGuide() {
  return (
    <main className="ci-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-OrangeRed-600 to-OrangeRed-700 p-7 text-white shadow-xl sm:p-11">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Compound Interest (CI) Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-emerald-50 sm:text-base">
            Learn everything about Compound Interest — formula, compounding frequency,
            examples, benefits, limitations and frequently asked questions.
          </p>

          <Link
            href="/compound-interest-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Compound Interest →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="ci-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
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

      {/* WHAT IS CI */}
      <GuideSection
        id="what-is-ci"
        eyebrow="Introduction"
        title="What is Compound Interest?"
        description="Compound Interest is the interest calculated on both the initial principal and the accumulated interest from previous periods. This “interest on interest” effect helps money grow faster over time."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Unlike Simple Interest, which is calculated only on the original principal,
          Compound Interest reinvests the earned interest so that it also starts
          earning returns. Most bank deposits, fixed deposits and many investment
          products use some form of compounding.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['📈', 'Interest on Interest', 'Earned interest is added back to the principal.'],
            ['🔄', 'Compounding Frequency', 'Interest can be added yearly, quarterly, monthly, etc.'],
            ['🚀', 'Faster Growth', 'Returns accelerate over longer investment periods.'],
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
        id="how-ci-works"
        eyebrow="Working Process"
        title="How Does Compound Interest Work?"
        description="Compound Interest follows a repeated growth process based on frequency."
      >
        <div className="space-y-4">
          {[
            ['01', 'Start with Principal', 'Invest or deposit an initial amount (P).'],
            ['02', 'Apply Interest Rate', 'Use the annual rate offered by the product.'],
            ['03', 'Choose Frequency', 'Decide how often interest is compounded (n times a year).'],
            ['04', 'Interest is Added', 'At each compounding period, interest is added to the balance.'],
            ['05', 'Growth Continues', 'Next period calculates interest on the new higher balance.'],
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
        id="ci-formula"
        eyebrow="Mathematics"
        title="Compound Interest Formula"
        description="The standard compound interest formula calculates the final amount after compounding."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Standard Compound Interest Formula
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              A = P (1 + r/n)<sup>n×t</sup>
            </p>
          </div>

          <p className="mt-4 text-xs font-bold uppercase tracking-wider text-emerald-400">
            Interest Earned
          </p>

          <div className="mt-3 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              CI = A − P
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
                ['A', 'Final / maturity amount'],
                ['P', 'Principal (initial amount)'],
                ['r', 'Annual interest rate (in decimal, e.g. 7% = 0.07)'],
                ['n', 'Number of times interest is compounded per year'],
                ['t', 'Time period in years'],
                ['CI', 'Compound interest earned (A − P)'],
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
            Bank products may use slightly different conventions for rounding,
            interest payout or day-count. Always verify the final amount with
            the bank or product documentation.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="Compound Interest Calculation Example"
        description="Suppose you invest ₹1,00,000 at 7% p.a. for 5 years with quarterly compounding (n = 4)."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Principal', '₹1,00,000'],
            ['Interest Rate', '7% p.a.'],
            ['Time Period', '5 Years'],
            ['Frequency', 'Quarterly'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Using A = P (1 + r/n)<sup>n×t</sup>, the final amount is approximately ₹1,41,478
          and the compound interest earned is about ₹41,478 (exact value depends on rounding).
        </p>

        <Link
          href="/compound-interest-calculator"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Calculate Your CI →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of Compound Interest"
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
        title="Limitations of Compound Interest"
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
          href="/simple-interest-calculator"
          className="mt-5 inline-flex text-sm font-bold text-emerald-700 hover:underline dark:text-emerald-400"
        >
          Try Simple Interest Calculator →
        </Link>
      </GuideSection>

      {/* WHO SHOULD USE */}
      <GuideSection
        id="who-should-use"
        eyebrow="Suitability"
        title="Who Should Use Compound Interest?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Compound Interest is ideal for long-term investors, people planning
          retirement or education goals, and anyone who wants their money to
          grow through reinvested returns. It is the principle behind most
          bank deposits and investment products. Always compare rates,
          compounding frequency and product terms before investing.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About Compound Interest"
        description="Find answers to common questions about the compound interest formula, frequency, tax and comparison with simple interest."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="ci-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
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
          Ready to Calculate Compound Interest?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-50">
          Enter principal, rate, tenure and compounding frequency to instantly
          find your maturity amount and interest earned.
        </p>

        <Link
          href="/compound-interest-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
        >
          Open Compound Interest Calculator →
        </Link>
      </section>

    </main>
  )
}