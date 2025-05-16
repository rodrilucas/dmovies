export function delegate(eventType, handlers) {
  document.addEventListener(eventType, (e) => {
    for (const [selector, callback] of handlers) {
      if (e.target.matches(selector)) {
        console.log(selector)
        callback(e);
        break;
      }
    }
  });
}
