export function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString("pt-BR") || "N/A";
}

export function formatDateUTC(dateString) {
  return new Date(dateString).getUTCFullYear();
}

export function getDateNow() {
  return new Date().toISOString().split("T")[0];
}
