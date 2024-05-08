const allCards = document.querySelectorAll('.card')
let firstCard, secondCard
let isFlippedCard = false
allCards.forEach((card) => card.addEventListener('click', handleCardClicked))

function handleCardClicked() {
  this.classList.add('flip')
  if (!isFlippedCard) {
    isFlippedCard = true
    firstCard = this
  } else {
    isFlippedCard = false
    secondCard = this

    if (firstCard.dataset.img === secondCard.dataset.img) {
      firstCard.removeEventListener('click', handleCardClicked)
      secondCard.removeEventListener('click', handleCardClicked)
    } else if (firstCard.dataset.img != secondCard.dataset.img) {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
    }
  }
}
