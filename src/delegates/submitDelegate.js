import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";
import { onSubmit } from "../constants/submitDelegates";

export const submitDelegate = new Map([
  [
    onSubmit.movieFilter,
    (event) => {
      eventBus.emit(events.filterForm, { source: "form", event });
    },
  ],
  [
    onSubmit.searchForm,
    (event) => {
      eventBus.emit(events.searchForm, { source: "form", event });
    },
  ],
]);
