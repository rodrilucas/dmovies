import { events } from "../constants/events";
import { onFocusIn } from "../constants/focusInDelegates";
import { eventBus } from "../core/eventBus";

const { emit } = eventBus;

export const focusInDelegates = new Map([
  [
    onFocusIn.keyword,
    (event) => {
      emit(events.keywordFocus, { source: "input", event });
    },
  ],
]);
