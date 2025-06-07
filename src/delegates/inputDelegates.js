import { eventBus } from "../core/eventBus";
import { events } from "../constants/allEvents";
import { input } from "../constants/events";

const { emit } = eventBus;

export const inputDelegates = new Map([
  [
    input.keyword,
    (event) => {
      emit(events.keywordInput, { source: "input", event });
    },
  ],
  [
    input.rating,
    (event) => {
      emit(events.setRating, { source: "input", event });
    },
  ],
  [
    input.avaliation,
    () => {
      emit(events.setAvaliation, { source: "input" });
    },
  ],
  [
    input.inputSearch,
    (event) => {
      emit(events.setCurrentQuery, { source: "input", event });
    },
  ],
]);
