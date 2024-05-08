const allCards = document.querySelectorAll('.card')
let firstCard, secondCard
let isFlippedCard = false
let isInProcess = true
let errors = 0

allCards.forEach((card) => card.addEventListener('click', handleCardClicked))

allCards.forEach((card) => {
  let randPos = Math.floor(Math.random() * 12)
  card.style.order = randPos
})

function handleCardClicked() {
  if (!isInProcess) return
  this.classList.add('flip')
  if (!isFlippedCard) {
    isFlippedCard = true
    firstCard = this
  } else {
    isFlippedCard = false
    secondCard = this

    if (firstCard.dataset.cardnumber === secondCard.dataset.cardnumber) {
      firstCard.classList.remove('flip')
      secondCard.classList.remove('flip')
    }
    if (
      firstCard.dataset.img === secondCard.dataset.img &&
      firstCard.dataset.cardnumber != secondCard.dataset.cardnumber
    ) {
      firstCard.removeEventListener('click', handleCardClicked)
      secondCard.removeEventListener('click', handleCardClicked)
    } else if (firstCard.dataset.img != secondCard.dataset.img) {
      isInProcess = false
      errors += 1
      document.getElementById('errors').innerText = errors
      setTimeout(() => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')
        isInProcess = true
      }, 1000)
    }
  }
}
