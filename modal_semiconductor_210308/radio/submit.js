const modal = document.querySelector(".modal")
const _bg = document.querySelector(".bg")

const onSubmit = (e) => {
  e.preventDefault()
  const selected = document.querySelector("input[type='radio']:checked")
  const value = selected.value
  console.log(value)
  _bg.style.display = 'none'
}

modal.addEventListener('submit', onSubmit)