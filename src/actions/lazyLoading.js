import { searchMoviesByFilter } from "../api/searchMoviesByFilter";
import { sentinel } from "../elements/elements";
import { setIsFilter, setIsSearch } from "../emitters/emitters";
import {
  search as searchState,
  filter as filterState,
  loading as loadingState,
} from "../handlers/setupEventHandlers";

export const observer = new IntersectionObserver((entries) => {
  if (searchState.isSearch) {
    return;
  }
  const entry = entries[0];
  if (entry.isIntersecting && !loadingState.isLoading && loadingState.isHasMore) {
    if (searchState.isSearch === true || filterState.isFilter === true) {
      setIsFilter({ payload: { value: false } });
      setIsSearch({ payload: { value: false } });
    }

    filterState.page += 1;
    searchMoviesByFilter(filterState.filters);
  }
});

observer.observe(sentinel);
