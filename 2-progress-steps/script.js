const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let curentActiv = 1

next.addEventListener('click', () => {
  curentActiv++

  if (curentActiv > circles.length) {
    curentActiv = circles.length
  }
  update()
})

prev.addEventListener('click', () => {
  curentActiv--

  if (curentActiv < 1) {
    curentActiv = 1
  }
  update()
})

function update() {
  circles.forEach((circle, idx) => {
    if (idx < curentActiv) {
      circle.classList.add('active')
    } else {
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')

  progress.style.width =
    ((actives.length - 1) / (circles.length - 1)) * 100 + '%'

  if (curentActiv === 1) {
    prev.disabled = true
  } else if (curentActiv === circles.length) {
    next.disabled = true
  } else {
    prev.disabled = false
    next.disabled = false
  }
}
