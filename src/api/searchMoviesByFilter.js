import { fetchMoviesByFilters } from "./fetchMoviesByFilter.js";
import { searchState } from "../states/searchState.js";
import { searchMoviesByFilterState } from "../states/searchMoviesByFilterState.js";
import {
  loadingError,
  loadingState,
  loadingSuccess,
} from "../emitters/emitLoading.js";
import { fetchState } from "../states/fetchState.js";

export async function searchMoviesByFilter(filters) {
  if (searchState.isSearch || fetchState.isLoading) return;

  loadingState({
    isLoading: true,
    context: "filter",
  });

  try {
    const data = await fetchMoviesByFilters(filters);

    loadingSuccess({
      data,
      isPagination: false,
    });

    fetchState.hasMore = data.movies.length == searchMoviesByFilterState.LIMIT;
  } catch (error) {
    loadingError({
      error: error || "Ocorreu um erro ao fazer o filtro de filmes.",
    });
    
  } finally {
    loadingState({
      isLoading: false,
      context: "filter",
    });
  }
}
