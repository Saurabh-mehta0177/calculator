
export type ExpenseCategory = {
  id: string
  name: string
  icon: string
  amount: number
  type: 'essential' | 'flexible'
  reductionPercent: number
}

export type MoneyLeakInputs = {
  monthlyIncome: number
  expenses: ExpenseCategory[]
}

export type ExpenseAnalysis = ExpenseCategory & {
  share: number
  potentialSaving: number
  recommendedAmount: number
}

export type MoneyLeakResult = {
  totalExpenses: number
  remainingMoney: number
  essentialExpenses: number
  flexibleExpenses: number
  potentialMonthlySaving: number
  potentialSixMonthSaving: number
  potentialYearlySaving: number
  expenseAnalysis: ExpenseAnalysis[]
  totalAfterOptimization: number
}

export const defaultExpenses: ExpenseCategory[] = [
  {
    id: 'rent',
    name: 'Rent & Housing',
    icon: '🏠',
    amount: 12000,
    type: 'essential',
    reductionPercent: 0,
  },
  {
    id: 'food',
    name: 'Food & Dining',
    icon: '🍔',
    amount: 8000,
    type: 'flexible',
    reductionPercent: 15,
  },
  {
    id: 'shopping',
    name: 'Shopping',
    icon: '🛍️',
    amount: 6000,
    type: 'flexible',
    reductionPercent: 20,
  },
  {
    id: 'transport',
    name: 'Transport',
    icon: '🚗',
    amount: 4000,
    type: 'flexible',
    reductionPercent: 10,
  },
  {
    id: 'subscriptions',
    name: 'Subscriptions',
    icon: '📺',
    amount: 2000,
    type: 'flexible',
    reductionPercent: 50,
  },
  {
    id: 'bills',
    name: 'Electricity & Bills',
    icon: '💡',
    amount: 3000,
    type: 'essential',
    reductionPercent: 0,
  },
  {
    id: 'entertainment',
    name: 'Entertainment',
    icon: '🎬',
    amount: 2000,
    type: 'flexible',
    reductionPercent: 20,
  },
]

export function calculateMoneyLeak(
  inputs: MoneyLeakInputs
): MoneyLeakResult {
  const { monthlyIncome, expenses } = inputs

  const totalExpenses = expenses.reduce(
    (total, item) => total + Math.max(0, item.amount),
    0
  )

  const essentialExpenses = expenses
    .filter((item) => item.type === 'essential')
    .reduce((total, item) => total + Math.max(0, item.amount), 0)

  const flexibleExpenses = expenses
    .filter((item) => item.type === 'flexible')
    .reduce((total, item) => total + Math.max(0, item.amount), 0)

  const expenseAnalysis: ExpenseAnalysis[] = expenses.map(
    (item) => {
      const amount = Math.max(0, item.amount)

      const reductionPercent =
        item.type === 'flexible'
          ? Math.min(100, Math.max(0, item.reductionPercent))
          : 0

      const potentialSaving =
        amount * (reductionPercent / 100)

      return {
        ...item,
        share:
          totalExpenses > 0
            ? (amount / totalExpenses) * 100
            : 0,
        potentialSaving,
        recommendedAmount: amount - potentialSaving,
      }
    }
  )

  const potentialMonthlySaving = expenseAnalysis.reduce(
    (total, item) => total + item.potentialSaving,
    0
  )

  return {
    totalExpenses,
    remainingMoney: monthlyIncome - totalExpenses,
    essentialExpenses,
    flexibleExpenses,
    potentialMonthlySaving,
    potentialSixMonthSaving: potentialMonthlySaving * 6,
    potentialYearlySaving: potentialMonthlySaving * 12,
    expenseAnalysis,
    totalAfterOptimization:
      totalExpenses - potentialMonthlySaving,
  }
}
