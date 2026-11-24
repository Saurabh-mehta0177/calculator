
export type FinancialRegretInputs = {
  monthlySaving: number
  years: number
  annualReturn: number
}

export type GrowthPoint = {
  month: number
  year: number
  invested: number
  returns: number
  corpus: number
}

export type FinancialRegretResult = {
  totalInvested: number
  estimatedReturns: number
  estimatedCorpus: number
  monthlySaving: number
  totalMonths: number
  annualReturn: number
  growthData: GrowthPoint[]
}

export function calculateFinancialRegret(
  inputs: FinancialRegretInputs
): FinancialRegretResult {
  const monthlySaving = Math.max(
    0,
    inputs.monthlySaving
  )

  const years = Math.max(0, inputs.years)

  const annualReturn = Math.max(
    0,
    inputs.annualReturn
  )

  const totalMonths = Math.round(years * 12)

  const monthlyRate = annualReturn / 100 / 12

  const totalInvested = monthlySaving * totalMonths

  let corpus = 0

  const growthData: GrowthPoint[] = [
    {
      month: 0,
      year: 0,
      invested: 0,
      returns: 0,
      corpus: 0,
    },
  ]

  for (let month = 1; month <= totalMonths; month++) {
    // Monthly investment at end of month
    corpus += monthlySaving

    // Apply monthly hypothetical return
    corpus *= 1 + monthlyRate

    const invested = monthlySaving * month

    const returns = Math.max(0, corpus - invested)

    if (month % 12 === 0 || month === totalMonths) {
      growthData.push({
        month,
        year: Number((month / 12).toFixed(2)),
        invested,
        returns,
        corpus,
      })
    }
  }

  const estimatedCorpus = corpus

  const estimatedReturns =
    estimatedCorpus - totalInvested

  return {
    totalInvested,
    estimatedReturns,
    estimatedCorpus,
    monthlySaving,
    totalMonths,
    annualReturn,
    growthData,
  }
}

export function formatINR(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}
