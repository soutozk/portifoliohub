// Animação do contorno
gsap.to("text", {
  strokeDashoffset: 0,
  duration: 3,
  ease: "power2.inOut",
  fill: "white",
});

// Fade-out da intro
setTimeout(function () {
  const startAnimation = document.querySelector(".start-animation");
  startAnimation.style.transition = "opacity 1s ease-out";
  startAnimation.style.opacity = 0;
}, 3000); // tempo da animação do texto

// Só depois que a intro sumir, mostrar o conteúdo
setTimeout(function () {
  const startAnimation = document.querySelector(".start-animation");
  const containerHome = document.querySelector(".container-home");
  const header = document.querySelector(".navbar");

  startAnimation.style.display = "none";
  containerHome.style.display = "flex";

  containerHome.style.opacity = 1;
  header.style.opacity = 1;
}, 4000); // espera 1s extra pro fade-out terminar
