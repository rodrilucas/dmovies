import { events } from "../constants/events";
import { spinner } from "../elements/elements";
import { renderSuggestions } from "../ui/suggestions";

export const keywordHandlers = {
  [events.keywordQueryStart]: () => {
    spinner.classList.remove("hidden");
  },

  [events.keywordQueryEmpty]: () => {
    suggestions.innerHTML = "";
    suggestions.classList.add("hidden");
    spinner.classList.add("hidden");
  },

  [events.keywordQuerySuccess]: ({ movies }) => {
    spinner.classList.add("hidden");
    renderSuggestions(movies, (selectedKeyword) => {
      keyword.value = selectedKeyword;
      suggestions.classList.add("hidden");
    });
  },

  [events.keywordQueryCached]: ({ movies }) => {
    renderSuggestions(movies, (selectedKeyword) => {
      keyword.value = selectedKeyword;
      suggestions.classList.add("hidden");
    });
  },
};
