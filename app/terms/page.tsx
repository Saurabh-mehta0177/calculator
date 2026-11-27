

import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | SmartMoneyTools",
  description:
    "Read the Terms and Conditions for using SmartMoneyTools financial calculators, including important information about estimates, user responsibilities, and data handling.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: (
      <p>
        By accessing or using SmartMoneyTools, you agree to these Terms &
        Conditions. If you do not agree with these terms, please do not use
        this website.
      </p>
    ),
  },
  {
    title: "2. About SmartMoneyTools",
    content: (
      <p>
        SmartMoneyTools provides free online financial calculators and related
        informational content, including tools for EMI, loans, fixed deposits,
        recurring deposits, SIP, GST and other financial calculations. The
        website is intended to help users understand and estimate common
        financial calculations.
      </p>
    ),
  },
  {
    title: "3. No Account or Login Required",
    content: (
      <p>
        SmartMoneyTools does not require users to create an account, register or
        log in to use its calculators. You can access the available tools
        without creating a user profile.
      </p>
    ),
  },
  {
    title: "4. Calculator Inputs and User Data",
    content: (
      <>
        <p>
          SmartMoneyTools does not intentionally save the information you enter
          into its financial calculators. Calculator inputs are used to
          generate the requested calculation and are not stored by us as a
          user account or personal financial profile.
        </p>
        <p>
          Please avoid entering sensitive personal information into calculator
          fields. If you contact us through a contact form or email, the
          information you choose to send may be used to respond to your
          message.
        </p>
      </>
    ),
  },
  {
    title: "5. Estimates, Not Financial Advice",
    content: (
      <p>
        Calculator results and website content are provided for general
        informational and educational purposes only. They are not financial,
        investment, tax, accounting or legal advice. Results are estimates
        based on the information entered and the assumptions used by the
        calculator. Actual figures may differ from those provided by banks,
        lenders or other financial institutions.
      </p>
    ),
  },
  {
    title: "6. Accuracy of Results",
    content: (
      <p>
        We make reasonable efforts to provide useful and accurate tools, but
        we do not guarantee that every result or piece of information will be
        complete, current or error-free. Rates, fees, taxes, terms and
        calculation methods may vary between providers and over time. Please
        verify important figures with the relevant institution before making
        a decision.
      </p>
    ),
  },
  {
    title: "7. User Responsibilities",
    content: (
      <>
        <p>When using FinanceTools, you agree to:</p>
        <ul className="mt-3 list-disc space-y-2 pl-5">
          <li>Use the website only for lawful purposes.</li>
          <li>
            Provide appropriate information when using calculators or
            contacting us.
          </li>
          <li>
            Not attempt to disrupt, damage, hack or misuse the website or its
            tools.
          </li>
          <li>
            Not copy, redistribute or commercially exploit website content or
            tools without permission, except where permitted by law.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <p>
        Unless otherwise stated, the website’s text, branding, design and
        original materials belong to SmartMoneyTools or are used with permission.
        You may not reproduce, distribute or create derivative works from
        these materials without the required permission, except where
        applicable law allows it.
      </p>
    ),
  },
  {
    title: "9. Third-Party Websites and Services",
    content: (
      <p>
        SmartMoneyTools may contain links to third-party websites or services.
        These links are provided for convenience. We do not control and are
        not responsible for the content, availability, terms or privacy
        practices of external websites. Please review their policies before
        using them.
      </p>
    ),
  },
  {
    title: "10. Website Availability and Changes",
    content: (
      <p>
        We may update, modify, suspend or discontinue website features or
        calculators at any time. We do not guarantee uninterrupted access to
        the website and may make changes without prior notice.
      </p>
    ),
  },
  {
    title: "11. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, FinanceTools and its owners
        or contributors are not responsible for losses or damages arising from
        the use of, inability to use, or reliance on this website, its
        calculators, content or third-party links. This includes decisions
        made based on calculator estimates. Nothing in these terms excludes
        liability that cannot legally be excluded.
      </p>
    ),
  },
  {
    title: "12. Changes to These Terms",
    content: (
      <p>
        We may revise these Terms & Conditions from time to time. Updated
        terms will be published on this page with a revised date. Your
        continued use of the website after an update means you accept the
        revised terms.
      </p>
    ),
  },
  {
    title: "13. Governing Law",
    content: (
      <p>
        These Terms & Conditions are governed by the laws of India, subject
        to applicable legal requirements. Any dispute will be handled by a
        court or forum with appropriate jurisdiction under applicable law.
      </p>
    ),
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      {/* Hero */}
      <section className="border-b border-slate-200 bg-gradient-to-br from-slate-100 via-white to-indigo-50 dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-indigo-950/40">
        <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-indigo-200 bg-white/80 px-3 py-1 text-sm font-medium text-indigo-700 dark:border-indigo-900 dark:bg-slate-900/70 dark:text-indigo-300">
              Website guidelines
            </span>

            <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
              Terms &amp; Conditions
            </h1>

            <p className="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300 sm:text-lg">
              Please read these terms before using SmartMoneyTools and its free
              financial calculators.
            </p>

            <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
              Last updated: November 26, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_260px]">
          <article className="min-w-0 space-y-6">
            {/* Important notice */}
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/70 dark:bg-amber-950/30 sm:p-6">
              <h2 className="font-semibold text-amber-950 dark:text-amber-200">
                Important notice
              </h2>
              <p className="mt-2 text-sm leading-6 text-amber-900 dark:text-amber-100/90">
                SmartMoneyTools calculators provide estimates only. Check
                important figures with the relevant bank, lender or qualified
                professional before making a financial decision.
              </p>
            </div>

            {/* Introduction */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
                Welcome to <strong className="text-slate-900 dark:text-white">FinanceTools</strong>.
                By accessing or using this website, you acknowledge that you
                have read and agree to these Terms &amp; Conditions.
              </p>
            </div>

            {/* Terms sections */}
            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8"
              >
                <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                  {section.title}
                </h2>

                <div className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-8">
              <h2 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white sm:text-xl">
                14. Contact Us
              </h2>

              <p className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                If you have questions about these Terms &amp; Conditions, you
                can contact us through our Contact page.
              </p>

              <Link
                href="/contact"
                className="mt-4 inline-flex items-center rounded-xl bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
              >
                Contact Us
              </Link>
            </section>

            <p className="px-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              These terms are intended to explain the general use of
              SmartMoneyTools. They do not replace any rights or protections
              provided by applicable law.
            </p>
          </article>

          {/* Sidebar */}
          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-24">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
             SmartMoneyTools
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Explore free financial calculators and helpful resources.
            </p>

            <Link
              href="/tools"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Explore Calculators
            </Link>

            <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Related pages
              </h3>

              <nav aria-label="Related pages" className="mt-3 space-y-3">
                <Link
                  href="/privacy-policy"
                  className="block text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  Privacy Policy
                </Link>

                <Link
                  href="/disclaimer"
                  className="block text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  Disclaimer
                </Link>

                <Link
                  href="/contact"
                  className="block text-sm text-slate-600 transition hover:text-indigo-600 dark:text-slate-300 dark:hover:text-indigo-400"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </aside>
        </div>

        {/* Back to home */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-indigo-600 transition hover:text-indigo-700 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>
        </div>
      </section>
    </main>
  );
}