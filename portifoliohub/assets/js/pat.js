(function () {
  const track = document.querySelector(".carousel-track");
  const items = document.querySelectorAll(".carousel-item");
  const itemWidth = items[0].offsetWidth;
  let position = -10000;

  function duplicateItems() {
    for (let i = 0; i < 99; i++) {
      items.forEach((item) => {
        const clone = item.cloneNode(true);
        track.appendChild(clone);
      });
    }
  }

  function moveCarousel() {
    position += 1;
    track.style.transform = `translateX(${position}px)`;

    const firstItem = track.firstElementChild;
    const firstItemRect = firstItem.getBoundingClientRect();
    const containerRect = track.parentElement.getBoundingClientRect();

    if (firstItemRect.left > containerRect.right) {
      position = -10000;
      track.style.transform = `translateX(${position}px)`;
    }
  }

  duplicateItems();
  setInterval(moveCarousel, 30);
})();
