import { emitEvent } from "./emit";
import { events } from "../constants/events";

export function setIsFilter({ source, payload = {} }) {
  emitEvent({
    eventName: events.setIsFilter,
    source,
    payload,
  });
}

export function setIsSearch({ source, payload = {} }) {
  emitEvent({
    eventName: events.setIsSearch,
    source,
    payload,
  });
}

export function setFilter({ source, payload = {} }) {
  emitEvent({ eventName: events.setFilter, source, payload });
}

export function setCurrentPage({ source, payload = {} }) {
  emitEvent({
    eventName: events.setCurrentPage,
    source,
    payload,
  });
}

export function setPreviousQuery({ source, payload = {} }) {
  emitEvent({
    eventName: events.setPreviousQuery,
    source,
    payload,
  });
}

export function setCache({ source, payload = {} }) {
  emitEvent({
    eventName: events.setCache,
    source,
    payload,
  });
}
