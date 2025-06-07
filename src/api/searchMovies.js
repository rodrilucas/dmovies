import { fetchMovies } from "../api/fetchMovies.js";
import {
  loadingError,
  loading,
  loadingSuccess,
} from "../emitters/emitters.js";
import {
  filter as filterState,
  loading as loadingState,
} from "../handlers/setupEventHandlers.js";

export async function searchMovies({ query, page, limit, sort }) {
  if (filterState.isFilter || loadingState.isLoading) return;

  loading({
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
    loading({
      isLoading: false,
      context: "search",
    });
  }
}
