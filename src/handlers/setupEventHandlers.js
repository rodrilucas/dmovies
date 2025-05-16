import { keywordHandlers } from "./keywordHandlers";
import { setHandlers } from "./setHandlers";
import { genreHandlers } from "./genreHandlers";
import { eventBus } from "../core/eventBus";
import { searchFormHandlers } from "./searchHandlers";
import { modalHandlers } from "./modalHandlers";
import { fetchHandlers } from "./fetchHandlers";
import { inputKeywordHandlers } from "./inputKeywordHandlers";
import { filterHandlers } from "./filterHandlers";
import { resetHandlers } from "./resetHandlers";
import "./initDelegates";

const allHandlers = {
  ...keywordHandlers,
  ...genreHandlers,
  ...setHandlers,
  ...searchFormHandlers,
  ...fetchHandlers,
  ...inputKeywordHandlers,
  ...filterHandlers,
  ...modalHandlers,
  ...resetHandlers,
};

for (const [event, handler] of Object.entries(allHandlers)) {
  eventBus.on(event, handler);
}
