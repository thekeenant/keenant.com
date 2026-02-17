---
title: "Madgrades Transparency Report 2026"
slug: madgrades-transparency-report-2026
description: "Who built Madgrades, how it works, what it costs, what it earns, and why it's still online."
date: 2026-02-16
tags: ["madgrades", "analytics", "transparency", "open-source", "monetization"]
unlisted: true
---

I wrote the first lines of code for Madgrades in February 2018.

I was a UW–Madison undergraduate at the time, staring down my final year. I wasn’t trying to optimize for a 4.0 GPA; I was just trying to survive the course selection process without accidentally destroying my future prospects.

Picking classes often felt like roulette. While you could get decent advice for massive intro lectures, information got fuzzy the moment you wandered into smaller electives or courses outside your major. I didn’t necessarily want to avoid hard classes, but I definitely wanted to avoid stacking six of them in a single semester. I built Madgrades because I wanted a simple, searchable way to explore grade distributions and spot patterns.

I launched it in the Spring of 2018. I still had one semester left before graduating that December. I figured a few friends might use it and I'd end up shutting it down by the end of my time there. Instead, it became a genuine hit before I had even left campus. By Fall 2019, I was seeing students using the site during lectures, and by the following winter, thousands of active users were logging on to register for Spring 2020.

Today, roughly **30,000 students use Madgrades in a single month** during peak registration. With UW–Madison enrollment hovering around 52,000, that means **about 58% of the student body uses the site during enrollment periods**. Since launch, the platform has powered over **30 million course searches**.

I graduated over seven years ago and now live in New York City working in tech, but Madgrades is still online. Here is a look at how it runs, what it costs, and why I keep it going.

---

## Scale

I don’t obsess over analytics, but I do track the general patterns via Google Analytics. The traffic flow is incredibly consistent: it spikes aggressively in mid-November and mid-April, stabilizes during the semester, and flatlines during breaks.

Enrollment week hits, and tens of thousands of students suddenly need the same data at the same time.

<figure>
  <div id="mg-chart" class="w-full h-72 md:h-96"></div>
  <figcaption>Active Users (Feb 2024 - Feb 2026)</figcaption>
</figure>

<script>
  (function initEngagementChart() {
    const run = async () => {
      const charts = window.charts;
      if (!charts?.render) {
        console.error('Chart renderer not available');
        return;
      }

      try {
        const config = {
          colors: ["#60A5FA", "#F59E0B", "#34D399"], 
          
          async parseData(url) {
            const text = await fetch(url).then(r => r.text());
            const startDateMatch = text.match(/# Start date: (\d{8})/);
            const startDateStr = startDateMatch ? startDateMatch[1] : '20240215';
            
            const year = parseInt(startDateStr.substring(0, 4));
            const month = parseInt(startDateStr.substring(4, 6)) - 1; 
            const day = parseInt(startDateStr.substring(6, 8));
            const startDate = new Date(Date.UTC(year, month, day));
            
            const rows = await charts.parseCSV(url, {
              skipComments: true,
              headers: ["day", "30d", "7d", "1d"],
            });
            
            const dates = rows.map(r => {
              const nthDay = parseInt(r.day);
              if (isNaN(nthDay)) return '';
              const offsetMs = nthDay * 24 * 60 * 60 * 1000;
              const date = new Date(startDate.getTime() + offsetMs);
              return date.toISOString().substring(0, 10);
            });
            
            return {
              days: dates,
              series30d: rows.map(r => r["30d"]),
              series7d: rows.map(r => r["7d"]),
              series1d: rows.map(r => r["1d"]),
            };
          },
          
          getOptions(data, isDark) {
            const textColor = charts.getTextColor(isDark);
            const splitLineColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(128,128,128,0.08)";
            
            return {
              tooltip: { trigger: "axis", axisPointer: { type: "cross" } },
              toolbox: { feature: { saveAsImage: { pixelRatio: 2 } } },
              dataZoom: [{ type: "slider", start: 0, end: 100 }, { type: "inside" }],
              legend: { top: 8, textStyle: { color: textColor } },
              grid: { left: "3%", right: "8%", bottom: "12%", containLabel: true },
              xAxis: { type: "category", name: "Day", data: data.days, axisLine: { lineStyle: { color: textColor } }, axisLabel: { color: textColor } },
              yAxis: { name: "Active Users", axisLine: { lineStyle: { color: textColor } }, splitLine: { lineStyle: { color: splitLineColor } }, axisLabel: { color: textColor } },
              series: [
                { name: "30 days", type: "line", data: data.series30d, smooth: true, areaStyle: { opacity: 0.12 }, showSymbol: false },
                { name: "7 days", type: "line", data: data.series7d, smooth: false, showSymbol: false, lineStyle: { width: 2 } },
                { name: "1 day", type: "line", data: data.series1d, smooth: false, showSymbol: false, lineStyle: { width: 1, type: "dashed" } },
              ],
            };
          },
        };

        await charts.render('#mg-chart', '/articles/madgrades-transparency-report/users.csv', config);
      } catch (err) { console.error('Failed to render chart', err); }
    };

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run); } else { run(); }
  })();
</script>

Madgrades isn’t a startup, nor is it venture-backed. But during enrollment, it effectively behaves like university infrastructure.

---

## How does Madgrades work?

Madgrades is a read-only interface built on top of public university data. The product philosophy is intentionally boring and privacy-focused. There are no user accounts, no logins, and no email collection. You simply search for a class and view the public grade distributions.

The backend is remarkably stable for running an older stack: a Ruby on Rails API, Elasticsearch for queries, and MySQL for storage, all containerized with Docker.

### Where the Data Comes From

Each semester, the University releases grade distribution data as PDF reports. This isn't a fully automated pipeline; I manually download the official reports, upload them to a GitHub repository, and the system mostly handles the rest. If I miss a report, I submit a request, and the university has historically been responsive.

However, if the university ever stops releasing these PDFs or hides them behind formal records requests that incur fees, the site would likely shut down.

### Privacy

Since there are no accounts, Madgrades does not store personal user data. The only tracking comes from third-party services like Google Analytics and AdSense. Instructor names are sourced from public records; if an instructor requests a privacy-related removal or correction, I review and act on those requests whenever possible.

---

## Costs & Revenue

Madgrades runs a single ad placement via Google AdSense. There is no outside funding, no investors, and no affiliate deals. The ads exist solely to offset the server costs.

**Costs:**

- Backend server: \~\$16–17/month
- Domain: \~\$1/month
- Frontend hosting: Free

**Revenue (Feb 2024 – Feb 2026):**

- Total ad revenue: \~\$512
- Total infrastructure cost: \~\$439
- **Net surplus: \~\$73 over two years (\~\$35/year)**

As shown below, revenue spikes mirror the traffic spikes during registration.

<figure>
  <div id="monetization-chart" class="w-full h-72 md:h-96"></div>
  <figcaption>Weekly Ad Revenue (Feb 2024 - Feb 2026)</figcaption>
</figure>

<script>
  (function initMonetizationChart() {
    const run = async () => {
      const charts = window.charts;
      if (!charts?.render) { console.error('Chart renderer not available'); return; }

      try {
        const config = {
          colors: ["#10B981"],
          async parseData(url) {
            const text = await fetch(url).then(r => r.text());
            const startDateMatch = text.match(/# Start date: (\d{8})/);
            const startDateStr = startDateMatch ? startDateMatch[1] : '20240215';
            const year = parseInt(startDateStr.substring(0, 4));
            const month = parseInt(startDateStr.substring(4, 6)) - 1;
            const day = parseInt(startDateStr.substring(6, 8));
            const startDate = new Date(Date.UTC(year, month, day));
            const rows = await charts.parseCSV(url, { skipComments: true, headers: ["week", "revenue", "startDay", "endDay"] });
            const dates = rows.map(r => {
              const startDay = parseInt(r.startDay);
              if (isNaN(startDay)) return '';
              const offsetMs = startDay * 24 * 60 * 60 * 1000;
              const date = new Date(startDate.getTime() + offsetMs);
              return date.toISOString().substring(0, 10);
            });
            return { dates: dates, revenue: rows.map(r => parseFloat(r.revenue)) };
          },
          getOptions(data, isDark) {
            const textColor = charts.getTextColor(isDark);
            const splitLineColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(128,128,128,0.08)";
            return {
              tooltip: { trigger: "axis", formatter: (params) => `Week of ${params[0].name}<br/>Revenue: $${params[0].value.toFixed(2)}` },
              toolbox: { feature: { saveAsImage: { pixelRatio: 2 } } },
              dataZoom: [{ type: "slider", start: 0, end: 100 }, { type: "inside" }],
              grid: { left: "3%", right: "8%", bottom: "15%", containLabel: true },
              xAxis: { type: "category", name: "Week", data: data.dates, axisLine: { lineStyle: { color: textColor } }, axisLabel: { color: textColor } },
              yAxis: { name: "Revenue ($)", axisLine: { lineStyle: { color: textColor } }, splitLine: { lineStyle: { color: splitLineColor } }, axisLabel: { color: textColor, formatter: (value) => `$${value}` } },
              series: [{ name: "Weekly Revenue", type: "bar", data: data.revenue }],
            };
          },
        };
        await charts.render('#monetization-chart', '/articles/madgrades-transparency-report/monetization.csv', config);
      } catch (err) { console.error('Failed to render monetization chart', err); }
    };
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run); } else { run(); }
  })();
</script>

I’m currently considering adding a simple “Disable Ads” option for users who prefer a cleaner experience, but for now, the single ad placement keeps the lights on.

---

## Why It’s Still Online

Madgrades started as a personal tool that accidentally grew into something much larger. It stays online because it serves a clear purpose, costs almost nothing to run, and requires only a few hours of maintenance a year.

I’m proud that it continues to help students make informed decisions during enrollment.

Madgrades exists because the public data exists. As long as that remains true, and as long as the project remains sustainable, I plan to keep it running.

On Wisconsin.
