import { pagination } from "../components/pagination";
import { emptyResults } from "../components/emptyResults";
import { moviesContainer } from "../elements/elements";

export function checkMoviesLength(data) {
  const pages = 1;
  const totalResults = 0;
  if (data.movies.length === 0) {
    moviesContainer.innerHTML = emptyResults();
    pagination(pages, totalResults);
    return;
  }
}
