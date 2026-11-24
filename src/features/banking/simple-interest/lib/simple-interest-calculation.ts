
export interface SimpleInterestResult {
  principal: number
  interestRate: number
  years: number
  simpleInterest: number
  totalAmount: number
}

interface SimpleInterestInput {
  principal: number
  interestRate: number
  years: number
}

export function calculateSimpleInterest({
  principal,
  interestRate,
  years,
}: SimpleInterestInput): SimpleInterestResult {

  const safePrincipal = Math.max(0, principal)
  const safeRate = Math.max(0, interestRate)
  const safeYears = Math.max(0, years)

  const simpleInterest =
    (safePrincipal * safeRate * safeYears) / 100

  const totalAmount = safePrincipal + simpleInterest

  return {
    principal: safePrincipal,
    interestRate: safeRate,
    years: safeYears,
    simpleInterest,
    totalAmount,
  }
}
