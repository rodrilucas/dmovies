import { eventBus } from "../core/eventBus";
import { createEl } from "../selectors/selectors";
import { formatDate } from "../utils/dates";
import { events } from "../constants/allEvents";

function createPoster(movie) {
  if (movie.poster_path) {
    return `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" class="w-full aspect-[2/3] object-cover bg-gray-700">`;
  }
  return `<div class="w-full aspect-[2/3] bg-gray-700 flex items-center justify-center text-gray-400 text-center text-sm p-2">Sem imagem disponível</div>`;
}

function createRating(score, movieId) {
  return `
    <div class="absolute -bottom-6 left-2 w-12 h-12">
      <svg class="w-full h-full" viewBox="0 0 36 36">
        <path class="text-gray-700" stroke="currentColor" stroke-width="4" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
        <path id="circle-${movieId}" class="text-green-400" stroke="currentColor" stroke-width="4" stroke-dasharray="100, 100" stroke-linecap="round" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
      </svg>
      <div class="absolute inset-0 flex items-center justify-center text-xs font-bold">${score}%</div>
    </div>
  `;
}

function createCardContent(movie, score) {
  return `
    <div class="relative">
      ${createPoster(movie)}
      ${createRating(score, movie.id)}
    </div>
    <div class="py-2 px-4 mt-8 flex-1 flex flex-col">
      <h2 class="text-lg font-bold mb-2 line-clamp-2">${movie.title}</h2>
      <p class="text-gray-400 text-sm mt-auto">${formatDate(
        movie.release_date
      )}</p>
    </div>
  `;
}

export function movie(m, score) {
  const card = createEl("div");
  card.id = "movie";
  card.className =
    "relative bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 flex flex-col cursor-pointer";

  card.innerHTML = createCardContent(m, score);

  card.addEventListener("click", () => {
    eventBus.emit(events.openModal, m);
  });

  return card;
}
