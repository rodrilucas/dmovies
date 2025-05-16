import { events } from "../constants/events";
import { onFocusIn } from "../constants/focusInDelegates";
import { eventBus } from "../core/eventBus";

export const focusInDelegates = new Map([
  [
    onFocusIn.keyword,
    (event) => {
      eventBus.emit(events.keywordFocus, { source: "input", event });
    },
  ],
]);
