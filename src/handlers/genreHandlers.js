import { filterState } from "../states/filterState";
import { events } from "../constants/events";

const btnClass = [
  "bg-blue-600",
  "text-white",
  "border-blue-600",
  "bg-white",
  "text-blue-600",
  "hover:bg-blue-700",
];

export const genreHandlers = {
  [events.genreBtnsToggleClass]: ({ event }) => {
    const btn = event.target.closest("#genre-btn");
    btnClass.forEach((c) => btn?.classList.toggle(c));
  },

  [events.toggleGenre]: ({ event }) => {
    const btn = event.target.closest("#genre-btn");
    const genreNumber = btn?.closest("li")?.dataset?.value;
    if (!genreNumber) return;

    const { genres } = filterState.filters;
    const index = genres.indexOf(genreNumber);
    if (index >= 0) {
      genres.splice(index, 1);
    } else {
      genres.push(genreNumber);
    }
  },
};
