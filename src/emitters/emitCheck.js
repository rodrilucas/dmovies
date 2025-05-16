import { emitEvent } from "./emit";
import { events } from "../constants/events";

export function checkCurrentQuery({ source }) {
  emitEvent({ eventName: events.checkCurrentQuery, source });
}
