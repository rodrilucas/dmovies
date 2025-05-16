import { events } from "../constants/events";
import { searchMoviesByFilter } from "../api/searchMoviesByFilter";
import { searchState } from "../states/searchState";
import {
  avaliationValue,
  avaliationInput,
  ratingValue,
  ratingInput,
} from "../elements/elements";
import { parseSort } from "../utils/parseSort";
import { parseDate } from "../utils/dates";
import { pageState } from "../states/pageState";
import { searchCacheState } from "../states/searchCacheState";
import { filterState } from "../states/filterState";

export const setHandlers = {
  [events.setIsFilter]: ({ value }) => {
    filterState.isFilter = value;
  },

  [events.setIsSearch]: ({ value }) => {
    searchState.isSearch = value;
  },

  [events.setCurrentQuery]: ({ event }) => {
    searchState.currentQuery = event.target.value;
  },

  [events.setPreviousQuery]: ({ value }) => {
    searchState.previousQuery = value;
  },

  [events.setAvaliation]: () => {
    avaliationValue.textContent = avaliationInput.value;
  },

  [events.setRating]: () => {
    ratingValue.textContent = ratingInput.value;
  },

  [events.setFilter]: ({ values }) => {
    const current = filterState.filters;
    filterState.filters = {
      ...current,
      page: 1,
      limit: 20,
      keyword: values.keyword || "",
      sort: parseSort(values.sort),
      startYear: parseDate(values.startYear),
      endYear: parseDate(values.endYear),
      language: values.language || "",
      rating: values.rating || "0",
      avaliation: values.avaliation || "0",
      adult: values.adult || false,
    };
    searchMoviesByFilter(filterState.filters);
  },

  [events.setCurrentPage]: ({ value }) => {
    pageState.currentPage = value;
  },

  [events.setCache]: ({ query, movies }) => {
    searchCacheState.lastQuery = query;
    searchCacheState.lastResults = movies;
  },
};
