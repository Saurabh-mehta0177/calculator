
import Link from 'next/link'

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'All Financial Tools', href: '/tools' },
      // { name: 'Finance News', href: '/news' },
      { name: 'Finance Guides', href: '/guide' },
    ],
  },
  {
    title: 'Popular Calculators',
    links: [
      { name: 'EMI Calculator', href: '/emi-calculator' },
      { name: 'FD Calculator', href: '/fd-calculator' },
      { name: 'RD Calculator', href: '/rd-calculator' },
      { name: 'SIP Calculator', href: '/sip-calculator' },
      { name: 'Home Loan Calculator', href: '/home-loan' },
      { name: 'GST Calculator', href: '/gst-calculator' },
    ],
  },
  {
    title: 'Financial Tools',
    links: [
      { name: 'Money Time Machine', href: '/money-time-machine' },
      { name: 'Money Leak Detector', href: '/money-leak-detector' },
      { name: 'Financial Regret Calculator', href: '/financial-regret' },
      { name: 'One Rupee Challenge', href: '/one-rupee-challenge' },
    ],
  },
  {
    title: 'Company & Legal',
    links: [
      { name: 'About Us', href: '/about' },
      { name: 'Contact Us', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Disclaimer', href: '/disclaimer' },
      { name: 'Terms & Conditions', href: '/terms' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden bg-gradient-to-br from-slate-950 via-gray-950 to-blue-950 text-white">

      {/* Background Effects */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-6 lg:px-8">

        {/* Brand & Newsletter-style Intro */}
        <div className="grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-3">

          <div className="lg:col-span-2">

            <Link
              href="/"
              aria-label="FinanceTools homepage"
              className="inline-flex items-center gap-3"
            >

              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-extrabold shadow-lg shadow-blue-500/20">
                F
              </div>

              <span className="text-2xl font-extrabold tracking-tight">
                SmartMoney<span className="text-blue-400">Tools</span>
              </span>
  
            </Link>

            <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400">
              SmartMoneyTools is your destination for free online financial calculators,
               practical finance guides and useful money management tools. Explore loan payments,
                savings estimates, investment projections and financial planning resources to make more informed financial decisions.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
                🆓 Free Financial Tools
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
                📊 Easy Calculations
              </span>

              <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-gray-300">
                📱 Mobile Friendly
              </span>

            </div>

          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">

            <span className="text-3xl" aria-hidden="true">
              💡
            </span>

            <h2 className="mt-3 text-lg font-bold text-white">
              Plan Your Financial Future
            </h2>

            <p className="mt-2 text-sm leading-6 text-gray-400">
              Explore our free calculators and learn how
              loans, savings and investments work.
            </p>

            <Link
              href="/tools"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Explore All Tools
              <span aria-hidden="true">→</span>
            </Link>

          </div>

        </div>

        {/* Footer Links */}
        <nav
          aria-label="Footer navigation"
          className="grid grid-cols-2 gap-x-6 gap-y-10 border-b border-white/10 py-10 sm:grid-cols-2 lg:grid-cols-4"
        >

          {footerLinks.map((section) => (

            <div key={section.title}>

              <h2 className="mb-5 text-sm font-extrabold uppercase tracking-wider text-white">
                {section.title}
              </h2>

              <ul className="space-y-3">

                {section.links.map((link) => (

                  <li key={link.href}>

                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-2 text-sm text-gray-400 transition duration-200 hover:translate-x-1 hover:text-blue-400"
                    >

                      <span
                        aria-hidden="true"
                        className="text-blue-500 opacity-0 transition group-hover:opacity-100"
                      >
                        →
                      </span>

                      {link.name}

                    </Link>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </nav>

        {/* Disclaimer */}
        <section
          aria-labelledby="footer-disclaimer-heading"
          className="mt-10 rounded-2xl border border-amber-500/20 bg-amber-500/[0.05] p-5 sm:p-6"
        >

          <div className="flex items-start gap-3">

            <span
              aria-hidden="true"
              className="text-2xl"
            >
              ⚠️
            </span>

            <div>

              <h2
                id="footer-disclaimer-heading"
                className="text-sm font-bold text-amber-300"
              >
                Important SmartMoneyTools Disclaimer
              </h2>

              <p className="mt-3 text-xs leading-7 text-gray-400 sm:text-sm">
                SmartMoneyTools provides financial calculators,
                estimates and educational information for general
                informational purposes only. Calculator results
                are based on the details and assumptions entered
                by users and may differ from actual calculations
                made by banks, financial institutions or investment
                providers. Investment returns are not guaranteed.
                Nothing on this website should be considered
                personalized financial, investment, tax or legal
                advice. Always verify important financial details
                with the relevant institution or a qualified
                professional before making financial decisions.
              </p>

            </div>

          </div>

        </section>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">

          <div>

            <p className="text-xs leading-6 text-gray-500">
              © {new Date().getFullYear()} SmartMoneyTools.
              All Rights Reserved.
            </p>

            <p className="mt-1 text-xs text-gray-600">
              Made for smarter Money Tools decisions.
            </p>

          </div>

          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-medium text-gray-400 transition hover:text-blue-400"
          >
            Back to Home
            <span aria-hidden="true">↑</span>
          </Link>

        </div>

      </div>

    </footer>
  )
}
