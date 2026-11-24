
export interface CompoundInterestResult {
  principal: number
  interestEarned: number
  totalAmount: number
}

interface CompoundInterestInput {
  principal: number
  interestRate: number
  years: number
  frequency: number
}

export function calculateCompoundInterest({
  principal,
  interestRate,
  years,
  frequency,
}: CompoundInterestInput): CompoundInterestResult {

  const safePrincipal = Math.max(0, principal)
  const safeRate = Math.max(0, interestRate)
  const safeYears = Math.max(0, years)
  const safeFrequency = Math.max(1, frequency)

  const periodicRate = safeRate / 100 / safeFrequency

  const totalPeriods = safeFrequency * safeYears

  const totalAmount =
    safePrincipal === 0
      ? 0
      : periodicRate === 0
        ? safePrincipal
        : safePrincipal *
          Math.pow(1 + periodicRate, totalPeriods)

  const interestEarned = Math.max(
    0,
    totalAmount - safePrincipal
  )

  return {
    principal: safePrincipal,
    interestEarned,
    totalAmount,
  }
}
