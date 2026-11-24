
import Link from "next/link";

export const metadata = {
  title: "Financial Disclaimer | FinanceTools",
  description:
    "Read the FinanceTools disclaimer covering financial calculators, estimated results, investment risks, advertising, third-party links and website information.",
  robots: {
    index: true,
    follow: true,
  },
};

const sections = [
  {
    number: "01",
    title: "General Information",
    content: (
      <>
        <p>
          Welcome to FinanceTools. The information and resources available on
          this website are provided for general educational and informational
          purposes only.
        </p>
        <p>
          FinanceTools provides online financial calculators, financial
          planning tools, educational guides and other related resources to
          help users understand common financial concepts.
        </p>
        <p>
          Although we aim to provide useful and accurate information, we do
          not guarantee that all information on this website is complete,
          accurate, current or suitable for every individual situation.
        </p>
      </>
    ),
  },
  {
    number: "02",
    title: "Financial Calculator Disclaimer",
    content: (
      <>
        <p>
          The calculators available on FinanceTools, including EMI, FD, RD,
          SIP, compound interest, loan, PPF, GST and other calculators,
          generate estimated results based on the values and assumptions
          entered by users.
        </p>
        <p>
          Actual financial calculations may differ depending on the bank,
          financial institution, investment provider, applicable regulations,
          compounding frequency, fees, taxes and other conditions.
        </p>
        <p>
          Users should independently verify all calculations with the
          relevant bank or financial institution before making financial
          decisions.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "No Financial or Investment Advice",
    content: (
      <>
        <p>
          Nothing published on FinanceTools should be considered professional
          financial, investment, tax, legal or accounting advice.
        </p>
        <p>
          The information provided is not a recommendation to buy, sell or
          hold any financial product, security, mutual fund or investment.
        </p>
        <p>
          Before making financial decisions, consider consulting a qualified
          financial advisor or other relevant professional who understands
          your personal financial circumstances.
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "Investment Risk and Returns",
    content: (
      <>
        <p>
          All investments involve some level of risk. The value of investments
          may increase or decrease depending on market conditions and other
          factors.
        </p>
        <p>
          Any projected returns, SIP estimates, compound interest calculations,
          wealth forecasts or investment comparisons displayed on this website
          are illustrative estimates only.
        </p>
        <p>
          Past performance and hypothetical projections do not guarantee
          future returns. Actual investment results may be significantly
          different from the estimates shown by our tools.
        </p>
      </>
    ),
  },
  {
    number: "05",
    title: "Banking, Loan and Deposit Information",
    content: (
      <>
        <p>
          Interest rates, loan terms, EMI amounts, fixed deposit returns and
          other banking-related figures displayed by our calculators are
          estimates based on user inputs.
        </p>
        <p>
          Actual terms may vary according to the financial institution,
          customer eligibility, applicable charges, taxes and prevailing
          policies.
        </p>
        <p>
          FinanceTools is not a bank, lender, financial institution or
          investment provider and does not directly provide loans or accept
          deposits.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Third-Party Websites and External Links",
    content: (
      <>
        <p>
          Our website may contain links to external websites, services or
          resources for additional information and convenience.
        </p>
        <p>
          We do not control the content, accuracy, availability, privacy
          practices or policies of third-party websites.
        </p>
        <p>
          Visiting external websites through links on FinanceTools is at your
          own discretion and risk. We recommend reviewing their respective
          terms and privacy policies.
        </p>
      </>
    ),
  },
  {
    number: "07",
    title: "Advertising and Google AdSense",
    content: (
      <>
        <p>
          FinanceTools may display advertisements provided by third-party
          advertising networks, including Google AdSense.
        </p>
        <p>
          These advertising services may use cookies or similar technologies
          to deliver, measure and personalize advertisements, subject to
          applicable privacy requirements and user choices.
        </p>
        <p>
          The appearance of an advertisement does not constitute an
          endorsement, recommendation or guarantee of the advertised product
          or service by FinanceTools.
        </p>
        <p>
          Users should independently evaluate any product or service before
          purchasing or using it.
        </p>
      </>
    ),
  },
  {
    number: "08",
    title: "Accuracy and Availability of Information",
    content: (
      <>
        <p>
          We make reasonable efforts to maintain the accuracy and usefulness
          of our website content. However, financial rules, interest rates,
          tax regulations and market conditions can change over time.
        </p>
        <p>
          We do not guarantee uninterrupted website availability or that all
          tools and features will always operate without errors.
        </p>
        <p>
          We reserve the right to update, modify or remove website content
          and features when necessary.
        </p>
      </>
    ),
  },
  {
    number: "09",
    title: "Limitation of Liability",
    content: (
      <>
        <p>
          To the extent permitted by applicable law, FinanceTools and its
          website operators shall not be responsible for losses or damages
          arising from reliance on website information, calculator estimates
          or third-party content.
        </p>
        <p>
          Users are responsible for verifying information and making their
          own decisions before taking financial action.
        </p>
      </>
    ),
  },
  {
    number: "10",
    title: "Changes to This Disclaimer",
    content: (
      <>
        <p>
          We may revise or update this Disclaimer from time to time to reflect
          changes in our services, website features or applicable requirements.
        </p>
        <p>
          Any updated version will be published on this page. We encourage
          visitors to review this page periodically.
        </p>
      </>
    ),
  },
  {
    number: "11",
    title: "Contact Information",
    content: (
      <>
        <p>
          If you have questions or concerns regarding this Disclaimer or
          information published on FinanceTools, please contact us.
        </p>
        <p>
          Email:{" "}
          <a
            href="mailto:contact@financetools.com"
            className="font-semibold text-blue-700 hover:underline"
          >
            contact@financetools.com
          </a>
        </p>
        <p>
          You can also visit our{" "}
          <Link
            href="/contact"
            className="font-semibold text-blue-700 hover:underline"
          >
            Contact Us page
          </Link>{" "}
          to send us your questions or feedback.
        </p>
      </>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-5 py-20 text-white">
        <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <span>⚖️</span>
            Legal Information
          </div>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight md:text-6xl">
            Website
            <span className="block text-blue-300">Disclaimer</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Important information about our financial calculators, educational
            content, investment estimates and website services. Please read
            this disclaimer carefully before using FinanceTools.
          </p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-blue-100">
            <span className="rounded-lg bg-white/10 px-4 py-3">
              ⚖️ Transparency
            </span>
            <span className="rounded-lg bg-white/10 px-4 py-3">
              🔒 User Awareness
            </span>
            <span className="rounded-lg bg-white/10 px-4 py-3">
              📊 Financial Information
            </span>
          </div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="px-5 py-14">
        <div className="mx-auto max-w-5xl">
          {/* Notice */}
          <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl">⚠️</div>
              <div>
                <h2 className="text-lg font-bold text-amber-950">
                  Important Financial Notice
                </h2>
                <p className="mt-2 text-sm leading-7 text-amber-900">
                  All financial calculations and projections on FinanceTools
                  are estimates for educational purposes. They should not be
                  treated as guaranteed results or personalized financial
                  advice. Always verify important financial information with
                  the relevant institution or qualified professional.
                </p>
              </div>
            </div>
          </div>

          {/* Intro Card */}
          <div className="mb-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <h2 className="text-2xl font-bold text-slate-900">
              About This Disclaimer
            </h2>
            <p className="mt-4 leading-8 text-slate-600">
              This Disclaimer explains the limitations and conditions
              associated with using the FinanceTools website. By accessing
              or using our website, you acknowledge that you have read and
              understood the information provided on this page.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-5">
            {sections.map((section) => (
              <article
                key={section.number}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md sm:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 font-bold text-blue-700">
                    {section.number}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="text-xl font-bold text-slate-900">
                      {section.title}
                    </h2>
                    <div className="mt-4 space-y-4 text-sm leading-8 text-slate-600">
                      {section.content}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Final Note */}
          <div className="mt-10 rounded-2xl bg-gradient-to-r from-blue-900 to-indigo-900 p-8 text-center text-white sm:p-10">
            <div className="text-4xl">💡</div>
            <h2 className="mt-4 text-2xl font-bold">
              Make Informed Financial Decisions
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-blue-100">
              FinanceTools is designed to make financial calculations easier
              to understand. Use our tools as a starting point for your
              research and always verify important decisions independently.
            </p>
            <Link
              href="/"
              className="mt-7 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-blue-900 transition hover:bg-blue-50"
            >
              Explore Financial Tools →
            </Link>
          </div>

          {/* Last Updated */}
          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              FinanceTools | Disclaimer
            </p>
            <p className="mt-2 text-xs text-slate-400">
              Please review this page periodically for updates.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
