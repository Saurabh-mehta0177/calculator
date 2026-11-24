
export interface SIPResult {
  investedAmount: number
  estimatedReturns: number
  totalValue: number
}

interface SIPInput {
  monthlyInvestment: number
  interestRate: number
  years: number
}

export function calculateSIP({
  monthlyInvestment,
  interestRate,
  years,
}: SIPInput): SIPResult {

  const investment = Math.max(0, monthlyInvestment)
  const rate = Math.max(0, interestRate)
  const tenure = Math.max(0, years)

  const months = tenure * 12

  const monthlyRate = rate / 12 / 100

  const investedAmount = investment * months

  const totalValue =
    months <= 0
      ? 0
      : monthlyRate === 0
        ? investedAmount
        : investment *
          (
            (Math.pow(1 + monthlyRate, months) - 1) /
            monthlyRate
          ) *
          (1 + monthlyRate)

  const estimatedReturns = Math.max(
    0,
    totalValue - investedAmount
  )

  return {
    investedAmount,
    estimatedReturns,
    totalValue,
  }
}
