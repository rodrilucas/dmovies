import { $ } from "../selectors/selectors";
import { events } from "../constants/events";
import { searchCacheState } from "../states/searchCacheState";
import { setCache } from "../emitters/emitSet";
import {
  keywordQuerysuccess,
  keywordQueryCached,
  keywordQueryEmpty,
  keywordQueryStart,
} from "../emitters/emitKeyword";
import { fetchMoviesSuggestion } from "../api/fetchMoviesSuggestion";

export const inputKeywordHandlers = {
  [events.keywordFocus]: async ({ source, event }) => {
    const query = event.target.value.trim();

    if (!query) return;

    const isCached =
      query === searchCacheState.lastQuery &&
      searchCacheState.lastResults.length > 0;

    if (isCached) {
      keywordQueryCached({ payload: { movies: searchCacheState.lastResults } });
      return;
    }

    const movies = await fetchMoviesSuggestion(query, 10, 0);

    if ($("#keyword").value.trim() !== query) return;

    setCache({ payload: { query, movies } });
    keywordQuerysuccess({ payload: { movies } });
  },

  [events.keywordInput]: async ({ source, event }) => {
    const query = event.target.value.trim();

    keywordQueryStart({ payload: { query } });

    if (!query) {
      keywordQueryEmpty({ source });
      return;
    }

    const movies = await fetchMoviesSuggestion(query, 10, 2000);

    if (event.target.value.trim() !== query) return;

    keywordQuerysuccess({ payload: { movies } });
  },
};
