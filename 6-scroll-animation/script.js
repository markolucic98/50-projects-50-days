const content = document.querySelectorAll('.content')

window.addEventListener('scroll', checkBoxes)

checkBoxes()
function checkBoxes() {
  const bottomTriger = (window.innerHeight / 6) * 5

  content.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top

    if (boxTop < bottomTriger) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
