
// interface PercentageChartProps {
//   result: number
//   firstValue: number
//   secondValue: number
//   calculationType: 'of' | 'what-percent' | 'increase' | 'decrease'
// }

// export default function PercentageChart({
//   result,
//   firstValue,
//   secondValue,
//   calculationType,
// }: PercentageChartProps) {
//   const safeResult = Number.isFinite(result) ? result : 0
//   const safeFirst = Math.max(0, firstValue)
//   const safeSecond = Math.max(0, secondValue)

//   const formatNumber = (value: number) =>
//     new Intl.NumberFormat('en-IN', {
//       maximumFractionDigits: 2,
//     }).format(value)

//   const getTitle = () => {
//     switch (calculationType) {
//       case 'of':
//         return 'Percentage Result'
//       case 'what-percent':
//         return 'Percentage Breakdown'
//       case 'increase':
//         return 'Increase Breakdown'
//       case 'decrease':
//         return 'Decrease Breakdown'
//       default:
//         return 'Calculation Breakdown'
//     }
//   }

//   const getDescription = () => {
//     switch (calculationType) {
//       case 'of':
//         return 'Your calculated percentage value'
//       case 'what-percent':
//         return 'Your value as a percentage of the total'
//       case 'increase':
//         return 'Original value vs increased value'
//       case 'decrease':
//         return 'Original value vs decreased value'
//       default:
//         return 'Your percentage calculation'
//     }
//   }

//   const getBreakdown = () => {
//     switch (calculationType) {
//       case 'of':
//         return {
//           firstLabel: 'Original Value',
//           firstAmount: safeSecond,
//           secondLabel: 'Percentage Value',
//           secondAmount: Math.max(0, safeResult),
//         }

//       case 'what-percent':
//         return {
//           firstLabel: 'Total Value',
//           firstAmount: safeSecond,
//           secondLabel: 'Selected Value',
//           secondAmount: safeFirst,
//         }

//       case 'increase':
//         return {
//           firstLabel: 'Original Value',
//           firstAmount: safeFirst,
//           secondLabel: 'Increased Value',
//           secondAmount: Math.max(0, safeResult),
//         }

//       case 'decrease':
//         return {
//           firstLabel: 'Original Value',
//           firstAmount: safeFirst,
//           secondLabel: 'Decreased Value',
//           secondAmount: Math.max(0, safeResult),
//         }
//     }
//   }

//   const breakdown = getBreakdown()
//   const total = breakdown.firstAmount + breakdown.secondAmount

//   const firstPercentage =
//     total > 0 ? (breakdown.firstAmount / total) * 100 : 0

//   const secondPercentage =
//     total > 0 ? (breakdown.secondAmount / total) * 100 : 0

//   return (
//     <div>
//       <h2 className="text-lg font-extrabold">
//         {getTitle()}
//       </h2>

//       <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
//         {getDescription()}
//       </p>

//       {/* DONUT CHART */}
//       <div className="my-7 flex justify-center">
//         <div
//           role="img"
//           aria-label={`${breakdown.firstLabel} ${firstPercentage.toFixed(1)}%, ${breakdown.secondLabel} ${secondPercentage.toFixed(1)}%`}
//           className="grid h-48 w-48 place-items-center rounded-full"
//           style={{
//             background: `conic-gradient(
//               #7c3aed 0% ${firstPercentage}%,
//               #ec4899 ${firstPercentage}% 100%
//             )`,
//           }}
//         >
//           <div className="grid h-32 w-32 place-content-center rounded-full bg-white text-center shadow-inner dark:bg-slate-900">
//             <span className="text-xs text-slate-500">
//               Result
//             </span>

//             <strong className="mt-1 max-w-28 break-words text-sm">
//               {formatNumber(safeResult)}
//             </strong>
//           </div>
//         </div>
//       </div>

//       {/* LEGEND */}
//       <div className="space-y-3">
//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             <span className="h-3 w-3 rounded-full bg-violet-600" />

//             <span className="text-sm text-slate-600 dark:text-slate-300">
//               {breakdown.firstLabel}
//             </span>
//           </div>

//           <div className="text-right">
//             <p className="text-sm font-bold">
//               {formatNumber(breakdown.firstAmount)}
//             </p>

//             <p className="text-xs text-slate-500">
//               {firstPercentage.toFixed(1)}%
//             </p>
//           </div>
//         </div>

//         <div className="flex items-center justify-between gap-3">
//           <div className="flex items-center gap-2">
//             <span className="h-3 w-3 rounded-full bg-pink-500" />

//             <span className="text-sm text-slate-600 dark:text-slate-300">
//               {breakdown.secondLabel}
//             </span>
//           </div>

//           <div className="text-right">
//             <p className="text-sm font-bold">
//               {formatNumber(breakdown.secondAmount)}
//             </p>

//             <p className="text-xs text-slate-500">
//               {secondPercentage.toFixed(1)}%
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







import type { PercentageResult as PercentageResultType } from '../lib/percentage-calculation'

interface PercentageChartProps {
  result: PercentageResultType
  firstValue: number
  secondValue: number
  calculationType: 'of' | 'what-percent' | 'increase' | 'decrease'
}

export default function PercentageChart({
  result,
  firstValue,
  secondValue,
  calculationType,
}: PercentageChartProps) {
  const safeResult = Number.isFinite(result.result)
    ? result.result
    : 0

  const safeFirst = Math.max(0, firstValue)
  const safeSecond = Math.max(0, secondValue)

  const formatNumber = (value: number) =>
    new Intl.NumberFormat('en-IN', {
      maximumFractionDigits: 2,
    }).format(value)

  const getTitle = () => {
    switch (calculationType) {
      case 'of':
        return 'Percentage Result'
      case 'what-percent':
        return 'Percentage Breakdown'
      case 'increase':
        return 'Increase Breakdown'
      case 'decrease':
        return 'Decrease Breakdown'
      default:
        return 'Calculation Breakdown'
    }
  }

  const getDescription = () => {
    switch (calculationType) {
      case 'of':
        return 'Your calculated percentage value'
      case 'what-percent':
        return 'Your value as a percentage of the total'
      case 'increase':
        return 'Original value vs increased value'
      case 'decrease':
        return 'Original value vs decreased value'
      default:
        return 'Your percentage calculation'
    }
  }

  const getBreakdown = () => {
    switch (calculationType) {
      case 'of':
        return {
          firstLabel: 'Original Value',
          firstAmount: safeSecond,
          secondLabel: 'Percentage Value',
          secondAmount: Math.max(0, safeResult),
        }

      case 'what-percent':
        return {
          firstLabel: 'Total Value',
          firstAmount: safeSecond,
          secondLabel: 'Selected Value',
          secondAmount: safeFirst,
        }

      case 'increase':
        return {
          firstLabel: 'Original Value',
          firstAmount: safeFirst,
          secondLabel: 'Increased Value',
          secondAmount: Math.max(0, result.finalValue),
        }

      case 'decrease':
        return {
          firstLabel: 'Original Value',
          firstAmount: safeFirst,
          secondLabel: 'Decreased Value',
          secondAmount: Math.max(0, result.finalValue),
        }
    }
  }

  const breakdown = getBreakdown()

  const total =
    breakdown.firstAmount + breakdown.secondAmount

  const firstPercentage =
    total > 0
      ? (breakdown.firstAmount / total) * 100
      : 0

  const secondPercentage =
    total > 0
      ? (breakdown.secondAmount / total) * 100
      : 0

  return (
    <div>
      <h2 className="text-lg font-extrabold">
        {getTitle()}
      </h2>

      <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
        {getDescription()}
      </p>

      {/* DONUT CHART */}

      <div className="my-7 flex justify-center">
        <div
          role="img"
          aria-label={`${breakdown.firstLabel} ${firstPercentage.toFixed(1)}%, ${breakdown.secondLabel} ${secondPercentage.toFixed(1)}%`}
          className="grid h-48 w-48 place-items-center rounded-full"
          style={{
            background: `conic-gradient(
              #7c3aed 0% ${firstPercentage}%,
              #ec4899 ${firstPercentage}% 100%
            )`,
          }}
        >
          <div className="grid h-32 w-32 place-content-center rounded-full bg-white text-center shadow-inner dark:bg-slate-900">
            <span className="text-xs text-slate-500">
              Result
            </span>

            <strong className="mt-1 max-w-28 break-words text-sm">
              {formatNumber(safeResult)}
              {result.resultSuffix}
            </strong>
          </div>
        </div>
      </div>

      {/* LEGEND */}

      <div className="space-y-3">

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-violet-600" />

            <span className="text-sm text-slate-600 dark:text-slate-300">
              {breakdown.firstLabel}
            </span>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold">
              {formatNumber(breakdown.firstAmount)}
            </p>

            <p className="text-xs text-slate-500">
              {firstPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-pink-500" />

            <span className="text-sm text-slate-600 dark:text-slate-300">
              {breakdown.secondLabel}
            </span>
          </div>

          <div className="text-right">
            <p className="text-sm font-bold">
              {formatNumber(breakdown.secondAmount)}
            </p>

            <p className="text-xs text-slate-500">
              {secondPercentage.toFixed(1)}%
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
