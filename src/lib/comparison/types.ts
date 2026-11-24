
export type ComparisonSlug =
  | "fd-vs-sip"
  | "sip-vs-lumpsum"
  | "ppf-vs-sip";

export type InvestmentMode = "monthly" | "lumpsum";

export interface InvestmentOption {
  id: string;
  name: string;
  shortName: string;
  description: string;
  annualReturn: number;
  mode: InvestmentMode;
  color: string;
  icon: string;
}

export interface ComparisonConfig {
  slug: ComparisonSlug;
  title: string;
  description: string;
  options: [InvestmentOption, InvestmentOption];
}

export interface ComparisonInputs {
  amount: number;
  years: number;
}

export interface GrowthPoint {
  year: number;
  invested: number;
  corpus: number;
  returns: number;
}

export interface InvestmentResult {
  id: string;
  name: string;
  totalInvested: number;
  estimatedReturns: number;
  estimatedCorpus: number;
  annualReturn: number;
  growthData: GrowthPoint[];
}

export interface ComparisonResult {
  results: [InvestmentResult, InvestmentResult];
  difference: number;
  winner: string;
  inputs: ComparisonInputs;
}
