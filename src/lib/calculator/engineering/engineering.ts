
export interface Complex {
  real: number;
  imaginary: number;
}

export function complexAdd(a: Complex, b: Complex): Complex {
  return {
    real: a.real + b.real,
    imaginary: a.imaginary + b.imaginary,
  };
}

export function complexMultiply(a: Complex, b: Complex): Complex {
  return {
    real: a.real * b.real - a.imaginary * b.imaginary,
    imaginary: a.real * b.imaginary + a.imaginary * b.real,
  };
}

export function complexDivide(a: Complex, b: Complex): Complex {
  const denominator =
    b.real ** 2 + b.imaginary ** 2;

  if (denominator === 0) {
    throw new Error("Division by zero");
  }

  return {
    real:
      (a.real * b.real + a.imaginary * b.imaginary) /
      denominator,

    imaginary:
      (a.imaginary * b.real - a.real * b.imaginary) /
      denominator,
  };
}

export function matrixMultiply(
  a: number[][],
  b: number[][]
): number[][] {
  if (
    !a.length ||
    !b.length ||
    !a.every((row) => row.length === a[0].length) ||
    !b.every((row) => row.length === b[0].length)
  ) {
    throw new Error("Invalid matrix");
  }

  if (a[0].length !== b.length) {
    throw new Error("Matrix dimensions do not match");
  }

  if (
    [...a.flat(), ...b.flat()].some(
      (value) => !Number.isFinite(value)
    )
  ) {
    throw new Error("Matrix contains invalid values");
  }

  return a.map((row) =>
    b[0].map((_, column) =>
      row.reduce(
        (sum, value, index) =>
          sum + value * b[index][column],
        0
      )
    )
  );
}

export function solveQuadratic(
  a: number,
  b: number,
  c: number
): Complex[] {
  if (![a, b, c].every(Number.isFinite) || a === 0) {
    throw new Error("Invalid quadratic coefficients");
  }

  const discriminant = b * b - 4 * a * c;

  if (discriminant >= 0) {
    return [
      {
        real: (-b + Math.sqrt(discriminant)) / (2 * a),
        imaginary: 0,
      },
      {
        real: (-b - Math.sqrt(discriminant)) / (2 * a),
        imaginary: 0,
      },
    ];
  }

  return [
    {
      real: -b / (2 * a),
      imaginary: Math.sqrt(-discriminant) / (2 * a),
    },
    {
      real: -b / (2 * a),
      imaginary: -Math.sqrt(-discriminant) / (2 * a),
    },
  ];
}
