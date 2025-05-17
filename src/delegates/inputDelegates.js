import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";
import { onInput } from "../constants/inputDelegates";

const { emit } = eventBus;

export const inputDelegates = new Map([
  [
    onInput.keyword,
    (event) => {
      emit(events.keywordInput, { source: "input", event });
    },
  ],
  [
    onInput.rating,
    (event) => {
      emit(events.setRating, { source: "input", event });
    },
  ],
  [
    onInput.avaliation,
    () => {
      emit(events.setAvaliation, { source: "input" });
    },
  ],
  [
    onInput.inputSearch,
    (event) => {
      emit(events.setCurrentQuery, { source: "input", event });
    },
  ],
]);
