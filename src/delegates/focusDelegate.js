import { events } from "../constants/events";
import { eventBus } from "../core/eventBus";

export const focusDelegates = new Map();

focusDelegates.set("#keyword", (event) => {
  eventBus.emit(events.keywordFocus, { source: "input", event });
});
