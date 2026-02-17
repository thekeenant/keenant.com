import { getCollection } from "astro:content";
import { authorName } from "@lib/site";

export const prerender = true;

export async function GET() {
  const articles = await getCollection("articles");

  const articlesData = articles
    .filter((article) => !article.data.draft && !article.data.unlisted)
    .map((article) => ({
      slug: article.slug,
      title: article.data.title,
      description: article.data.description,
      date: article.data.date.toISOString(),
      tags: article.data.tags || [],
      author: authorName,
      // include raw markdown/content so client-side search can match article body
      body: (article.body as string) || "",
    }))
    .sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf());

  return new Response(JSON.stringify(articlesData), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
