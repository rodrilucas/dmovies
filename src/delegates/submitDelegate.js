import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";

export const submitDelegate = new Map();

submitDelegate.set("#movie-filter", (event) => {
  eventBus.emit(events.filterForm, { source: "form", event });
});

submitDelegate.set("#search-form", (event) => {
  eventBus.emit(events.searchForm, { source: "form", event });
});
