import { events } from "../constants/allEvents";
import { eventBus } from "../core/eventBus";
import { focus } from "../constants/events";

const { emit } = eventBus;

export const focusInDelegates = new Map([
  [
    focus.keyword,
    (event) => {
      emit(events.keywordFocus, { source: "input", event });
    },
  ],
]);
