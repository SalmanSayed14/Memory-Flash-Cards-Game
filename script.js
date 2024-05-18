window.onload = function () {
  setTimeout(function () {
    const images = document.querySelectorAll('.image')
    images.forEach(function (image) {
      image.style.display = 'none'
    })
  }, 4000) // 4000 milliseconds = 4 seconds
}
