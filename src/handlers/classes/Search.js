import {
  setPreviousQuery,
  setIsFilter,
  setIsSearch,
  setCurrentPage,
  checkCurrentQuery,
  emitSearchMovies,
  resetCurrentQuery,
} from "../../emitters/emitters";
import { searchMovies } from "../../api/searchMovies";
import { pageState } from "../../states/pageState";

export class Search {
  #isSearch = false;
  #currentQuery = "";
  #previousQuery = "";
  #pageLimit = 20;
  #pagination = true;

  onSearchForm = ({ source, event }) => {
    event.preventDefault();

    setIsFilter({ payload: { value: false } });
    setIsSearch({ payload: { value: true } });

    if (this.#currentQuery !== this.#previousQuery) {
      setCurrentPage({ payload: { value: 1 } });
      setPreviousQuery({ payload: { value: this.#currentQuery } });
    }

    if (this.#currentQuery) {
      emitSearchMovies({ source });
    } else {
      checkCurrentQuery({ source });
    }

    resetCurrentQuery({ source });
  };

  onSearchMovies = () => {
    searchMovies({
      query: this.#currentQuery,
      page: pageState.currentPage,
      limit: this.#pageLimit,
    });
  };

  onSetIsSearch = ({ value }) => {
    this.#isSearch = value;
  };

  onSetCurrentQuery = ({ event }) => {
    this.#currentQuery = event.target.value;
  };

  onSetPreviousQuery = ({ value }) => {
    this.#previousQuery = value;
  };

  get isSearch() {
    return this.#isSearch;
  }

  get currentQuery() {
    return this.#currentQuery;
  }

  get previousQuery() {
    return this.#previousQuery;
  }

  get pageLimit() {
    return this.#pageLimit;
  }

  get pagination() {
    return this.#pagination;
  }
}
