import { filter as filterState } from "./handlers/setupEventHandlers";
import { searchMoviesByFilter } from "./api/searchMoviesByFilter";
import "./actions/lazyLoading";
import "./ui/index";
import "./handlers/setupEventHandlers";

export function app() {
  searchMoviesByFilter(filterState.filters);
}
