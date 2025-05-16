import { eventBus } from "../core/eventBus";
import { events } from "../constants/events";

export function loadingState({ isLoading, context }) {
  eventBus.emit(events.fetchLoadingStart, {
    isLoading,
    context,
  });
}

export function loadingSuccess({ data, isPagination }) {
  eventBus.emit(events.fetchLoadingSuccess, {
    data,
    isPagination,
  });
}

export function loadingError({ error }) {
  eventBus.emit(events.fetchLoadingError, { error });
}
