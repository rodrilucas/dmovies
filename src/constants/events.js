import { searchEvents } from "./searchEvents";
import { filterEvents } from "./filterEvents";
import { genreEvents } from "./genreEvents";
import { keywordEvents } from "./keywordEvents";
import { modalEvents } from "./modalEvents";
import { paginationEvents } from "./paginationEvents";
import { cacheEvents } from "./cacheEvents";
import { validationEvents } from "./validationEvents";
import { uiEvents } from "./uiEvents";

export const events = {
  ...searchEvents,
  ...filterEvents,
  ...genreEvents,
  ...keywordEvents,
  ...modalEvents,
  ...paginationEvents,
  ...cacheEvents,
  ...validationEvents,
  ...uiEvents,
};
