import { modal as m } from "../../elements/elements";
import { openCloseModal } from "../../emitters/emitters";
import { getImageUrl } from "../../utils/getImageUrl";
import { modalContent } from "../../elements/elements";
import { modalItem } from "../../components/modalItem";

export class Modal {
  onCloseModal = () => {
    m.classList.add("hidden");
    m.classList.remove("opacity-100", "pointer-events-auto", "scale-100");
    m.classList.add("opacity-0", "pointer-events-none", "scale-95");
  };

  onOpenModal = (movie) => {
    openCloseModal({ source: "unknown" });
    const imageUrl = getImageUrl(movie.poster_path);
    modalContent.innerHTML = modalItem(movie, imageUrl);
  };

  onOpenCloseModal = () => {
    m.classList.remove("hidden", "opacity-0", "pointer-events-none");
    m.classList.add("opacity-100", "pointer-events-auto", "scale-100");
  };
}
