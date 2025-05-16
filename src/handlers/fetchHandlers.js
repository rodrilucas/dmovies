import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";
import { fetchState } from "../states/fetchState";
import { checkMoviesLength } from "../actions/checkMoviesLength";
import { setLoadingDisableButton } from "../ui/disableButton";
import { updatePaginationAndMovies } from "../actions/updatePaginationAndMovies";
import { showSkeletons, hideSkeletons } from "../components/moviesList";
import {
  btnFilter,
  btnFilterSpinner,
  btnFilterText,
  btnSearch,
  btnSearchSpinner,
  btnSearchText,
} from "../elements/elements";

const { emit } = eventBus;

const emitButtons = {
  search: (isLoading) =>
    emit(events.isLoadingDisableButton, {
      btn: btnSearch,
      btnSpinner: btnSearchSpinner,
      btnText: btnSearchText,
      isLoading,
    }),

  filter: (isLoading) =>
    emit(events.isLoadingDisableButton, {
      btn: btnFilter,
      btnSpinner: btnFilterSpinner,
      btnText: btnFilterText,
      isLoading,
    }),

  default: () => {},
};

export const fetchHandlers = {
  [events.fetchLoadingStart]: ({ isLoading, context }) => {
    fetchState.isLoading = isLoading;
    isLoading ? showSkeletons() : hideSkeletons();
    (emitButtons[context] || emitButtons.default)(isLoading);
  },

  [events.isLoadingDisableButton]: ({
    btn,
    btnSpinner,
    btnText,
    isLoading,
  }) => {
    setLoadingDisableButton({ btn, btnSpinner, btnText, isLoading });
  },

  [events.fetchLoadingSuccess]: ({ data, isPagination }) => {
    checkMoviesLength(data);
    updatePaginationAndMovies(data, isPagination);
  },

  [events.fetchLoadingError]: ({ error }) => {
    fetchState.error = error || "Ocorreu algum erro ao buscar filmes.";
  },
};
