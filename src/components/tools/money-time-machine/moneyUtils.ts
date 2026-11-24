
// export type Projection = {
//   year: number
//   wealth: number
//   noSaving: number
//   dailySaving: number
// }

// export type MoneyInputs = {
//   salary: number
//   expenses: number
//   savings: number
//   salaryGrowth: number
//   annualReturn: number
//   years: number
// }

// export const DEFAULT_VALUES: MoneyInputs = {
//   salary: 50000,
//   expenses: 30000,
//   savings: 200000,
//   salaryGrowth: 8,
//   annualReturn: 8,
//   years: 10,
// }

// export function calculateProjection(
//   inputs: MoneyInputs
// ): Projection[] {
//   const {
//     salary,
//     expenses,
//     savings,
//     salaryGrowth,
//     annualReturn,
//     years,
//   } = inputs

//   const monthlyRate = Math.pow(
//     1 + annualReturn / 100,
//     1 / 12
//   ) - 1

//   let wealth = savings
//   let noSaving = savings
//   let dailySaving = savings
//   let currentSalary = salary

//   const results: Projection[] = [{
//     year: 0,
//     wealth,
//     noSaving,
//     dailySaving,
//   }]

//   for (let month = 1; month <= years * 12; month++) {
//     if (month > 1 && (month - 1) % 12 === 0) {
//       currentSalary *= 1 + salaryGrowth / 100
//     }

//     const monthlySaving = Math.max(
//       0,
//       currentSalary - expenses
//     )

//     wealth =
//       wealth * (1 + monthlyRate) + monthlySaving

//     noSaving *= 1 + monthlyRate

//     dailySaving =
//       dailySaving * (1 + monthlyRate) +
//       (100 * 365 / 12)

//     if (month % 12 === 0) {
//       results.push({
//         year: month / 12,
//         wealth,
//         noSaving,
//         dailySaving,
//       })
//     }
//   }

//   return results
// }

// export function formatMoney(
//   value: number,
//   currency: string
// ) {
//   try {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency,
//       maximumFractionDigits: 0,
//     }).format(value)
//   } catch {
//     return `${currency} ${Math.round(value).toLocaleString('en-IN')}`
//   }
// }

// export function formatCompact(
//   value: number,
//   currency: string
// ) {
//   const symbol = new Intl.NumberFormat('en-IN', {
//     style: 'currency',
//     currency,
//     maximumFractionDigits: 0,
//   }).formatToParts(0)
//     .find(part => part.type === 'currencySymbol')?.value || currency

//   if (value >= 10000000 && currency === 'INR') {
//     return `${symbol}${(value / 10000000).toFixed(2)} Cr`
//   }

//   if (value >= 100000 && currency === 'INR') {
//     return `${symbol}${(value / 100000).toFixed(2)} L`
//   }

//   if (value >= 1000000) {
//     return `${symbol}${(value / 1000000).toFixed(2)}M`
//   }

//   if (value >= 1000) {
//     return `${symbol}${(value / 1000).toFixed(1)}K`
//   }

//   return formatMoney(value, currency)
// }







export type Projection = {
  year: number
  wealth: number
  noSaving: number
  dailySaving: number
}

export type MoneyInputs = {
  salary: number
  expenses: number
  savings: number
  salaryGrowth: number
  annualReturn: number
  years: number
}

export const DEFAULT_VALUES: MoneyInputs = {
  salary: 50000,
  expenses: 30000,
  savings: 200000,
  salaryGrowth: 8,
  annualReturn: 8,
  years: 10,
}

export function calculateProjection(
  inputs: MoneyInputs
): Projection[] {
  const {
    salary,
    expenses,
    savings,
    salaryGrowth,
    annualReturn,
    years,
  } = inputs

  const monthlyRate = Math.pow(
    1 + annualReturn / 100,
    1 / 12
  ) - 1

  let wealth = savings
  let noSaving = savings
  let dailySaving = savings
  let currentSalary = salary

  const results: Projection[] = [{
    year: 0,
    wealth,
    noSaving,
    dailySaving,
  }]

  for (let month = 1; month <= years * 12; month++) {
    if (month > 1 && (month - 1) % 12 === 0) {
      currentSalary *= 1 + salaryGrowth / 100
    }

    const monthlySaving = Math.max(
      0,
      currentSalary - expenses
    )

    wealth =
      wealth * (1 + monthlyRate) + monthlySaving

    noSaving *= 1 + monthlyRate

    dailySaving =
      dailySaving * (1 + monthlyRate) +
      (100 * 365 / 12)

    if (month % 12 === 0) {
      results.push({
        year: month / 12,
        wealth,
        noSaving,
        dailySaving,
      })
    }
  }

  return results
}

export function formatMoney(
  value: number,
  currency: string
) {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(value)
  } catch {
    return `${currency} ${Math.round(value).toLocaleString('en-IN')}`
  }
}

export function formatCompact(
  value: number,
  currency: string
) {
  const symbol = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).formatToParts(0)
    .find(part => part.type === 'currency')?.value || currency

  if (value >= 10000000 && currency === 'INR') {
    return `${symbol}${(value / 10000000).toFixed(2)} Cr`
  }

  if (value >= 100000 && currency === 'INR') {
    return `${symbol}${(value / 100000).toFixed(2)} L`
  }

  if (value >= 1000000) {
    return `${symbol}${(value / 1000000).toFixed(2)}M`
  }

  if (value >= 1000) {
    return `${symbol}${(value / 1000).toFixed(1)}K`
  }

  return formatMoney(value, currency)
}
