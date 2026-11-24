
export type CalculationType =
  | 'of'
  | 'what-percent'
  | 'increase'
  | 'decrease'

export interface PercentageResult {
  result: number
  percentage: number
  finalValue: number
  resultSuffix: string
  description: string
}

interface PercentageInput {
  calculationType: CalculationType
  firstValue: number
  secondValue: number
}

export function calculatePercentage({
  calculationType,
  firstValue,
  secondValue,
}: PercentageInput): PercentageResult {

  const first = Number.isFinite(firstValue) ? firstValue : 0
  const second = Number.isFinite(secondValue) ? secondValue : 0

  let result = 0
  let percentage = 0
  let finalValue = 0
  let resultSuffix = ''
  let description = ''

  switch (calculationType) {

    case 'of': {

      result = (first * second) / 100
      percentage = first
      finalValue = result

      resultSuffix = ''
      description = `${first}% of ${second} is ${result}`

      break
    }

    case 'what-percent': {

      result = second === 0
        ? 0
        : (first / second) * 100

      percentage = result
      finalValue = first

      resultSuffix = '%'
      description = `${first} is ${result}% of ${second}`

      break
    }

    case 'increase': {

      result = (first * second) / 100
      percentage = second
      finalValue = first + result

      resultSuffix = ''
      description = `${first} increased by ${second}% is ${finalValue}`

      break
    }

    case 'decrease': {

      result = (first * second) / 100
      percentage = second
      finalValue = first - result

      resultSuffix = ''
      description = `${first} decreased by ${second}% is ${finalValue}`

      break
    }

  }

  return {
    result,
    percentage,
    finalValue,
    resultSuffix,
    description,
  }
}
