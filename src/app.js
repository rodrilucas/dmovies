import { searchMoviesByFilter } from "./api/searchMoviesByFilter";
import { filterState } from "./states/filterState";
import "./actions/lazyLoading";
import "./ui/index";
import "./handlers/setupEventHandlers";

export function app() {
  searchMoviesByFilter(filterState.filters);
}
