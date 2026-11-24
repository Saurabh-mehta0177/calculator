import Link from 'next/link'

const faqs = [
  {
    q: 'What is a Home Loan?',
    a: 'A home loan is a secured loan given by banks and housing finance companies to buy, construct, renovate or extend a house. The property is mortgaged to the lender until the loan is fully repaid.',
  },
  {
    q: 'How is Home Loan EMI calculated?',
    a: 'EMI is calculated using the standard reducing-balance formula based on loan amount, annual interest rate and tenure in months.',
  },
  {
    q: 'What is the Home Loan EMI formula?',
    a: 'EMI = [P × R × (1+R)^N] / [(1+R)^N − 1], where P is principal (loan amount), R is monthly interest rate, and N is number of months.',
  },
  {
    q: 'How much down payment is required for a home loan?',
    a: 'Lenders usually finance 75%–90% of the property value depending on the loan amount, so you typically need to arrange 10%–25% as down payment. Registration, stamp duty and other charges are usually paid separately.',
  },
  {
    q: 'What is the maximum tenure for a home loan?',
    a: 'Most lenders offer home loans up to 30 years, subject to your age and retirement horizon. A longer tenure lowers EMI but increases total interest.',
  },
  {
    q: 'What is the difference between fixed and floating interest rate?',
    a: 'A fixed rate stays the same for the agreed period, while a floating rate changes with the lender’s benchmark rate. Most home loans in India are on floating rates linked to an external benchmark such as the repo rate.',
  },
  {
    q: 'Can I prepay or foreclose my home loan?',
    a: 'Yes. For floating-rate home loans taken by individuals, lenders generally cannot charge prepayment or foreclosure penalties. Fixed-rate loans may carry charges, so check your loan agreement.',
  },
  {
    q: 'Are there tax benefits on a home loan?',
    a: 'Under the old tax regime, interest on a home loan (for example under Section 24(b)) and principal repayment (under Section 80C) may be eligible for deductions within prescribed limits. Benefits depend on the regime you choose and current law, so confirm with a tax professional.',
  },
  {
    q: 'What documents are needed for a home loan?',
    a: 'Common documents include identity proof, address proof, income proof (salary slips / ITR), bank statements, property documents and KYC documents. Requirements vary by lender.',
  },
  {
    q: 'What factors affect home loan eligibility?',
    a: 'Age, income, employment type, credit score, existing EMIs, property value and the loan tenure all influence how much a lender is willing to give.',
  },
  {
    q: 'What factors affect the home loan interest rate?',
    a: 'Credit score, loan amount, tenure, employment type, the lender’s policies and the benchmark rate all influence the rate you are offered.',
  },
  {
    q: 'Are there other charges apart from EMI?',
    a: 'Yes. Processing fees, legal and valuation charges, insurance premiums, stamp duty and registration charges may apply. Compare total cost, not just the interest rate.',
  },
  {
    q: 'Can I transfer my home loan to another bank?',
    a: 'Yes. Balance transfer is possible if another lender offers a lower rate. Compare the savings after processing and other transfer charges.',
  },
  {
    q: 'Can I apply for a home loan jointly?',
    a: 'Yes. Joint applications with a spouse or family member can increase eligibility because incomes are combined, and co-owners may be able to claim tax benefits as per applicable rules.',
  },
  {
    q: 'How can I calculate my home loan EMI quickly?',
    a: 'Enter loan amount, interest rate and tenure in our Home Loan Calculator to get EMI, total interest and overall repayment instantly.',
  },
]

const advantages = [
  'Lets you buy a home without paying the full price upfront.',
  'Long tenure (up to 30 years) keeps monthly EMI manageable.',
  'Lower interest rates compared to most unsecured loans.',
  'Possible tax benefits on interest and principal under applicable rules.',
  'Floating-rate loans can be prepaid without penalty for individuals.',
  'Builds credit history when repaid on time.',
]

const disadvantages = [
  'Interest over a long tenure can be as much as the loan amount itself.',
  'Floating rates can rise and increase your EMI or tenure.',
  'Processing, legal and other charges add to the upfront cost.',
  'Missed EMIs can hurt your credit score and put the property at risk.',
  'A long financial commitment reduces flexibility in your monthly budget.',
]

const sections = [
  ['What is Home Loan?', '#what-is-home-loan'],
  ['How It Works', '#how-it-works'],
  ['EMI Formula', '#emi-formula'],
  ['Calculation Example', '#example'],
  ['Benefits', '#benefits'],
  ['Limitations', '#limitations'],
  ['Tips to Save', '#tips'],
  ['Who Should Take?', '#who-should-take'],
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
      className="home-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
    >
      <p className="text-xs font-extrabold uppercase tracking-[.18em] text-blue-600 dark:text-blue-400">
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

export default function HomeLoanGuide() {
  return (
    <main className="home-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-700 via-sky-600 to-cyan-700 p-7 text-white shadow-xl sm:p-11">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Home Loan Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-blue-50 sm:text-base">
            Learn everything about home loans — EMI formula, down payment,
            tenure, interest rates, benefits, tips to reduce cost and
            frequently asked questions.
          </p>

          <Link
            href="/home-loan-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-blue-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Home Loan EMI →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="home-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
        <h2 className="text-lg font-extrabold">On This Page</h2>

        <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {sections.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="rounded-xl bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-blue-950"
            >
              → {label}
            </a>
          ))}
        </div>
      </nav>

      {/* WHAT IS HOME LOAN */}
      <GuideSection
        id="what-is-home-loan"
        eyebrow="Introduction"
        title="What is a Home Loan?"
        description="A home loan is a secured loan provided by banks and housing finance companies to help you buy, build, renovate or extend a house. You repay the borrowed amount through fixed monthly EMIs over a long period."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          The loan amount is usually a percentage of the property value after
          deducting your down payment. Interest is charged on the outstanding
          principal, and the property is mortgaged to the lender until the
          loan is fully repaid.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['🏠', 'Own Your Home', 'Buy a house without paying the full price upfront.'],
            ['📅', 'Long Tenure', 'Spread repayment over up to 30 years to keep EMI manageable.'],
            ['💳', 'Monthly EMI', 'Repay through predictable monthly installments.'],
          ].map(([icon, title, desc]) => (
            <div key={title} className="rounded-2xl bg-blue-50 p-5 dark:bg-blue-950/30">
              <span className="text-3xl">{icon}</span>
              <h3 className="mt-3 font-extrabold text-blue-800 dark:text-blue-300">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{desc}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* HOW IT WORKS */}
      <GuideSection
        id="how-it-works"
        eyebrow="Working Process"
        title="How Does a Home Loan Work?"
        description="A home loan follows a simple process from application to final repayment."
      >
        <div className="space-y-4">
          {[
            ['01', 'Choose the Property', 'Decide the property and check its price and legal documents.'],
            ['02', 'Arrange Down Payment', 'Pay your share upfront; the lender finances the rest.'],
            ['03', 'Apply for Loan', 'Submit documents, get verification and receive the sanction letter.'],
            ['04', 'Loan Disbursement', 'The lender releases the amount, often directly to the seller or builder.'],
            ['05', 'Repay and Close', 'Pay EMIs until the loan ends, then get your property documents back.'],
          ].map(([number, title, desc]) => (
            <div key={number} className="flex gap-4 rounded-2xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-100 font-black text-blue-700 dark:bg-blue-950 dark:text-blue-300">
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

      {/* EMI FORMULA */}
      <GuideSection
        id="emi-formula"
        eyebrow="Mathematics"
        title="Home Loan EMI Formula"
        description="Home loan EMI is calculated using the standard reducing-balance formula."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-blue-400">
            Standard EMI Formula
          </p>

          <div className="mt-5 overflow-x-auto">
            <p className="min-w-max font-mono text-xl leading-10 sm:text-2xl">
              EMI = [P × R × (1+R)<sup>N</sup>] / [(1+R)<sup>N</sup> − 1]
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
                ['P', 'Principal (Home Loan Amount)'],
                ['R', 'Monthly interest rate (Annual rate ÷ 12 ÷ 100)'],
                ['N', 'Loan tenure in months (Years × 12)'],
                ['EMI', 'Equated Monthly Installment'],
              ].map(([symbol, meaning]) => (
                <tr key={symbol} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-3 font-bold text-blue-700 dark:text-blue-300">{symbol}</td>
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
            Actual EMI may differ slightly due to bank rounding, processing fees,
            insurance or rate changes on floating-rate loans. Always confirm the
            final offer with the lender.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="Home Loan Calculation Example"
        description="Suppose the home loan amount is ₹30,00,000, interest rate is 8.5% p.a. and tenure is 20 years."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Loan Amount', '₹30,00,000'],
            ['Interest Rate', '8.5% p.a.'],
            ['Tenure', '20 Years (240 months)'],
            ['Monthly Rate (R)', '0.7083%'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Monthly rate R = 8.5 ÷ 12 ÷ 100 = 0.007083 and N = 20 × 12 = 240 months.
          At 8.5% for 20 years, the approximate EMI is around ₹26,035
          (exact value depends on rounding). Total payment is roughly
          ₹62.5 lakh, so about ₹32.5 lakh goes towards interest. Use the
          calculator to check exact figures.
        </p>

        <Link
          href="/home-loan-calculator"
          className="mt-5 inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-bold text-white hover:bg-blue-700"
        >
          Calculate Your Home Loan →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of a Home Loan"
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {advantages.map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-blue-50 p-4 dark:bg-blue-950/30">
              <span className="font-black text-blue-600">✓</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* LIMITATIONS */}
      <GuideSection
        id="limitations"
        eyebrow="Things To Consider"
        title="Limitations of a Home Loan"
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

      {/* TIPS */}
      <GuideSection
        id="tips"
        eyebrow="Money Saving"
        title="Tips to Reduce Home Loan Cost"
      >
        <div className="space-y-3">
          {[
            'Pay a higher down payment to lower principal and interest.',
            'Choose a shorter tenure if your budget allows — total interest drops sharply.',
            'Make part-prepayments whenever you have extra funds, especially in early years.',
            'Compare interest rates and processing fees across lenders before applying.',
            'Maintain a good credit score for better rate offers.',
            'Consider a balance transfer if another lender offers a much lower rate.',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="font-black text-blue-600">→</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* WHO SHOULD TAKE */}
      <GuideSection
        id="who-should-take"
        eyebrow="Suitability"
        title="Who Should Consider a Home Loan?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          A home loan is suitable for people who want to buy or build a home
          without using up all their savings, have a stable income to manage
          EMIs for many years, and plan to stay in the property long enough
          to justify the cost. Before taking a loan, compare total cost,
          check your budget and ensure the EMI fits comfortably within your
          monthly expenses.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About Home Loans"
        description="Find answers to common questions about home loan EMI, down payment, tenure, interest rates and prepayment."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="home-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-4 text-sm font-bold text-slate-800 dark:text-slate-100 sm:p-5">
                <span>{faq.q}</span>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-blue-700 shadow-sm transition group-open:rotate-45 dark:bg-slate-700 dark:text-blue-300">
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
      <section className="rounded-3xl bg-gradient-to-br from-blue-700 to-sky-600 p-7 text-center text-white shadow-xl sm:p-10">
        <h2 className="text-2xl font-black sm:text-3xl">
          Ready to Calculate Your Home Loan EMI?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-blue-50">
          Enter loan amount, interest rate and tenure to get monthly EMI,
          total interest and overall repayment instantly.
        </p>

        <Link
          href="/home-loan-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-blue-800 shadow-lg transition hover:-translate-y-1"
        >
          Open Home Loan Calculator →
        </Link>
      </section>

    </main>
  )
}