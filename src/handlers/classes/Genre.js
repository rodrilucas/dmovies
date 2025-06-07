import { filter as filterState } from "../setupEventHandlers";

export class Genre {
  #btnClass = [
    "bg-blue-600",
    "text-white",
    "border-blue-600",
    "bg-white",
    "text-blue-600",
    "hover:bg-blue-700",
  ];

  onGenreBtnsToggleClass = ({ event }) => {
    const btn = event.target.closest("#genre-btn");
    this.#btnClass.forEach((c) => btn?.classList.toggle(c));
  };

  onToggleGenre = ({ event }) => {
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
  };
}
