import { $, createEl } from "../selectors/selectors";
import { searchMovies } from "../api/searchMovies";
import { searchState } from "../states/searchState";
import { getVisiblePages } from "../utils/getVisiblePage";
import { paginationContainer } from "../elements/elements";
import { pageState } from "../states/pageState";
import { tmdb } from "./tmdb";

function createHelpText(totalResults) {
  const start = (pageState.currentPage - 1) * pageState.pageSize + 1 || 0;
  const end =
    Math.min(pageState.currentPage * pageState.pageSize, totalResults) || 0;
  const total = totalResults || 0;

  return `
    Mostrando <span class="font-semibold text-gray-900 dark:text-white">${start}</span>
    a <span class="font-semibold text-gray-900 dark:text-white">${end}</span>
    de <span class="font-semibold text-gray-900 dark:text-white">${total}</span> Filmes
  `;
}

function createPageButton(page, isCurrent, onClick) {
  const btn = createEl("button");
  btn.textContent = page;
  btn.className = `px-3 py-1 rounded text-sm font-medium ${
    isCurrent
      ? "bg-blue-600 text-white cursor-not-allowed"
      : "bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer"
  }`;
  btn.disabled = isCurrent;

  if (!isCurrent) {
    btn.addEventListener("click", () => {
      pageState.currentPage = page;
      onClick();
    });
  }

  return btn;
}

function createPaginationButtons(totalPages, onChangePage) {
  const container = createEl("div");
  container.className =
    "inline-flex flex-wrap gap-1 items-center justify-center";

  const visiblePages = getVisiblePages(pageState.currentPage, totalPages);

  visiblePages.forEach((page) => {
    if (page === "...") {
      const span = createEl("span");
      span.textContent = "...";
      span.className = "px-2 text-gray-500";
      container.appendChild(span);
    } else {
      const btn = createPageButton(page, page === pageState.currentPage, () => {
        onChangePage(page);
      });
      container.appendChild(btn);
    }
  });

  return container;
}

function createPaginationContainer(totalPages, totalResults) {
  const container = createEl("div");
  container.className = "flex flex-col items-center w-full gap-4 px-4 py-4 mt-2";
  container.setAttribute("role", "navigation");
  container.setAttribute("aria-label", "Paginação");

  const helpText = createEl("span");
  helpText.className = "text-sm text-gray-600 dark:text-gray-300";
  helpText.innerHTML = createHelpText(totalResults);

  const buttons = createPaginationButtons(totalPages, (targetPage) => {
    pageState.currentPage = targetPage;

    searchMovies({
      query: searchState.currentQuery,
      page: targetPage,
      limit: pageState.pageSize,
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  container.appendChild(helpText);
  container.appendChild(buttons);

  return container;
}

export function pagination(totalPages, totalResults) {
  let contentWrapper = $("#pagination-content");

  if (!contentWrapper) {
    contentWrapper = createEl("div");
    contentWrapper.id = "pagination-content";
    paginationContainer.appendChild(contentWrapper);
  }

  contentWrapper.innerHTML = "";
  const fragment = document.createDocumentFragment();
  fragment.appendChild(createPaginationContainer(totalPages, totalResults));
  contentWrapper.appendChild(fragment);
  contentWrapper.appendChild(tmdb());
}
