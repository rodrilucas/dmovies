const listeners = new Map();

export const eventBus = {
  on(event, callback) {
    if (!listeners.has(event)) {
      listeners.set(event, new Set());
    }
    listeners.get(event).add(callback);
  },

  off(event, callback) {
    if (listeners.has(event)) {
      listeners.get(event).delete(callback);
    }
  },

  emit(event, payload) {
    if (listeners.has(event)) {
      listeners.get(event).forEach((cb) => cb(payload));
    }
  },

  clear(event) {
    listeners.delete(event);
  },

  clearAll() {
    listeners.clear();
  }
};
