// app/privacy-policy/page.tsx
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | FinanceTools",
  description:
    "Read the Privacy Policy of FinanceTools. Learn how we handle your data while using our free financial calculators.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-800 via-slate-900 to-blue-950 text-white">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Privacy Policy
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
          
          {/* Introduction */}
          <div className="prose prose-slate max-w-none">
            <p className="text-lg leading-relaxed text-slate-600">
              At <strong>FinanceTools</strong> (“we”, “us”, or “our”), we respect your privacy. 
              This Privacy Policy explains how we collect, use, and protect your information 
              when you use our website and free financial calculators.
            </p>

            <hr className="my-8 border-slate-200" />

            {/* 1 */}
            <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="mt-3 text-slate-600">
              We design our tools to be privacy-focused. Most of our calculators work without 
              requiring any personal information.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>
                <strong>Calculator Inputs:</strong> When you use our calculators (EMI, SIP, FD, GST etc.), 
                the values you enter (loan amount, interest rate, tenure, etc.) are processed 
                temporarily in your browser and are <strong>not stored</strong> on our servers.
              </li>
              <li>
                <strong>Automatically Collected Data:</strong> Like most websites, we may collect 
                basic technical information such as IP address, browser type, device information, 
                and pages visited through standard analytics tools.
              </li>
              <li>
                <strong>Contact Information:</strong> If you contact us through the Contact page, 
                we may collect your name, email address, and message content.
              </li>
            </ul>

            {/* 2 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p className="mt-3 text-slate-600">We use the limited information we collect for the following purposes:</p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>To provide and improve our free financial calculators</li>
              <li>To understand how users interact with our website (analytics)</li>
              <li>To respond to your queries when you contact us</li>
              <li>To ensure the security and proper functioning of the website</li>
            </ul>

            {/* 3 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">3. Cookies and Tracking</h2>
            <p className="mt-3 text-slate-600">
              We may use cookies and similar technologies to improve user experience and 
              analyze website traffic. These cookies help us understand which pages are 
              most useful to visitors.
            </p>
            <p className="mt-3 text-slate-600">
              You can control or delete cookies through your browser settings. Disabling 
              cookies may affect some features of the website.
            </p>

            {/* 4 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">4. Data Sharing</h2>
            <p className="mt-3 text-slate-600">
              We do <strong>not sell, rent, or trade</strong> your personal information. 
              We may share limited data only in the following cases:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-600">
              <li>With trusted service providers (such as analytics tools) who help us operate the website</li>
              <li>When required by law or to protect our legal rights</li>
            </ul>

            {/* 5 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">5. Third-Party Services</h2>
            <p className="mt-3 text-slate-600">
              Our website may use third-party services such as Google Analytics or advertising 
              networks. These services may collect information according to their own privacy policies. 
              We encourage you to review their policies.
            </p>

            {/* 6 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">6. Data Security</h2>
            <p className="mt-3 text-slate-600">
              We take reasonable measures to protect the information we collect. However, 
              no method of transmission over the internet is 100% secure. While we strive 
              to protect your data, we cannot guarantee absolute security.
            </p>

            {/* 7 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">7. Children’s Privacy</h2>
            <p className="mt-3 text-slate-600">
              Our website is not intended for children under the age of 13. We do not 
              knowingly collect personal information from children.
            </p>

            {/* 8 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">8. Changes to This Privacy Policy</h2>
            <p className="mt-3 text-slate-600">
              We may update this Privacy Policy from time to time. Any changes will be 
              posted on this page with an updated “Last updated” date. We encourage you 
              to review this page periodically.
            </p>

            {/* 9 */}
            <h2 className="mt-10 text-xl font-bold text-slate-900">9. Contact Us</h2>
            <p className="mt-3 text-slate-600">
              If you have any questions about this Privacy Policy, please contact us:
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