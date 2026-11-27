

// app/contact/page.tsx

"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";

const contactEmail = "contact@financetools.com";

const contactTopics = [
  {
    title: "General Enquiries",
    description:
      "Questions about FinanceTools, our website or the financial tools available on the platform.",
  },
  {
    title: "Calculator Support",
    description:
      "Questions about calculator inputs, formulas, calculation methods or the meaning of a result.",
  },
  {
    title: "Technical Issues",
    description:
      "Report a page that is not loading, an unexpected error or a feature that is not working correctly.",
  },
  {
    title: "Content Corrections",
    description:
      "Tell us about information that may be unclear, outdated or incorrect on a calculator or guide.",
  },
  {
    title: "Feedback and Suggestions",
    description:
      "Share ideas for improving the website or suggest a financial calculator that would be useful.",
  },
  {
    title: "Business Enquiries",
    description:
      "Contact us about relevant business enquiries, website collaborations or other professional matters.",
  },
];

const faqs = [
  {
    question: "How can I contact FinanceTools?",
    answer:
      "You can use the contact form on this page to prepare an email or contact us directly at contact@financetools.com. Please check that the email address is correct before sending your enquiry.",
  },
  {
    question: "How do I report a financial calculator error?",
    answer:
      "Select Calculator Support or Technical Issue and include the calculator name, the values entered and the result you expected. These details help us understand the issue more clearly.",
  },
  {
    question: "Can I suggest a new calculator?",
    answer:
      "Yes. We welcome suggestions for new financial calculators, useful features and improvements to existing tools. Describe the calculation you need and how you would use it.",
  },
  {
    question: "Can I ask for help understanding a calculator result?",
    answer:
      "You can contact us with questions about the calculator's inputs, formula or displayed estimate. Please include the relevant calculator page and explain which part of the result you would like clarified.",
  },
  {
    question: "Does submitting this form send my message directly?",
    answer:
      "The current contact form opens your default email application with your message prepared. You must send the email from that application for it to reach us. The form does not independently deliver or store your message.",
  },
  {
    question: "What information should I include in my enquiry?",
    answer:
      "Include the subject of your enquiry and enough information to explain your question. For technical issues, mention the page and the steps that caused the problem. Do not include passwords, bank account details or other sensitive financial information.",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailto;

    setStatus(
      "Your email application should open with your message prepared. Please review and send the email to complete your enquiry."
    );
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-slate-950 text-white">
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.35),_transparent_55%)]"
        />

        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-blue-200">
              <span className="h-2 w-2 rounded-full bg-blue-400" />
              Contact SmartMoneyTools
            </div>

            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Questions about our financial calculators?
              <span className="mt-2 block text-blue-300">
                We would like to hear from you.
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
              Whether you need help understanding a calculator, want to report
              a technical issue or have an idea for a new financial tool, this
              page is the place to get in touch with FinanceTools.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-3 text-sm">
              {[
                "Calculator Questions",
                "Technical Support",
                "Feedback & Suggestions",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2.5 text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent" />
      </section>

      {/* Contact Information and Form */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Get in touch
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900">
                How can we help?
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Use the contact options below to reach us with questions,
                suggestions or information about a possible issue. Providing
                the relevant calculator name or page address can help us
                understand your enquiry.
              </p>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700">
                  <span aria-hidden="true">✉</span>
                </div>

                <div className="min-w-0">
                  <h3 className="font-bold text-slate-900">
                    Email Enquiries
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    For general questions, calculator feedback and website
                    related enquiries.
                  </p>

                  <a
                    href={`mailto:${contactEmail}`}
                    className="mt-3 inline-block break-all text-sm font-semibold text-blue-700 underline-offset-4 hover:underline"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>
            </div>

            {/* Website Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-xl text-indigo-700">
                  <span aria-hidden="true">↗</span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    Explore SmartMoneyTools
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Visit our website to explore financial calculators for
                    loans, deposits, investments and everyday calculations.
                  </p>

                  <Link
                    href="/tools"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Browse Financial Calculators
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* About Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-blue-200 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-violet-50 text-xl text-violet-700">
                  <span aria-hidden="true">i</span>
                </div>

                <div>
                  <h3 className="font-bold text-slate-900">
                    About SmartMoneyTools
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Learn about the purpose of our website, the financial
                    tools we provide and our approach to financial calculations.
                  </p>

                  <Link
                    href="/about"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-blue-700 hover:underline"
                  >
                    Read About Us
                    <span aria-hidden="true" className="ml-2">
                      →
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            {/* Privacy Notice */}
            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">
              <h3 className="font-bold text-blue-950">
                Protect your personal information
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-900">
                Please share only the information needed to explain your
                enquiry. Do not include passwords, bank account numbers,
                payment details or other sensitive financial information.
              </p>

              <Link
                href="/privacy-policy"
                className="mt-4 inline-flex items-center text-sm font-semibold text-blue-800 underline-offset-4 hover:underline"
              >
                Read our Privacy Policy
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-9">
            <div className="mb-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Send an enquiry
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                Tell us what you need help with
              </h2>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                Complete the form below to prepare an email. Your email
                application will open so you can review the message and send
                it to us.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Full Name <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    maxLength={100}
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                    }}
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-800"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    maxLength={254}
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                    }}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Enquiry Type <span className="text-red-500">*</span>
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={(e) => {
                    setForm({ ...form, subject: e.target.value });
                  }}
                  className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                >
                  <option value="">Select a subject</option>
                  <option value="General Enquiry">General Enquiry</option>
                  <option value="Calculator Support">
                    Calculator Support
                  </option>
                  <option value="Technical Issue">Technical Issue</option>
                  <option value="Content Correction">
                    Content Correction
                  </option>
                  <option value="Feedback and Suggestions">
                    Feedback & Suggestions
                  </option>
                  <option value="Business Enquiry">Business Enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-800"
                >
                  Your Message <span className="text-red-500">*</span>
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={10}
                  maxLength={3000}
                  rows={6}
                  value={form.message}
                  onChange={(e) => {
                    setForm({ ...form, message: e.target.value });
                  }}
                  placeholder="Describe your question, suggestion or issue..."
                  className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-7 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                />

                <div className="mt-2 flex items-center justify-between gap-3 text-xs text-slate-500">
                  <span>Minimum 10 characters</span>
                  <span>{form.message.length}/3000</span>
                </div>
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-800 active:translate-y-0"
              >
                Prepare Email
                <span aria-hidden="true">→</span>
              </button>

              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className="rounded-xl border border-blue-100 bg-blue-50 p-4 text-sm leading-6 text-blue-800"
                >
                  {status}
                </p>
              )}

              <p className="text-center text-xs leading-6 text-slate-500">
                Your message is prepared in your email application. You must
                send it from there to complete your enquiry. Please review our{" "}
                <Link
                  href="/privacy-policy"
                  className="font-semibold text-blue-700 underline-offset-4 hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                before sharing personal information.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Contact Topics */}
      <section className="border-y border-slate-200 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              How we can help
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Choose the right topic for your enquiry
            </h2>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Whether your question is about a financial calculator or the
              website itself, choosing a relevant subject helps explain what
              you need.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {contactTopics.map((topic, index) => (
              <article
                key={topic.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-blue-200 hover:bg-white hover:shadow-lg"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-sm font-bold text-blue-700">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {topic.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {topic.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50 py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Contact support
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Frequently asked questions
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Here are answers to common questions about contacting
            SmartMoneyTools and reporting calculator issues.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-xl border border-slate-200 bg-white p-5 open:border-blue-200 sm:p-6"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  <span>{faq.question}</span>

                  <span
                    aria-hidden="true"
                    className="shrink-0 text-xl text-blue-600 transition group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 px-6 py-12 text-center text-white shadow-xl shadow-blue-200/50 sm:px-12 sm:py-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-blue-200">
            Explore SmartMoneyTools
          </p>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
            Looking for a financial calculator?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-blue-100">
            Explore our collection of online financial calculators for loans,
            deposits, investments and everyday calculations.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-50"
            >
              Explore All Calculators
              <span aria-hidden="true" className="ml-2">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center justify-center rounded-xl border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              About SmartMoneyTools
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}