import { $ } from "../../selectors/selectors";
import {
  setCache,
  keywordQuerysuccess,
  keywordQueryCached,
  keywordQueryEmpty,
  keywordQueryStart,
} from "../../emitters/emitters";
import { fetchMoviesSuggestion } from "../../api/fetchMoviesSuggestion";
import { spinner, keyword } from "../../elements/elements";
import { renderSuggestions } from "../../ui/suggestions";

export class Keyword {
  #lastQuery = "";
  #lastResults = [];

  onKeywordFocus = async ({ source, event }) => {
    const query = event.target.value.trim();

    if (!query) return;

    const isCached = query === this.#lastQuery && this.#lastResults.length > 0;

    if (isCached) {
      keywordQueryCached({ payload: { movies: this.#lastResults } });
      return;
    }

    const movies = await fetchMoviesSuggestion(query, 10, 0);

    if ($("#keyword").value.trim() !== query) return;

    setCache({ payload: { query, movies } });
    keywordQuerysuccess({ payload: { movies } });
  };

  onKeywordInput = async ({ source, event }) => {
    const query = event.target.value.trim();

    keywordQueryStart({ payload: { query } });

    if (!query) {
      keywordQueryEmpty({ source });
      return;
    }

    const movies = await fetchMoviesSuggestion(query, 10, 2000);

    if (event.target.value.trim() !== query) return;

    keywordQuerysuccess({ payload: { movies } });
  };

  onKeywordQueryStart = () => {
    spinner.classList.remove("hidden");
  };

  onKeywordQueryEmpty = () => {
    suggestions.innerHTML = "";
    suggestions.classList.add("hidden");
    spinner.classList.add("hidden");
  };

  onKeywordQuerySuccess = ({ movies }) => {
    spinner.classList.add("hidden");
    renderSuggestions(movies, (selectedKeyword) => {
      keyword.value = selectedKeyword;
      suggestions.classList.add("hidden");
    });
  };

  onKeywordQueryCached = ({ movies }) => {
    renderSuggestions(movies, (selectedKeyword) => {
      keyword.value = selectedKeyword;
      suggestions.classList.add("hidden");
    });
  };

  onSetCache({ query, movies }) {
    this.#lastQuery = query;
    this.#lastResults = movies;
  }

  get lastQuery() {
    return this.lastQuery;
  }

  get lastResults() {
    return this.lastResults;
  }
}
