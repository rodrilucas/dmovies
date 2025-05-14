import { sortOptions, genres, languages } from "../utils/data";
import { sortSelect, genreList, language, movieFilterForm } from "../elements/elements";
import { createEl } from "../selectors/selectors";
import { onGenreButtonClick } from "./filterHandlers";
import { tmdb } from "../components/tmdb";

export function genreBtnsAddClass(btn) {
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

export function genreBtnsToggleClass(btn) {
  btn.classList.toggle("bg-blue-600");
  btn.classList.toggle("text-white");
  btn.classList.toggle("border-blue-600");
  btn.classList.toggle("bg-white");
  btn.classList.toggle("text-blue-600");
  btn.classList.toggle("hover:bg-blue-700");
}

export function setLoadingDisableButton(btn, btnSpinner, btnText, isLoading) {
  btn.disabled = isLoading;
  if (isLoading) {
    btnSpinner.classList.remove("hidden");
    btnText.textContent = "Buscando";
    btn.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    btnSpinner.classList.add("hidden");
    btnText.textContent = "Buscar";
    btn.classList.remove("opacity-50", "cursor-not-allowed");
  }
}

export function renderSuggestions(movies, onSelect) {
  suggestions.innerHTML = movies
    .map(
      (m) =>
        `<li class="px-4 py-2 hover:bg-gray-700 cursor-pointer">${m.title}</li>`
    )
    .join("");
  suggestions.classList.remove("hidden");
  suggestions.querySelectorAll("li").forEach((li) =>
    li.addEventListener("click", () => {
      onSelect(li.textContent);
    })
  );
}

sortOptions.forEach(([value, label]) => {
  const option = createEl("option");
  option.value = value;
  option.textContent = label;
  sortSelect.appendChild(option);
});

genres.forEach(({ id, name }) => {
  const li = createEl("li");
  li.dataset.value = id;

  const btn = createEl("button");
  btn.className = "genre-btn";
  genreBtnsAddClass(btn);

  btn.textContent = name;

  btn.addEventListener("click", (e) => onGenreButtonClick(e, btn));

  li.appendChild(btn);

  genreList.appendChild(li);
});

languages.forEach((lang) => {
  const option = createEl("option");
  option.value = lang.iso_639_1;
  option.textContent = lang.name;
  language.appendChild(option);
});

movieFilterForm.appendChild(tmdb())