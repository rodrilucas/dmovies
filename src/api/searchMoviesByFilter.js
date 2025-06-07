import { fetchMoviesByFilters } from "./fetchMoviesByFilter.js";
import { loadingError, loading, loadingSuccess } from "../emitters/emitters.js";
import {
  search as searchState,
  loading as loadingState,
  filter as filterState,
} from "../handlers/setupEventHandlers.js";

export async function searchMoviesByFilter(filters) {
  if (searchState.isSearch || loadingState.isLoading) return;

  loading({
    isLoading: true,
    context: "filter",
  });

  try {
    const data = await fetchMoviesByFilters(filters);

    loadingSuccess({
      data,
      isPagination: false,
    });

    loadingState.isHasMore = data.movies.length == filterState.pageLimit;
  } catch (error) {
    loadingError({
      error: error || "Ocorreu um erro ao fazer o filtro de filmes.",
    });
  } finally {
    loading({
      isLoading: false,
      context: "filter",
    });
  }
}
