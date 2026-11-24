
export interface FDCalculationInput {
  amount: number
  interestRate: number
  years: number
}

export interface FDCalculationResult {
  investedAmount: number
  interestEarned: number
  maturityAmount: number
}

export function calculateFD({
  amount,
  interestRate,
  years,
}: FDCalculationInput): FDCalculationResult {
  if (amount <= 0 || interestRate < 0 || years <= 0) {
    return {
      investedAmount: 0,
      interestEarned: 0,
      maturityAmount: 0,
    }
  }

  const quarterlyRate = interestRate / 400
  const quarters = years * 4

  const maturityAmount =
    amount * Math.pow(1 + quarterlyRate, quarters)

  const interestEarned = maturityAmount - amount

  return {
    investedAmount: amount,
    interestEarned,
    maturityAmount,
  }
}
