import * as allCustomEvents from "./customEvents";

export const events = {
  ...allCustomEvents.genre,
  ...allCustomEvents.keyword,
  ...allCustomEvents.loading,
  ...allCustomEvents.modal,
  ...allCustomEvents.movies,
  ...allCustomEvents.query,
  ...allCustomEvents.search,
  ...allCustomEvents.set,
  ...allCustomEvents.filter,
};