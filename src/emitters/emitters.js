import { eventBus } from "../core/eventBus";
import { events } from "../constants/allEvents"; 

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

export function checkCurrentQuery({ source }) {
  emitEvent({ eventName: events.checkCurrentQuery, source });
}

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

export function loading({ isLoading, context }) {
  eventBus.emit(events.loadingStart, {
    isLoading,
    context,
  });
}

export function loadingSuccess({ data, isPagination }) {
  eventBus.emit(events.loadingSuccess, {
    data,
    isPagination,
  });
}

export function loadingError({ error }) {
  eventBus.emit(events.loadingError, { error });
}

export function openCloseModal({ source, payload = {} }) {
  emitEvent({ eventName: events.openCloseModal, source, payload });
}

export function emitSearchMovies({ source, payload = {} }) {
  emitEvent({ eventName: events.searchMovies, source, payload });
}

export function resetCurrentQuery({ source }) {
  emitEvent({ eventName: events.resetCurrentQuery, source });
}

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
