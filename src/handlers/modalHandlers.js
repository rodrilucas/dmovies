import { getImageUrl } from "../utils/getImageUrl";
import { modalItem } from "../components/modalItem";
import { modal as m, modalContent } from "../elements/elements";
import { events } from "../constants/events";
import { openCloseModal } from "../emitters/emitModal";

export const modalHandlers = {
  [events.closeModal]: () => {
    m.classList.add("hidden");
    m.classList.remove("opacity-100", "pointer-events-auto", "scale-100");
    m.classList.add("opacity-0", "pointer-events-none", "scale-95");
  },

  [events.openModal]: (movie) => {
    openCloseModal({ source: "unknown" });
    const imageUrl = getImageUrl(movie.poster_path);
    modalContent.innerHTML = modalItem(movie, imageUrl);
  },

  [events.openCloseModal]: () => {
    m.classList.remove("hidden", "opacity-0", "pointer-events-none");
    m.classList.add("opacity-100", "pointer-events-auto", "scale-100");
  },
};
