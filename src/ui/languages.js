import { languages } from "../utils/data";
import { createEl } from "../selectors/selectors";
import { language } from "../elements/elements";

languages.forEach((lang) => {
  const option = createEl("option");
  option.value = lang.iso_639_1;
  option.textContent = lang.name;
  language.appendChild(option);
});