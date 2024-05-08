const allCards = document.querySelectorAll('.card')
let firstCard, secondCard
allCards.forEach((card) => card.addEventListener('click', handleCardClicked))

function handleCardClicked() {
  this.classList.add('flip')
  if (!isFlippedCard) {
    isFlippedCard = true
    firstCard = this
  } else {
    isFlippedCard = false
    secondCard = this
  }
}
