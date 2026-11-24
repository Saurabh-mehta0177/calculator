
export function calculateSIP(
  monthlyInvestment: number,
  annualRate: number,
  years: number
) {
  validate(monthlyInvestment, annualRate, years);

  const months = Math.round(years * 12);
  const rate = annualRate / 1200;

  const invested = monthlyInvestment * months;

  const corpus = rate === 0
    ? invested
    : monthlyInvestment *
      ((Math.pow(1 + rate, months) - 1) / rate) *
      (1 + rate);

  return {
    invested,
    returns: corpus - invested,
    corpus,
  };
}

export function calculateLumpsum(
  principal: number,
  annualRate: number,
  years: number
) {
  validate(principal, annualRate, years);

  const corpus =
    principal * Math.pow(1 + annualRate / 100, years);

  return {
    invested: principal,
    returns: corpus - principal,
    corpus,
  };
}

export function calculateFD(
  principal: number,
  annualRate: number,
  years: number,
  frequency = 4
) {
  validate(principal, annualRate, years);

  if (
    !Number.isInteger(frequency) ||
    frequency < 1 ||
    frequency > 365
  ) {
    throw new Error("Invalid compounding frequency");
  }

  const corpus = principal * Math.pow(
    1 + annualRate / (100 * frequency),
    frequency * years
  );

  return {
    invested: principal,
    returns: corpus - principal,
    corpus,
  };
}

export function calculateEMI(
  principal: number,
  annualRate: number,
  years: number
) {
  validate(principal, annualRate, years);

  const months = Math.round(years * 12);
  const rate = annualRate / 1200;

  const emi = rate === 0
    ? principal / months
    : principal * rate *
      Math.pow(1 + rate, months) /
      (Math.pow(1 + rate, months) - 1);

  return {
    emi,
    totalPayment: emi * months,
    totalInterest: emi * months - principal,
  };
}

export function calculateRD(
  monthlyDeposit: number,
  annualRate: number,
  months: number
) {
  validate(monthlyDeposit, annualRate, months / 12);

  if (!Number.isInteger(months) || months < 1) {
    throw new Error("Invalid RD duration");
  }

  const monthlyRate = annualRate / 1200;

  let corpus = 0;

  for (let i = 0; i < months; i++) {
    corpus += monthlyDeposit;
    corpus *= 1 + monthlyRate;
  }

  const invested = monthlyDeposit * months;

  return {
    invested,
    returns: corpus - invested,
    corpus,
  };
}

function validate(
  principal: number,
  rate: number,
  years: number
) {
  if (
    !Number.isFinite(principal) ||
    !Number.isFinite(rate) ||
    !Number.isFinite(years) ||
    principal <= 0 ||
    rate < 0 ||
    years <= 0 ||
    years > 100
  ) {
    throw new Error("Please enter valid financial inputs");
  }
}
