import { events } from "../constants/events";
import { eventBus } from "../core/eventBus";

export const clickDelegates = new Map();

clickDelegates.set("#close-modal", () =>
  eventBus.emit(events.closeModal, { source: "button" })
);

clickDelegates.set("#movie-modal", () =>
  eventBus.emit(events.closeModal, { source: "backdrop" })
);

clickDelegates.set("#genre-btn", (event) => {
  event.preventDefault();

  eventBus.emit(events.genreBtnsToggleClass, { source: "button", event });

  eventBus.emit(events.toggleGenre, { source: "button", event });
});
