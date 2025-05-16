import { moviesList } from "../components/moviesList";
import { pagination } from "../components/pagination";
import { paginationContainer } from "../elements/elements";

export function updatePaginationAndMovies(data, pag) {
  const isPagination = Boolean(pag);
  const { totalPages, totalResults } = data;
  if (isPagination) {
    pagination(totalPages, totalResults);
  }else {
    paginationContainer.innerHTML = "";
  }
  moviesList(data.movies);
}

