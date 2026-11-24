
export interface LumpsumResult {
  investedAmount: number
  estimatedReturns: number
  totalValue: number
}

interface LumpsumInput {
  investment: number
  interestRate: number
  years: number
}

export function calculateLumpsum({
  investment,
  interestRate,
  years,
}: LumpsumInput): LumpsumResult {

  const principal = Math.max(0, investment)
  const rate = Math.max(0, interestRate)
  const tenure = Math.max(0, years)

  const totalValue =
    principal * Math.pow(1 + rate / 100, tenure)

  const estimatedReturns = Math.max(
    0,
    totalValue - principal
  )

  return {
    investedAmount: principal,
    estimatedReturns,
    totalValue,
  }
}
