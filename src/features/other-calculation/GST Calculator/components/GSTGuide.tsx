
import React from "react";

const faqs = [
  {
    question: "What is GST?",
    answer:
      "GST (Goods and Services Tax) is an indirect tax charged on the supply of goods and services in India. It replaced several indirect taxes and introduced a unified tax structure.",
  },
  {
    question: "How is GST calculated?",
    answer:
      "GST is calculated by multiplying the taxable amount by the applicable GST rate and dividing the result by 100. For example, GST on ₹10,000 at 18% is ₹1,800.",
  },
  {
    question: "What is the formula for calculating GST?",
    answer:
      "For an amount excluding GST, GST Amount = Original Amount × GST Rate ÷ 100. For an amount including GST, GST Amount = Inclusive Amount × GST Rate ÷ (100 + GST Rate).",
  },
  {
    question: "What are CGST, SGST and IGST?",
    answer:
      "CGST and SGST are generally charged on intra-state supplies, with the tax shared between the Central and State Governments. IGST is generally charged on inter-state supplies.",
  },
  {
    question: "What are the different GST rates in India?",
    answer:
      "Common GST rate slabs include 5%, 12%, 18% and 28%. Some goods and services may be exempt, nil-rated, or subject to special rates or compensation cess. The applicable rate depends on the product or service classification.",
  },
  {
    question: "What is the difference between GST inclusive and GST exclusive?",
    answer:
      "A GST-exclusive amount is the price before GST is added. A GST-inclusive amount already contains GST. The calculator can help determine the tax amount and final price in either case.",
  },
  {
    question: "Can I calculate GST for any amount?",
    answer:
      "Yes. You can enter the taxable amount and select the applicable GST rate to estimate the GST amount and total price.",
  },
  {
    question: "Is this GST calculator free to use?",
    answer:
      "Yes. This GST calculator is free to use and helps you quickly estimate GST amounts, tax components and final prices.",
  },
];

const GSTGuide: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="mt-10 space-y-8 text-gray-700 dark:text-gray-300">
      {/* SEO Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />

      {/* Introduction */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-900 sm:p-8">
        <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
          GST Calculator – Calculate Goods and Services Tax in India
        </h2>

        <p className="mb-4 leading-7">
          A GST Calculator is a simple online tool that helps you calculate
          Goods and Services Tax (GST) on products and services. Whether you
          are a business owner, shopkeeper, freelancer, professional or
          customer, this calculator makes it easy to calculate GST and find
          the final price of a product or service.
        </p>

        <p className="leading-7">
          Enter an amount, select the applicable GST rate and calculate the
          tax instantly. You can calculate GST on an amount before tax or
          extract GST from an amount that already includes tax.
        </p>
      </div>

      {/* What is GST */}
      <div>
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          What is GST (Goods and Services Tax)?
        </h2>

        <p className="mb-3 leading-7">
          GST stands for Goods and Services Tax. It is an indirect tax
          introduced in India on 1 July 2017. GST is charged on the supply
          of goods and services and is designed to create a unified indirect
          taxation system.
        </p>

        <p className="leading-7">
          GST replaced several earlier indirect taxes, including VAT,
          service tax and excise duty, subject to the applicable legal
          provisions. It is administered through a dual model involving
          Central and State Governments.
        </p>
      </div>

      {/* GST Types */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Types of GST in India
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/30">
            <h3 className="mb-2 text-lg font-bold text-blue-700 dark:text-blue-300">
              CGST
            </h3>
            <p className="text-sm leading-6">
              Central Goods and Services Tax is collected by the Central
              Government on eligible intra-state supplies.
            </p>
          </div>

          <div className="rounded-xl border border-indigo-200 bg-indigo-50 p-5 dark:border-indigo-900 dark:bg-indigo-950/30">
            <h3 className="mb-2 text-lg font-bold text-indigo-700 dark:text-indigo-300">
              SGST
            </h3>
            <p className="text-sm leading-6">
              State Goods and Services Tax is collected by the State
              Government on eligible intra-state supplies.
            </p>
          </div>

          <div className="rounded-xl border border-purple-200 bg-purple-50 p-5 dark:border-purple-900 dark:bg-purple-950/30">
            <h3 className="mb-2 text-lg font-bold text-purple-700 dark:text-purple-300">
              IGST
            </h3>
            <p className="text-sm leading-6">
              Integrated Goods and Services Tax is generally applicable
              to inter-state supplies and certain other specified
              transactions.
            </p>
          </div>

          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-5 dark:border-emerald-900 dark:bg-emerald-950/30">
            <h3 className="mb-2 text-lg font-bold text-emerald-700 dark:text-emerald-300">
              UTGST
            </h3>
            <p className="text-sm leading-6">
              Union Territory Goods and Services Tax applies to eligible
              intra-Union Territory supplies where the UTGST framework
              is applicable.
            </p>
          </div>
        </div>
      </div>

      {/* GST Rates */}
      <div>
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          GST Rates in India
        </h2>

        <p className="mb-4 leading-7">
          GST rates depend on the classification of goods and services.
          Common GST rate slabs include 5%, 12%, 18% and 28%. Certain
          supplies may be exempt, nil-rated or subject to special provisions.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">GST Rate</th>
                <th className="px-4 py-3 font-semibold">General description</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3 font-semibold">0%</td>
                <td className="px-4 py-3">
                  Nil-rated or exempt supplies, as applicable
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">5%</td>
                <td className="px-4 py-3">
                  Goods and services notified under the 5% slab
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">12%</td>
                <td className="px-4 py-3">
                  Goods and services notified under the 12% slab
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">18%</td>
                <td className="px-4 py-3">
                  Goods and services notified under the 18% slab
                </td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-semibold">28%</td>
                <td className="px-4 py-3">
                  Goods and services notified under the 28% slab
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm leading-6 text-gray-500 dark:text-gray-400">
          Note: This table is a general overview, not a product-wise rate
          list. Always verify the latest applicable GST rate for the
          relevant HSN or SAC classification.
        </p>
      </div>

      {/* GST Formula */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          GST Calculation Formula
        </h2>

        <p className="mb-4 leading-7">
          GST calculation depends on whether the entered amount is before
          GST or already includes GST.
        </p>

        <div className="space-y-4">
          <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-3 font-bold text-gray-900 dark:text-white">
              1. GST on an amount excluding GST
            </h3>

            <div className="rounded-lg bg-blue-50 p-4 font-mono text-sm text-blue-800 dark:bg-blue-950/40 dark:text-blue-300">
              GST Amount = Original Amount × GST Rate ÷ 100
            </div>

            <p className="mt-3 text-sm leading-6">
              Final Amount = Original Amount + GST Amount
            </p>
          </div>

          <div className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900">
            <h3 className="mb-3 font-bold text-gray-900 dark:text-white">
              2. GST from an amount including GST
            </h3>

            <div className="rounded-lg bg-purple-50 p-4 font-mono text-sm text-purple-800 dark:bg-purple-950/40 dark:text-purple-300">
              GST Amount = Inclusive Amount × GST Rate ÷ (100 + GST Rate)
            </div>

            <p className="mt-3 text-sm leading-6">
              Original Amount = Inclusive Amount − GST Amount
            </p>
          </div>
        </div>
      </div>

      {/* GST Calculation Example */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          GST Calculation Examples
        </h2>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900 sm:p-6">
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
            Example 1: Adding 18% GST
          </h3>

          <p className="mb-4 leading-7">
            Suppose a product costs ₹10,000 before GST and the applicable
            GST rate is 18%.
          </p>

          <div className="space-y-2 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <div className="flex justify-between gap-4 text-sm">
              <span>Original Price</span>
              <span className="font-semibold">₹10,000</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span>GST Rate</span>
              <span className="font-semibold">18%</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span>GST Amount</span>
              <span className="font-semibold">₹1,800</span>
            </div>
            <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
            <div className="flex justify-between gap-4 font-bold text-gray-900 dark:text-white">
              <span>Final Price</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                ₹11,800
              </span>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Calculation: ₹10,000 × 18 ÷ 100 = ₹1,800.
          </p>
        </div>

        <div className="mt-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900 sm:p-6">
          <h3 className="mb-3 font-semibold text-gray-900 dark:text-white">
            Example 2: Removing 18% GST
          </h3>

          <p className="mb-4 leading-7">
            Suppose the final price of a product is ₹11,800, including
            18% GST. To find the original price and GST amount:
          </p>

          <div className="space-y-2 rounded-xl bg-gray-50 p-4 dark:bg-gray-800">
            <div className="flex justify-between gap-4 text-sm">
              <span>GST Inclusive Price</span>
              <span className="font-semibold">₹11,800</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span>GST Rate</span>
              <span className="font-semibold">18%</span>
            </div>
            <div className="flex justify-between gap-4 text-sm">
              <span>Original Price</span>
              <span className="font-semibold">₹10,000</span>
            </div>
            <div className="my-2 border-t border-gray-200 dark:border-gray-700" />
            <div className="flex justify-between gap-4 font-bold text-gray-900 dark:text-white">
              <span>GST Included</span>
              <span className="text-emerald-600 dark:text-emerald-400">
                ₹1,800
              </span>
            </div>
          </div>

          <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
            Calculation: ₹11,800 × 18 ÷ 118 = ₹1,800.
          </p>
        </div>
      </div>

      {/* CGST SGST IGST Example */}
      <div>
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          Difference Between CGST, SGST and IGST
        </h2>

        <p className="mb-4 leading-7">
          For an eligible intra-state transaction, the GST rate is
          generally split equally between CGST and SGST. For an
          inter-state transaction, IGST is generally charged.
        </p>

        <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 dark:bg-gray-800">
              <tr>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                  Tax Type
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                  Rate
                </th>
                <th className="px-4 py-3 font-semibold text-gray-900 dark:text-white">
                  Tax Amount
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              <tr>
                <td className="px-4 py-3">CGST</td>
                <td className="px-4 py-3">9%</td>
                <td className="px-4 py-3">₹900</td>
              </tr>
              <tr>
                <td className="px-4 py-3">SGST</td>
                <td className="px-4 py-3">9%</td>
                <td className="px-4 py-3">₹900</td>
              </tr>
              <tr>
                <td className="px-4 py-3">IGST (instead of CGST + SGST)</td>
                <td className="px-4 py-3">18%</td>
                <td className="px-4 py-3">₹1,800</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Example based on a taxable value of ₹10,000 and an illustrative
          total GST rate of 18%. CGST and SGST or IGST apply according
          to the nature and place of supply.
        </p>
      </div>

      {/* Benefits */}
      <div>
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          Benefits of Using an Online GST Calculator
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          {[
            {
              title: "Fast Calculations",
              description:
                "Calculate GST amounts and final prices within seconds.",
            },
            {
              title: "Accurate Estimates",
              description:
                "Reduce manual calculation errors when applying GST formulas.",
            },
            {
              title: "Inclusive and Exclusive GST",
              description:
                "Calculate tax on an original price or extract it from a final price.",
            },
            {
              title: "Easy to Use",
              description:
                "No complicated calculations or spreadsheet formulas are required.",
            },
            {
              title: "Free Online Tool",
              description:
                "Use the calculator without paying a calculation fee.",
            },
            {
              title: "Useful for Businesses and Customers",
              description:
                "Estimate product prices, service charges and GST components.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-900"
            >
              <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm leading-6">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How to Use */}
      <div>
        <h2 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
          How to Use This GST Calculator
        </h2>

        <ol className="list-inside list-decimal space-y-3 leading-7">
          <li>Enter the amount you want to calculate GST on.</li>
          <li>Select whether the amount includes GST or excludes GST.</li>
          <li>Choose the applicable GST rate.</li>
          <li>View the calculated GST amount.</li>
          <li>Check the original amount and final amount in the result.</li>
        </ol>

        <p className="mt-4 leading-7">
          The calculator is designed to make everyday GST calculations
          easier for individuals, customers, shopkeepers and businesses.
        </p>
      </div>

      {/* Important Note */}
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 dark:border-amber-900 dark:bg-amber-950/30">
        <h2 className="mb-2 font-bold text-amber-900 dark:text-amber-300">
          Important Note
        </h2>
        <p className="text-sm leading-6 text-amber-900 dark:text-amber-200">
          This calculator provides mathematical estimates based on the
          GST rate entered by the user. It does not determine the correct
          legal GST classification or applicable tax rate for a product
          or service. Verify the applicable rate, exemptions, place of
          supply and other GST requirements before preparing invoices
          or filing returns.
        </p>
      </div>

      {/* FAQs */}
      <div>
        <h2 className="mb-5 text-2xl font-bold text-gray-900 dark:text-white">
          Frequently Asked Questions (FAQs)
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={faq.question}
              className="group rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-900"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-gray-900 marker:content-none dark:text-white">
                <span>{faq.question}</span>
                <span className="shrink-0 text-xl text-blue-600 transition-transform group-open:rotate-45 dark:text-blue-400">
                  +
                </span>
              </summary>

              <p className="mt-3 border-t border-gray-100 pt-3 text-sm leading-7 text-gray-600 dark:border-gray-700 dark:text-gray-400">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>
      </div>

      {/* Disclaimer */}
      <p className="border-t border-gray-200 pt-5 text-xs leading-6 text-gray-500 dark:border-gray-700 dark:text-gray-400">
        Disclaimer: The information provided in this GST guide is for
        educational and estimation purposes only. GST rates and
        regulations may change. Please refer to official GST notifications
        and consult a qualified tax professional for specific tax advice.
      </p>
    </section>
  );
};

export default GSTGuide;
