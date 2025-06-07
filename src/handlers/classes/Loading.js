import { checkMoviesLength } from "../../actions/checkMoviesLength";
import { setLoadingDisableButton } from "../../ui/disableButton";
import { updatePaginationAndMovies } from "../../actions/updatePaginationAndMovies";
import { showSkeletons, hideSkeletons } from "../../components/moviesList";
import {
  btnFilter,
  btnFilterSpinner,
  btnFilterText,
  btnSearch,
  btnSearchSpinner,
  btnSearchText,
} from "../../elements/elements";
import { eventBus } from "../../core/eventBus";
import { events } from "../../constants/allEvents";

export class Loading {
  #isLoading = false;
  #error = {};
  #isHasMore = false;

  onLoadingStart = ({ isLoading, context }) => {
    this.#isLoading = isLoading;
    isLoading ? showSkeletons() : hideSkeletons();
    this.call(context) || this.#default;
  };

  onLoadingDisableButton = ({ btn, btnSpinner, btnText, isLoading }) => {
    setLoadingDisableButton({ btn, btnSpinner, btnText, isLoading });
  };

  onLoadingSuccess = ({ data, isPagination }) => {
    checkMoviesLength(data);
    updatePaginationAndMovies(data, isPagination);
  };

  onLoadingError = ({ error }) => {
    this.#error = error || "Ocorreu algum erro ao buscar filmes.";
  };

  #methods = {
    search: () =>
      eventBus.emit(events.loadingDisableButton, {
        btn: btnSearch,
        btnSpinner: btnSearchSpinner,
        btnText: btnSearchText,
        isLoading: this.#isLoading,
      }),

    filter: () =>
      eventBus.emit(events.loadingDisableButton, {
        btn: btnFilter,
        btnSpinner: btnFilterSpinner,
        btnText: btnFilterText,
        isLoading: this.#isLoading,
      }),
  };

  call(method) {
    const fn = this.#methods[method];
    if (fn) {
      fn();
    } else {
      throw new Error(`Método '${method}' não encontrado`);
    }
  }

  #default = () => {};

  get isLoading() {
    return this.#isLoading;
  }

  get error() {
    return this.#error;
  }

  get isHasMore() {
    return this.#isHasMore;
  }

  set isHasMore(value) {
    this.#isHasMore = value;
  }
}
