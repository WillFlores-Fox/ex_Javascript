const slider = document.getElementById("slider");
const cards = document.querySelectorAll(".card");
const visibleCards = 3;
let currentIndex = 2;

function updateCards() {
  const cardWidth = cards[0].offsetWidth + 30; // largura + gap
  const translateX = (currentIndex - 1) * cardWidth;
  slider.style.transform = `translateX(-${translateX}px)`;

  cards.forEach((card, index) => {
    card.classList.remove("active");
    if (index === currentIndex) {
      card.classList.add("active");
    }
  });
}

function nextCard() {
  if (currentIndex < cards.length - 2) {
    currentIndex++;
    updateCards();
  }
}

function prevCard() {
  if (currentIndex > 1) {
    currentIndex--;
    updateCards();
  }
}

window.addEventListener("resize", updateCards);
updateCards();
