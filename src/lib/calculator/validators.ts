
export function isValidNumber(
  value: unknown
): value is number {
  return (
    typeof value === "number" &&
    Number.isFinite(value)
  );
}

export function validatePositive(
  value: number,
  fieldName = "Value"
): string | null {
  if (!Number.isFinite(value)) {
    return `${fieldName} must be a valid number.`;
  }

  if (value <= 0) {
    return `${fieldName} must be greater than zero.`;
  }

  return null;
}

export function validateNonNegative(
  value: number,
  fieldName = "Value"
): string | null {
  if (!Number.isFinite(value)) {
    return `${fieldName} must be a valid number.`;
  }

  if (value < 0) {
    return `${fieldName} cannot be negative.`;
  }

  return null;
}

export function validateRange(
  value: number,
  min: number,
  max: number,
  fieldName = "Value"
): string | null {
  if (!Number.isFinite(value)) {
    return `${fieldName} must be a valid number.`;
  }

  if (value < min || value > max) {
    return `${fieldName} must be between ${min} and ${max}.`;
  }

  return null;
}

export function parseNumericInput(
  value: string
): number | null {
  const cleaned = value.trim();

  if (!cleaned) return null;

  const parsed = Number(cleaned);

  return Number.isFinite(parsed)
    ? parsed
    : null;
}

export function validateArray(
  values: number[]
): string | null {
  if (!values.length) {
    return "Please enter at least one value.";
  }

  if (values.some((value) => !Number.isFinite(value))) {
    return "All values must be valid numbers.";
  }

  return null;
}
