// Expose chart utilities as globals so Markdown pages can invoke them
// without using bare-import specifiers.

import { renderChart, parseCSV, getTextColor } from "@lib/echarts";

declare global {
  interface Window {
    charts?: {
      render: typeof renderChart;
      parseCSV: typeof parseCSV;
      getTextColor: typeof getTextColor;
    };
  }
}

// Attach to `window` (idempotent)
window.charts = window.charts ?? {
  render: renderChart,
  parseCSV: parseCSV,
  getTextColor: getTextColor,
};

export {};
