// Selecionar os elementos
const track = document.querySelector(".icon");
const items = document.querySelectorAll(".icon i");
const itemWidth = items[0].offsetWidth + 45; // Largura do item + o espaçamento entre eles (45px)
let position = -10000; // Posição inicial

// Função para duplicar os itens
function duplicateItems() {
  for (let i = 0; i < 99; i++) {
    // Repetir 99 vezes para ter vários conjuntos de ícones
    items.forEach((item) => {
      const clone = item.cloneNode(true); // Clona o item
      track.appendChild(clone); // Adiciona o item clonado no final da lista
    });
  }
}

// Função para mover o carrossel
function moveCarousel() {
  position += 1; // Move para a direita
  track.style.transform = `translateX(${position}px)`; // Aplica o movimento no eixo X

  // Verifica se o primeiro item saiu completamente da tela
  const firstItem = track.firstElementChild;
  const firstItemRect = firstItem.getBoundingClientRect();
  const containerRect = track.parentElement.getBoundingClientRect();

  if (firstItemRect.left > containerRect.right) {
    // Quando o primeiro item sai da tela, reinicia a animação
    position = -10000; // Reseta a posição para reiniciar o movimento
    track.style.transform = `translateX(${position}px)`; // Reseta a posição imediatamente
  }
}

// Chama a função de duplicação após o carregamento do conteúdo
window.onload = duplicateItems;

// Configurar o intervalo para animação
setInterval(moveCarousel, 30); // Ajuste o intervalo para controlar a velocidade
