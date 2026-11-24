
export interface PPFResult {
  investedAmount: number
  estimatedInterest: number
  maturityAmount: number
}

interface PPFInput {
  yearlyInvestment: number
  interestRate: number
  years: number
}

export function calculatePPF({
  yearlyInvestment,
  interestRate,
  years,
}: PPFInput): PPFResult {

  const investment = Math.max(
    0,
    Math.min(150000, yearlyInvestment)
  )

  const rate = Math.max(0, interestRate)
  const tenure = Math.max(0, Math.floor(years))

  const annualRate = rate / 100

  let maturityAmount = 0

  for (let year = 0; year < tenure; year++) {

    // Contribution assumed at the beginning of each year
    maturityAmount =
      (maturityAmount + investment) * (1 + annualRate)

  }

  const investedAmount = investment * tenure

  const estimatedInterest = Math.max(
    0,
    maturityAmount - investedAmount
  )

  return {
    investedAmount,
    estimatedInterest,
    maturityAmount,
  }
}
