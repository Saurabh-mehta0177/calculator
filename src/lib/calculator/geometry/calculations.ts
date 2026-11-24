
import type {
  GeometryInput,
  GeometryResult,
  ShapeType,
} from "./types";

function positive(value: number, name: string) {
  if (!Number.isFinite(value) || value <= 0) {
    throw new Error(`${name} must be greater than zero`);
  }

  return value;
}

function validateTriangle(a: number, b: number, c: number) {
  positive(a, "Side A");
  positive(b, "Side B");
  positive(c, "Side C");

  if (
    a + b <= c ||
    a + c <= b ||
    b + c <= a
  ) {
    throw new Error("Invalid triangle sides");
  }
}

export function calculateGeometry(
  shape: ShapeType,
  input: GeometryInput
): GeometryResult {
  const v = (key: string) =>
    positive(input[key], key);

  switch (shape) {
    case "square": {
      const s = v("side");

      return {
        area: s * s,
        perimeter: 4 * s,
        diagonal: s * Math.SQRT2,
      };
    }

    case "rectangle": {
      const l = v("length");
      const w = v("width");

      return {
        area: l * w,
        perimeter: 2 * (l + w),
        diagonal: Math.hypot(l, w),
      };
    }

    case "circle": {
      const r = v("radius");

      return {
        area: Math.PI * r * r,
        circumference: 2 * Math.PI * r,
      };
    }

    case "triangle": {
      const a = v("a");
      const b = v("b");
      const c = v("c");

      validateTriangle(a, b, c);

      const s = (a + b + c) / 2;

      return {
        area: Math.sqrt(
          s * (s - a) * (s - b) * (s - c)
        ),
        perimeter: a + b + c,
      };
    }

    case "parallelogram": {
      const base = v("base");
      const height = v("height");
      const side = v("side");

      return {
        area: base * height,
        perimeter: 2 * (base + side),
      };
    }

    case "trapezoid": {
      const a = v("a");
      const b = v("b");
      const h = v("height");

      return {
        area: ((a + b) * h) / 2,
      };
    }

    case "cube": {
      const s = v("side");

      return {
        area: 6 * s * s,
        surfaceArea: 6 * s * s,
        volume: s ** 3,
        diagonal: s * Math.sqrt(3),
      };
    }

    case "cuboid": {
      const l = v("length");
      const w = v("width");
      const h = v("height");

      return {
        area: 2 * (l * w + w * h + h * l),
        surfaceArea: 2 * (l * w + w * h + h * l),
        volume: l * w * h,
        diagonal: Math.sqrt(l*l + w*w + h*h),
      };
    }

    case "sphere": {
      const r = v("radius");

      return {
        surfaceArea: 4 * Math.PI * r * r,
        volume: (4 / 3) * Math.PI * r ** 3,
      };
    }

    case "cylinder": {
      const r = v("radius");
      const h = v("height");

      const lateral = 2 * Math.PI * r * h;

      return {
        area: 2 * Math.PI * r * (r + h),
        surfaceArea: 2 * Math.PI * r * (r + h),
        lateralSurfaceArea: lateral,
        volume: Math.PI * r * r * h,
      };
    }

    case "cone": {
      const r = v("radius");
      const h = v("height");

      const slant = Math.hypot(r, h);

      return {
        surfaceArea: Math.PI * r * (r + slant),
        lateralSurfaceArea: Math.PI * r * slant,
        volume: (Math.PI * r * r * h) / 3,
        slantHeight: slant,
      };
    }

    case "hemisphere": {
      const r = v("radius");

      return {
        surfaceArea: 3 * Math.PI * r * r,
        lateralSurfaceArea: 2 * Math.PI * r * r,
        volume: (2 / 3) * Math.PI * r ** 3,
      };
    }

    default:
      throw new Error("Unsupported shape");
  }
}
