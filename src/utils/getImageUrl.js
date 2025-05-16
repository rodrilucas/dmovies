export function getImageUrl(path) {
  return path ? `https://image.tmdb.org/t/p/w500${path}` : "";
}