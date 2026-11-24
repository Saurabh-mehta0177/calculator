
export interface RDResultData {
  monthlyDeposit: number
  totalInvestment: number
  interestEarned: number
  maturityAmount: number
}

export function calculateRD({
  monthlyDeposit,
  interestRate,
  years,
}: {
  monthlyDeposit: number
  interestRate: number
  years: number
}): RDResultData {

  const safeDeposit = Math.max(0, monthlyDeposit)
  const safeRate = Math.max(0, interestRate)
  const safeYears = Math.max(0, years)

  const months = Math.round(safeYears * 12)
  const totalInvestment = safeDeposit * months

  if (months <= 0 || safeDeposit <= 0) {
    return {
      monthlyDeposit: safeDeposit,
      totalInvestment,
      interestEarned: 0,
      maturityAmount: 0,
    }
  }

  // Quarterly compounding approximation
  const quarterlyRate = safeRate / 400

  const maturityAmount =
    quarterlyRate === 0
      ? totalInvestment
      : Array.from({ length: months }, (_, index) => {
          const remainingMonths = months - index
          const remainingQuarters = remainingMonths / 3

          return (
            safeDeposit *
            Math.pow(1 + quarterlyRate, remainingQuarters)
          )
        }).reduce((total, value) => total + value, 0)

  const interestEarned = Math.max(
    0,
    maturityAmount - totalInvestment
  )

  return {
    monthlyDeposit: safeDeposit,
    totalInvestment,
    interestEarned,
    maturityAmount,
  }
}
