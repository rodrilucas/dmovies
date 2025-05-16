export function parseSort(sortValue) {
  const [by, order] = (sortValue || "popularity.desc").split(".");
  return { by, order };
}
