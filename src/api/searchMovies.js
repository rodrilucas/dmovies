import { fetchMovies } from "../api/fetchMovies.js";
import { filterState } from "../states/filterState.js";
import { fetchState } from "../states/fetchState.js";
import {
  loadingError,
  loadingState,
  loadingSuccess,
} from "../emitters/emitLoading.js";

export async function searchMovies({ query, page, limit, sort }) {
  if (filterState.isFilter || fetchState.isLoading) return;

  loadingState({
    isLoading: true,
    context: "search",
  });

  try {
    const data = await fetchMovies(query, page, limit, sort);

    loadingSuccess({
      data,
      isPagination: true,
    });

  } catch (error) {
    loadingError({
      error: error || "Ocorreu algum erro na busca de filmes.",
    });

  } finally {
    loadingState({
      isLoading: false,
      context: "search",
    });
  }
}
