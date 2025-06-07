import "../delegates/initDelegates";
import { eventBus } from "../core/eventBus";
import { events } from "../constants/allEvents";
import {
  avaliationValue,
  avaliationInput,
  ratingValue,
  ratingInput,
  inputSearch,
} from "../elements/elements";
import { pageState } from "../states/pageState";
import { Loading, Filter, Genre, Keyword, Modal, Search } from "./index";

export const keyword = new Keyword();
export const loading = new Loading();
export const filter = new Filter();
export const genre = new Genre();
export const search = new Search();
export const modal = new Modal();

const allHandlers = {
  [events.keywordQueryStart]: keyword.onKeywordQueryStart,
  [events.keywordQueryEmpty]: keyword.onKeywordQueryEmpty,
  [events.keywordQuerySuccess]: keyword.onKeywordQuerySuccess,
  [events.keywordQueryCached]: keyword.onKeywordQueryCached,
  [events.keywordFocus]: keyword.onKeywordFocus,
  [events.keywordInput]: keyword.onKeywordInput,

  [events.genreBtnsToggleClass]: genre.onGenreBtnsToggleClass,
  [events.toggleGenre]: genre.onToggleGenre,

  [events.loadingStart]: loading.onLoadingStart,
  [events.loadingDisableButton]: loading.onLoadingDisableButton,
  [events.loadingSuccess]: loading.onLoadingSuccess,
  [events.loadingError]: loading.onLoadingError,

  [events.filterForm]: filter.onFilterForm,

  [events.closeModal]: modal.onCloseModal,
  [events.openModal]: modal.onOpenModal,
  [events.openCloseModal]: modal.onOpenCloseModal,
  
  [events.searchForm]: search.onSearchForm,
  [events.searchMovies]: search.onSearchMovies,
  [events.setIsSearch]: search.onSetIsSearch,
  [events.setCurrentQuery]: search.onSetCurrentQuery,
  [events.setPreviousQuery]: search.onSetPreviousQuery,
  [events.setFilter]: filter.onSetFilter,
  [events.setIsFilter]: filter.onSetIsFilter,
  [events.setAvaliation]: () => {
    avaliationValue.textContent = avaliationInput.value;
  },
  [events.setRating]: () => {
    ratingValue.textContent = ratingInput.value;
  },
  [events.setCurrentPage]: ({ value }) => {
    pageState.currentPage = value;
  },
  [events.resetCurrentQuery]: () => {
    inputSearch.value = "";
  },
};

for (const [event, handler] of Object.entries(allHandlers)) {
  eventBus.on(event, handler);
}
