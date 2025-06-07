import { eventBus } from "../core/eventBus";
import { events } from "../constants/allEvents";
import { submit } from "../constants/events";

const { emit } = eventBus;

export const submitDelegates = new Map([
  [
    submit.movieFilter,
    (event) => {
      emit(events.filterForm, { source: "form", event });
    },
  ],
  [
    submit.searchForm,
    (event) => {
      emit(events.searchForm, { source: "form", event });
    },
  ],
]);
