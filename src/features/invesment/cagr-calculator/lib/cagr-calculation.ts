
export interface CAGRResult {
  initialInvestment: number
  finalValue: number
  totalGrowth: number
  cagr: number
}

interface CAGRInput {
  initialInvestment: number
  finalValue: number
  years: number
}

export function calculateCAGR({
  initialInvestment,
  finalValue,
  years,
}: CAGRInput): CAGRResult {

  const initial = Math.max(0, initialInvestment)
  const final = Math.max(0, finalValue)
  const tenure = Math.max(0, years)

  const cagr =
    initial > 0 && final > 0 && tenure > 0
      ? (Math.pow(final / initial, 1 / tenure) - 1) * 100
      : 0

  const totalGrowth = final - initial

  return {
    initialInvestment: initial,
    finalValue: final,
    totalGrowth,
    cagr,
  }
}
