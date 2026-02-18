---
title: "Madgrades Transparency Report 2026"
slug: madgrades-transparency-report-2026
description: "Who built Madgrades, how it works, what it costs, what it earns, and why it's still online."
date: 2026-02-16
tags: ["madgrades", "open-source"]
unlisted: true
---

## Foreword

It feels a little ridiculous to release a formal "Transparency Report" for what is, essentially, a dusty student project that runs on auto-pilot. I built Madgrades back in 2018 expecting it to be a one-semester wonder for my friends. I figured I'd graduate, the server would eventually crash, and that would be that.

But the numbers don't lie. Seven years later, this little tool has become a weirdly integral part of campus life. It's processed over 30 million searches and survived long enough to help nearly 60%[^1] of the current student body register for classes. Even though I've long since moved on to my career at Google, I still find myself logging in every semester to push updates (sorry they're late!) because seeing thousands of students rely on it is incredibly motivating.

So I'm writing this down for posterity, and in the hope that it might help someone else trying to build something similar. But mostly, I'm sharing it out of the same spirit of openness that drives the project itself: public data is only truly public if it's accessible.

— Keenan Thompson

## Introduction to Madgrades

[Madgrades.com](https://madgrades.com) is an independent, open-source site that turns UW-Madison Registrar PDF grade reports into searchable, visual breakdowns. Users can look up courses, see grade distributions, instructor trends, semester comparisons, and subject-level rankings.

It’s not affiliated with UW-Madison in any way. This tool makes grade reports easier to use when planning schedules, but it is emphasized that grades are only one factor among many.

**Core features include:**

- Search by course code, name, subject, instructor, or keyword
- Percentage breakdowns of grades (A's, B's, etc.) with visual charts
- Instructor and course GPA trends over semesters
- Comparisons between cumulative distributions, specific instructors, or individual semesters
- Explore pages ranking subjects, courses, or instructors by average GPA
- Course comparison tool for side-by-side views
- Dark mode support

## Why Make GPA Data Accessible?

The core philosophy behind Madgrades is that public data shouldn't just be technically available. It should be functionally accessible. While the university releases these reports as PDFs, they are buried in archives and difficult to parse at a glance. By visualizing this data, we transform raw numbers into actionable insights.

A common criticism of grade transparency is that it encourages "grade shopping," or hunting for courses solely based on high GPAs. While this undoubtedly happens, observation of student behavior over the last seven years of operation suggests a more nuanced reality. Most students use this data not to avoid work, but to manage risk.

They use it to balance a heavy semester by pairing a notoriously rigorous prerequisite with a lighter elective. They use it to identify grading disparities between sections that might affect their scholarship eligibility. Or they use it simply to avoid being blindsided by a course with an unexpectedly high failure rate. In this context, transparency doesn't undermine academic rigor; it enables students to make informed decisions about their own education.

Grade inflation is also acknowledged as a complex, systemic issue, and the intent is certainly not to exacerbate it. However, silence and obscurity are not solutions. By bringing these trends into the light, the goal is to provide a clear picture of the current reality, allowing for honest comparisons and informed choices, rather than leaving students to rely on rumor or luck.

## History and Development

Madgrades launched in February 2018. The core user-facing behavior has stayed mostly the same since launch: search, grade breakdowns, instructor/course trends, comparisons, and explore/ranking views.

Updates since then have been incremental, consisting mostly of UX polish, reliability fixes, modern tooling, and a couple of new additions from community contributions.

**Key Milestones:**

<div class="relative py-4 pl-8 space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-gray-200 dark:before:bg-zinc-700 not-prose">
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-indigo-500 dark:bg-zinc-900 dark:border-indigo-400"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5">Feb 2018</div>
    <div class="text-gray-900 dark:text-gray-100">Initial launch.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 dark:bg-zinc-900 dark:border-zinc-600"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">Jan 2019</div>
    <div class="text-gray-900 dark:text-gray-100">Chart UX improvements for better readability.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 dark:bg-zinc-900 dark:border-zinc-600"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">Sep 2020</div>
    <div class="text-gray-900 dark:text-gray-100">AdSense added.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 dark:bg-zinc-900 dark:border-zinc-600"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">Nov 2022</div>
    <div class="text-gray-900 dark:text-gray-100">Migration to GA4</span>.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 dark:bg-zinc-900 dark:border-zinc-600"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">2023</div>
    <div class="text-gray-900 dark:text-gray-100">Full Dockerization and dependency modernization.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 dark:bg-zinc-900 dark:border-zinc-600"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">2025</div>
    <div class="text-gray-900 dark:text-gray-100">Began promoting community-built student projects on-site.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-gray-300 dark:bg-zinc-900 dark:border-zinc-600"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-0.5">May 2025</div>
    <div class="text-gray-900 dark:text-gray-100">Course comparison feature added by contributor.</div>
  </div>
  <div class="relative">
    <div class="absolute -left-[29px] top-1.5 h-4 w-4 rounded-full bg-white border-4 border-indigo-500 dark:bg-zinc-900 dark:border-indigo-400"></div>
    <div class="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5">Feb 2026</div>
    <div class="text-gray-900 dark:text-gray-100">Dark mode added, along with modernization.</div>
  </div>
</div>

## Data Sourcing and Processing

The data powering Madgrades comes directly from publicly available UW-Madison Registrar publications: the [Course Grade-Distribution Reports](https://archive.is/https://registrar.wisc.edu/grade-reports) and the [Departmental Instructional Reports (DIR)](https://archive.is/https://registrar.wisc.edu/curricular-build/#dir).

The Grade-Distribution Reports provide the core data, containing section-level final grades dating back to approximately 2006. The DIR data is used supplementally, but with caution. The university notes that DIR data is intended for internal administrative use and involves specific terminologies that can be easily misinterpreted without full context. Madgrades includes this data to provide a more complete picture, but users should read the full [usage disclaimer](https://github.com/Madgrades/madgrades-data) and interpret it with care.

**How it Works**

The process begins by downloading these PDFs from the Registrar's website and archiving them in the [madgrades-data](https://github.com/Madgrades/madgrades-data) repository. From there, a GitHub Action triggers the [madgrades-extractor](https://github.com/Madgrades/madgrades-extractor), a tool designed to parse the raw PDF tables and convert them into structured JSON and CSV formats. This processed data is then loaded into the backend database that powers the API, which the frontend website queries to render charts and visualizations.

**Known Limitations**

Because the data extraction relies on parsing PDF tables, occasional errors can occur where rows or columns are misread. Additionally, updates to the site sometimes lag behind the official university release schedule. Users are always encouraged to verify critical information against the official Registrar reports directly. If you spot an error, please report it via [GitHub](https://github.com/Madgrades/madgrades.com/issues) or the feedback form on the site.

## User Privacy and Data Practices

The privacy story for Madgrades is intentionally boring.

Madgrades itself collects no personal data from users. We do not require accounts, logins, emails, or identifiers. Regular browsing is anonymous from the Madgrades backend.

The site does use third-party services:

- Google Analytics GA4 for aggregated usage stats (IP anonymization enabled; no personally identifiable data collected by Madgrades).
- Google AdSense for monetization; AdSense may track for personalized ads via cookies, IP addresses, or device info. This is handled by Google, not Madgrades.

No other trackers. No data sold or shared by Madgrades.

For developers/contributors who use the backend (e.g., API keys), only email addresses are securely stored. No passwords or other personal data are kept.

## Operational Transparency

Madgrades is built on a modern stack comprising **React 19** and **Vite** for the frontend, with a **Ruby on Rails** backend handling API requests. Data extraction from PDF reports is performed using custom **Java-based tools**. Everything is containerized with **Docker** for consistent local development.

The project is broken down into four key repositories:

- [`madgrades.com`](https://github.com/Madgrades/madgrades.com) (Frontend)
- [`api.madgrades.com`](https://github.com/Madgrades/api.madgrades.com) (Backend)
- [`madgrades-data`](https://github.com/Madgrades/madgrades-data) (PDF Archive)
- [`madgrades-extractor`](https://github.com/Madgrades/madgrades-extractor) (Parser)

The project is small, primarily maintained by Keenan Thompson, with occasional community contributions merged via pull requests. It has 6 total contributors and 56 GitHub stars. Hosting costs are minimal (domain + server) and have been fully offset by ad revenue since 2020. UptimeRobot is used for monitoring, and the current API revision is always visible in the site footer.

## User Metrics and Impact

Madgrades reaches a significant portion of the UW–Madison student body.

<div class="grid grid-cols-2 md:grid-cols-4 gap-4 my-8 not-prose">
  <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-200 dark:border-zinc-700/50">
    <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-1">
      30M+
    </span>
    <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
      Total Searches
    </span>
  </div>
  <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-200 dark:border-zinc-700/50">
    <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-1">
      30k
    </span>
    <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
      Peak MAU
    </span>
  </div>
  <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-200 dark:border-zinc-700/50">
    <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-1">
      58%
    </span>
    <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
      Student Reach
    </span>
  </div>
  <div class="flex flex-col items-center p-4 bg-gray-50 dark:bg-zinc-800/50 rounded-lg border border-gray-200 dark:border-zinc-700/50">
    <span class="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-400 dark:to-purple-400 mb-1">
      150k
    </span>
    <span class="text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
      Peak Daily Views
    </span>
  </div>
</div>

**Key Metrics**

The site has processed **over 30 million** cumulative course searches since launch. During peak periods, we see approximately **30,000 monthly active users** and **6,300 daily active users**, generating over **150,000 daily page views**. This traffic corresponds to roughly **58%**[^1] of the total student body.

**Usage & Seasonality**

Traffic correlates almost perfectly with the academic calendar. We see two predictable massive spikes per term: one during the course registration window and another during the first month of the semester. Activity settles into a stable baseline during the summer break. Revenue and engagement spikes align directly with these registration periods.

**Audience & Integrations**

The primary audience is students planning schedules and choosing sections. However, the open API has enabled an ecosystem of community-built tools, including Chrome extensions and course planners. We also see occasional usage from researchers and data analysts interested in the aggregated grade data.

**Discovery & Community**

Growth has been almost entirely organic through word-of-mouth, campus sharing, and mentions on the [UW-Madison subreddit](https://www.reddit.com/r/UWMadison). As an open-source project, we receive contributions and bug reports via GitHub, and in 2025, we began highlighting other student projects directly on the site to support the wider developer community.

The chart below shows active user and page view trends from February 2023 to February 2026.

<figure>
  <div id="mg-chart" class="w-full h-72 md:h-96"></div>
  <figcaption>Active Users and Page Views (Feb 2023 – Feb 2026)</figcaption>
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
          // added `views` series (right axis)
          colors: ["#60A5FA", "#F59E0B", "#34D399", "#8B5CF6"], 
          
          async parseData(url) {
            const text = await fetch(url).then(r => r.text());
            const startDateMatch = text.match(/# Start date: (\d{8})/);
            const startDateStr = startDateMatch ? startDateMatch[1] : '20230215';
            
            const year = parseInt(startDateStr.substring(0, 4));
            const month = parseInt(startDateStr.substring(4, 6)) - 1; 
            const day = parseInt(startDateStr.substring(6, 8));
            const startDate = new Date(Date.UTC(year, month, day));
            
            // include Views column (page view volume)
            const rows = await charts.parseCSV(url, {
              skipComments: true,
              headers: ["day", "30d", "7d", "1d", "views"],
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
              views: rows.map(r => r["views"]),
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

              // left = active users, right = page views
              yAxis: [
                { name: "Active Users", axisLine: { lineStyle: { color: textColor } }, splitLine: { lineStyle: { color: splitLineColor } }, axisLabel: { color: textColor, formatter: (v) => v.toLocaleString() } },
                { name: "Page views", position: "right", axisLine: { lineStyle: { color: textColor } }, splitLine: { show: false }, axisLabel: { color: textColor, formatter: (v) => v.toLocaleString() } },
              ],

              series: [
                { name: "30 days", type: "line", data: data.series30d, smooth: true, areaStyle: { opacity: 0.12 }, showSymbol: false },
                { name: "7 days", type: "line", data: data.series7d, smooth: false, showSymbol: false, lineStyle: { width: 2 } },
                { name: "1 day", type: "line", data: data.series1d, smooth: false, showSymbol: false, lineStyle: { width: 1, type: "solid" } },
                { name: "Page views", type: "line", data: data.views, yAxisIndex: 1, showSymbol: false, lineStyle: { width: 2, type: "solid", color: "rgba(139,92,246,0.45)" } },
              ],
            };
          },
        };

        await charts.render('#mg-chart', '/articles/madgrades-transparency-report-2026/users.csv', config);
      } catch (err) { console.error('Failed to render chart', err); }
    };

    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run); } else { run(); }
  })();
</script>

## Financial Transparency

The project started self-funded but shifted to a sustainable model. A single non-intrusive ad slot was added in September 2020 simply to cover server costs. Since then, AdSense revenue has fully offset all operational expenses.

### Operational Costs

| Item             | Monthly Cost  |
| :--------------- | :------------ |
| Backend Server   | ~$17          |
| Domain Name      | ~$1           |
| Frontend Hosting | Free (Static) |

### Financial Performance (Feb 2024 – Feb 2026)

| Category            | Total (2 Years) |
| :------------------ | :-------------- |
| Ad Revenue          | ~$512           |
| Infrastructure Cost | ~$439           |
| **Net**             | **+$73**        |

The chart below compares monthly revenue against costs over the last two years, showing how revenue tracks traffic during registration peaks.

<figure>
  <div id="monetization-chart" class="w-full h-72 md:h-96"></div>
  <figcaption>Monthly Revenue & Costs (Feb 2024 - Feb 2026)</figcaption>
</figure>

<script>
  (function initMonetizationChart() {
    const run = async () => {
      const charts = window.charts;
      if (!charts?.render) { console.error('Chart renderer not available'); return; }

      try {
        const config = {
          // revenue (green), server cost (red), domain cost (orange)
          colors: ["#10B981", "#EF4444", "#F97316"],

          async parseData(url) {
            const text = await fetch(url).then(r => r.text());
            const startDateMatch = text.match(/# Start date: (\d{8})/);
            const startDateStr = startDateMatch ? startDateMatch[1] : '20240215';
            const year = parseInt(startDateStr.substring(0, 4));
            const month = parseInt(startDateStr.substring(4, 6)) - 1;
            const day = parseInt(startDateStr.substring(6, 8));

            // CSV now provides month index, revenue, server monthly, domain monthly
            const rows = await charts.parseCSV(url, { skipComments: true, headers: ["month", "revenue", "server", "domain"] });
            const dates = rows.map(r => {
              const m = Number(r.month);
              if (isNaN(m)) return '';
              const date = new Date(Date.UTC(year, month + m, day));
              return date.toISOString().substring(0, 10);
            });

            return {
              dates,
              revenue: rows.map(r => parseFloat(r.revenue)),
              server: rows.map(r => parseFloat(r.server)),
              domain: rows.map(r => parseFloat(r.domain)),
            };
          },

          getOptions(data, isDark) {
            const textColor = charts.getTextColor(isDark);
            const splitLineColor = isDark ? "rgba(255,255,255,0.08)" : "rgba(128,128,128,0.08)";

            return {
              tooltip: {
                trigger: "axis",
                formatter: (params) => {
                  const title = params[0]?.name ?? '';
                  let out = `<strong>${title}</strong><br/>`;

                  // list each series value
                  params.forEach(p => { out += `${p.marker} ${p.seriesName}: $${Number(p.value).toFixed(2)}<br/>`; });

                  return out;
                }
              },

              toolbox: { feature: { saveAsImage: { pixelRatio: 2 } } },
              dataZoom: [{ type: "slider", start: 0, end: 100 }, { type: "inside" }],
              legend: { top: 8, textStyle: { color: textColor } },
              grid: { left: "3%", right: "8%", bottom: "15%", containLabel: true },

              xAxis: { type: "category", name: "Month", data: data.dates, axisLine: { lineStyle: { color: textColor } }, axisLabel: { color: textColor } },
              yAxis: { name: "Amount ($)", axisLine: { lineStyle: { color: textColor } }, splitLine: { lineStyle: { color: splitLineColor } }, axisLabel: { color: textColor, formatter: (value) => `$${value}` } },

              series: [
                { name: "Revenue", type: "bar", data: data.revenue },
                { name: "Server Costs", type: "bar", stack: "costs", data: data.server },
                { name: "Domain Costs (annualized / monthly)", type: "bar", stack: "costs", data: data.domain },
              ],
            };
          },
        };

        await charts.render('#monetization-chart', '/articles/madgrades-transparency-report-2026/monetization.csv', config);
      } catch (err) { console.error('Failed to render monetization chart', err); }
    };
    if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', run); } else { run(); }
  })();
</script>

## Why Not Expand?

A common question is whether Madgrades will expand to other universities. While the idea of a universal grade transparency platform is compelling, there are no plans to support other schools.

I did briefly investigate other universities early on, but few publish their grade distributions as openly as UW-Madison does. Most schools require [Freedom of Information Act (FOIA)](https://www.foia.gov/about.html) requests to release this data. These requests often incur significant fees—charging hourly rates for the administrative work to compile datasets—which can easily run into the thousands of dollars per school.

Beyond the cost, there is the simple constraint of time and resources. Maintaining one site as a side project is manageable; running a multi-campus enterprise is a full-time job. While someone else could certainly turn this concept into a large-scale platform, I don't have the desire to pursue that path. Madgrades works because it is small, focused, and low-maintenance.

Other developers have attempted this with varying degrees of success. Austin G. Walters documented his experience [FOIA requesting over 100 universities](https://archive.is/https://austingwalters.com/foia-requesting-100-universities/), noting that while some schools were cooperative, others demanded exorbitant fees or provided data in comical formats (like physical CDs). More recently, [Grades LLC](https://archive.is/https://grades.llc/history) (originally [MSU Grades](https://msugrades.com)) has been systematically sending requests across the Midwest, aiming to build a broader platform. Their efforts highlight just how much dedicated legal and administrative legwork is required to scale this beyond a single transparent university. Even if the data is successfully acquired, every university provides it in a different format—some as CSVs, some as PDFs, and others as messy spreadsheets with varying schemas. Reconciling all these disparate sources into a single, unified database would be technically challenging and prohibitively expensive for a solo developer.

## Challenges and Future Plans

The primary challenge is maintaining data accuracy as the Registrar's PDF report formats change over time. Efforts are also made to minimize the delay between the university's data release and the site update.

The main existential worry for the project is that the underlying data will eventually become unavailable or locked behind a steep cost associated with a FOIA request. If that happens, the website will likely shut down, as the project operates on a small budget and relies entirely on free, public records.

### What's Next?

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 not-prose">
  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 flex flex-col gap-2">
    <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center text-indigo-600 dark:text-indigo-400">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">AI & LLMs</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Leveraging AI to uncover deeper data insights and speed up development.</p>
    </div>
  </div>

<div className="p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 flex flex-col gap-2">
  <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
      />
    </svg>
  </div>
  <div>
    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
      Student Insights
    </h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Collecting anonymous feedback on how and why the site is used in order to paint a clearer picture about Madgrades.
    </p>
  </div>
</div>

<div className="p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 flex flex-col gap-2">
  <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
      />
    </svg>
  </div>
  <div>
    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
      Research Access
    </h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Structuring data for researchers investigating long-term trends.
    </p>
  </div>
</div>

<div className="p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 flex flex-col gap-2">
  <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400">
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
      />
    </svg>
  </div>
  <div>
    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
      Open Source
    </h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Making the codebase more accessible for student contributors.
    </p>
  </div>
</div>
<div className="p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 flex flex-col gap-2">
  <div className="w-8 h-8 rounded-full bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center text-pink-600 dark:text-pink-400">
    <svg
      className="w-4 h-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  </div>
  <div>
    <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">
      Community
    </h4>
    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
      Building ties with organizations and highlighting student tools.
    </p>
  </div>
</div>

  <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 dark:bg-zinc-800/50 dark:border-zinc-700/50 flex flex-col gap-2">
    <div className="w-8 h-8 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center text-amber-600 dark:text-amber-400">
      <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    </div>
    <div>
      <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-sm">UX Improvements</h4>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Continuing to polish the interface based on student feedback.</p>
    </div>
  </div>
</div>

## Conclusion

Seven years is a long time in software, especially for a side project built by a student who graduated years ago. What started as a simple curiosity—_can I make this PDF easier to read?_—has quietly become a piece of shared infrastructure for the university community.

Madgrades proves that open data doesn't need a startup budget or a business plan to be sustainable; it just needs to be useful. As long as the university continues to publish its records, and as long as students continue to find value in them, this project will remain online (and open source) for anyone to use, study, or improve.

On, Wisconsin!

[^1]: Usage penetration is calculated as 30,000 peak Monthly Active Users (MAU) divided by approximately 52,000 total enrolled students. Total enrollment based on [UW-Madison Fall 2025 enrollment data](https://archive.is/https://www.wisc.edu/about/facts/).
