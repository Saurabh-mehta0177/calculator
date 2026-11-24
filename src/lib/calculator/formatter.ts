export function formatNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "Error";
  }

  if (Object.is(value, -0) || Math.abs(value) < 1e-14) {
    value = 0;
  }

  return new Intl.NumberFormat("en-IN", {
    maximumFractionDigits: 12,
    useGrouping: true,
  }).format(value);
}

export function toPlainNumber(value: number): string {
  if (!Number.isFinite(value)) {
    return "Error";
  }

  return Number(value.toPrecision(12)).toString();
}

export function formatScientific(value: number): string {
  if (!Number.isFinite(value)) {
    return "Error";
  }

  if (value === 0) return "0";

  if (Math.abs(value) >= 1e12 || Math.abs(value) < 1e-8) {
    return value.toExponential(8);
  }

  return formatNumber(value);
}

// Indian Rupee Formatter
export function formatINR(value: number): string {
  if (!Number.isFinite(value)) {
    return "Error";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(value);
}