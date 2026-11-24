
import type { Metadata } from "next";

import OneRupeeChallenge from "@/components/tools/One Rupee Challenge";

const SITE_URL = "https://yourdomain.com";

export const metadata: Metadata = {
  title: "One Rupee Saving Challenge – Daily & 52 Week Savings Tracker",

  description:
    "Start the One Rupee Challenge with FinanceTools. Track daily ₹10 savings, weekly ₹100 savings, 52-week saving goals, no-spend challenges and saving progress.",

  keywords: [
    "one rupee challenge",
    "saving challenge India",
    "daily saving challenge",
    "52 week saving challenge",
    "30 day no spend challenge",
    "₹10 daily saving",
    "₹100 weekly saving",
    "money saving tracker",
    "savings calculator India",
  ],

  alternates: {
    canonical: `${SITE_URL}/tools/one-rupee-challenge`,
  },

  openGraph: {
    title: "One Rupee Challenge | FinanceTools",
    description:
      "Build a saving habit with daily, weekly and 52-week saving challenges.",
    url: `${SITE_URL}/tools/one-rupee-challenge`,
    siteName: "FinanceTools",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqItems = [
  {
    question: "What is the One Rupee Challenge?",
    answer:
      "It is a savings habit-building activity where you follow regular saving targets and track your progress.",
  },
  {
    question: "How much can I save with the daily ₹10 challenge?",
    answer:
      "Saving ₹10 every day for 365 days results in ₹3,650.",
  },
  {
    question: "How does the 52-week savings challenge work?",
    answer:
      "You save ₹1 in the first week, ₹2 in the second week and continue increasing by ₹1 until week 52. The total is ₹1,378.",
  },
  {
    question: "How much can I save with the weekly ₹100 challenge?",
    answer:
      "Saving ₹100 every week for 52 weeks gives ₹5,200.",
  },
  {
    question: "Does FinanceTools store my savings?",
    answer:
      "No. FinanceTools only tracks the amounts you enter. Your progress is stored locally in your browser.",
  },
  {
    question: "Is the One Rupee Challenge free?",
    answer:
      "Yes. You can use this savings challenge tracker for free without creating an account.",
  },
];

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "One Rupee Challenge",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Web",
  description:
    "A free savings tracker for daily, weekly, 52-week and no-spend challenges.",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
  },
  url: `${SITE_URL}/tools/one-rupee-challenge`,
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function OneRupeeChallengePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <OneRupeeChallenge />

      <section
        className="mx-auto my-10 max-w-6xl px-5 py-6 text-slate-700"
      >
        <h2 className="text-2xl font-bold text-slate-900">
          What Is the One Rupee Saving Challenge?
        </h2>

        <p className="mt-4 leading-8">
          The One Rupee Saving Challenge is a simple way to
          develop consistent saving habits. Start with small
          amounts and track your daily savings, weekly goals
          and overall progress using FinanceTools.
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">
          Popular Money Saving Challenges in India
        </h3>

        <h4 className="mt-5 font-bold">
          Daily ₹10 Saving Challenge
        </h4>

        <p className="mt-2 leading-7">
          Save ₹10 every day for 365 days to accumulate ₹3,650.
        </p>

        <h4 className="mt-5 font-bold">
          Weekly ₹100 Saving Challenge
        </h4>

        <p className="mt-2 leading-7">
          Save ₹100 every week for 52 weeks to accumulate ₹5,200.
        </p>

        <h4 className="mt-5 font-bold">
          52 Week Saving Challenge
        </h4>

        <p className="mt-2 leading-7">
          Start with ₹1 in the first week and increase your
          weekly savings by ₹1. The total is ₹1,378.
        </p>

        <h4 className="mt-5 font-bold">
          30 Day No-Spend Challenge
        </h4>

        <p className="mt-2 leading-7">
          Avoid non-essential purchases for 30 days and
          record your estimated avoided spending.
        </p>

        <h3 className="mt-10 text-2xl font-bold text-slate-900">
          Frequently Asked Questions
        </h3>

        <div className="mt-6 grid gap-5">
          {faqItems.map((item) => (
            <article key={item.question}>
              <h4 className="font-bold text-slate-900">
                {item.question}
              </h4>

              <p className="mt-2 text-sm leading-7">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm leading-7">
          <strong>Disclaimer:</strong> This tool is for
          educational purposes and personal savings tracking.
          It does not provide investment advice or guarantee
          financial returns.
        </p>
      </section>
    </>
  );
}
