import {
  suggestions,
  keyword,
} from "../elements/elements";
import { suggestion } from "../components/suggestion";

function clearSuggestions() {
  suggestions.innerHTML = "";
  suggestions.classList.add("hidden");
  document.removeEventListener("click", handleClickOutside);
}

function handleClickOutside(e) {
  const clickedOutside =
    !suggestions.contains(e.target) && e.target !== keyword;
  if (clickedOutside) clearSuggestions();
}

function showSuggestions(html) {
  suggestions.innerHTML = html;
  suggestions.classList.remove("hidden");
  document.addEventListener("click", handleClickOutside);
}

function bindSuggestionClickEvents(onSelect) {
  suggestions.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      onSelect(li.textContent);
      clearSuggestions();
    });
  });
}

export function renderSuggestions(movies, onSelect) {
  if (!movies.length) {
    showSuggestions(suggestion("Não há sugestões de palavras-chave."));
    return;
  }

  const suggestionsHTML = movies.map((m) => suggestion(m.title)).join("");
  showSuggestions(suggestionsHTML);
  bindSuggestionClickEvents(onSelect);
}
