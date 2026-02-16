export interface ArticleLike {
  title?: string;
  description?: string;
  tags?: string[];
  slug?: string;
  author?: string;
  body?: string; // plain or markdown text from the article body
}

export function fuzzyMatch(
  haystack: string | undefined,
  needle: string | undefined,
): boolean {
  if (!needle) return true;
  const h = (haystack || "").toLowerCase();
  const n = (needle || "").toLowerCase().trim();

  if (h.includes(n)) return true;

  let j = 0;
  for (let i = 0; i < h.length && j < n.length; i++) {
    if (h[i] === n[j]) j++;
  }
  if (j === n.length) return true;

  const words = n.split(/\s+/).filter(Boolean);
  return words.every((w) => {
    if (h.includes(w)) return true;
    let k = 0;
    for (let i = 0; i < h.length && k < w.length; i++) {
      if (h[i] === w[k]) k++;
    }
    return k === w.length;
  });
}

export function articleMatchesQuery(
  article: ArticleLike,
  query: string,
): boolean {
  if (!query || !query.trim()) return true;

  const tokens = query.toLowerCase().split(/\s+/).filter(Boolean);
  const tagTokens = tokens
    .filter((t) => t.startsWith("#"))
    .map((t) => t.replace(/^#/, ""));
  const textTokens = tokens.filter((t) => !t.startsWith("#"));

  const tagsOk = tagTokens.every((tt) =>
    (article.tags || []).some((pt) => fuzzyMatch(pt, tt)),
  );
  if (!tagsOk) return false;

  return textTokens.every((term) => {
    return (
      fuzzyMatch(article.title || "", term) ||
      fuzzyMatch(article.description || "", term) ||
      (article.tags || []).some((pt) => fuzzyMatch(pt, term)) ||
      (article.body || "").toLowerCase().includes(term)
    );
  });
}
