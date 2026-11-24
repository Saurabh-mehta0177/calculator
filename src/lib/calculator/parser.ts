
import type { AngleMode } from "./types";

type Token =
  | { type: "number"; value: number }
  | { type: "identifier"; value: string }
  | { type: "operator"; value: string }
  | { type: "left" }
  | { type: "right" }
  | { type: "comma" };

const MAX_INPUT_LENGTH = 500;
const MAX_TOKENS = 200;
const MAX_DEPTH = 40;

function tokenize(input: string): Token[] {
  if (input.length > MAX_INPUT_LENGTH) {
    throw new Error("Expression is too long");
  }

  const tokens: Token[] = [];
  let i = 0;

  while (i < input.length) {
    const rest = input.slice(i);

    if (/^\s+/.test(rest)) {
      i += rest.match(/^\s+/)![0].length;
      continue;
    }

    const number = rest.match(
      /^(?:\d+\.?\d*|\.\d+)(?:e[+-]?\d+)?/i
    );

    if (number) {
      const value = Number(number[0]);

      if (!Number.isFinite(value)) {
        throw new Error("Invalid number");
      }

      tokens.push({ type: "number", value });
      i += number[0].length;
      continue;
    }

    const identifier = rest.match(/^[a-zA-Z_]+/);

    if (identifier) {
      tokens.push({
        type: "identifier",
        value: identifier[0].toLowerCase(),
      });

      i += identifier[0].length;
      continue;
    }

    const char = input[i];

    if ("+-*/%^!".includes(char)) {
      tokens.push({
        type: "operator",
        value: char,
      });
    } else if (char === "(") {
      tokens.push({ type: "left" });
    } else if (char === ")") {
      tokens.push({ type: "right" });
    } else if (char === ",") {
      tokens.push({ type: "comma" });
    } else {
      throw new Error(`Invalid character: ${char}`);
    }

    i++;

    if (tokens.length > MAX_TOKENS) {
      throw new Error("Too many expression tokens");
    }
  }

  return tokens;
}

const FUNCTIONS = new Set([
  "sin", "cos", "tan",
  "asin", "acos", "atan",
  "sinh", "cosh", "tanh",
  "sqrt", "cbrt",
  "abs", "ln", "log", "log10",
  "exp", "floor", "ceil", "round",
  "fact", "factorial",
  "min", "max", "pow",
]);

function factorial(n: number): number {
  if (
    !Number.isInteger(n) ||
    n < 0 ||
    n > 170
  ) {
    throw new Error(
      "Factorial requires an integer from 0 to 170"
    );
  }

  let result = 1;

  for (let i = 2; i <= n; i++) {
    result *= i;
  }

  return result;
}

function checked(value: number): number {
  if (!Number.isFinite(value)) {
    throw new Error("Math domain or overflow error");
  }

  return value;
}

function toRadians(value: number, mode: AngleMode) {
  return mode === "DEG"
    ? (value * Math.PI) / 180
    : value;
}

function fromRadians(value: number, mode: AngleMode) {
  return mode === "DEG"
    ? (value * 180) / Math.PI
    : value;
}

function callFunction(
  name: string,
  args: number[],
  mode: AngleMode
): number {
  if (!FUNCTIONS.has(name)) {
    throw new Error(`Unknown function: ${name}`);
  }

  const unary = () => {
    if (args.length !== 1) {
      throw new Error(`${name} requires one argument`);
    }

    return args[0];
  };

  const binary = () => {
    if (args.length !== 2) {
      throw new Error(`${name} requires two arguments`);
    }

    return args;
  };

  switch (name) {
    case "sin":
      return Math.sin(toRadians(unary(), mode));

    case "cos":
      return Math.cos(toRadians(unary(), mode));

    case "tan":
      return checked(
        Math.tan(toRadians(unary(), mode))
      );

    case "asin":
      return fromRadians(
        Math.asin(unary()),
        mode
      );

    case "acos":
      return fromRadians(
        Math.acos(unary()),
        mode
      );

    case "atan":
      return fromRadians(
        Math.atan(unary()),
        mode
      );

    case "sinh":
      return Math.sinh(unary());

    case "cosh":
      return Math.cosh(unary());

    case "tanh":
      return Math.tanh(unary());

    case "sqrt":
      return Math.sqrt(unary());

    case "cbrt":
      return Math.cbrt(unary());

    case "abs":
      return Math.abs(unary());

    case "ln":
      return Math.log(unary());

    case "log":
    case "log10":
      return Math.log10(unary());

    case "exp":
      return Math.exp(unary());

    case "floor":
      return Math.floor(unary());

    case "ceil":
      return Math.ceil(unary());

    case "round":
      return Math.round(unary());

    case "fact":
    case "factorial":
      return factorial(unary());

    case "min":
      if (args.length < 1) {
        throw new Error("min requires arguments");
      }
      return Math.min(...args);

    case "max":
      if (args.length < 1) {
        throw new Error("max requires arguments");
      }
      return Math.max(...args);

    case "pow": {
      const [a, b] = binary();
      return Math.pow(a, b);
    }

    default:
      throw new Error("Unsupported function");
  }
}

class Parser {
  private position = 0;
  private depth = 0;

  constructor(
    private readonly tokens: Token[],
    private readonly mode: AngleMode,
    private readonly ans: number
  ) {}

  private peek(): Token | undefined {
    return this.tokens[this.position];
  }

  private consume(): Token {
    const token = this.peek();

    if (!token) {
      throw new Error("Unexpected end of expression");
    }

    this.position++;
    return token;
  }

  private matchOperator(value: string): boolean {
    const token = this.peek();

    if (
      token?.type === "operator" &&
      token.value === value
    ) {
      this.position++;
      return true;
    }

    return false;
  }

  private expectRight() {
    if (this.peek()?.type !== "right") {
      throw new Error("Missing closing parenthesis");
    }

    this.position++;
  }

  parse(): number {
    if (this.tokens.length === 0) {
      throw new Error("Enter an expression");
    }

    const result = this.additive();

    if (this.position !== this.tokens.length) {
      throw new Error("Unexpected token");
    }

    return checked(result);
  }

  private additive(): number {
    let value = this.multiplicative();

    while (true) {
      if (this.matchOperator("+")) {
        value += this.multiplicative();
      } else if (this.matchOperator("-")) {
        value -= this.multiplicative();
      } else {
        break;
      }

      checked(value);
    }

    return value;
  }

  private multiplicative(): number {
    let value = this.unary();

    while (true) {
      if (this.matchOperator("*")) {
        value *= this.unary();
      } else if (this.matchOperator("/")) {
        const divisor = this.unary();

        if (divisor === 0) {
          throw new Error("Cannot divide by zero");
        }

        value /= divisor;
      } else if (this.matchOperator("%")) {
        const divisor = this.unary();

        if (divisor === 0) {
          throw new Error("Cannot modulo by zero");
        }

        value %= divisor;
      } else if (this.startsPrimary()) {
        // Implicit multiplication: 2π, 2(3+4), 2sin(30)
        value *= this.unary();
      } else {
        break;
      }

      checked(value);
    }

    return value;
  }

  private startsPrimary(): boolean {
    const token = this.peek();

    return (
      token?.type === "number" ||
      token?.type === "left" ||
      token?.type === "identifier"
    );
  }

  private unary(): number {
    if (this.matchOperator("+")) {
      return this.unary();
    }

    if (this.matchOperator("-")) {
      return -this.unary();
    }

    return this.power();
  }

  private power(): number {
    let value = this.postfix();

    if (this.matchOperator("^")) {
      value = Math.pow(value, this.unary());
    }

    return checked(value);
  }

  private postfix(): number {
    let value = this.primary();

    while (this.matchOperator("!")) {
      value = factorial(value);
    }

    return value;
  }

  private primary(): number {
    this.depth++;

    if (this.depth > MAX_DEPTH) {
      throw new Error("Expression nesting is too deep");
    }

    try {
      const token = this.consume();

      if (token.type === "number") {
        return token.value;
      }

      if (token.type === "left") {
        const value = this.additive();
        this.expectRight();
        return value;
      }

      if (token.type === "identifier") {
        const name = token.value;

        if (name === "pi") return Math.PI;
        if (name === "e") return Math.E;
        if (name === "ans") return this.ans;

        if (!FUNCTIONS.has(name)) {
          throw new Error(`Unknown identifier: ${name}`);
        }

        if (this.peek()?.type !== "left") {
          throw new Error(`Expected ( after ${name}`);
        }

        this.consume();

        const args: number[] = [];

        if (this.peek()?.type !== "right") {
          args.push(this.additive());

          while (this.peek()?.type === "comma") {
            this.consume();
            args.push(this.additive());
          }
        }

        this.expectRight();

        return checked(
          callFunction(name, args, this.mode)
        );
      }

      throw new Error("Invalid expression");
    } finally {
      this.depth--;
    }
  }
}

export function evaluateExpression(
  expression: string,
  mode: AngleMode = "DEG",
  ans = 0
): number {
  if (!expression.trim()) {
    throw new Error("Enter an expression");
  }

  return new Parser(
    tokenize(expression),
    mode,
    ans
  ).parse();
}
