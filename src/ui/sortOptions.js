import { sortOptions } from "../utils/data";
import { createEl } from "../selectors/selectors";
import { sortSelect } from "../elements/elements";

sortOptions.forEach(([value, label]) => {
  const option = createEl("option");
  option.value = value;
  option.textContent = label;
  sortSelect.appendChild(option);
});