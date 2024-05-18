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
