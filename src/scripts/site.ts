import { articleMatchesQuery } from "@lib/search";
import type { ArticleLike } from "@lib/search";

const themeToggleBtn = document.getElementById(
  "theme-toggle",
) as HTMLButtonElement | null;
const darkIcon = document.getElementById("theme-toggle-dark-icon");
const lightIcon = document.getElementById("theme-toggle-light-icon");

function updateIcons() {
  const isDark = document.documentElement.classList.contains("dark");
  if (isDark) {
    darkIcon?.classList.remove("hidden");
    lightIcon?.classList.add("hidden");
  } else {
    darkIcon?.classList.add("hidden");
    lightIcon?.classList.remove("hidden");
  }
}

updateIcons();

themeToggleBtn?.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  updateIcons();
});

const searchToggle = document.getElementById("search-toggle");
const searchOverlay = document.getElementById("search-overlay");
const searchInput = document.getElementById(
  "global-search-input",
) as HTMLInputElement | null;
const searchResultsList = document.getElementById("search-results-list");
const searchResults = document.getElementById("global-search-results");

let allArticles: ArticleLike[] = [];
let activeIndex = -1; // currently highlighted result index

async function loadArticles() {
  if (allArticles.length > 0) return;
  try {
    const response = await fetch("/articles.json");
    if (response.ok) {
      allArticles = await response.json();
    }
  } catch (error) {
    console.error("Failed to load articles:", error);
  }
}

function setActiveIndex(i: number) {
  const list = document.getElementById("search-results-list");
  if (!list) return;
  const prev = list.querySelector('[aria-selected="true"]');
  if (prev) {
    prev.removeAttribute("aria-selected");
    prev.classList.remove("search-result--active");
  }
  const el = list.querySelector(`[data-index="${i}"]`) as HTMLElement | null;
  if (el) {
    el.setAttribute("aria-selected", "true");
    el.classList.add("search-result--active");
    el.id ||= `search-result-${i}`;
    activeIndex = i;
    // tell screen readers which option is active while input stays focused
    const input = document.getElementById("global-search-input");
    input?.setAttribute("aria-activedescendant", el.id);
    el.scrollIntoView({ block: "nearest" });
  } else {
    activeIndex = -1;
    const input = document.getElementById("global-search-input");
    input?.removeAttribute("aria-activedescendant");
  }
}

function clearActiveIndex() {
  const list = document.getElementById("search-results-list");
  if (!list) return;
  const prev = list.querySelector('[aria-selected="true"]');
  if (prev) {
    prev.removeAttribute("aria-selected");
    prev.classList.remove("search-result--active");
  }
  activeIndex = -1;
  const input = document.getElementById("global-search-input");
  input?.removeAttribute("aria-activedescendant");
}

searchToggle?.addEventListener("click", async () => {
  let currentQuery = "";
  const rawHash = window.location.hash ? window.location.hash.slice(1) : "";
  // Only treat hash as a search when it uses query-format (e.g. `#q=term`)
  if (rawHash && rawHash.includes("=")) {
    const params = new URLSearchParams(rawHash);
    currentQuery = params.get("q") || "";
  }

  if (searchOverlay) {
    searchOverlay.style.display = "flex";
    searchOverlay.setAttribute("aria-hidden", "false");
  }
  searchToggle?.setAttribute("aria-expanded", "true");
  if (searchInput) searchInput.setAttribute("aria-expanded", "true");

  await loadArticles();

  if (searchInput) {
    if (currentQuery) {
      searchInput.value = currentQuery;
      updateHash(currentQuery, true);
      filterArticles(currentQuery);
    } else if (searchInput.value && searchInput.value.trim()) {
      filterArticles(searchInput.value);
    }

    searchInput.focus();
  }
});

searchOverlay?.addEventListener("click", (e) => {
  if (e.target === searchOverlay) {
    closeOverlay();
  }
});

document.addEventListener("keydown", (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
    e.preventDefault();
    if (searchOverlay) searchOverlay.style.display = "flex";
    if (searchInput) {
      searchInput.focus();
      loadArticles().then(() => filterArticles(searchInput.value || ""));
      updateHash(searchInput.value || "", true);
    }
    return;
  }

  if (e.key === "Escape" && searchOverlay?.style.display !== "none") {
    closeOverlay();
  }
});

document.addEventListener("click", (ev) => {
  const target = ev.target instanceof Element ? ev.target : null;
  if (!target) return;

  const shareBtn = target.closest(".share-button") as HTMLElement | null;
  if (shareBtn) {
    const slug = shareBtn.getAttribute("data-slug");
    if (slug) {
      const url = `${location.origin}/articles/${slug}`;
      navigator.clipboard
        ?.writeText(url)
        .then(() => {
          const label = shareBtn.querySelector(".share-label");
          const prev = label?.textContent || "";
          if (label) label.textContent = "Copied";
          setTimeout(() => {
            if (label) label.textContent = prev;
          }, 1500);
        })
        .catch(() => {
          // Fallback for environments without navigator.clipboard: show a prompt
          // so users can copy manually. Avoids using deprecated document.execCommand.
          try {
            window.prompt("Copy this link:", url);
          } catch (err) {
            // If prompt is blocked, quietly fail (clipboard unavailable)
            console.warn("Clipboard not available and prompt failed", err);
          }
        });
    }
    return;
  }

  const tagBtn = target.closest(".tag-button") as HTMLElement | null;
  if (tagBtn) {
    const tag = tagBtn.getAttribute("data-tag") || tagBtn.textContent?.trim();
    if (!tag) return;
    if (searchOverlay) searchOverlay.style.display = "flex";
    if (searchInput) {
      const q = `#${tag}`;
      searchInput.value = q;
      updateHash(q, true);
      loadArticles().then(() => filterArticles(q));
      searchInput.focus();
    }
    return;
  }
});

function filterArticles(query: string) {
  if (!query.trim()) {
    if (searchResultsList) searchResultsList.innerHTML = "";
    if (searchResults) searchResults.textContent = "";
    return;
  }

  const filtered = allArticles.filter((article) =>
    articleMatchesQuery(article, query),
  );

  if (searchResults) {
    searchResults.textContent = `${filtered.length} article${filtered.length !== 1 ? "s" : ""} found`;
  }

  if (searchResultsList) {
    if (filtered.length === 0) {
      searchResultsList.innerHTML =
        '<div class="p-4 text-center text-gray-500 dark:text-gray-400">No articles found</div>';
    } else {
      searchResultsList.innerHTML = filtered
        .map(
          (article, i) => `
              <div data-index="${i}" id="search-result-${i}" role="option" aria-selected="false">
                <a href="/articles/${article.slug}" class="block p-4 border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <h3 class="font-semibold mb-1">${article.title}</h3>
                  <p class="text-sm text-gray-600 dark:text-gray-400 mb-2">${article.description}</p>
                  <div class="flex gap-2">
                    ${(article.tags || []).map((tag) => `<button data-tag="${tag}" class="tag-button px-2 py-1 bg-gray-200 dark:bg-gray-800 rounded text-xs">${tag}</button>`).join("")}
                  </div>
                </a>
              </div>
            `,
        )
        .join("");

      // set first result active for keyboard navigation
      setActiveIndex(0);
    }
  }
}

function updateHash(query: string, isOpen = true) {
  const params = new URLSearchParams();
  if (query) params.set("q", query);
  let hash = params.toString();

  if (isOpen) {
    // append a bare `open` flag (no `=value`).
    hash = hash ? `${hash}&open` : "open";
    history.pushState(null, "", `#${hash}`);
  } else {
    // remove `open` by simply omitting it from the hash
    history.replaceState(
      null,
      "",
      hash ? `#${hash}` : window.location.pathname + window.location.search,
    );
  }
}

function closeOverlay() {
  if (searchOverlay) {
    searchOverlay.style.display = "none";
    searchOverlay.setAttribute("aria-hidden", "true");
  }
  searchToggle?.setAttribute("aria-expanded", "false");
  if (searchInput) {
    searchInput.value = "";
    searchInput.setAttribute("aria-expanded", "false");
    searchInput.removeAttribute("aria-activedescendant");
  }
  if (searchResultsList) searchResultsList.innerHTML = "";
  if (searchResults) searchResults.textContent = "";
  clearActiveIndex();
  const current = searchInput?.value || "";
  updateHash(current, false);
}

searchInput?.addEventListener("input", (e) => {
  const target = e.target as HTMLInputElement;
  const q = target?.value || "";
  updateHash(q, true);
  loadArticles().then(() => filterArticles(q));
});

// Keyboard navigation inside the search overlay
searchInput?.addEventListener("keydown", (e) => {
  const list = document.getElementById("search-results-list");
  const options = list
    ? Array.from(list.querySelectorAll("[role=option]"))
    : [];
  const len = options.length;

  if (e.key === "ArrowDown") {
    e.preventDefault();
    if (len === 0) return;
    const next = activeIndex + 1 >= len ? 0 : activeIndex + 1;
    setActiveIndex(next);
    return;
  }

  if (e.key === "ArrowUp") {
    e.preventDefault();
    if (len === 0) return;
    const prev = activeIndex - 1 < 0 ? len - 1 : activeIndex - 1;
    setActiveIndex(prev);
    return;
  }

  if (e.key === "Home") {
    e.preventDefault();
    if (len > 0) setActiveIndex(0);
    return;
  }

  if (e.key === "End") {
    e.preventDefault();
    if (len > 0) setActiveIndex(len - 1);
    return;
  }

  if (e.key === "Enter") {
    // If an item is active, follow it
    if (activeIndex >= 0 && options[activeIndex]) {
      const anchor = options[activeIndex].querySelector(
        "a",
      ) as HTMLAnchorElement | null;
      if (anchor) window.location.href = anchor.href;
      return;
    }

    // otherwise, if there are results, open the first
    if (len > 0 && options[0]) {
      const anchor = options[0].querySelector("a") as HTMLAnchorElement | null;
      if (anchor) window.location.href = anchor.href;
    }
  }
});

const initialHash = window.location.hash ? window.location.hash.slice(1) : "";
let initialQuery = "";
let initialOpen = false;

if (initialHash) {
  if (initialHash.includes("=")) {
    const params = new URLSearchParams(initialHash);
    initialQuery = params.get("q") || "";

    // Only accept the bare `open` flag (e.g. `#q=foo&open`).
    // Do NOT accept `open=1` or `open=0` anymore — those are ignored.
    if (params.has("open") && params.get("open") === "") {
      initialOpen = true;
    } else {
      // legacy behavior when no explicit open flag: open if query present
      initialOpen = Boolean(initialQuery);
    }
  } else {
    // don't treat bare hashes (e.g. `#section-id`) as search queries any more;
    // only #q=... or `#...&open` will open the search overlay.
  }
}

if (initialQuery) {
  if (searchInput) searchInput.value = initialQuery;
}

if (initialOpen) {
  if (searchOverlay) searchOverlay.style.display = "flex";
  loadArticles().then(() => filterArticles(initialQuery));
}
