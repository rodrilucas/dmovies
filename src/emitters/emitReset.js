import { events } from "../constants/events";
import { emitEvent } from "./emit";

export function resetCurrentQuery({ source }) {
  emitEvent({ eventName: events.resetCurrentQuery, source });
}
