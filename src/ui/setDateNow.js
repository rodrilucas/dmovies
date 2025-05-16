import { getDateNow } from "../utils/dates";
import { startYear,  endYear } from "../elements/elements";

export function setDateNow() {
  const today = getDateNow();
  endYear.value = today;
  endYear.max = today;
  startYear.max = today;
}
