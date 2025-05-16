import { events } from "../constants/events";
import { inputSearch } from "../elements/elements";

export const resetHandlers = {
  [events.resetCurrentQuery]: () => {
    inputSearch.value = "";
  },
};
