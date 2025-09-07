document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-btn");
    const closeBtn = document.getElementById("close-btn");
    const sidebar = document.getElementById("sidebar");
  
    toggleBtn.addEventListener("click", () => {
      sidebar.classList.toggle("open");
    });
  
    closeBtn.addEventListener("click", () => {
      sidebar.classList.remove("open");
    });
  
    // Fechar ao clicar fora da sidebar
    document.addEventListener("click", (event) => {
      if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
        sidebar.classList.remove("open");
      }
    });
  });
  