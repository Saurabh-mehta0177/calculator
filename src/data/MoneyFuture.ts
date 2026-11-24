
export type Scenario = {
  id: 'dream' | 'normal' | 'tough'
  name: string
  description: string
  salaryGrowth: number
  expenseGrowth: number
  investmentReturn: number
  color: string
}

export type MoneyInputs = {
  monthlyIncome: number
  monthlyExpenses: number
  currentSavings: number
  monthlyInvestment: number
  years: number
}

export const scenarios: Scenario[] = [
  {
    id: 'dream',
    name: 'Dream Life',
    description: 'Higher income growth and better savings',
    salaryGrowth: 12,
    expenseGrowth: 4,
    investmentReturn: 12,
    color: '#16a34a',
  },
  {
    id: 'normal',
    name: 'Normal Life',
    description: 'Steady income and regular expenses',
    salaryGrowth: 7,
    expenseGrowth: 6,
    investmentReturn: 10,
    color: '#2563eb',
  },
  {
    id: 'tough',
    name: 'Tough Life',
    description: 'Slower income growth and rising expenses',
    salaryGrowth: 2,
    expenseGrowth: 10,
    investmentReturn: 6,
    color: '#ea580c',
  },
]

export type YearResult = {
  year: number
  income: number
  expenses: number
  savings: number
  investment: number
  netWorth: number
}

export type ScenarioResult = {
  scenario: Scenario
  finalNetWorth: number
  totalSavings: number
  totalInvestment: number
  yearlyData: YearResult[]
}

export function calculateScenario(
  inputs: MoneyInputs,
  scenario: Scenario
): ScenarioResult {
  const {
    monthlyIncome,
    monthlyExpenses,
    currentSavings,
    monthlyInvestment,
    years,
  } = inputs

  const monthlyRate =
    Math.pow(1 + scenario.investmentReturn / 100, 1 / 12) - 1

  let income = monthlyIncome
  let expenses = monthlyExpenses

  let savings = currentSavings
  let investment = 0

  const yearlyData: YearResult[] = []

  for (let year = 1; year <= years; year++) {
    income = monthlyIncome * Math.pow(
      1 + scenario.salaryGrowth / 100,
      year - 1
    )

    expenses = monthlyExpenses * Math.pow(
      1 + scenario.expenseGrowth / 100,
      year - 1
    )

    for (let month = 1; month <= 12; month++) {
      const monthlySurplus = Math.max(0, income - expenses)

      const actualInvestment = Math.min(
        monthlyInvestment,
        monthlySurplus
      )

      const cashSavings = monthlySurplus - actualInvestment

      // Monthly compound growth
      investment = investment * (1 + monthlyRate)
        + actualInvestment

      savings += cashSavings
    }

    yearlyData.push({
      year,
      income,
      expenses,
      savings,
      investment,
      netWorth: savings + investment,
    })
  }

  return {
    scenario,
    finalNetWorth: savings + investment,
    totalSavings: savings,
    totalInvestment: investment,
    yearlyData,
  }
}

export function calculateAllScenarios(inputs: MoneyInputs) {
  return scenarios.map((scenario) =>
    calculateScenario(inputs, scenario)
  )
}

export function formatINR(value: number) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value)
}
