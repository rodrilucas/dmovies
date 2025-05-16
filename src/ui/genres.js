import { genres } from "../utils/data";
import { createEl } from "../selectors/selectors";
import { genreList } from "../elements/elements";

function genreBtnsAddClass(btn) {
  btn.classList.add(
    "px-4",
    "py-2",
    "bg-blue-600",
    "text-white",
    "rounded",
    "hover:bg-blue-700",
    "transition",
    "cursor-pointer"
  );
}

genres.forEach(({ id, name }) => {
  const li = createEl("li");
  li.dataset.value = id;

  const btn = createEl("button");
  btn.id = "genre-btn";
  genreBtnsAddClass(btn);

  btn.textContent = name;

  li.appendChild(btn);

  genreList.appendChild(li);
});
