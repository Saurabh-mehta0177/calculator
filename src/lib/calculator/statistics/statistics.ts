
export interface StatisticsResult {
  count: number;
  sum: number;
  mean: number;
  median: number;
  mode: number[];
  min: number;
  max: number;
  range: number;
  variance: number;
  standardDeviation: number;
  populationVariance: number;
  sampleVariance: number | null;
}

export function calculateStatistics(
  input: number[]
): StatisticsResult {
  if (input.length === 0) {
    throw new Error("Enter at least one number");
  }

  if (
    input.length > 10000 ||
    input.some((n) => !Number.isFinite(n))
  ) {
    throw new Error("Invalid dataset");
  }

  const values = [...input].sort((a, b) => a - b);

  const count = values.length;
  const sum = values.reduce((a, b) => a + b, 0);
  const mean = sum / count;

  const middle = Math.floor(count / 2);

  const median =
    count % 2 === 0
      ? (values[middle - 1] + values[middle]) / 2
      : values[middle];

  const frequencies = new Map<number, number>();

  values.forEach((value) => {
    frequencies.set(
      value,
      (frequencies.get(value) ?? 0) + 1
    );
  });

  const highestFrequency = Math.max(
    ...frequencies.values()
  );

  const mode =
    highestFrequency > 1
      ? [...frequencies.entries()]
          .filter(([, frequency]) => frequency === highestFrequency)
          .map(([value]) => value)
      : [];

  const squaredDifference = values.reduce(
    (total, value) => total + (value - mean) ** 2,
    0
  );

  const populationVariance = squaredDifference / count;

  return {
    count,
    sum,
    mean,
    median,
    mode,
    min: values[0],
    max: values[count - 1],
    range: values[count - 1] - values[0],
    variance: populationVariance,
    standardDeviation: Math.sqrt(populationVariance),
    populationVariance,
    sampleVariance:
      count > 1 ? squaredDifference / (count - 1) : null,
  };
}
