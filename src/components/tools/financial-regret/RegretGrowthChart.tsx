

// 'use client'

// import {
//   AreaChart,
//   Area,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from 'recharts'

// import type { FinancialRegretResult } from '@/lib/financialRegret'
// //import { formatINR } from '@/lib/financialRegret'
// import { getCurrency } from '@/lib/currency/currencies'

// // type Props = {
// //   result: FinancialRegretResult
// // }

// type Props = {
//   result: FinancialRegretResult
//   currency: string
// }


// // function formatAxis(value: number) {
// //   if (value >= 10000000) {
// //     return `₹${(value / 10000000).toFixed(1)}Cr`
// //   }

// //   if (value >= 100000) {
// //     return `₹${(value / 100000).toFixed(1)}L`
// //   }

// //   if (value >= 1000) {
// //     return `₹${(value / 1000).toFixed(0)}K`
// //   }

// //   return `₹${value}`
// // }

// function formatAxis(value: number, symbol: string) {
//   if (value >= 10000000) {
//     return `${symbol}${(value / 10000000).toFixed(1)}Cr`
//   }

//   if (value >= 100000) {
//     return `${symbol}${(value / 100000).toFixed(1)}L`
//   }

//   if (value >= 1000) {
//     return `${symbol}${(value / 1000).toFixed(0)}K`
//   }

//   return `${symbol}${value}`
// }


// function CustomTooltip({ active, payload, label }: any) {
//   if (!active || !payload?.length) return null

//   const invested = payload.find(
//     (item: any) => item.dataKey === 'invested'
//   )?.value ?? 0

//   const corpus = payload.find(
//     (item: any) => item.dataKey === 'corpus'
//   )?.value ?? 0

//   return (
//     <div className="min-w-[210px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl shadow-slate-900/10">

//       <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
//         Year {label}
//       </p>

//       <div className="space-y-3">

//         <div className="flex items-center justify-between gap-5">
//           <div className="flex items-center gap-2">
//             <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
//             <span className="text-xs font-medium text-slate-600">
//               Total Invested
//             </span>
//           </div>

//           <span className="text-sm font-extrabold text-slate-900">
//             {formatINR(Number(invested))}
//           </span>
//         </div>

//         <div className="flex items-center justify-between gap-5">
//           <div className="flex items-center gap-2">
//             <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
//             <span className="text-xs font-medium text-slate-600">
//               Estimated Corpus
//             </span>
//           </div>

//           <span className="text-sm font-extrabold text-emerald-700">
//             {formatINR(Number(corpus))}
//           </span>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default function RegretGrowthChart({
//   result,
// }: Props) {
//   return (
//     <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-8">

//       {/* HEADER */}

//       <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

//         <div>
//           <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-blue-700">
//             <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
//             STEP 03 · GROWTH ANALYSIS
//           </span>

//           <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
//             Your Wealth Growth
//             <span className="block text-blue-700">
//               Journey
//             </span>
//           </h2>

//           <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
//             See how your hypothetical monthly savings could
//             grow over time through the power of compounding.
//           </p>
//         </div>

//         <div className="flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">
//           <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
//           <span className="text-xs font-bold text-emerald-700">
//             Growth Projection
//           </span>
//         </div>

//       </div>

//       {/* CHART LEGEND */}

//       <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl bg-slate-50 px-4 py-4">

//         <div className="flex items-center gap-2">
//           <span className="h-3 w-3 rounded-full bg-blue-500 shadow-sm shadow-blue-300" />
//           <span className="text-xs font-semibold text-slate-600">
//             Total Invested
//           </span>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="h-3 w-3 rounded-full bg-emerald-500 shadow-sm shadow-emerald-300" />
//           <span className="text-xs font-semibold text-slate-600">
//             Estimated Corpus
//           </span>
//         </div>

//       </div>

//       {/* CHART */}

//       <div className="mt-6 h-[280px] w-full sm:h-[360px]">

//         <ResponsiveContainer width="100%" height="100%">

//           <AreaChart
//             data={result.growthData}
//             margin={{
//               top: 15,
//               right: 12,
//               left: 5,
//               bottom: 5,
//             }}
//           >

//             <defs>

//               <linearGradient
//                 id="investedGradient"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="1"
//               >
//                 <stop
//                   offset="0%"
//                   stopColor="#3B82F6"
//                   stopOpacity={0.25}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor="#3B82F6"
//                   stopOpacity={0.01}
//                 />
//               </linearGradient>

//               <linearGradient
//                 id="corpusGradient"
//                 x1="0"
//                 y1="0"
//                 x2="0"
//                 y2="1"
//               >
//                 <stop
//                   offset="0%"
//                   stopColor="#10B981"
//                   stopOpacity={0.25}
//                 />
//                 <stop
//                   offset="95%"
//                   stopColor="#10B981"
//                   stopOpacity={0.01}
//                 />
//               </linearGradient>

//             </defs>

//             <CartesianGrid
//               strokeDasharray="4 6"
//               stroke="#E2E8F0"
//               vertical={false}
//             />

//             <XAxis
//               dataKey="year"
//               tickFormatter={(value) => `${value}Y`}
//               tick={{
//                 fontSize: 11,
//                 fill: '#94A3B8',
//                 fontWeight: 600,
//               }}
//               axisLine={false}
//               tickLine={false}
//               tickMargin={12}
//             />

//             <YAxis
//               tickFormatter={formatAxis}
//               width={65}
//               tick={{
//                 fontSize: 10,
//                 fill: '#94A3B8',
//                 fontWeight: 500,
//               }}
//               axisLine={false}
//               tickLine={false}
//               tickMargin={8}
//             />

//             <Tooltip
//               content={<CustomTooltip />}
//               cursor={{
//                 stroke: '#94A3B8',
//                 strokeDasharray: '4 4',
//               }}
//             />

//             <Area
//               type="monotone"
//               dataKey="invested"
//               name="Total Invested"
//               stroke="#3B82F6"
//               strokeWidth={2.5}
//               fill="url(#investedGradient)"
//               activeDot={{
//                 r: 5,
//                 stroke: '#fff',
//                 strokeWidth: 2,
//                 fill: '#3B82F6',
//               }}
//               animationDuration={1200}
//             />

//             <Area
//               type="monotone"
//               dataKey="corpus"
//               name="Estimated Corpus"
//               stroke="#10B981"
//               strokeWidth={3}
//               fill="url(#corpusGradient)"
//               activeDot={{
//                 r: 6,
//                 stroke: '#fff',
//                 strokeWidth: 2,
//                 fill: '#10B981',
//               }}
//               animationDuration={1500}
//             />

//           </AreaChart>

//         </ResponsiveContainer>

//       </div>

//       {/* CHART INSIGHT */}

//       <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-5">

//         <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
//           💡
//         </div>

//         <div>
//           <h3 className="text-sm font-extrabold text-blue-950">
//             Understanding Your Growth
//           </h3>

//           <p className="mt-1 text-xs leading-6 text-blue-800/80 sm:text-sm">
//             The blue area represents your total contributions,
//             while the green area represents your estimated
//             investment corpus. The difference illustrates
//             potential growth from assumed returns.
//           </p>
//         </div>

//       </div>

//       {/* DISCLAIMER */}

//       <p className="mt-5 text-[11px] leading-6 text-slate-400">
//         Note: Chart values are illustrative estimates using a
//         constant hypothetical monthly return. They do not
//         represent actual historical market data or guarantee
//         future investment performance.
//       </p>

//     </section>
//   )
// }






'use client'

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

import type { FinancialRegretResult } from '@/lib/financialRegret'
import { getCurrency } from '@/lib/currency/currencies'

type Props = {
  result: FinancialRegretResult
  currency: string
}

function formatAxis(value: number, symbol: string) {
  if (value >= 10000000) {
    return `${symbol}${(value / 10000000).toFixed(1)}Cr`
  }

  if (value >= 100000) {
    return `${symbol}${(value / 100000).toFixed(1)}L`
  }

  if (value >= 1000) {
    return `${symbol}${(value / 1000).toFixed(0)}K`
  }

  return `${symbol}${value}`
}

function CustomTooltip({
  active,
  payload,
  label,
  symbol,
}: any) {
  if (!active || !payload?.length) return null

  const invested =
    payload.find(
      (item: any) => item.dataKey === 'invested'
    )?.value ?? 0

  const corpus =
    payload.find(
      (item: any) => item.dataKey === 'corpus'
    )?.value ?? 0

  const formatMoney = (value: number) =>
    `${symbol} ${Number(value).toLocaleString('en-IN', {
      maximumFractionDigits: 0,
    })}`

  return (
    <div className="min-w-[210px] rounded-2xl border border-slate-200 bg-white p-4 shadow-xl">

      <p className="mb-3 text-xs font-bold uppercase tracking-wider text-slate-400">
        Year {label}
      </p>

      <div className="space-y-3">

        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />
            <span className="text-xs font-medium text-slate-600">
              Total Invested
            </span>
          </div>

          <span className="text-sm font-extrabold text-slate-900">
            {formatMoney(Number(invested))}
          </span>
        </div>

        <div className="flex items-center justify-between gap-5">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-slate-600">
              Estimated Corpus
            </span>
          </div>

          <span className="text-sm font-extrabold text-emerald-700">
            {formatMoney(Number(corpus))}
          </span>
        </div>

      </div>
    </div>
  )
}

export default function RegretGrowthChart({
  result,
  currency,
}: Props) {

  const selectedCurrency = getCurrency(currency)
  const symbol = selectedCurrency.symbol

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-5 shadow-lg shadow-slate-200/40 sm:p-8">

      {/* HEADER */}

      <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">

        <div>
          <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.16em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            STEP 03 · GROWTH ANALYSIS
          </span>

          <h2 className="mt-4 text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Your Wealth Growth
            <span className="block text-blue-700">
              Journey
            </span>
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
            See how your hypothetical monthly savings could
            grow over time through the power of compounding.
          </p>
        </div>

        <div className="flex w-fit items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          <span className="text-xs font-bold text-emerald-700">
            Growth Projection
          </span>
        </div>

      </div>

      {/* LEGEND */}

      <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl bg-slate-50 px-4 py-4">

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-blue-500" />

          <span className="text-xs font-semibold text-slate-600">
            Total Invested
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-emerald-500" />

          <span className="text-xs font-semibold text-slate-600">
            Estimated Corpus
          </span>
        </div>

      </div>

      {/* CHART */}

      <div className="mt-6 h-[280px] w-full sm:h-[360px]">

        <ResponsiveContainer width="100%" height="100%">

          <AreaChart
            data={result.growthData}
            margin={{
              top: 15,
              right: 12,
              left: 5,
              bottom: 5,
            }}
          >

            <defs>

              <linearGradient
                id="investedGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#3B82F6"
                  stopOpacity={0.25}
                />

                <stop
                  offset="95%"
                  stopColor="#3B82F6"
                  stopOpacity={0.01}
                />
              </linearGradient>

              <linearGradient
                id="corpusGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#10B981"
                  stopOpacity={0.25}
                />

                <stop
                  offset="95%"
                  stopColor="#10B981"
                  stopOpacity={0.01}
                />
              </linearGradient>

            </defs>

            <CartesianGrid
              strokeDasharray="4 6"
              stroke="#E2E8F0"
              vertical={false}
            />

            <XAxis
              dataKey="year"
              tickFormatter={(value) => `${value}Y`}
              tick={{
                fontSize: 11,
                fill: '#94A3B8',
                fontWeight: 600,
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={12}
            />

            <YAxis
              tickFormatter={(value) =>
                formatAxis(Number(value), symbol)
              }
              width={75}
              tick={{
                fontSize: 10,
                fill: '#94A3B8',
                fontWeight: 500,
              }}
              axisLine={false}
              tickLine={false}
              tickMargin={8}
            />

            <Tooltip
              content={
                <CustomTooltip symbol={symbol} />
              }
              cursor={{
                stroke: '#94A3B8',
                strokeDasharray: '4 4',
              }}
            />

            <Area
              type="monotone"
              dataKey="invested"
              name="Total Invested"
              stroke="#3B82F6"
              strokeWidth={2.5}
              fill="url(#investedGradient)"
              activeDot={{
                r: 5,
                stroke: '#fff',
                strokeWidth: 2,
                fill: '#3B82F6',
              }}
              animationDuration={1200}
            />

            <Area
              type="monotone"
              dataKey="corpus"
              name="Estimated Corpus"
              stroke="#10B981"
              strokeWidth={3}
              fill="url(#corpusGradient)"
              activeDot={{
                r: 6,
                stroke: '#fff',
                strokeWidth: 2,
                fill: '#10B981',
              }}
              animationDuration={1500}
            />

          </AreaChart>

        </ResponsiveContainer>

      </div>

      {/* INSIGHT */}

      <div className="mt-5 flex items-start gap-3 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-5">

        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white text-lg shadow-sm">
          💡
        </div>

        <div>
          <h3 className="text-sm font-extrabold text-blue-950">
            Understanding Your Growth
          </h3>

          <p className="mt-1 text-xs leading-6 text-blue-800/80 sm:text-sm">
            The blue area represents your total contributions,
            while the green area represents your estimated
            investment corpus. The difference illustrates
            potential growth from assumed returns.
          </p>
        </div>

      </div>

      {/* DISCLAIMER */}

      <p className="mt-5 text-[11px] leading-6 text-slate-400">
        Note: Chart values are illustrative estimates using a
        constant hypothetical monthly return. They do not
        represent actual historical market data or guarantee
        future investment performance.
      </p>

    </section>
  )
}
