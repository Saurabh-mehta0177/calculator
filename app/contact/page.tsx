
"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const mailto = `mailto:contact@financetools.com?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;

    window.location.href = mailto;
    setStatus("Your email application is opening. Please send your message.");
  };

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-950 via-blue-900 to-indigo-950 px-5 py-20 text-white">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-indigo-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            We are here to help
          </div>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight md:text-6xl">
            Let's Talk About
            <span className="block text-blue-300">
              Your Financial Questions.
            </span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Have a question about our financial calculators, investment tools,
            website content or suggestions? We would love to hear from you.
            Get in touch with the FinanceTools team.
          </p>

          <div className="mt-9 flex flex-wrap gap-3 text-sm">
            <span className="rounded-lg bg-white/10 px-4 py-3">
              ✓ General Enquiries
            </span>
            <span className="rounded-lg bg-white/10 px-4 py-3">
              ✓ Technical Support
            </span>
            <span className="rounded-lg bg-white/10 px-4 py-3">
              ✓ Feedback & Suggestions
            </span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-5">

          {/* Contact Information */}
          <div className="space-y-6 lg:col-span-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Contact Information
              </p>

              <h2 className="mt-3 text-3xl font-bold text-slate-900">
                Get in touch with us
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Your feedback helps us improve our tools and provide a better
                experience. Contact us for questions, suggestions, corrections
                or business enquiries.
              </p>
            </div>

            {/* Email Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                  ✉️
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Email Support
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    For all general enquiries
                  </p>
                  <a
                    href="mailto:contact@financetools.com"
                    className="mt-2 inline-block break-all font-medium text-blue-600 hover:underline"
                  >
                    contact@financetools.com
                  </a>
                </div>
              </div>
            </div>

            {/* Website Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-100 text-2xl">
                  🌐
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Our Website
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Explore our free financial tools
                  </p>
                  <Link
                    href="https://smartmoneytools.xyz/"
                    className="mt-2 inline-block font-medium text-blue-600 hover:underline"
                  >
                    Visit FinanceTools →
                  </Link>
                </div>
              </div>
            </div>

            {/* Support Card */}
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-2xl">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">
                    Feedback & Suggestions
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    Let us know how we can improve our calculators, features
                    and overall website experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-blue-50 p-6">
              <h3 className="font-bold text-blue-950">
                Our Commitment
              </h3>
              <p className="mt-2 text-sm leading-6 text-blue-900">
                We value your privacy and will use the information you provide
                only to respond to your enquiry. Please do not share passwords,
                bank details or other sensitive financial information.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/50 sm:p-10">
              <div className="mb-8">
                <span className="text-sm font-bold uppercase tracking-widest text-blue-600">
                  Send Us a Message
                </span>

                <h2 className="mt-3 text-3xl font-bold text-slate-900">
                  How can we help you?
                </h2>

                <p className="mt-3 text-sm leading-6 text-slate-500">
                  Fill out the form below and your email application will
                  open with your message.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold">
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      maxLength={100}
                      value={form.name}
                      onChange={(e) =>
                        setForm({ ...form, name: e.target.value })
                      }
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold">
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      maxLength={254}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={form.subject}
                    onChange={(e) =>
                      setForm({ ...form, subject: e.target.value })
                    }
                    className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Enquiry">General Enquiry</option>
                    <option value="Calculator Support">Calculator Support</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Content Correction">Content Correction</option>
                    <option value="Feedback and Suggestions">Feedback & Suggestions</option>
                    <option value="Business Enquiry">Business Enquiry</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-semibold">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    minLength={10}
                    maxLength={3000}
                    rows={6}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    placeholder="Write your message here..."
                    className="w-full resize-y rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
                  />
                  <p className="mt-2 text-right text-xs text-slate-400">
                    {form.message.length}/3000 characters
                  </p>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-6 py-4 font-bold text-white shadow-lg shadow-blue-200 transition hover:-translate-y-0.5 hover:bg-blue-800 active:translate-y-0"
                >
                  Send Message
                  <span>→</span>
                </button>

                {status && (
                  <p role="status" className="rounded-xl bg-green-50 p-4 text-sm text-green-700">
                    {status}
                  </p>
                )}

                <p className="text-center text-xs leading-6 text-slate-500">
                  By contacting us, you agree that we may use your submitted
                  information to respond to your enquiry. Read our{" "}
                  <Link href="/privacy-policy" className="font-semibold text-blue-600 hover:underline">
                    Privacy Policy
                  </Link>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white px-5 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
              Need Help?
            </p>
            <h2 className="mt-3 text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-600">
              Quick answers to common questions about contacting FinanceTools.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {[
              {
                q: "Are FinanceTools calculators free?",
                a: "Yes. Our financial calculators are available free of charge. You can use them to estimate loan payments, deposits, savings and investment growth.",
              },
              {
                q: "How can I report a calculator issue?",
                a: "Select Calculator Support or Technical Issue in the contact form and explain the problem with relevant details.",
              },
              {
                q: "Can I suggest a new financial calculator?",
                a: "Absolutely. We welcome suggestions for new calculators, features and improvements to our existing financial tools.",
              },
              {
                q: "Are calculator results guaranteed?",
                a: "No. Calculator results are estimates based on the information and assumptions entered. Actual financial outcomes may differ.",
              },
              {
                q: "How can I contact FinanceTools?",
                a: "You can contact our team using the contact form on this page or by emailing contact@financetools.com.",
              },
            ].map((item, index) => (
              <details
                key={index}
                className="group rounded-xl border border-slate-200 bg-slate-50 p-5"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-900">
                  {item.q}
                  <span className="text-xl text-blue-600 transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-blue-900 to-indigo-900 px-6 py-12 text-center text-white sm:px-12">
          <div className="text-4xl">💡</div>
          <h2 className="mt-4 text-3xl font-bold">
            Make Smarter Financial Decisions
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Explore our free financial calculators and take the next step
            towards better financial planning.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex rounded-xl bg-white px-7 py-3.5 font-bold text-blue-900 transition hover:bg-blue-50"
          >
            Explore Financial Tools →
          </Link>
        </div>
      </section>
    </main>
  );
}
