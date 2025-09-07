// Abrir o modal
document.getElementById("open-modal").addEventListener("click", () => {
  document.getElementById("contact-modal").style.display = "flex";
});

// Fechar o modal
document.getElementById("close-modal").addEventListener("click", () => {
  document.getElementById("contact-modal").style.display = "none";
});

// Fechar o modal clicando fora
window.addEventListener("click", (event) => {
  const modal = document.getElementById("contact-modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
