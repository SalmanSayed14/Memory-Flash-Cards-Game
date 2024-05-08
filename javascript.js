const allCards = document.querySelectorAll('.card')
allCards.forEach((card) => card.addEventListener('click', handleCardClicked))

function handleCardClicked() {
  this.classList.add('flip')
}
