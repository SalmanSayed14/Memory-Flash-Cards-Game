/// defination of allBtns and allImages
const allBtns = document.querySelectorAll('.btn')
const allBtns1 = document.querySelectorAll('.btn1')
const allImages = document.querySelectorAll('.image')
const loseMeg = document.querySelector('.loseMge')
const winMeg = document.querySelector('.winMge')
let wrongs = 0
let corrects = 0

//// show all image at begining of the game for 4 seconds
//// show lose meg after one min
window.onload = function () {
  setTimeout(function () {
    allImages.forEach(function (image) {
      image.style.display = 'none'
    })
  }, 4000)
  setTimeout(function () {
    loseMeg.style.display = 'block'
  }, 60000)
}

/// Determine the first and second click
let firstClicked = null
let secondClicked = null
let hasClicked = false

// Add event listener to each button
allBtns.forEach((btn) => {
  btn.addEventListener('click', handleClick)
})

allBtns1.forEach((btn1) => {
  btn1.addEventListener('click', handleClick)
})

/// rando images for level two
allBtns1.forEach((btn1) => {
  let random = Math.floor(Math.random() * 10)
  btn1.style.order = random
})

function handleClick(event) {
  if (!firstClicked) {
    firstClicked = this
  } else {
    secondClicked = this
    hasClicked = true
  }

  // If this is the second click, check if the images match
  if (firstClicked && secondClicked) {
    const firstImageData = firstClicked.getAttribute('data-image')
    const secondImageData = secondClicked.getAttribute('data-image')
    const firstClickedImage = firstClicked.querySelector('.image')
    const secondClickedImage = secondClicked.querySelector('.image')
    if (secondImageData === firstImageData) {
      alert('Great!')
      firstClicked = null
      secondClicked = null
      hasClicked = false
      firstClickedImage.style.display = 'block'
      secondClickedImage.style.display = 'block'
      corrects += 1
      if (corrects === 5) {
        winMeg.style.display = 'block'
      }
    } else if (secondImageData != firstImageData) {
      alert('wrong!')
      wrongs += 1
      firstClicked = null
      secondClicked = null
      hasClicked = false
      if (wrongs === 3) {
        loseMeg.style.display = 'block'
      }
    }
  }
}
