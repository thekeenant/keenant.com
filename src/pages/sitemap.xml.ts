import { getCollection } from "astro:content";

export async function GET() {
  const site = import.meta.env.SITE || "https://keenant.com";
  const base = site.replace(/\/$/, "");

  const articles = await getCollection("articles");

  type SitemapEntry = {
    url: string;
    changefreq: string;
    priority: number;
    lastmod?: string;
  };

  const pages: SitemapEntry[] = [
    { url: `${base}/`, changefreq: "daily", priority: 0.8 },
    { url: `${base}/about/`, changefreq: "monthly", priority: 0.5 },
  ];

  for (const post of articles) {
    if (post.data.draft) continue;
    const url = `${base}/articles/${post.slug}/`;
    pages.push({
      url,
      changefreq: "monthly",
      priority: 0.6,
      lastmod: post.data.date?.toISOString(),
    });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => {
    return `  <url>
    <loc>${p.url}</loc>
    ${p.lastmod ? `<lastmod>${p.lastmod}</lastmod>` : ""}
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
