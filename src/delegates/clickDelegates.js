import { events } from "../constants/allEvents";
import { eventBus } from "../core/eventBus";
import { click } from "../constants/events";

const { emit } = eventBus;

export const clickDelegates = new Map([
  [click.closeModal, () => emit(events.closeModal, { source: "button" })],
  [click.movieModal, () => emit(events.closeModal, { source: "backdrop" })],
  [
    click.genreBtn,
    (event) => {
      event.preventDefault();
      emit(events.genreBtnsToggleClass, { source: "button", event });
      emit(events.toggleGenre, { source: "button", event });
    },
  ],
]);
