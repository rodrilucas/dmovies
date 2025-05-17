import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";
import { onSubmit } from "../constants/submitDelegates";

const { emit } = eventBus;

export const submitDelegates = new Map([
  [
    onSubmit.movieFilter,
    (event) => {
      emit(events.filterForm, { source: "form", event });
    },
  ],
  [
    onSubmit.searchForm,
    (event) => {
      emit(events.searchForm, { source: "form", event });
    },
  ],
]);
