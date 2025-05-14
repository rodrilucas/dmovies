import {
  onFormSubmit,
  onInputChange,
  onClickCloseModal,
} from "../handlers/searchHandlers";
import { handleSearch } from "../handlers/filterHandlers";
import {
  onFilterFormSubmit,
  onRatingInput,
  onAvaliationInput,
} from "../handlers/filterHandlers";
import {
  searchForm,
  searchInput,
  keyword,
  movieFilterForm,
  ratingInput,
  avaliationInput,
  closeModal,
  movieModal,
} from "../elements/elements";

function handleModalClick(e) {
  if (e.target === e.currentTarget) {
    onClickCloseModal();
  }
}

export function registerEventListeners() {
  searchForm.addEventListener("submit", onFormSubmit);
  searchInput.addEventListener("input", onInputChange);
  keyword.addEventListener("input", handleSearch);
  movieFilterForm.addEventListener("submit", onFilterFormSubmit);
  ratingInput.addEventListener("input", onRatingInput);
  avaliationInput.addEventListener("input", onAvaliationInput);
  closeModal.addEventListener("click", onClickCloseModal);
  movieModal.addEventListener("click", handleModalClick);
}

export function unregisterEventListeners() {
  searchForm.removeEventListener("submit", onFormSubmit);
  searchInput.removeEventListener("input", onInputChange);
  keyword.removeEventListener("input", handleSearch);
  movieFilterForm.removeEventListener("submit", onFilterFormSubmit);
  ratingInput.removeEventListener("input", onRatingInput);
  avaliationInput.removeEventListener("input", onAvaliationInput);
  closeModal.removeEventListener("click", onClickCloseModal);
  movieModal.removeEventListener("click", handleModalClick);
}
