$(() => {
  console.log('index.js loading ')
  loadImages()
})

const loadImages = () => {
  let folder = "assets/image/";
  $.ajax({
    url: folder,
    dataType: 'json',
    success: (function (data) {

      data.forEach((img, i) => {
        i % 2 == 0 ? addImage(img, 1) : addImage(img, 2)
      })
    })
  })
}

function addImage(img, size) {
  let folder = "assets/image/";
  let content = document.querySelector('.content__container')
  let image = document.createElement(img)
  image.innerHTML = (`
    <img src="${folder}${img}" class="image-item${size}"> 
  `)
  content.appendChild(image)
}
