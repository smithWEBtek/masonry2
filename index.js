$(() => {
  console.log('index.js loading ')
  loadImages()
})

const loadImages = () => {
  let folder = "assets/image/";
  $.ajax({
    url: folder,
    dataType: 'json',
    success: function (data) {
      let tHeight = ((data.length * 300) * .75) + (data.length * 20) + 40
      let tHeightDivisor = Math.floor(tHeight / 3)
      let range1 = tHeightDivisor
      let range2 = tHeightDivisor * 2

      data.forEach((img, i) => {
        if (i <= range1) {
          i % 2 == 0 ? addImage(img, 1, 1) : addImage(img, 2, 1)
        }
        if (i <= range2) {
          i % 2 == 0 ? addImage(img, 1, 2) : addImage(img, 2, 2)
        } else {
          i % 2 == 0 ? addImage(img, 1, 3) : addImage(img, 2, 3)
        }
      })
    }
  })
}

function addImage(img, size, columnNumber) {
  let folder = "assets/image/";
  let column = `.column${columnNumber}`
  let content = document.querySelector(column)
  let image = document.createElement(img)
  image.innerHTML = (`<img src="${folder}${img}" class="image-item${size}">`)
  content.appendChild(image)
}
