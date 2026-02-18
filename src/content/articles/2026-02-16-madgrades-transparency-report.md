---
title: "Madgrades Transparency Report 2026"
slug: madgrades-transparency-report-2026
description: "Who built Madgrades, how it works, what it costs, what it earns, and why it's still online."
date: 2026-02-16
tags: ["madgrades", "open-source"]
unlisted: true
---

## Foreword

It feels little silly for me to release a formal "Transparency Report" for what is, essentially, a dusty student project that runs on auto-pilot. I built Madgrades back in 2018 expecting it to be a one-semester wonder for my friends. I figured I'd graduate, the server would eventually crash, and that would be that. But I was wrong!

It took only a few semesters for this little tool to become a weirdly integral part of campus life. It's been 7 years now and Madgrades has processed over 30 million searches and survived long enough to help nearly 60%[^1] of the current student body register for classes every semester. Although I’ve moved on to my career and other life events, I revisit the project every semester to push a few buttons to deploy the new grades (apologies for the delays!). It’s genuinely rewarding to see thousands of students still relying on this project.

I'm writing this one-off report for those curious about the project, and to help students building tools of their own. It states the facts: what it is, how it works, what it costs, and why it's still running. All in the spirit of openness that defines Madgrades.

— Keenan Thompson

---

## Introduction to Madgrades

[Madgrades.com](https://madgrades.com) extracts raw PDF grade reports published by the UW-Madison Registrar and transforms them into GPA charts and exploration tools. It helps answer questions like "Is this class historically difficult?" or "How does this professor grade compared to others?"

It is an independent, open-source tool and is not affiliated with the university.

<figure>
  <div class="aspect-video">
    <iframe class="w-full h-full rounded-lg" src="https://www.youtube.com/embed/3MYzGalw7ck" title="Madgrades Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
  <figcaption>A quick demo of Madgrades in action.</figcaption>
</figure>

**Core features include:**

- Search by course code, name, subject, instructor, or keyword
- Percentage breakdowns of grades (A's, B's, etc.)
- Instructor and course GPA trends
- Comparisons between instructors or semesters
- Explore pages for aggregating course, subject, and instructor data
- Dark mode support

## Why Make This Data Accessible?

Public data shouldn't just be *available*; it should be *usable*. The university publishes grade reports, but they bury them in multiple 400+ page PDF archives every semester that are impossible to make sense of manually. Madgrades just puts that data in a format you can actually read.

People sometimes say grade transparency encourages "grade shopping." Sure, that happens. Some students just want the easiest "A". But realistically, students can only pick easy electives a handful of times before they have to face the rigorous, mandatory courses required for their major. And over the last seven years, it has become clear that students use the data for more constructive reasons. They balance a heavy semester by pairing a killer prerequisite with a lighter elective. They check if a specific section or instructor has weirdly low grades compared to others. Or they just want to avoid being blindsided by a course with a high failure rate. For students it's about having information. You wouldn't buy a car without checking the history report. Likewise, you might not want to register for a class without having checked the historic grade distributions.

Beyond the benefits it provides directly to students, open and accessible data serves as a tool for institutional accountability. When five professors teach the same Calculus course and one consistently has a 40% fail rate while the others stay at 10%, that isn't a "rigor" issue, it is likely a teaching failure that is actively harming students and the university. Madgrades shines a light on these anomalies which help to create pressure for the university to investigate why certain sections are failing to deliver.

The inverse is also true: if the data reveals a course has become an "Easy A" where students are flocking to avoid any real challenge, it provides the university with the evidence needed to reconsider that curriculum and restore academic standards. Transparency does not take sides. It simply reveals where the system is working and where it is broken, allowing both students and administrators to demand a more consistent, high-quality education.

## Impact

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
      Monthly Users
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
      Daily Views (Peak)
    </span>
  </div>
</div>

**Key Metrics**

The site has processed **over 30 million** cumulative course searches since launch. During peak periods, we see approximately **30,000 monthly active users** and **6,300 daily active users**, generating over **150,000 daily page views**. This traffic corresponds to roughly **58%**[^1] of the total student body.

**Audience & Usage**

The primary audience is students planning schedules and choosing sections. However, the open API has enabled an ecosystem of community-built tools, including Chrome extensions and course planners. We also see occasional usage from researchers and data analysts interested in the aggregated grade data.

Madgrades.com traffic correlates perfectly with the academic calendar. We see two predictable massive spikes per term: one during the course registration window and another smaller spike during the first month of the semester. Activity settles during the summer break.

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

**Discovery & Community**

Growth has been entirely organic through word-of-mouth, campus sharing, and mentions on the [UW-Madison subreddit](https://www.reddit.com/r/UWMadison). 

As an open-source project, we receive contributions and bug reports via Jotform and GitHub. In 2025, we began highlighting other student projects directly on the site to support the wider developer community.

## Data Sourcing and Processing

The data powering Madgrades comes directly from publicly available UW-Madison Registrar publications: the [Course Grade-Distribution Reports](https://archive.is/https://registrar.wisc.edu/grade-reports) and the [Departmental Instructional Reports (DIR)](https://archive.is/https://registrar.wisc.edu/curricular-build/#dir).

The Grade-Distribution Reports provide the core dataset, with section-level final grades dating back to approximately 2006. The DIR data supplements this by linking sections to schedules, instructors, and locations. By cross-referencing these two sources, we can associate specific grade distributions with the corresponding instructor and course schedule.

Note that the DIR data is intended for internal administrative use and involves specific terminologies that can be easily misinterpreted without full context. Madgrades includes this data to provide a more complete picture, but users should read the full [usage disclaimer](https://github.com/Madgrades/madgrades-data) and interpret it with care.

**How it Works**

The process begins by downloading these PDFs from the Registrar's website and archiving them in the [madgrades-data](https://github.com/Madgrades/madgrades-data) repository. From there, a GitHub Action triggers the [madgrades-extractor](https://github.com/Madgrades/madgrades-extractor), a tool designed to parse the raw PDF tables and convert them into structured JSON and CSV formats. This processed data is then loaded into the backend database that powers the API, which the frontend website queries to render charts and visualizations.

**Known Limitations**

Because the data extraction relies on parsing PDF tables, occasional errors can occur where rows or columns are misread, requiring manual updates to the extractor logic. Additionally, updates to the site sometimes lag behind the official university release schedule, as there is no mechanism to automatically pull the data. 

Users are also always encouraged to verify critical information against the official Registrar reports directly. If you spot an error, please report it via [GitHub](https://github.com/Madgrades/madgrades.com/issues) or the feedback form on the site.

## User Privacy and Data Practices

The privacy story for Madgrades is intentionally boring.

Madgrades itself collects no personal data from users. We do not require accounts, logins, emails, or identifiers. Regular browsing is anonymous from the Madgrades backend.

The site does use third-party services:

- Google Analytics GA4 for aggregated usage stats.
- Google AdSense for monetization; AdSense may track for personalized ads via cookies or other

For developers/contributors who use the backend, only email addresses are securely stored.

## How It's Built

Madgrades is built with **React 19** and **Vite** for the frontend, and **Ruby on Rails 8** on the backend handling API requests. Data extraction from PDF reports is performed using custom software built with **Java** that has hardly changed since 2018. Everything is containerized with **Docker** for consistent local development.

The project is broken down into four key repositories all on GitHub:

- [`madgrades.com`](https://github.com/Madgrades/madgrades.com) (Frontend)
- [`api.madgrades.com`](https://github.com/Madgrades/api.madgrades.com) (Backend)
- [`madgrades-data`](https://github.com/Madgrades/madgrades-data) (PDF Archive)
- [`madgrades-extractor`](https://github.com/Madgrades/madgrades-extractor) (Parser)

The repositories have had 6 total contributors and 56 GitHub stars.


## History and Development

Madgrades launched in February 2018. The core user-facing behavior has stayed mostly the same since launch, with updates focusing on UX polish, reliability fixes, modern tooling, and a couple of new additions from community contributions.

**Milestones**

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
    <div class="text-gray-900 dark:text-gray-100">Dark mode added, along with more modernization.</div>
  </div>
</div>

## Financial Transparency

The project started as self-funded, but shifted to a sustainable, independent model. A single non-intrusive ad slot was added in September 2020 simply to cover server costs. Since then, AdSense revenue has fully offset all operational expenses.

### Performance (Feb 2024 – Feb 2026)

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

I did briefly investigate other universities early on, but few publish their grade distributions as openly as UW-Madison does. Most schools require [Freedom of Information Act (FOIA)](https://www.foia.gov/about.html) requests to release this data. These requests often incur significant fees, charging hourly rates for the administrative work to compile datasets, which can easily run into the thousands of dollars per school.

Beyond the cost, there is the simple constraint of time and resources. Maintaining one site as a side project is manageable; running a multi-campus enterprise is a full-time job. While someone else could certainly turn this concept into a large-scale platform, I don't have the desire to pursue that path. Madgrades works because it is small, focused, and low-maintenance.

Other developers have attempted this with varying degrees of success. Austin G. Walters documented his experience [FOIA requesting over 100 universities](https://archive.is/https://austingwalters.com/foia-requesting-100-universities/), noting that while some schools were cooperative, others demanded exorbitant fees or provided data in comical formats (physical CDs!). More recently, [Grades LLC](https://archive.is/https://grades.llc/history) (related: [MSU Grades](https://msugrades.com)) has been systematically sending requests across the Midwest, aiming to build a broader platform. Their efforts highlight just how much dedicated legal and administrative legwork is required to scale this beyond a single transparent university. Even if the data is successfully acquired, every university provides it in a different format. Reconciling all these disparate sources into a single, unified database would be technically challenging, but not impossible.

## Challenges and Future Plans

The main existential worry for the project is that the underlying data will eventually become unavailable or locked behind a steep cost associated with a FOIA request. If that happens, the website will likely shut down, as the project operates on a small budget and relies entirely on free, public records.

### Roadmap

In no particular order:

- **AI & LLMs**: Using AI to uncover deeper data insights and speed up development.
- **Student Insights**: Collecting anonymous feedback on how and why the site is used in order to paint a clearer picture about Madgrades.
- **Research Access**: Structuring data better for researchers.
- **Open Source**: Making the codebase more accessible for student contributors, especially those wanting to make their first PR.
- **Community**: Building ties with organizations and highlighting student tools.
- **UX Improvements**: Continuing to polish the interface based on student feedback.

## Conclusion

What started as a simple "can I parse this PDF?" question has turned into a piece of shared infrastructure for the UW Madison campus. You don't need VC money, a startup team, or even a marketing budget to build a useful tool with a modest user base. You just need to solve a real problem. Go out there, find a niche problem, and build a solution! With modern AI tools, it's easier than ever.

And as for Madgrades itself? It isn't going anywhere. As long as the university continues to make these records public, and as long as students continue to find value in the data to make informed decisions, I'll ensure the site stays online.

On, Wisconsin!

---

[^1]: Usage penetration is calculated as 30,000 peak Monthly Active Users (MAU) divided by approximately 52,000 total enrolled students. Total enrollment based on [UW-Madison Fall 2025 enrollment data](https://archive.is/https://www.wisc.edu/about/facts/).
