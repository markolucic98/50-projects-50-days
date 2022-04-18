const counters = document.querySelectorAll('.counter')

counters.forEach((counter) => {
  counter.innerText = '0'

  const updateCounter = () => {
    const taget = +counter.getAttribute('data-target')
    const c = +counter.innerText
    const increment = taget / 500

    if (c < taget) {
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter, 1)
    }
  }
  updateCounter()
})
