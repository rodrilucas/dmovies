import { eventBus } from "../core/eventBus";
import { events } from "../constants/events"; 

export function emitEvent({ eventName, source = "unknown", payload = {} }) {
  if (!Object.values(events).includes(eventName)) {
    console.warn(`[emitEvent] Evento não registrado: "${eventName}"`);
    return;
  }

  if (!source) {
    console.warn(`[emitEvent] Evento "${eventName}" emitido sem "source"`);
  }

  eventBus.emit(eventName, { source, ...payload });
}
