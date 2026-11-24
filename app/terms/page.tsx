// app/terms/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | FinanceTools",
  description:
    "Read the Terms & Conditions of FinanceTools. Understand the rules and guidelines for using our free financial calculators.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-indigo-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Terms & Conditions
            </h1>
            <p className="mt-3 text-slate-300">
              Last updated: November 21, 2026
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-600">
              Welcome to <strong>FinanceTools</strong>. By accessing or using
              our website and free financial calculators, you agree to be bound
              by these Terms & Conditions. Please read them carefully.
            </p>

            <hr className="my-8 border-slate-200" />

            {/* 1 */}
            <h2 className="text-xl font-bold text-slate-900">
              1. Acceptance of Terms
            </h2>
            <p className="mt-3 text-slate-600">
              By using FinanceTools, you confirm that you have read, understood,
              and agree to these Terms & Conditions. If you do not agree with
              any part of these terms, please do not use our website.
            </p>

            {/* 2 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              2. Description of Service
            </h2>
            <p className="mt-3 text-slate-600">
              FinanceTools provides free online financial calculators including
              (but not limited to) EMI Calculator, FD Calculator, SIP
              Calculator, Loan Calculators, GST Calculator, and other related
              tools. These tools are designed for educational and informational
              purposes only.
            </p>

            {/* 3 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              3. No Financial Advice
            </h2>
            <p className="mt-3 text-slate-600">
              The calculators and information on this website are{" "}
              <strong>not financial, investment, tax, or legal advice</strong>.
              Results shown are estimates based on the data you enter and may
              differ from actual bank or financial institution calculations.
            </p>
            <p className="mt-3 text-slate-600">
              Always consult a qualified financial advisor, bank, or relevant
              institution before making any financial decision.
            </p>

            {/* 4 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              4. Accuracy of Results
            </h2>
            <p className="mt-3 text-slate-600">
              While we strive to provide accurate calculations, we do not
              guarantee that the results will be error-free or match the exact
              figures provided by banks, NBFCs, or other financial institutions.
              Interest rates, fees, and calculation methods can vary.
            </p>

            {/* 5 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              5. User Responsibilities
            </h2>
            <p className="mt-3 text-slate-600">You agree to:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Use the website only for lawful purposes</li>
              <li>
                Not attempt to disrupt, hack, or misuse the website or its
                calculators
              </li>
              <li>
                Provide accurate information when using contact forms (if any)
              </li>
              <li>
                Not copy, redistribute, or commercially exploit our tools
                without permission
              </li>
            </ul>

            {/* 6 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              6. Intellectual Property
            </h2>
            <p className="mt-3 text-slate-600">
              All content on this website, including text, design, logos,
              calculators, and code structure, is the property of FinanceTools
              unless otherwise stated. You may not reproduce, distribute, or
              create derivative works without our prior written consent.
            </p>

            {/* 7 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              7. Limitation of Liability
            </h2>
            <p className="mt-3 text-slate-600">
              FinanceTools and its owners shall not be liable for any direct,
              indirect, incidental, or consequential damages arising from:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>Use or inability to use the calculators</li>
              <li>Reliance on any calculation results</li>
              <li>Any errors or inaccuracies in the tools</li>
              <li>Financial decisions made based on the information provided</li>
            </ul>

            {/* 8 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              8. Third-Party Links
            </h2>
            <p className="mt-3 text-slate-600">
              Our website may contain links to third-party websites. We are not
              responsible for the content, privacy practices, or terms of those
              external sites.
            </p>

            {/* 9 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              9. Modifications to the Service
            </h2>
            <p className="mt-3 text-slate-600">
              We reserve the right to modify, suspend, or discontinue any part
              of the website or calculators at any time without prior notice.
            </p>

            {/* 10 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              10. Changes to These Terms
            </h2>
            <p className="mt-3 text-slate-600">
              We may update these Terms & Conditions from time to time. The
              updated version will be posted on this page with a revised “Last
              updated” date. Continued use of the website after changes means
              you accept the new terms.
            </p>

            {/* 11 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              11. Governing Law
            </h2>
            <p className="mt-3 text-slate-600">
              These Terms & Conditions shall be governed by and construed in
              accordance with the laws of India. Any disputes arising out of
              these terms shall be subject to the exclusive jurisdiction of the
              courts in India.
            </p>

            {/* 12 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">
              12. Contact Us
            </h2>
            <p className="mt-3 text-slate-600">
              If you have any questions about these Terms & Conditions, please
              contact us:
            </p>
            <div className="mt-4 rounded-lg bg-slate-50 p-4 text-slate-700">
              <p>
                <strong>Website:</strong>{" "}
                <Link href="/" className="text-blue-600 hover:underline">
                  FinanceTools
                </Link>
              </p>
              <p className="mt-1">
                <strong>Contact Page:</strong>{" "}
                <Link href="/contact" className="text-blue-600 hover:underline">
                  /contact
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}