

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | SmartMoneyTools",
  description:
    "Read the SmartMoneyTools disclaimer. Understand the limitations of our financial calculators and educational content before relying on any results.",
  alternates: {
    canonical: "https://smartmoneytools.xyz/disclaimer/",
  },
  openGraph: {
    title: "Disclaimer | SmartMoneyTools",
    description:
      "Important information about the use of SmartMoneyTools calculators and financial content.",
    url: "https://smartmoneytools.xyz/disclaimer/",
    siteName: "SmartMoneyTools",
    type: "website",
  },
};

const sections = [
  {
    title: "1. General Information",
    content: (
      <p>
        The information and tools available on SmartMoneyTools are provided for
        general informational and educational purposes only. We aim to make
        financial calculations easier to understand, but the content on this
        website should not be treated as a substitute for professional advice.
      </p>
    ),
  },
  {
    title: "2. Not Financial, Investment, Tax or Legal Advice",
    content: (
      <p>
        SmartMoneyTools does not provide personalized financial, investment,
        tax, accounting or legal advice. Any examples, explanations or
        calculator results are general in nature and may not suit your
        circumstances. Consider consulting a qualified professional before
        making financial or legal decisions.
      </p>
    ),
  },
  {
    title: "3. Calculator Results and Estimates",
    content: (
      <>
        <p>
          Our calculators provide estimates based on the information you enter
          and the assumptions used by each calculator. Actual results may
          differ because of interest rates, fees, taxes, lender policies,
          product terms, rounding methods and other factors.
        </p>
        <p>
          Calculator results are not quotes, guarantees, approvals or promises
          of future returns. Please verify important figures with the relevant
          bank, lender, financial institution or qualified professional.
        </p>
      </>
    ),
  },
  {
    title: "4. Accuracy and Availability",
    content: (
      <p>
        We make reasonable efforts to keep the website useful and accurate, but
        we do not guarantee that its information, calculations or features
        will always be complete, current, error-free or available. Content and
        tools may be updated, changed, interrupted or removed without notice.
      </p>
    ),
  },
  {
    title: "5. Your Responsibility",
    content: (
      <p>
        You are responsible for checking the information you enter, reviewing
        the results and deciding how to use them. Before acting on any result,
        independently confirm the relevant terms, rates, charges and
        requirements with the appropriate provider.
      </p>
    ),
  },
  {
    title: "6. External Websites and Third-Party Services",
    content: (
      <p>
        This website may contain links to third-party websites, services or
        resources. These links are provided for convenience only. We do not
        control or guarantee the accuracy, availability, content or practices
        of third-party websites. Visiting or using them is at your own
        discretion and subject to their own terms and policies.
      </p>
    ),
  },
  {
    title: "7. Advertising and Affiliate Links",
    content: (
      <p>
        SmartMoneyTools may display advertisements or use affiliate links in
        the future. If applicable, we may receive compensation when you view,
        click or make a purchase through certain links. Such arrangements do
        not guarantee or constitute an endorsement of any product or service.
        Please review the relevant provider’s terms before making a decision.
      </p>
    ),
  },
  {
    title: "8. Limitation of Liability",
    content: (
      <p>
        To the extent permitted by applicable law, SmartMoneyTools and its
        owners or contributors will not be liable for losses or damages arising
        from your use of, or reliance on, this website, its content, calculator
        results or third-party links. This includes errors, omissions,
        interruptions or changes to the website.
      </p>
    ),
  },
  {
    title: "9. Changes to This Disclaimer",
    content: (
      <p>
        We may update this Disclaimer from time to time. Any changes will be
        posted on this page. Your continued use of the website after changes
        are posted means you acknowledge the updated Disclaimer.
      </p>
    ),
  },
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100/70 via-white to-white dark:from-blue-950/40 dark:via-slate-900 dark:to-slate-900"
        />

        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-300">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-blue-500"
            />
            Website information
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-slate-950 dark:text-white sm:text-5xl">
            Disclaimer
          </h1>

          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Please read this Disclaimer before using SmartMoneyTools. It
            explains the purpose and limitations of the information and
            calculator results available on our website.
          </p>

          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">
            Website:{" "}
            <span className="font-medium text-slate-700 dark:text-slate-200">
              SmartMoneyTools
            </span>
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_280px]">
          <article className="space-y-6">
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900/70 dark:bg-amber-950/30">
              <h2 className="text-base font-semibold text-amber-900 dark:text-amber-200">
                Important notice
              </h2>
              <p className="mt-2 text-sm leading-6 text-amber-900/90 dark:text-amber-100/90">
                SmartMoneyTools calculators provide estimates, not guaranteed
                outcomes. Do not make a financial decision based only on a
                calculator result or information from this website.
              </p>
            </div>

            {sections.map((section) => (
              <section
                key={section.title}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7"
              >
                <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                  {section.title}
                </h2>
                <div className="mt-3 space-y-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                  {section.content}
                </div>
              </section>
            ))}

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
                10. Contact Us
              </h2>
              <p className="mt-3 text-[15px] leading-7 text-slate-600 dark:text-slate-300">
                If you have questions about this Disclaimer, please contact
                us:
              </p>
              <a
                href="mailto:contact@financetools.com"
                className="mt-3 inline-flex font-medium text-blue-600 underline decoration-blue-300 underline-offset-4 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
              >
                contact@financetools.com
              </a>
            </section>

            <p className="px-1 text-sm leading-6 text-slate-500 dark:text-slate-400">
              By using SmartMoneyTools, you acknowledge that you have read and
              understood this Disclaimer.
            </p>
          </article>

          <aside className="h-fit rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 lg:sticky lg:top-24">
            <h2 className="text-base font-semibold text-slate-900 dark:text-white">
              Explore SmartMoneyTools
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">
              Use our tools to estimate common financial calculations.
            </p>

            <Link
              href="/tools"
              className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
            >
              Explore Calculators
            </Link>

            <div className="mt-5 border-t border-slate-200 pt-5 dark:border-slate-800">
              <h3 className="text-sm font-semibold text-slate-900 dark:text-white">
                Related pages
              </h3>
              <nav aria-label="Related pages" className="mt-3 space-y-2">
                <Link
                  href="/privacy-policy"
                  className="block text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="/terms-and-conditions"
                  className="block text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Terms &amp; Conditions
                </Link>
                <Link
                  href="/contact"
                  className="block text-sm text-slate-600 transition hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}