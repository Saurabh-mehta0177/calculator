

// app/privacy-policy/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | SmartMoneyTools",
  description:
    "Read the SmartMoneyTools Privacy Policy to understand how calculator inputs, contact messages, cookies and third-party services may be handled when you use our website.",
  alternates: {
    canonical: "https://smartmoneytools.xyz/privacy-policy/",
  },
  openGraph: {
    title: "Privacy Policy | SmartMoneyTools",
    description:
      "Learn how SmartMoneyTools handles information, cookies and third-party services when you use our financial calculators.",
    url: "https://smartmoneytools.xyz/privacy-policy/",
    siteName: "SmartMoneyTools",
    type: "website",
  },
};

const sections = [
  {
    id: "information-we-collect",
    title: "1. Information We Collect",
    content: (
      <>
        <p>
          We aim to keep our financial calculators simple to use. Many
          calculators can be used without entering personal information.
          Depending on how you use the website and which services are enabled,
          the following information may be processed:
        </p>

        <ul>
          <li>
            <strong>Calculator inputs:</strong> Values such as loan amount,
            interest rate, investment amount and tenure may be processed in
            your browser to calculate an estimate. Confirm your website’s
            implementation before stating that these values are never sent to
            or stored on a server.
          </li>
          <li>
            <strong>Technical and usage information:</strong> Your browser,
            device, approximate usage activity, pages visited and other
            technical information may be collected by hosting, analytics or
            security services, if enabled.
          </li>
          <li>
            <strong>Contact information:</strong> If you contact us, we may
            receive your name, email address and the message you choose to
            send. The information received depends on the contact method you
            use.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "how-we-use-information",
    title: "2. How We Use Information",
    content: (
      <>
        <p>
          Information available to us may be used for purposes such as:
        </p>
        <ul>
          <li>Providing and maintaining the website and its calculators.</li>
          <li>Responding to questions, feedback or support requests.</li>
          <li>Understanding website performance and usage, where analytics are enabled.</li>
          <li>Detecting misuse and helping protect the website.</li>
          <li>Improving page content, usability and reliability.</li>
        </ul>
      </>
    ),
  },
  {
    id: "cookies-and-tracking",
    title: "3. Cookies and Similar Technologies",
    content: (
      <>
        <p>
          The website or third-party services used on it may use cookies or
          similar technologies for essential functionality, preferences,
          analytics or advertising, depending on which services are enabled.
        </p>
        <p>
          You can manage or delete cookies through your browser settings.
          Blocking cookies may affect certain website features. If you use a
          cookie-consent tool, its choices may also control optional
          technologies.
        </p>
      </>
    ),
  },
  {
    id: "data-sharing",
    title: "4. Data Sharing",
    content: (
      <>
        <p>
          We do not sell personal information as a business practice. We may
          share information when reasonably necessary to operate the website
          or meet legal obligations, for example:
        </p>
        <ul>
          <li>
            With service providers that support hosting, security, analytics,
            communications or other website operations.
          </li>
          <li>
            When required by applicable law, legal process or a valid
            government request.
          </li>
          <li>
            To help protect the rights, safety and security of the website,
            its users or others.
          </li>
        </ul>
      </>
    ),
  },
  {
    id: "third-party-services",
    title: "5. Third-Party Services",
    content: (
      <p>
        The website may use third-party services, such as analytics,
        advertising, hosting or embedded content providers. Those providers
        may process information under their own privacy policies and terms.
        Review the policies of any third-party service you interact with.
        Only list specific providers here after confirming they are actually
        used on your website.
      </p>
    ),
  },
  {
    id: "data-security",
    title: "6. Data Security",
    content: (
      <p>
        We take reasonable steps to protect information handled through the
        website. However, no method of transmission or electronic storage is
        completely secure, and we cannot guarantee absolute security.
      </p>
    ),
  },
  {
    id: "childrens-privacy",
    title: "7. Children’s Privacy",
    content: (
      <p>
        The website is not intended for children under the age of 13, and we
        do not knowingly seek to collect personal information from children
        under 13. If you believe a child has provided personal information,
        contact us so we can review the request.
      </p>
    ),
  },
  {
    id: "policy-changes",
    title: "8. Changes to This Privacy Policy",
    content: (
      <p>
        We may update this Privacy Policy when our website, services or
        practices change. Updates will be posted on this page with a revised
        “Last updated” date. Please review this page periodically.
      </p>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 transition-colors dark:bg-gray-950 dark:text-gray-100">
      {/* Hero */}
      <section className="relative isolate overflow-hidden border-b border-slate-200 bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:border-gray-800 dark:from-gray-950 dark:via-gray-900 dark:to-blue-950/30">
        <div
          aria-hidden="true"
          className="absolute -right-24 -top-24 -z-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-700/10"
        />

        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
          <nav
            aria-label="Breadcrumb"
            className="mb-7 text-sm text-slate-500 dark:text-gray-400"
          >
            <ol className="flex flex-wrap items-center justify-center gap-2">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li
                aria-current="page"
                className="font-semibold text-slate-700 dark:text-gray-200"
              >
                Privacy Policy
              </li>
            </ol>
          </nav>

          <div className="text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-extrabold uppercase tracking-widest text-slate-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/80 dark:text-gray-300">
              <span
                aria-hidden="true"
                className="h-2 w-2 rounded-full bg-blue-500"
              />
              Your Privacy Matters
            </div>

            <h1 className="text-3xl font-black tracking-tight text-slate-950 sm:text-4xl dark:text-white">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-slate-500 dark:text-gray-400">
              Last updated: November 21, 2026
            </p>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 dark:text-gray-300">
              This page explains what information may be handled when you use
             SmartMoneyTools, how it may be used, and how to contact us with
              privacy questions.
            </p>
          </div>
        </div>
      </section>

      {/* Policy content */}
      <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-8 lg:p-10 dark:border-gray-800 dark:bg-gray-900">
          {/* <div className="mb-8 rounded-xl border border-blue-100 bg-blue-50/70 p-4 dark:border-blue-900/50 dark:bg-blue-950/20">
            <p className="text-sm leading-6 text-slate-700 dark:text-gray-300">
              <strong className="text-slate-900 dark:text-white">
                A note about this policy:
              </strong>{" "}
              This page should describe the services and data practices that
              are actually enabled on FinanceTools. Please verify the
              calculator implementation, analytics, cookies and advertising
              setup before publishing.
            </p> 
          </div> */}

          <div className="space-y-9 text-sm leading-7 text-slate-600 sm:text-base dark:text-gray-300">
            <section aria-labelledby="introduction-heading">
              <h2
                id="introduction-heading"
                className="text-xl font-extrabold text-slate-950 dark:text-white"
              >
                Introduction
              </h2>

              <p className="mt-3">
                At <strong className="text-slate-900 dark:text-white">SmartMoneyTools</strong>{" "}
                (“we”, “us” or “our”), we respect your privacy. This Privacy
                Policy describes how information may be collected, used and
                shared when you visit our website and use its financial
                calculators and related features.
              </p>
            </section>

            {sections.map((section) => (
              <section
                key={section.id}
                aria-labelledby={`${section.id}-heading`}
                className="border-t border-slate-100 pt-8 dark:border-gray-800"
              >
                <h2
                  id={`${section.id}-heading`}
                  className="text-xl font-extrabold text-slate-950 dark:text-white"
                >
                  {section.title}
                </h2>

                <div className="policy-content mt-3 space-y-3">
                  {section.content}
                </div>
              </section>
            ))}

            {/* Contact */}
            <section
              aria-labelledby="contact-heading"
              className="border-t border-slate-100 pt-8 dark:border-gray-800"
            >
              <h2
                id="contact-heading"
                className="text-xl font-extrabold text-slate-950 dark:text-white"
              >
                9. Contact Us
              </h2>

              <p className="mt-3">
                If you have questions about this Privacy Policy or how
                information is handled, please contact us through our Contact
                page.
              </p>

              <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4 dark:border-gray-700 dark:bg-gray-800/60">
                <p>
                  <strong className="text-slate-900 dark:text-white">
                    Website:
                  </strong>{" "}
                  <Link
                    href="/"
                    className="font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
                  >
                   SmartMoneyTools
                  </Link>
                </p>

                <p className="mt-2">
                  <strong className="text-slate-900 dark:text-white">
                    Contact page:
                  </strong>{" "}
                  <Link
                    href="/contact"
                    className="font-semibold text-blue-700 underline-offset-4 hover:underline dark:text-blue-300"
                  >
                    Contact Us
                  </Link>
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* Bottom navigation */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-800 dark:text-blue-300 dark:hover:text-blue-200"
          >
            <span aria-hidden="true">←</span>
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-blue-900 dark:hover:bg-blue-950/30 dark:hover:text-blue-300"
          >
            Questions about privacy?
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      {/* Scoped prose styles for policy lists */}
      <style>{`
  .policy-content ul {
    list-style: disc;
    padding-left: 1.4rem;
  }

  .policy-content li + li {
    margin-top: 0.6rem;
  }

  .policy-content strong {
    color: inherit;
    font-weight: 700;
  }
`}</style>
    </main>
  );
}