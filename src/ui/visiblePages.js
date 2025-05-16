export function visiblePages(current, total) {
  const delta = 2;
  const range = [];

  range.push(1);

  if (current - delta > 2) {
    range.push("...");
  }

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current + delta < total - 1) {
    range.push("...");
  }

  if (total > 1) {
    range.push(total);
  }

  return range;
}
