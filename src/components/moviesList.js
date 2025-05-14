import { $, $$ } from "../selectors/selectors";
import { movie } from "./movie";
import { animateCircle } from "../utils/animateCircle";
import { skeletons } from "../components/skeleton";
import { filterState } from "../states/filterState";
import { searchState } from "../states/searchState";
import { moviesContainer } from "../elements/elements";
import { tmdb } from "./tmdb";

export function showSkeletons() {
  if (filterState.isFilter || searchState.isSearch) moviesContainer.innerHTML = "";

  const skeletonsContainer = skeletons();
  skeletonsContainer.forEach((s) => moviesContainer.appendChild(s));
}

export function hideSkeletons() {
  $$(".skeleton-card").forEach((el) => el.remove());
}

export function moviesList(movies) {
  const moviesFragment = document.createDocumentFragment();

  movies.forEach((m) => {
    const score = Math.round((m.vote_average || 0) * 10);
    const newCardMovie = movie(m, score);
    moviesFragment.appendChild(newCardMovie);

    requestAnimationFrame(() => {
      animateCircle(m.id, score);
    });
  });

  moviesContainer.appendChild(moviesFragment);
  moviesContainer.appendChild(tmdb());
}
