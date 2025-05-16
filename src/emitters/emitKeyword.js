import { events } from "../constants/events";
import { emitEvent } from "./emit";

export function keywordQuerysuccess({ source, payload = {} }) {
  emitEvent({
    eventName: events.keywordQuerySuccess,
    source,
    payload,
  });
}

export function keywordQueryStart({ source, payload = {} }) {
  emitEvent({
    eventName: events.keywordQueryStart,
    source,
    payload,
  });
}

export function keywordQueryEmpty({ source, payload = {} }) {
  emitEvent({ eventName: events.keywordQueryEmpty, source, payload });
}

export function keywordQueryCached({ source, payload = {} }) {
  emitEvent({
    eventName: events.keywordQueryCached,
    source,
    payload,
  });
}
