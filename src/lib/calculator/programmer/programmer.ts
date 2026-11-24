
// export type NumberBase = 2 | 8 | 10 | 16;

// export interface ProgrammerResult {
//   decimal: string;
//   binary: string;
//   octal: string;
//   hexadecimal: string;
//   unsigned32: string;
//   signed32: string;
// }

// export function parseInteger(
//   input: string,
//   base: NumberBase
// ): bigint {
//   const value = input.trim();

//   if (!value) {
//     throw new Error("Enter a number");
//   }

//   const digits: Record<number, RegExp> = {
//     2: /^[01]+$/,
//     8: /^[0-7]+$/,
//     10: /^-?\d+$/,
//     16: /^[0-9a-f]+$/i,
//   };

//   if (!digits[base].test(value)) {
//     throw new Error(`Invalid base-${base} number`);
//   }

//   const negative = value.startsWith("-");
//   const raw = negative ? value.slice(1) : value;

//   const parsed = BigInt(
//     base === 10
//       ? raw
//       : `0x${raw}`
//   );

//   if (base === 2) {
//     const result = [...raw].reduce(
//       (acc, digit) => acc * 2n + BigInt(digit),
//       0n
//     );

//     return negative ? -result : result;
//   }

//   if (base === 8) {
//     const result = [...raw].reduce(
//       (acc, digit) => acc * 8n + BigInt(digit),
//       0n
//     );

//     return negative ? -result : result;
//   }

//   return negative ? -parsed : parsed;
// }

// export function convertBases(value: bigint): ProgrammerResult {
//   const mask = (1n << 32n) - 1n;
//   const unsigned = BigInt.asUintN(32, value);
//   const signed = BigInt.asIntN(32, value);

//   return {
//     decimal: value.toString(10),
//     binary: value.toString(2),
//     octal: value.toString(8),
//     hexadecimal: value.toString(16).toUpperCase(),
//     unsigned32: unsigned.toString(),
//     signed32: signed.toString(),
//   };
// }

// export function bitwiseOperation(
//   a: bigint,
//   b: bigint,
//   operation: "AND" | "OR" | "XOR" | "NOT" | "LSHIFT" | "RSHIFT"
// ) {
//   switch (operation) {
//     case "AND":
//       return a & b;
//     case "OR":
//       return a | b;
//     case "XOR":
//       return a ^ b;
//     case "NOT":
//       return ~a;
//     case "LSHIFT":
//       return a << b;
//     case "RSHIFT":
//       return a >> b;
//   }
// }






export type NumberBase = 2 | 8 | 10 | 16;

export interface ProgrammerResult {
  decimal: string;
  binary: string;
  octal: string;
  hexadecimal: string;
  unsigned32: string;
  signed32: string;
}

export function parseInteger(
  input: string,
  base: NumberBase
): bigint {
  const value = input.trim();

  if (!value) {
    throw new Error("Enter a number");
  }

  const negative = value.startsWith("-");
  const raw = negative ? value.slice(1) : value;

  const digits: Record<number, RegExp> = {
    2: /^[01]+$/,
    8: /^[0-7]+$/,
    10: /^\d+$/,
    16: /^[0-9a-f]+$/i,
  };

  if (!digits[base].test(raw)) {
    throw new Error(`Invalid base-${base} number`);
  }

  let result = BigInt(0);

  for (const digit of raw.toLowerCase()) {
    const digitValue = parseInt(digit, 16);
    result = result * BigInt(base) + BigInt(digitValue);
  }

  return negative ? -result : result;
}

export function convertBases(
  value: bigint
): ProgrammerResult {
  const unsigned = BigInt.asUintN(32, value);
  const signed = BigInt.asIntN(32, value);

  return {
    decimal: value.toString(10),
    binary: value.toString(2),
    octal: value.toString(8),
    hexadecimal: value.toString(16).toUpperCase(),
    unsigned32: unsigned.toString(),
    signed32: signed.toString(),
  };
}

export function bitwiseOperation(
  a: bigint,
  b: bigint,
  operation:
    | "AND"
    | "OR"
    | "XOR"
    | "NOT"
    | "LSHIFT"
    | "RSHIFT"
): bigint {
  switch (operation) {
    case "AND":
      return a & b;
    case "OR":
      return a | b;
    case "XOR":
      return a ^ b;
    case "NOT":
      return ~a;
    case "LSHIFT":
      return a << b;
    case "RSHIFT":
      return a >> b;
  }
}
