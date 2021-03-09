const txt_modal = document.querySelector(".text-modal")
const bkg = document.querySelector(".text-bg")

const onSubmit = (e) => {
  e.preventDefault()
  const name = document.querySelector("input[name='성명']").value
  const company = document.querySelector("input[name='소속']").value
  const phoneNumber = document.querySelector("input[name='연락처']").value
  const career = document.querySelector("textarea").value
  console.log({ name, company, phoneNumber, career})
  bkg.style.display = 'none'
}

txt_modal.addEventListener('submit', onSubmit)