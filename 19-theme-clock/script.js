const toggleBtn = document.getElementById('toggle')
const htmlEl = document.getElementById('html')

toggleBtn.addEventListener('click', () => {
  htmlEl.classList.toggle('dark')

  if (htmlEl.className === 'dark') {
    toggleBtn.innerText = `White mode`
  } else {
    toggleBtn.innerText = `Dark mode`
  }
})

const hourEl = document.querySelector('.hours')
const minuteEl = document.querySelector('.minutes')
const secondEl = document.querySelector('.seconds')
const timeEl = document.querySelector('.digi-clock')
const dateEl = document.querySelector('.date')

function setTime() {
  const time = new Date()
  const month = time.getMonth()
  const day = time.getDay()
  const date = time.getDate()
  const hours = time.getHours()
  const hoursForClock = hours % 12
  const minutes = time.getMinutes()
  const seconds = time.getSeconds()

  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ]
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  const amPm = hours >= 12 ? 'PM' : 'AM'
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
  }

  hourEl.style.transform = ` translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`
  minuteEl.style.transform = ` translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    59,
    0,
    360
  )}deg)`
  secondEl.style.transform = ` translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    59,
    0,
    360
  )}deg)`

  timeEl.innerHTML = `${hoursForClock}: ${
    minutes < 10 ? `0${minutes}` : minutes
  } ${amPm}`

  dateEl.innerHTML = `${days[day]}, ${months[month]}  ${date}`
}
setTime()
setInterval(setTime, 1000)
