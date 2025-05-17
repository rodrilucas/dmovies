import { events } from "../constants/events";
import { eventBus } from "../core/eventBus";
import { onClick } from "../constants/clickDelegates";

const { emit } = eventBus;

export const clickDelegates = new Map([
  [onClick.closeModal, () => emit(events.closeModal, { source: "button" })],
  [onClick.movieModal, () => emit(events.closeModal, { source: "backdrop" })],
  [
    onClick.genreBtn,
    (event) => {
      event.preventDefault();
      emit(events.genreBtnsToggleClass, { source: "button", event });
      emit(events.toggleGenre, { source: "button", event });
    },
  ],
]);
