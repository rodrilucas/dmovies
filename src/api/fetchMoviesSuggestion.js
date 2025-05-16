import { delay } from "../utils/delay";
import { debounceMoviesSuggestionState } from "../states/debounceMoviesSuggestionState";

export async function fetchMoviesSuggestion(query, limit, fetchDelay) {
  try {
    const response = await Promise.all([
      fetch(
        `http://localhost:3000/api/v1/movies/suggestions?keyword=${encodeURIComponent(
          query
        )}&limit=${limit}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        }
      ),
      delay(fetchDelay),
    ]).then(([res]) => res);

    const data = await response.json();

    if (!response.ok) throw new Error(data.message || "Sem informações sobre sugestões de filmes");

    if (!data.movies || data.movies.length === 0) {
      debounceMoviesSuggestionState.debounceMoviesSuggestionError = "Nenhuma palavra-chave encontrada.";
      return [];
    }

    return data.movies;
  } catch (error) {
    debounceMoviesSuggestionState.debounceMoviesSuggestionError =
      error.message || "Erro ao buscar palavras-chave de filmes.";
    return [];
  }
}

