/// defination of allBtns and allImages
const allBtns = document.querySelectorAll('.btn')
const allImages = document.querySelectorAll('.image')

//// show all image at begining of the game for 4 seconds
window.onload = function () {
  setTimeout(function () {
    allImages.forEach(function (image) {
      image.style.display = 'none'
    })
  }, 4000)
}

/// Determine the first and second click
let firstClicked = null
let secondClicked = null
allBtns.forEach((btn) => {
  btn.addEventListener('click', handleClick)
})

function handleClick(event) {
  const clickedButton = event.target
  const clickedImage = clickedButton.querySelector('.image')
  const dataImage = clickedButton.getAttribute('data-image')
  const dataId = clickedButton.getAttribute('data-id')
  // If this is the first click, just store the clicked button and return
  if (!firstClicked) {
    firstClicked = clickedButton
  } else if (firstClicked === clickedButton) {
    secondClicked = clickedButton
    return
  }

  // If this is the second click, check if the images match
  const firstImageData = firstClicked.getAttribute('data-image')
  const firstdataId = firstClicked.getAttribute('data-id')

  if (dataImage === firstImageData && firstImageData != firstImageData) {
    // If images match, keep them visible
    alert('grat')
    const firstClickedImage = firstClicked.querySelector('.image')
    firstClickedImage.style.display = ''
    const secondClickedImage = secondClicked.querySelector('.image')
    secondClickedImage.style.display = ''
  } else {
    // If images don't match, hide them after a short delay
    setTimeout(() => {
      clickedImage.style.display = 'none'
      const firstClickedImage = firstClicked.querySelector('.image')
      firstClickedImage.style.display = 'none'
    }, 1000) // Change the delay time as needed
  }

  // Reset the first clicked button for the next pair
  firstClicked = null
}
