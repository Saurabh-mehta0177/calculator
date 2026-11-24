
export interface HistoryRecord {
  id: string;
  module: string;
  expression: string;
  result: string;
  timestamp: number;
}

export const HISTORY_KEY =
  "financetools-universal-history-v1";

export function createHistoryRecord(
  module: string,
  expression: string,
  result: string
): HistoryRecord {
  return {
    id: crypto.randomUUID(),
    module,
    expression,
    result,
    timestamp: Date.now(),
  };
}

export function exportHistoryCSV(
  records: HistoryRecord[]
): string {
  const escape = (value: string) =>
    `"${value.replace(/"/g, '""')}"`;

  const rows = [
    ["Module", "Expression", "Result", "Date"],
    ...records.map((item) => [
      item.module,
      item.expression,
      item.result,
      new Date(item.timestamp).toISOString(),
    ]),
  ];

  return rows
    .map((row) => row.map(escape).join(","))
    .join("\r\n");
}
