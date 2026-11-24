import Link from 'next/link'

const faqs = [
  {
    q: 'What is a Personal Loan?',
    a: 'A personal loan is an unsecured loan given by banks and NBFCs that you can use for almost any personal need, such as medical expenses, travel, weddings, education or debt consolidation. You repay it in fixed monthly EMIs.',
  },
  {
    q: 'How is Personal Loan EMI calculated?',
    a: 'EMI is calculated using the standard reducing-balance formula based on loan amount, annual interest rate and tenure in months.',
  },
  {
    q: 'What is the Personal Loan EMI formula?',
    a: 'EMI = [P × R × (1+R)^N] / [(1+R)^N − 1], where P is principal (loan amount), R is monthly interest rate, and N is number of months.',
  },
  {
    q: 'Is a personal loan secured or unsecured?',
    a: 'A personal loan is usually unsecured, which means you do not have to pledge any asset as collateral. Because of this, interest rates are generally higher than those of home or car loans.',
  },
  {
    q: 'What is the usual tenure for a personal loan?',
    a: 'Most lenders offer personal loans from 1 to 5 years, and some go up to 6 or 7 years. Shorter tenure means higher EMI but lower total interest.',
  },
  {
    q: 'What factors affect personal loan interest rate?',
    a: 'Credit score, income, employment type, existing EMIs, loan amount, tenure and the lender’s policies all influence the interest rate offered. A higher credit score generally gets a lower rate.',
  },
  {
    q: 'What credit score is needed for a personal loan?',
    a: 'Many lenders prefer a credit score of around 750 or above for the best rates, though some approve loans at lower scores with higher interest. Requirements differ by lender.',
  },
  {
    q: 'What documents are needed for a personal loan?',
    a: 'Common documents include identity proof, address proof, income proof (salary slips / ITR), bank statements and KYC documents. Requirements vary by lender.',
  },
  {
    q: 'Is processing fee charged on personal loans?',
    a: 'Yes. Most lenders charge a processing fee, usually a percentage of the loan amount plus applicable taxes. Compare total cost, not just the interest rate.',
  },
  {
    q: 'Can I prepay or foreclose a personal loan?',
    a: 'Most lenders allow prepayment or foreclosure. Some may charge a penalty, especially on fixed-rate loans or in the early months. Check your loan agreement for exact terms.',
  },
  {
    q: 'Is personal loan interest tax deductible?',
    a: 'Generally, interest on a personal loan is not deductible. If the money is used for specific purposes such as buying or improving a house or for business, certain deductions may apply under current law. Confirm with a tax professional.',
  },
  {
    q: 'Does a personal loan affect my credit score?',
    a: 'Timely EMI payments can improve your credit history, while missed or late payments and too many loan applications in a short time can lower your score.',
  },
  {
    q: 'How much personal loan can I get?',
    a: 'The eligible amount depends on your income, existing obligations, credit score and the lender’s policy. Many lenders keep total EMIs within about 40%–50% of your monthly income.',
  },
  {
    q: 'What is the difference between a personal loan and a credit card loan?',
    a: 'A personal loan has fixed EMIs and a fixed tenure, usually at a lower rate than credit card revolving credit. Credit card interest on unpaid balances is generally much higher.',
  },
  {
    q: 'How can I calculate my personal loan EMI quickly?',
    a: 'Enter loan amount, interest rate and tenure in our Personal Loan Calculator to get EMI, total interest and overall repayment instantly.',
  },
]

const advantages = [
  'No collateral or security is required in most cases.',
  'Can be used for almost any personal need.',
  'Quick processing and disbursal compared to secured loans.',
  'Fixed EMIs make monthly budgeting easier.',
  'Flexible tenure options (usually 1–5 years).',
  'Builds credit history when repaid on time.',
]

const disadvantages = [
  'Interest rates are higher than secured loans like home or car loans.',
  'Processing fees and other charges may apply.',
  'Longer tenure increases total interest paid.',
  'Late payments can affect credit score and attract penalties.',
  'Prepayment or foreclosure may attract charges on some loans.',
]

const sections = [
  ['What is Personal Loan?', '#what-is-personal-loan'],
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
      className="personal-guide-card scroll-mt-28 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
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

export default function PersonalLoanGuide() {
  return (
    <main className="personal-guide mx-auto max-w-7xl space-y-7 px-4 py-7 text-slate-900 dark:text-white sm:px-6 lg:px-8">

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />

      {/* HERO */}
      <header className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-700 via-purple-600 to-fuchsia-700 p-7 text-white shadow-xl sm:p-11">
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <div className="relative max-w-3xl">
          <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-bold">
            FINANCE KNOWLEDGE CENTER
          </span>

          <h1 className="mt-6 text-3xl font-black leading-tight sm:text-5xl">
            Personal Loan Complete Guide
          </h1>

          <p className="mt-5 text-sm leading-7 text-violet-50 sm:text-base">
            Learn everything about personal loans — EMI formula, interest
            rates, tenure, benefits, tips to reduce cost and frequently asked
            questions.
          </p>

          <Link
            href="/personal-loan-calculator"
            className="mt-7 inline-flex rounded-xl bg-white px-6 py-3 text-sm font-extrabold text-violet-800 shadow-lg transition hover:-translate-y-1"
          >
            Calculate Personal Loan EMI →
          </Link>
        </div>
      </header>

      {/* CONTENT NAVIGATION */}
      <nav className="personal-guide-card rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
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

      {/* WHAT IS PERSONAL LOAN */}
      <GuideSection
        id="what-is-personal-loan"
        eyebrow="Introduction"
        title="What is a Personal Loan?"
        description="A personal loan is an unsecured loan provided by banks and NBFCs for personal needs such as medical expenses, travel, weddings, education or debt consolidation. You repay the borrowed amount through fixed monthly EMIs over an agreed period."
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          Since no collateral is required, approval mainly depends on your
          income, credit score and repayment history. Interest is charged on
          the outstanding principal, and the rate is usually higher than
          secured loans because the lender takes on more risk.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {[
            ['🔓', 'No Collateral', 'Borrow without pledging any asset as security.'],
            ['🎯', 'Any Purpose', 'Use the money for almost any genuine personal need.'],
            ['💳', 'Monthly EMI', 'Repay through predictable monthly installments.'],
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
        id="how-it-works"
        eyebrow="Working Process"
        title="How Does a Personal Loan Work?"
        description="A personal loan follows a simple process from application to final repayment."
      >
        <div className="space-y-4">
          {[
            ['01', 'Decide the Amount', 'Check how much you need and how much EMI you can comfortably pay.'],
            ['02', 'Compare Lenders', 'Compare interest rates, processing fees and prepayment terms.'],
            ['03', 'Apply for Loan', 'Submit documents and complete KYC and income verification.'],
            ['04', 'Loan Disbursal', 'After approval, the amount is credited to your bank account.'],
            ['05', 'Repay and Close', 'Pay fixed EMIs every month until the loan is fully repaid.'],
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

      {/* EMI FORMULA */}
      <GuideSection
        id="emi-formula"
        eyebrow="Mathematics"
        title="Personal Loan EMI Formula"
        description="Personal loan EMI is calculated using the standard reducing-balance formula."
      >
        <div className="rounded-2xl bg-slate-950 p-5 text-white sm:p-7">
          <p className="text-xs font-bold uppercase tracking-wider text-violet-400">
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
                ['P', 'Principal (Personal Loan Amount)'],
                ['R', 'Monthly interest rate (Annual rate ÷ 12 ÷ 100)'],
                ['N', 'Loan tenure in months (Years × 12)'],
                ['EMI', 'Equated Monthly Installment'],
              ].map(([symbol, meaning]) => (
                <tr key={symbol} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-3 py-3 font-bold text-violet-700 dark:text-violet-300">{symbol}</td>
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
        title="Personal Loan Calculation Example"
        description="Suppose the personal loan amount is ₹5,00,000, interest rate is 12% p.a. and tenure is 5 years."
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['Loan Amount', '₹5,00,000'],
            ['Interest Rate', '12% p.a.'],
            ['Tenure', '5 Years (60 months)'],
            ['Monthly Rate (R)', '1%'],
          ].map(([title, value]) => (
            <div key={title} className="rounded-2xl bg-slate-50 p-5 dark:bg-slate-800">
              <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">{title}</p>
              <p className="mt-2 text-xl font-black">{value}</p>
            </div>
          ))}
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Monthly rate R = 12 ÷ 12 ÷ 100 = 0.01 and N = 5 × 12 = 60 months.
          At 12% for 5 years, the approximate EMI is around ₹11,122
          (exact value depends on rounding). Total payment is roughly
          ₹6.67 lakh, so about ₹1.67 lakh goes towards interest. Use the
          calculator to check exact figures.
        </p>

        <Link
          href="/personal-loan-calculator"
          className="mt-5 inline-flex rounded-xl bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-700"
        >
          Calculate Your Personal Loan →
        </Link>
      </GuideSection>

      {/* BENEFITS */}
      <GuideSection
        id="benefits"
        eyebrow="Advantages"
        title="Benefits of a Personal Loan"
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

      {/* LIMITATIONS */}
      <GuideSection
        id="limitations"
        eyebrow="Things To Consider"
        title="Limitations of a Personal Loan"
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
        title="Tips to Reduce Personal Loan Cost"
      >
        <div className="space-y-3">
          {[
            'Maintain a good credit score before applying to get a lower interest rate.',
            'Borrow only what you need — a smaller amount means less interest.',
            'Choose a shorter tenure if your budget allows — total interest drops.',
            'Compare interest rates, processing fees and prepayment charges across lenders.',
            'Avoid applying to many lenders at once, as it can lower your credit score.',
            'Use part-prepayments whenever you have extra funds, if allowed without heavy charges.',
          ].map((item) => (
            <div key={item} className="flex gap-3 rounded-xl bg-slate-50 p-4 dark:bg-slate-800">
              <span className="font-black text-violet-600">→</span>
              <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">{item}</p>
            </div>
          ))}
        </div>
      </GuideSection>

      {/* WHO SHOULD TAKE */}
      <GuideSection
        id="who-should-take"
        eyebrow="Suitability"
        title="Who Should Consider a Personal Loan?"
      >
        <p className="text-sm leading-8 text-slate-600 dark:text-slate-300">
          A personal loan is suitable for people who need funds quickly for a
          genuine requirement, do not want to pledge any asset, and have a
          stable income to manage EMIs. Since interest rates are higher than
          secured loans, compare total cost, check your budget and ensure the
          EMI fits comfortably within your monthly expenses before borrowing.
        </p>
      </GuideSection>

      {/* FAQ */}
      <GuideSection
        id="faqs"
        eyebrow="Help Center"
        title="Frequently Asked Questions About Personal Loans"
        description="Find answers to common questions about personal loan EMI, interest rate, tenure, documents and prepayment."
      >
        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.q}
              className="personal-guide-faq group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/70"
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
      <section className="rounded-3xl bg-gradient-to-br from-violet-700 to-purple-600 p-7 text-center text-white shadow-xl sm:p-10">
        <h2 className="text-2xl font-black sm:text-3xl">
          Ready to Calculate Your Personal Loan EMI?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-violet-50">
          Enter loan amount, interest rate and tenure to get monthly EMI,
          total interest and overall repayment instantly.
        </p>

        <Link
          href="/personal-loan-calculator"
          className="mt-6 inline-flex rounded-xl bg-white px-7 py-3.5 text-sm font-extrabold text-violet-800 shadow-lg transition hover:-translate-y-1"
        >
          Open Personal Loan Calculator →
        </Link>
      </section>

    </main>
  )
}