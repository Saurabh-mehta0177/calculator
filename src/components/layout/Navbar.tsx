"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navLinks = [
  { name: "Money Tools", href: "/money-tools" },
  { name: "Tools", href: "/tools" },
  { name: "Calculator", href: "/calculator" },
  { name: "Guides", href: "/guide" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const toolLinks = [
  {
    name: "EMI Calculator",
    href: "/emi-calculator",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "FD Calculator",
    href: "/fd-calculator",
    icon: "🏦",
    color: "from-emerald-500 to-teal-500",
  },
  {
    name: "Loan Calculator",
    href: "/loan-calculator",
    icon: "💰",
    color: "from-orange-500 to-amber-500",
  },
  {
    name: "SIP Calculator",
    href: "/sip-calculator",
    icon: "📈",
    color: "from-purple-500 to-pink-500",
  },
  {
    name: "RD Calculator",
    href: "/rd-calculator",
    icon: "💵",
    color: "from-pink-500 to-rose-500",
  },
];

const moneyToolLinks = [
  {
    name: "Financial Regret",
    href: "/financial-regret",
    icon: "💸",
    color: "from-red-500 to-orange-500",
  },
  {
    name: "Money Leak Detector",
    href: "/money-leak-detector",
    icon: "🔍",
    color: "from-blue-500 to-cyan-500",
  },
  {
    name: "Money Time Machine",
    href: "/money-time-machine",
    icon: "⏳",
    color: "from-purple-500 to-indigo-500",
  },
  {
    name: "Money's Future",
    href: "/Moneyfuture",
    icon: "🚀",
    color: "from-green-500 to-emerald-500",
  },
  {
    name: "One Rupee Challenge",
    href: "/one-rupee-challenge",
    icon: "₹",
    color: "from-yellow-500 to-orange-500",
  },
];

const themes = [
  { name: "Light", value: "light", icon: "☀️" },
  { name: "Dark", value: "dark", icon: "🌙" },
  { name: "Reading", value: "reading", icon: "📖" },
];

export default function Navbar() {
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const [moneyToolsOpen, setMoneyToolsOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Active route checker
  const active = (href: string) => {
    return href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");
  };

  // Close all mobile menus
  const closeMenu = () => {
    setMenuOpen(false);
    setToolsOpen(false);
    setMoneyToolsOpen(false);
    setThemeOpen(false);
  };

  const currentTheme =
    themes.find((item) => item.value === theme) || themes[0];

  // Render dropdown links
  const renderToolItems = (items: typeof toolLinks) => (
    <div className="space-y-1">
      {items.map((tool) => (
        <Link
          key={tool.href}
          href={tool.href}
          onClick={closeMenu}
          className="group/item flex items-center gap-3 rounded-xl p-2.5 transition-all duration-200 hover:translate-x-1 hover:bg-blue-50 dark:hover:bg-gray-800"
        >
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} text-lg text-white shadow-md`}
          >
            {tool.icon}
          </span>

          <span className="flex-1 text-sm font-bold text-gray-700 dark:text-gray-200">
            {tool.name}
          </span>

          <span className="text-blue-500 opacity-0 transition group-hover/item:opacity-100">
            →
          </span>
        </Link>
      ))}
    </div>
  );

  // Desktop dropdown
  const renderDesktopDropdown = (
    title: string,
    subtitle: string,
    items: typeof toolLinks
  ) => (
    <div className="invisible absolute left-0 top-full z-50 w-[310px] translate-y-3 pt-4 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white p-3 shadow-[0_20px_60px_rgba(30,64,175,0.18)] dark:border-gray-700 dark:bg-[#111c30]">
        <div className="mb-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-4 text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-extrabold">{title}</p>
              <p className="mt-1 text-xs text-blue-100">{subtitle}</p>
            </div>
            <span className="text-3xl">🚀</span>
          </div>
        </div>

        {renderToolItems(items)}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full">

      {/* TOP GRADIENT LINE */}
      <div className="h-[3px] bg-gradient-to-r from-cyan-400 via-blue-600 via-purple-500 to-pink-500" />

      <nav className="border-b border-white/20 bg-white/85 shadow-[0_8px_30px_rgba(37,99,235,0.07)] backdrop-blur-2xl transition-colors dark:border-gray-700/60 dark:bg-[#0b1120]/90">

        <div className="mx-auto flex h-[78px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* LOGO */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 opacity-50 blur-lg transition duration-300 group-hover:opacity-90" />

              <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-700 text-white shadow-xl shadow-blue-500/30 transition duration-300 group-hover:-rotate-6 group-hover:scale-110">
                <span className="text-3xl font-black">F</span>
                <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-white/30 blur-lg" />
              </div>
            </div>

            <div>
              <div className="text-[21px] font-black tracking-tight text-gray-900 dark:text-white">
                Finance
                <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                  Tools
                </span>
              </div>

              <div className="mt-[-2px] text-[9px] font-bold tracking-[2.5px] text-gray-500 dark:text-gray-400">
                SMART FINANCIAL TOOLS
              </div>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => {
              const isDropdown =
                link.name === "Tools" || link.name === "Money Tools";

              return (
                <div key={link.name} className="group relative">
                  <Link
                    href={link.href}
                    aria-haspopup={isDropdown ? "true" : undefined}
                    className={`relative flex items-center gap-1.5 rounded-xl px-3.5 py-3 text-[13px] font-bold transition-all duration-300 ${
                      active(link.href)
                        ? "bg-gradient-to-r from-blue-600/10 to-purple-600/10 text-blue-700 dark:text-blue-400"
                        : "text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`}
                  >
                    {link.name}

                    {isDropdown && (
                      <svg
                        className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-180 group-focus-within:rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="m5 7 5 5 5-5" />
                      </svg>
                    )}

                    {active(link.href) && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-gradient-to-r from-blue-500 to-purple-600" />
                    )}
                  </Link>

                  {/* TOOLS DROPDOWN */}
                  {link.name === "Tools" &&
                    renderDesktopDropdown(
                      "Financial Calculators",
                      "Calculate. Plan. Grow.",
                      toolLinks
                    )}

                  {/* MONEY TOOLS DROPDOWN */}
                  {link.name === "Money Tools" &&
                    renderDesktopDropdown(
                      "Smart Money Tools",
                      "Understand. Save. Grow.",
                      moneyToolLinks
                    )}
                </div>
              );
            })}
          </div>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* THEME BUTTON */}
            <div className="relative">
              <button
                type="button"
                disabled={!mounted}
                onClick={() => setThemeOpen(!themeOpen)}
                aria-label="Choose theme"
                aria-expanded={themeOpen}
                className="flex h-11 items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 shadow-sm transition-all hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/10 disabled:opacity-50 dark:border-gray-700 dark:bg-gray-800"
              >
                <span className="text-lg">
                  {mounted ? currentTheme.icon : "☀️"}
                </span>

                <span className="hidden text-xs font-bold text-gray-700 dark:text-gray-200 xl:block">
                  Theme
                </span>

                <span className="text-xs text-gray-400">⌄</span>
              </button>

              {themeOpen && (
                <>
                  <button
                    type="button"
                    aria-label="Close theme selector"
                    onClick={() => setThemeOpen(false)}
                    className="fixed inset-0 z-40 cursor-default"
                  />

                  <div className="absolute right-0 top-full z-50 mt-3 w-60 rounded-2xl border border-gray-200 bg-white p-3 shadow-2xl dark:border-gray-700 dark:bg-[#111c30]">
                    <p className="px-2 pb-3 text-sm font-extrabold text-gray-900 dark:text-white">
                      Choose Appearance
                    </p>

                    {themes.map((item) => (
                      <button
                        key={item.value}
                        type="button"
                        onClick={() => {
                          setTheme(item.value);
                          setThemeOpen(false);
                        }}
                        className={`mb-1 flex w-full items-center gap-3 rounded-xl p-3 transition ${
                          theme === item.value
                            ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 dark:from-blue-500/15 dark:to-purple-500/15 dark:text-blue-400"
                            : "text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                        }`}
                      >
                        <span className="text-xl">{item.icon}</span>

                        <span className="flex-1 text-left text-sm font-bold">
                          {item.name} Mode
                        </span>

                        {theme === item.value && (
                          <span className="font-bold text-blue-600">✓</span>
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* EXPLORE CTA */}
            <Link
              href="/tools"
              className="group hidden items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-5 py-3 text-xs font-extrabold text-white shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-purple-500/30 sm:inline-flex"
            >
              Explore Tools
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>

            {/* MOBILE MENU BUTTON */}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(!menuOpen);
                setThemeOpen(false);
              }}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 transition hover:border-blue-400 hover:text-blue-600 dark:border-gray-700 dark:bg-gray-800 dark:text-white lg:hidden"
            >
              {menuOpen ? (
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M3 6h18M3 12h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="border-b border-gray-200 bg-white p-4 shadow-2xl dark:border-gray-800 dark:bg-[#0b1120] lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">

            {navLinks.map((link) => {
              const isTools = link.name === "Tools";
              const isMoneyTools = link.name === "Money Tools";

              if (isTools || isMoneyTools) {
                const isOpen = isTools ? toolsOpen : moneyToolsOpen;
                const setOpen = isTools
                  ? setToolsOpen
                  : setMoneyToolsOpen;

                const items = isTools ? toolLinks : moneyToolLinks;

                return (
                  <div key={link.name}>
                    <button
                      type="button"
                      onClick={() => setOpen(!isOpen)}
                      aria-expanded={isOpen}
                      className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition ${
                        active(link.href)
                          ? "bg-blue-50 text-blue-700 dark:bg-gray-800 dark:text-blue-400"
                          : "text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-800"
                      }`}
                    >
                      {link.name}

                      <span className="text-blue-600">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="ml-4 space-y-1 border-l-2 border-blue-200 py-2 pl-3 dark:border-gray-700">
                        {items.map((tool) => (
                          <Link
                            key={tool.href}
                            href={tool.href}
                            onClick={closeMenu}
                            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-semibold text-gray-600 transition hover:bg-blue-50 dark:text-gray-300 dark:hover:bg-gray-800"
                          >
                            <span
                              className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${tool.color} text-white`}
                            >
                              {tool.icon}
                            </span>
                            {tool.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`block rounded-xl px-4 py-3 text-sm font-bold transition ${
                    active(link.href)
                      ? "bg-gradient-to-r from-blue-50 to-purple-50 text-blue-700 dark:from-blue-500/10 dark:to-purple-500/10 dark:text-blue-400"
                      : "text-gray-700 hover:bg-blue-50 dark:text-gray-200 dark:hover:bg-gray-800"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}

            {/* MOBILE THEMES */}
            <div className="mt-3 rounded-2xl border border-gray-200 p-3 dark:border-gray-700">
              <p className="mb-3 text-xs font-extrabold uppercase tracking-wider text-gray-500">
                Appearance
              </p>

              <div className="grid grid-cols-3 gap-2">
                {themes.map((item) => (
                  <button
                    key={item.value}
                    type="button"
                    disabled={!mounted}
                    onClick={() => setTheme(item.value)}
                    className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition ${
                      theme === item.value
                        ? "border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50 text-blue-700 dark:from-blue-500/10 dark:to-purple-500/10 dark:text-blue-400"
                        : "border-gray-200 text-gray-600 dark:border-gray-700 dark:text-gray-300"
                    }`}
                  >
                    <span className="text-xl">{item.icon}</span>
                    <span className="text-xs font-bold">{item.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* MOBILE EXPLORE CTA */}
            <Link
              href="/tools"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-4 py-3 text-center text-sm font-extrabold text-white shadow-lg"
            >
              Explore All Tools →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
