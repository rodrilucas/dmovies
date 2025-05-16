import { events } from "../constants/events";
import { searchState } from "../states/searchState";
import {
  setCurrentPage,
  setIsFilter,
  setIsSearch,
  setPreviousQuery,
} from "../emitters/emitSet";
import { checkCurrentQuery } from "../emitters/emitCheck";
import { emitSearchMovies } from "../emitters/emitMovies";
import { resetCurrentQuery } from "../emitters/emitReset";
import { searchMovies } from "../api/searchMovies";
import { pageState } from "../states/pageState";

export const searchFormHandlers = {
  [events.searchForm]: ({ source, event }) => {
    event.preventDefault();

    setIsFilter({ payload: { value: false } });
    setIsSearch({ payload: { value: true } });

    if (searchState.currentQuery !== searchState.previousQuery) {
      setCurrentPage({ payload: { value: 1 } });
      setPreviousQuery({ payload: { value: searchState.currentQuery } });
    }

    if (searchState.currentQuery) {
      emitSearchMovies({ source });
    } else {
      checkCurrentQuery({ source });
    }

    resetCurrentQuery({ source });
  },

  [events.searchMovies]: () => {
    searchMovies({
      query: searchState.currentQuery,
      page: pageState.currentPage,
      limit: searchState.pageLimit,
    });
  },
};
