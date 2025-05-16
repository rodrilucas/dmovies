import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";

export const inputDelegates = new Map();

inputDelegates.set("#keyword", (event) => {
  eventBus.emit(events.keywordInput, { source: "input", event });
});

inputDelegates.set("#rating", () => {
  eventBus.emit(events.setRating, { source: "input"});
});

inputDelegates.set("#avaliation", () => {
  eventBus.emit(events.setAvaliation, { source: "input"});
});

inputDelegates.set("#input-search", (event) => {
  eventBus.emit(events.setCurrentQuery, { source: "input", event });
});
