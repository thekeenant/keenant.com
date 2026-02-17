/**
 * Generic client-side helper to render charts using Apache ECharts.
 * - Dynamically loads ECharts from CDN
 * - Supports custom data parsers and chart configurations
 * - Supports light/dark theme (reads `document.documentElement.classList.contains('dark')`)
 * - Returns a handle with `dispose()` and `updateData()`
 */

export type ChartHandle = {
  dispose: () => void;
  updateData: (url: string) => Promise<void>;
};

export type ChartConfig = {
  // Function to parse data from a source URL
  parseData: (url: string) => Promise<any>;
  // Function to generate ECharts options from parsed data
  getOptions: (data: any, isDark: boolean) => any;
  // Optional color palette
  colors?: string[];
};

export async function renderChart(
  container: HTMLElement | string,
  dataUrl: string,
  config: ChartConfig,
): Promise<ChartHandle> {
  const el =
    typeof container === "string"
      ? document.querySelector(container)
      : container;
  if (!el) throw new Error("chart container not found");

  // Load ECharts from CDN at runtime (keeps your bundle small)
  const echartsModule = await import(
    // @ts-ignore
    "https://cdn.jsdelivr.net/npm/echarts@5/dist/echarts.esm.min.js" as any
  );
  // Module may export default or namespace — normalize
  const echarts: any = (echartsModule as any).default ?? echartsModule;

  let currentData = await config.parseData(dataUrl);
  const chart = echarts.init(el as HTMLElement, undefined, {
    renderer: "canvas",
  });

  const isDark = () => document.documentElement.classList.contains("dark");

  function setOptions(data: any) {
    const options = config.getOptions(data, isDark());

    // Apply color palette if provided
    if (config.colors) {
      options.color = config.colors;
    }

    // Ensure transparent background
    options.backgroundColor = options.backgroundColor ?? "transparent";

    chart.setOption(options);
  }

  setOptions(currentData);

  // React to theme changes (document `dark` class)
  const mo = new MutationObserver(() => {
    setOptions(currentData);
  });
  mo.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });

  const onResize = () => chart.resize();
  window.addEventListener("resize", onResize);

  return {
    dispose() {
      mo.disconnect();
      window.removeEventListener("resize", onResize);
      try {
        chart.dispose();
      } catch (e) {
        /* ignore */
      }
    },
    async updateData(url: string) {
      currentData = await config.parseData(url);
      setOptions(currentData);
    },
  };
}

/**
 * Generic CSV parser that returns rows as objects
 */
export async function parseCSV(
  url: string,
  options: {
    skipComments?: boolean;
    headers?: string[];
    mapFn?: (row: any) => any;
  } = {},
): Promise<any[]> {
  const { skipComments = true, headers, mapFn } = options;

  const txt = await fetch(url).then((r) => r.text());
  const rows = txt
    .split(/\r?\n/)
    .map((r) => r.trim())
    .filter((r) => {
      if (!r) return false;
      if (skipComments && r.startsWith("#")) return false;
      return true;
    })
    .map((r) => r.split(","));

  const headerRow = headers ?? rows[0];
  const dataRows = rows.slice(1); // Always skip first row (CSV header)

  const parsed = dataRows.map((row) => {
    const obj: Record<string, any> = {};
    headerRow.forEach((header, i) => {
      const value = row[i]?.trim();
      // Try to parse as number, otherwise keep as string
      obj[header] = isNaN(Number(value)) ? value : Number(value);
    });
    return obj;
  });

  return mapFn ? parsed.map(mapFn) : parsed;
}

/**
 * Helper to get text color based on theme
 */
export function getTextColor(isDark: boolean): string {
  return isDark ? "#ddd" : "#222";
}
