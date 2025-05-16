import { events } from "../constants/events";
import { emitEvent } from "./emit";

export function emitSearchMovies({ source, payload = {} }) {
  emitEvent({ eventName: events.searchMovies, source, payload });
}
