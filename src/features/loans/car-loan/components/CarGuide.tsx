import Link from 'next/link'

const faqs = [
  {
    q: 'What is a Car Loan?',
    a: 'A car loan is a type of auto finance where a bank or NBFC lends you money to buy a new or used car. You repay the loan in fixed monthly EMIs over a chosen tenure.',
  },
  {
    q: 'How is Car Loan EMI calculated?',
    a: 'EMI is calculated using the standard reducing-balance formula based on loan amount (car price minus down payment), annual interest rate and tenure in months.',
  },
  {
    q: 'What is the Car Loan EMI formula?',
    a: 'EMI = [P × R × (1+R)^N] / [(1+R)^N − 1], where P is principal (loan amount), R is monthly interest rate, and N is number of months.',
  },
  {
    q: 'What is the difference between on-road price and ex-showroom price?',
    a: 'Ex-showroom is the base price of the car. On-road price includes registration, insurance, RTO charges and other fees. Most lenders finance a portion of the on-road or ex-showroom price.',
  },
  {
    q: 'How much down payment is required for a car loan?',
    a: 'Typically 10%–20% of the car price is required as down payment. A higher down payment reduces the loan amount, EMI and total interest.',
  },
  {
    q: 'What is the usual tenure for a car loan?',
    a: 'Most banks offer car loans from 1 to 7 years (sometimes up to 8 years). Shorter tenure means higher EMI but lower total interest.',
  },
  {
    q: 'Can I get a car loan for a used car?',
    a: 'Yes. Many lenders offer used-car loans, though interest rates may be slightly higher and tenure or age limits may apply.',
  },
  {
    q: 'Is car loan interest tax deductible?',
    a: 'For personal use cars, interest is generally not deductible under Indian tax rules. For business use, certain deductions may apply subject to current law and documentation.',
  },
  {
    q: 'What documents are needed for a car loan?',
    a: 'Common documents include identity proof, address proof, income proof (salary slips / ITR), bank statements and KYC documents. Requirements vary by lender.',
  },
  {
    q: 'Can I prepay or foreclose a car loan?',
    a: 'Most lenders allow prepayment or foreclosure. Some may charge a penalty, especially in the early years. Check your loan agreement for exact terms.',
  },
  {
    q: 'Does a higher down payment reduce EMI?',
    a: 'Yes. A larger down payment lowers the loan principal, which reduces both monthly EMI and total interest paid over the tenure.',
  },
  {
    q: 'What factors affect car loan interest rate?',
    a: 'Credit score, income, employment type, loan amount, tenure, new vs used car, and the lender’s policies all influence the interest rate offered.',
  },
  {
    q: 'Is processing fee charged on car loans?',
    a: 'Yes. Most banks and NBFCs charge a processing fee (fixed or percentage of loan amount). Compare total cost, not just the interest rate.',
  },
  {
    q: 'Can I transfer my car loan to another bank?',
    a: 'Yes. Balance transfer is possible if another lender offers a lower rate. Compare savings after transfer fees and foreclosure charges.',
  },
  {
    q: 'How can I calculate my car loan EMI quickly?',
    a: 'Enter car price, down payment, interest rate and tenure in our Car Loan Calculator to get EMI, total interest and overall repayment instantly.',
  },
]

const advantages = [
  'Helps you buy a car without paying the full amount upfront.',
  'Fixed EMIs make monthly budgeting easier.',
  'Flexible tenure options (usually 1–7 years).',
  'Higher down payment can significantly reduce EMI and interest.',
  'Available for both new and used cars (subject to lender rules).',
  'Builds credit history when repaid on time.',
]

const disadvantages = [
  'Interest adds to the total cost of the car.',
  'Processing fees and other charges may apply.',
  'Longer tenure increases total interest paid.',
  'Late payments can affect credit score.',
  'Prepayment or foreclosure may attract penalties.',
]

const sections = [
  ['What is Car Loan?', '#what-is-car-loan'],
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
      className="car-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
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

export default function CarGuide() {
  return (
    <main className="car-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-700 via-blue-600 to-cyan-700 p-7 text-white shadow-xl sm:p-11">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Car Loan Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-emerald-50 sm:text-base">
            Learn everything about car loans — EMI formula, down payment,
            tenure, benefits, tips to reduce cost and frequently asked questions.
          </p>

          <Link
            href="/car-loan-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Car Loan EMI →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="car-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
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

      {/* WHAT IS CAR LOAN */}
      <GuideSection
        id="what-is-car-loan"
        eyebrow="Introduction"
        title="What is a Car Loan?"
        description="A car loan is a secured or auto loan provided by banks and NBFCs to help you purchase a new or used vehicle. You repay the borrowed amount through fixed monthly EMIs over an agreed period."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          The loan amount is usually a percentage of the car’s price after
          deducting your down payment. Interest is charged on the outstanding
          principal, and the car may be hypothecated to the lender until the
          loan is fully repaid.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['🚗', 'Buy Now, Pay Later', 'Purchase a car without paying the full amount upfront.'],
            ['📅', 'Fixed Tenure', 'Choose a repayment period that fits your budget.'],
            ['💳', 'Monthly EMI', 'Repay through predictable monthly installments.'],
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
        id="how-it-works"
        eyebrow="Working Process"
        title="How Does a Car Loan Work?"
        description="A car loan follows a simple process from application to final repayment."
      >
        <div className="space-y-4">
          {[
            ['01', 'Choose the Car', 'Decide the model and check the on-road or ex-showroom price.'],
            ['02', 'Decide Down Payment', 'Pay a portion upfront to reduce the loan amount.'],
            ['03', 'Apply for Loan', 'Submit documents and get interest rate & tenure offers.'],
            ['04', 'Start EMI Payments', 'Repay the loan through fixed monthly installments.'],
            ['05', 'Close the Loan', 'After full repayment, the hypothecation is removed.'],
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

      {/* EMI FORMULA */}
      <GuideSection
        id="emi-formula"
        eyebrow="Mathematics"
        title="Car Loan EMI Formula"
        description="Car loan EMI is calculated using the standard reducing-balance formula."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
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
                ['P', 'Principal (Car Price − Down Payment)'],
                ['R', 'Monthly interest rate (Annual rate ÷ 12 ÷ 100)'],
                ['N', 'Loan tenure in months (Years × 12)'],
                ['EMI', 'Equated Monthly Installment'],
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
            Actual EMI may differ slightly due to bank rounding, processing fees,
            insurance or other charges. Always confirm the final offer with the lender.
          </p>
        </div>
      </GuideSection>

      {/* EXAMPLE */}
      <GuideSection
        id="example"
        eyebrow="Practical Example"
        title="Car Loan Calculation Example"
        description="Suppose the car price is ₹15,00,000, down payment is ₹3,00,000, interest rate is 9% p.a. and tenure is 5 years."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Car Price', '₹15,00,000'],
            ['Down Payment', '₹3,00,000'],
            ['Loan Amount', '₹12,00,000'],
            ['Interest Rate', '9% p.a.'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Loan amount = ₹15,00,000 − ₹3,00,000 = ₹12,00,000.
          At 9% for 5 years, the approximate EMI is around ₹24,900
          (exact value depends on rounding). Total interest and
          overall payment can be checked in the calculator.
        </p>

        <Link
          href="/car-loan-calculator"
          className="mt-5 inline-flex rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold text-white hover:bg-emerald-700"
        >
          Calculate Your Car Loan →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of a Car Loan"
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
        title="Limitations of a Car Loan"
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
        title="Tips to Reduce Car Loan Cost"
      >
        <div className="space-y-3">
          {[
            'Pay a higher down payment to lower principal and interest.',
            'Choose a shorter tenure if your budget allows — total interest drops.',
            'Compare interest rates and processing fees across lenders.',
            'Maintain a good credit score for better rate offers.',
            'Check for prepayment options and avoid unnecessary charges.',
            'Negotiate or look for manufacturer / bank festive offers.',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="font-black text-emerald-600">→</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* WHO SHOULD TAKE */}
      <GuideSection
        id="who-should-take"
        eyebrow="Suitability"
        title="Who Should Consider a Car Loan?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          A car loan is suitable for people who need a vehicle but prefer not
          to deplete savings, have stable income to manage EMIs, and want
          fixed monthly payments. Before taking a loan, compare total cost,
          check your budget and ensure the EMI fits comfortably within your
          monthly expenses.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About Car Loans"
        description="Find answers to common questions about car loan EMI, down payment, tenure, documents and prepayment."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="car-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
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
          Ready to Calculate Your Car Loan EMI?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-emerald-50">
          Enter car price, down payment, interest rate and tenure to get
          monthly EMI, total interest and overall repayment instantly.
        </p>

        <Link
          href="/car-loan-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-emerald-800 shadow-lg transition hover:-translate-y-1"
        >
          Open Car Loan Calculator →
        </Link>
      </section>

    </main>
  )
}