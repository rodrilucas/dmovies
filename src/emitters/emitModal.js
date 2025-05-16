import { events } from "../constants/events";
import { emitEvent } from "./emit";

export function openCloseModal({ source, payload = {} }) {
  emitEvent({ eventName: events.openCloseModal, source, payload });
}
