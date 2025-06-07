import { createEl } from "../selectors/selectors";

function skeletonImage() {
  return `<div class="flex items-center justify-center h-[23rem] lg:h-[18rem] xl:h-[29rem] mb-4 bg-gray-300 rounded-sm dark:bg-gray-700"></div>`;
}

function skeletonRating() {
  return `
    <div class="absolute bottom-[110px] left-4 w-12 h-12">
      <svg class="w-full h-full" viewBox="0 0 36 36">
        <path class="text-gray-600" stroke="currentColor" stroke-width="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path class="text-gray-600" stroke="currentColor" stroke-width="4" stroke-dasharray="100, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      </svg>
    </div>`;
}

function skeletonText() {
  return `
    <div class="p-6">
      <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-auto mb-4"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
      <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
    </div>`;
}

function skeleton() {
  const skeletonCard = createEl("div");
  skeletonCard.innerHTML = `
      <div
        role="status"
        class="skeleton-card w-full relative border border-gray-200 rounded-sm shadow-sm animate-pulse dark:border-gray-700"
      >
        ${skeletonImage()}
        ${skeletonRating()}
        ${skeletonText()}
      </div>`;
  return skeletonCard.firstElementChild;
}

export function skeletons() {
  return Array(20)
    .fill(0)
    .map(() => skeleton());
}
