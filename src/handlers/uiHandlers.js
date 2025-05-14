import { sortOptions, genres, languages } from "../utils/data";
import {
  sortSelect,
  genreList,
  language,
  movieFilterForm,
  suggestions,
  keyword,
} from "../elements/elements";
import { createEl } from "../selectors/selectors";
import { onGenreButtonClick } from "./filterHandlers";
import { debounceMoviesSuggestion } from "../api/debounceMoviesSuggestion";
import { tmdb } from "../components/tmdb";
import { suggestion } from "../components/suggestion";

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

function clearSuggestions() {
  suggestions.innerHTML = "";
  suggestions.classList.add("hidden");
}

function handleClickOutside(e) {
  if (!suggestions.contains(e.target) && e.target !== keyword) {
    clearSuggestions();
    document.removeEventListener("click", handleClickOutside);
  }
}

export function renderSuggestions(movies, onSelect) {
  if (movies.length === 0) {
    suggestions.innerHTML = suggestion("Não há sugestões de palavras-chave.");
    suggestions.classList.remove("hidden");
    document.addEventListener("click", handleClickOutside);
    return;
  }
  suggestions.innerHTML = movies.map((m) => suggestion(m.title)).join("");
  suggestions.classList.remove("hidden");

  suggestions.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      onSelect(li.textContent);
      clearSuggestions();
    });
  });
  document.addEventListener("click", handleClickOutside);
}

let lastQuery = "";
let lastResults = [];

keyword.addEventListener("focus", () => {
  const query = keyword.value.trim();
  if (query.length === 0) return;

  if (query === lastQuery && lastResults.length > 0) {
    renderSuggestions(lastResults, (selectedKeyword) => {
      keyword.value = selectedKeyword;
      suggestions.classList.add("hidden");
    });
    return;
  }

  debounceMoviesSuggestion(query, 10, 0).then((movies) => {
    if (keyword.value.trim() !== query) return;

    lastQuery = query;
    lastResults = movies;

    renderSuggestions(movies, (selectedKeyword) => {
      keyword.value = selectedKeyword;
      suggestions.classList.add("hidden");
    });
  });
});

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

movieFilterForm.appendChild(tmdb());
