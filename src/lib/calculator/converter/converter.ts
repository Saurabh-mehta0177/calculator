
export type UnitCategory =
  | "length"
  | "weight"
  | "temperature"
  | "volume"
  | "time";

const UNITS: Record<string, Record<string, number>> = {
  length: {
    meter: 1,
    kilometer: 1000,
    centimeter: 0.01,
    millimeter: 0.001,
    mile: 1609.344,
    foot: 0.3048,
    inch: 0.0254,
  },

  weight: {
    kilogram: 1,
    gram: 0.001,
    milligram: 0.000001,
    pound: 0.45359237,
    ounce: 0.028349523125,
    tonne: 1000,
  },

  volume: {
    liter: 1,
    milliliter: 0.001,
    cubicMeter: 1000,
    gallonUS: 3.785411784,
  },

  time: {
    second: 1,
    minute: 60,
    hour: 3600,
    day: 86400,
    week: 604800,
  },
};

export function convertUnit(
  value: number,
  category: UnitCategory,
  from: string,
  to: string
): number {
  if (!Number.isFinite(value)) {
    throw new Error("Enter a valid number");
  }

  if (category === "temperature") {
    let celsius: number;

    switch (from) {
      case "celsius":
        celsius = value;
        break;
      case "fahrenheit":
        celsius = (value - 32) * 5 / 9;
        break;
      case "kelvin":
        celsius = value - 273.15;
        break;
      default:
        throw new Error("Invalid temperature unit");
    }

    switch (to) {
      case "celsius":
        return celsius;
      case "fahrenheit":
        return celsius * 9 / 5 + 32;
      case "kelvin":
        return celsius + 273.15;
      default:
        throw new Error("Invalid temperature unit");
    }
  }

  const units = UNITS[category];

  if (
    !units ||
    !(from in units) ||
    !(to in units)
  ) {
    throw new Error("Unsupported unit conversion");
  }

  return value * units[from] / units[to];
}

export function getUnits(category: UnitCategory) {
  if (category === "temperature") {
    return ["celsius", "fahrenheit", "kelvin"];
  }

  return Object.keys(UNITS[category]);
}
