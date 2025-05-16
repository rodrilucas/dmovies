import { searchMoviesByFilter } from "../api/searchMoviesByFilter";
import { filterState } from "../states/filterState";
import { fetchState } from "../states/fetchState";
import { searchState } from "../states/searchState";
import { sentinel } from "../elements/elements";
import { setIsFilter, setIsSearch } from "../emitters/emitSet";

export const observer = new IntersectionObserver((entries) => {
  if (searchState.isSearch) {
    return;
  }
  const entry = entries[0];
  if (entry.isIntersecting && !fetchState.isLoading && fetchState.hasMore) {
    setIsFilter({ payload: { value: false } });
    setIsSearch({ payload: { value: false } });

    filterState.filters.page++;
    searchMoviesByFilter(filterState.filters);
  }
});

observer.observe(sentinel);
