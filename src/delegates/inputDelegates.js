import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";
import { onInput } from "../constants/inputDelegates";

export const inputDelegates = new Map([
  [
    onInput.keyword,
    (event) => {
      eventBus.emit(events.keywordInput, { source: "input", event });
    },
  ],
  [
    onInput.rating,
    (event) => {
      eventBus.emit(events.setRating, { source: "input", event });
    },
  ],
  [
    onInput.avaliation,
    () => {
      eventBus.emit(events.setAvaliation, { source: "input" });
    },
  ],
  [
    onInput.inputSearch,
    (event) => {
      eventBus.emit(events.setCurrentQuery, { source: "input", event });
    },
  ],
]);
