import { events } from "../constants/events";
import { eventBus } from "../core/eventBus";
import { onClick } from "../constants/clickDelegates";

export const clickDelegates = new Map([
  [
    onClick.closeModal,
    () => eventBus.emit(events.closeModal, { source: "button" }),
  ],
  [
    onClick.movieModal,
    () => eventBus.emit(events.closeModal, { source: "backdrop" }),
  ],
  [
    onClick.genreBtn,
    (event) => {
      event.preventDefault();
      eventBus.emit(events.genreBtnsToggleClass, { source: "button", event });
      eventBus.emit(events.toggleGenre, { source: "button", event });
    },
  ],
]);
