
import type {
  CalculatorTab,
} from "./types";

export const CALCULATOR_TABS: {
  id: CalculatorTab;
  label: string;
  description: string;
  icon: string;
}[] = [
  {
    id: "scientific",
    label: "Scientific",
    description: "Advanced mathematical calculations",
    icon: "🧮",
  },
  {
    id: "geometry",
    label: "Geometry",
    description: "2D and 3D shape calculations",
    icon: "📐",
  },
  {
    id: "programmer",
    label: "Programmer",
    description: "Binary, decimal and hexadecimal",
    icon: "💻",
  },
  {
    id: "statistics",
    label: "Statistics",
    description: "Statistical analysis and probability",
    icon: "📊",
  },
  {
    id: "engineering",
    label: "Engineering",
    description: "Engineering unit conversions",
    icon: "⚙️",
  },
  {
    id: "finance",
    label: "Finance",
    description: "Interest, EMI and investments",
    icon: "💰",
  },
  {
    id: "graphing",
    label: "Graphing",
    description: "Mathematical function plotting",
    icon: "📈",
  },
  {
    id: "history",
    label: "History",
    description: "Saved calculation history",
    icon: "🕘",
  },
];
