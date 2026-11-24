
import type {
  ComparisonConfig,
  ComparisonInputs,
  ComparisonResult,
  GrowthPoint,
  InvestmentOption,
  InvestmentResult,
} from "./types";

function calculateInvestment(
  option: InvestmentOption,
  inputs: ComparisonInputs
): InvestmentResult {
  const months = Math.round(inputs.years * 12);

  const amount = Math.max(0, inputs.amount);
  const annualReturn = Math.max(0, option.annualReturn);
  const monthlyRate = annualReturn / 100 / 12;

  // Both options receive the same total planned budget.
  const totalInvested = amount * months;

  let corpus =
    option.mode === "lumpsum" ? totalInvested : 0;

  const growthData: GrowthPoint[] = [
    {
      year: 0,
      invested: 0,
      corpus: 0,
      returns: 0,
    },
  ];

  for (let month = 1; month <= months; month++) {
    if (option.mode === "monthly") {
      // Deposit at the end of each month.
      corpus += amount;
      corpus *= 1 + monthlyRate;
    } else {
      // Lumpsum invested at the beginning.
      corpus *= 1 + monthlyRate;
    }

    if (month % 12 === 0 || month === months) {
      const invested =
        option.mode === "monthly"
          ? amount * month
          : totalInvested;

      growthData.push({
        year: Number((month / 12).toFixed(2)),
        invested,
        corpus,
        returns: corpus - invested,
      });
    }
  }

  return {
    id: option.id,
    name: option.name,
    totalInvested,
    estimatedReturns: corpus - totalInvested,
    estimatedCorpus: corpus,
    annualReturn,
    growthData,
  };
}

export function calculateComparison(
  config: ComparisonConfig,
  inputs: ComparisonInputs
): ComparisonResult {
  const safeInputs: ComparisonInputs = {
    amount: Math.min(
      100000000,
      Math.max(0, Number(inputs.amount) || 0)
    ),
    years: Math.min(
      50,
      Math.max(0, Number(inputs.years) || 0)
    ),
  };

  const first = calculateInvestment(
    config.options[0],
    safeInputs
  );

  const second = calculateInvestment(
    config.options[1],
    safeInputs
  );

  const difference = Math.abs(
    first.estimatedCorpus - second.estimatedCorpus
  );

  const winner =
    Math.abs(
      first.estimatedCorpus - second.estimatedCorpus
    ) < 0.01
      ? "Equal"
      : first.estimatedCorpus > second.estimatedCorpus
        ? first.name
        : second.name;

  return {
    results: [first, second],
    difference,
    winner,
    inputs: safeInputs,
  };
}
