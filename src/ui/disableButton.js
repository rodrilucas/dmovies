export function setLoadingDisableButton({
  btn,
  btnSpinner,
  btnText,
  isLoading,
}) {
  btn.disabled = isLoading;
  if (isLoading) {
    btnSpinner.classList.remove("hidden");
    btnText.textContent = "Buscando";
    btn.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    btnSpinner.classList.add("hidden");
    btnText.textContent = "Buscar";
    btn.classList.remove("opacity-50", "cursor-not-allowed");
  }
}
