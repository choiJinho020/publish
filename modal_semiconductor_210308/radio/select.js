const radioBtns = document.querySelectorAll(".radioBtn")
const containers = document.querySelectorAll(".container")
const insideImgs = document.querySelectorAll(".insideImg")
const outsideImgs = document.querySelectorAll(".outsideImg")
const titles = document.querySelectorAll(".title")
const firstRadioBtn = document.querySelector(".radioBtn")

const resetContainers = () => Array.from(containers).forEach(item => {
  item.style.backgroundColor = ""
})
const resetInsideImgs = () => Array.from(insideImgs).forEach(item => {
  item.style.backgroundImage = ""
})
const resetOutsideImgs = () => Array.from(outsideImgs).forEach(item => {
  item.style.backgroundImage = ""
})
const resetTitles = () => Array.from(titles).forEach(item => {
  item.style.color = ""
})

const resetAll = () => {
  resetContainers();
  resetInsideImgs();
  resetOutsideImgs();
  resetTitles();
}

const onClick = (e) => {
  const target = e.target
  const container = target.parentNode
  const insideImg = container.childNodes[1]
  const title = container.childNodes[5]
  const outsideImg = insideImg.childNodes[1]
  resetAll()
  container.style.backgroundColor = "#44BDC6"
  title.style.color = "white"
  insideImg.style.backgroundImage = "url('./white.png')"
  outsideImg.style.backgroundImage = "url('./blue.jpg')"
}

Array.from(radioBtns).forEach(btn => {
  btn.addEventListener('change', onClick)
})

firstRadioBtn.click()