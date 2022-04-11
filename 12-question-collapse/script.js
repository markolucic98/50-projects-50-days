const toggleButons = document.querySelectorAll('.faq-toggle')

toggleButons.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.parentNode.classList.toggle('active')
  })
})
