
const carousel = document.querySelector(".carousel");
const cards = document.querySelectorAll(".card");

const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let index = 0;

function updateCarousel() {
  const offset = index * 220;
  carousel.style.transform = `translateX(-${offset}px)`;

  cards.forEach((card, i) => {
    card.classList.remove("highlight");
  });

  const highlightIndex = index;
  if (cards[highlightIndex]) {
    cards[highlightIndex].classList.add("highlight");
  }
}

nextBtn.addEventListener("click", () => {
  if (index < cards.length - 1 ) {
    index++;
    updateCarousel();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateCarousel();
  }
});

updateCarousel();
