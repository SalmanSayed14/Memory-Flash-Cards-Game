const allCards = document.querySelectorAll('.card')
let firstCard, secondCard
let isFlippedCard = false
let isInProcess = true
let errors = 0

let body = document.querySelector('body')
let screenmod = true
const screenmode = document.querySelector('#screenMode')
screenmode.addEventListener('click', () => {
  if (screenmod === true) {
    body.style.backgroundImage =
      'url(https://as2.ftcdn.net/v2/jpg/02/18/72/77/1000_F_218727724_ogFtvbGlr92YNwnCMmthutcwcWJ2Lfxz.jpg)'
    screenmod = false
  } else if (screenmod === false) {
    body.style.backgroundImage =
      'url(https://media.istockphoto.com/id/1401568968/vector/blue-matrix-background-abstract-binary-code-wallpaper-template-for-hackathon-and-other.jpg?s=612x612&w=0&k=20&c=7WQvXlYcGvriTqRg-bQENTqDTISNnmOB5pSeprNqGBQ=)'
    screenmod = true
  }
})

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
