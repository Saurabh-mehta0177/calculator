
export default function AgeGuide() {
  return (
    <section className="space-y-8">

      {/* GUIDE HERO */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-600 via-purple-600 to-pink-600 p-6 text-white shadow-lg sm:p-8">

        <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

        <div className="relative z-10">

          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-violet-100">
            📚 Complete Age Guide
          </span>

          <h2 className="mt-5 text-2xl font-black sm:text-3xl">
            Everything You Need to Know About Age Calculation
          </h2>

          <p className="mt-3 max-w-3xl text-sm leading-7 text-violet-50 sm:text-base">
            Learn how age is calculated, understand years, months and
            days, discover your next birthday and explore useful facts
            about your date of birth.
          </p>

        </div>

      </div>

      {/* INTRODUCTION */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">

        <div className="flex items-center gap-3">

          <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-50 text-xl dark:bg-violet-950/50">
            🎂
          </span>

          <h2 className="text-xl font-extrabold">
            What Is an Age Calculator?
          </h2>

        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          An age calculator is an online tool that calculates the
          difference between your date of birth and a selected
          calculation date. It helps you find your exact age in
          years, months and days without manually counting dates
          on a calendar.
        </p>

        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          You can also use an age calculator to discover your total
          days lived, total weeks, upcoming birthday and the day
          of the week you were born. It is useful for personal
          calculations, birthday planning and general date-related
          information.
        </p>

      </div>

      {/* HOW IT WORKS */}
      <div className="space-y-5">

        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">
            Simple Process
          </p>

          <h2 className="mt-2 text-2xl font-black">
            How to Calculate Your Age
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Follow these simple steps to calculate your exact age.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-violet-100 text-xl font-black text-violet-700 dark:bg-violet-950 dark:text-violet-300">
              01
            </span>

            <h3 className="mt-4 font-bold">
              Select Birth Date
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Choose your date of birth using the date picker.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-purple-100 text-xl font-black text-purple-700 dark:bg-purple-950 dark:text-purple-300">
              02
            </span>

            <h3 className="mt-4 font-bold">
              Calculate Age
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Click the Calculate My Age button to start.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-pink-100 text-xl font-black text-pink-700 dark:bg-pink-950 dark:text-pink-300">
              03
            </span>

            <h3 className="mt-4 font-bold">
              View Your Results
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              See your age in years, months and days.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-fuchsia-100 text-xl font-black text-fuchsia-700 dark:bg-fuchsia-950 dark:text-fuchsia-300">
              04
            </span>

            <h3 className="mt-4 font-bold">
              Explore More
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Discover your next birthday and total days lived.
            </p>
          </div>

        </div>

      </div>

      {/* AGE CALCULATION EXPLANATION */}
      <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:p-7">

        <div className="flex items-center gap-3">

          <span className="grid h-11 w-11 place-items-center rounded-xl bg-pink-50 text-xl dark:bg-pink-950/50">
            🧮
          </span>

          <h2 className="text-xl font-extrabold">
            How Is Age Calculated?
          </h2>

        </div>

        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
          Age is calculated by comparing the date of birth with
          the current date. The difference is separated into
          completed years, remaining months and remaining days.
        </p>

        <div className="mt-5 rounded-2xl bg-gradient-to-r from-violet-50 to-pink-50 p-5 dark:from-violet-950/40 dark:to-pink-950/30">

          <h3 className="font-bold text-violet-900 dark:text-violet-200">
            Example of Age Calculation
          </h3>

          <div className="mt-4 space-y-3 text-sm">

            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-slate-600 dark:text-slate-300">
                Date of Birth
              </span>

              <strong className="text-slate-900 dark:text-white">
                15 January 2000
              </strong>
            </div>

            <div className="flex flex-wrap justify-between gap-2">
              <span className="text-slate-600 dark:text-slate-300">
                Calculation Date
              </span>

              <strong className="text-slate-900 dark:text-white">
                20 November 2025
              </strong>
            </div>

            <div className="border-t border-violet-200 pt-3 dark:border-violet-800">

              <p className="text-xs font-semibold uppercase tracking-wider text-violet-600 dark:text-violet-400">
                Calculated Age
              </p>

              <p className="mt-2 text-2xl font-black text-violet-700 dark:text-violet-300">
                25 Years, 10 Months, 5 Days
              </p>

            </div>

          </div>

        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500 dark:text-slate-400">
          This is an illustrative example. Your actual result depends
          on the selected date of birth and calculation date.
        </p>

      </div>

      {/* AGE DETAILS */}
      <div className="space-y-5">

        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">
            Understand Your Results
          </p>

          <h2 className="mt-2 text-2xl font-black">
            What Your Age Results Mean
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-3xl">🎂</span>

            <h3 className="mt-3 font-bold">
              Age in Years, Months and Days
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Your exact age is displayed as completed years,
              additional months and remaining days.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-3xl">⏳</span>

            <h3 className="mt-3 font-bold">
              Total Days Lived
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Find the total number of calendar days between
              your date of birth and the calculation date.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-3xl">🎉</span>

            <h3 className="mt-3 font-bold">
              Next Birthday
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Discover the date of your upcoming birthday and
              how many days remain until the celebration.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <span className="text-3xl">📆</span>

            <h3 className="mt-3 font-bold">
              Day of Birth
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500 dark:text-slate-400">
              Find out whether you were born on a Monday,
              Tuesday, Wednesday or another day of the week.
            </p>
          </div>

        </div>

      </div>

      {/* LEAP YEAR */}
      <div className="rounded-3xl border border-violet-100 bg-violet-50 p-5 dark:border-violet-900/60 dark:bg-violet-950/30 sm:p-7">

        <div className="flex items-center gap-3">

          <span className="grid h-11 w-11 place-items-center rounded-xl bg-white text-xl dark:bg-slate-900">
            📅
          </span>

          <h2 className="text-xl font-extrabold text-violet-950 dark:text-violet-200">
            What Is a Leap Year?
          </h2>

        </div>

        <p className="mt-4 text-sm leading-7 text-violet-900 dark:text-violet-200">
          A leap year is a calendar year that contains 366 days
          instead of the usual 365 days. February has 29 days
          during a leap year rather than 28 days.
        </p>

        <p className="mt-3 text-sm leading-7 text-violet-900 dark:text-violet-200">
          Leap years are important in date calculations because
          they affect the total number of days between two dates.
          A reliable age calculator accounts for the actual
          calendar dates when calculating age.
        </p>

      </div>

      {/* FAQ SECTION */}
      <div className="space-y-5">

        <div>
          <p className="text-xs font-bold uppercase tracking-[.2em] text-violet-600 dark:text-violet-400">
            Frequently Asked Questions
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Age Calculator FAQs
          </h2>

          <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
            Find answers to common questions about calculating age.
          </p>
        </div>

        <div className="space-y-3">

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              How can I calculate my exact age?

              <span className="text-xl text-violet-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Enter your date of birth in the age calculator and
              click Calculate My Age. The calculator compares your
              birth date with the current date to find your age
              in years, months and days.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              Can I calculate someone else's age?

              <span className="text-xl text-violet-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Yes. You can enter another person's date of birth
              to calculate their age. Reset the calculator before
              entering a different date.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              Does the age calculator consider leap years?

              <span className="text-xl text-violet-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Calendar-based age calculations should account
              for leap years and the different number of days
              in each month.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              Can I calculate my age in total days?

              <span className="text-xl text-violet-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Yes. If your age calculation provides total days
              lived, you can use that result to understand how
              many calendar days have passed since your birth.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              How do I find out when my next birthday is?

              <span className="text-xl text-violet-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Enter your date of birth and calculate your age.
              If your calculator includes birthday details,
              it will show your next birthday and the remaining
              days until it arrives.
            </p>
          </details>

          <details className="group rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold">
              Is this age calculator free to use?

              <span className="text-xl text-violet-600 transition-transform group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 text-sm leading-7 text-slate-500 dark:text-slate-400">
              Yes. You can use this age calculator to calculate
              age and explore birthday details without needing
              a manual calendar calculation.
            </p>
          </details>

        </div>

      </div>

      {/* FINAL CTA */}
      <div className="rounded-3xl bg-gradient-to-r from-violet-600 via-purple-600 to-pink-600 px-6 py-8 text-center text-white shadow-lg sm:px-10">

        <span className="text-4xl">🎈</span>

        <h2 className="mt-4 text-2xl font-black">
          Ready to Discover Your Exact Age?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-violet-100">
          Enter your date of birth in the calculator above and
          discover your age, birthday countdown and more.
        </p>

        <p className="mt-5 text-sm font-bold text-white">
          Every birthday tells a new story! 🎂
        </p>

      </div>

    </section>
  )
}
