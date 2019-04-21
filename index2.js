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

      // let imagesContainerHeight = ((data.length * 300) * .75) + (data.length * 20)
      // document.querySelector('.content-container').style.height = imagesContainerHeight


      let imagesCount = data.length
      let imagesCountDivisor = Math.floor(imagesCount / 3)
      let range1 = imagesCountDivisor
      let range2 = imagesCountDivisor * 2
      let range3 = imagesCount

      data.forEach((img, i) => {
        if (i < range1) {
          console.log("image index: ", i)
          i % 2 == 0 ? addImage(img, 1, 1) : addImage(img, 2, 1)
        } else if (i < range2) {
          i % 2 == 0 ? addImage(img, 1, 2) : addImage(img, 2, 2)
          console.log("image index: ", i)
        } else {
          i % 2 == 0 ? addImage(img, 1, 3) : addImage(img, 2, 3)
          console.log("image index: ", i)
        }
      })
    }
  })
}

function addImage(img, size, columnNumber) {
  let folder = "assets/image/";
  let column = `.column${columnNumber}`
  // console.log("column: ", column)
  let content = document.querySelector(column)
  let image = document.createElement(img)
  image.innerHTML = (`
    <img src="${folder}${img}" class="image-item${size}"> 
  `)
  content.appendChild(image)
}


// <div style="border: 1px solid black">
// <ul>
//   <li>size: ${size}</li>
//   <li>column: ${columnNumber}</li> 
//   <li>title: ${img}</li>
// </ul>
// <img src="${folder}${img}" class="image-item${size}">
// </div>