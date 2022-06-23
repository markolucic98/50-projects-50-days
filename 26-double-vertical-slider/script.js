const sliderContainer = document.querySelector('.slider-container')
const leftSlider = document.querySelector('.left-slider')
const rightSlider = document.querySelector('.right-slider')
const upArrow = document.querySelector('.up-arrow')
const downArrow = document.querySelector('.down-arrow')
const slidesLenght = rightSlider.querySelectorAll('div').length

let activeSlideIndex = 0

leftSlider.style.top = `-${(slidesLenght - 1) * 100}vh`

upArrow.addEventListener('click', () => changeSlide('up'))
downArrow.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
  const sliderHight = sliderContainer.clientHeight
  if (direction === 'up') {
    activeSlideIndex++
    if (activeSlideIndex > slidesLenght - 1) {
      activeSlideIndex = 0
    }
  } else if (direction === 'down') {
    activeSlideIndex--
    if (activeSlideIndex < 0) {
      activeSlideIndex = slidesLenght - 1
    }
  }
  leftSlider.style.transform = `translateY(${activeSlideIndex * sliderHight}px)`
  rightSlider.style.transform = `translateY(-${
    activeSlideIndex * sliderHight
  }px)`
}
