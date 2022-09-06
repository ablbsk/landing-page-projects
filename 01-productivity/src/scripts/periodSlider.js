export default class PeriodSlider {
  constructor(container, dots) {
    this.list = [...container.children]
    this.dots = [...dots.children]
  }

  start() {
    let slideIndex = 0

    const showSlides = () => {
      const activeSlide = document.getElementsByClassName('promo__item--active')[0]
      const activeDot = document.getElementsByClassName('dot--active')[0]

      activeSlide.classList.remove('promo__item--active')
      activeDot.classList.remove('dot--active')

      this.list[slideIndex].classList.add('promo__item--active')
      this.dots[slideIndex].classList.add('dot--active')

      slideIndex++

      if (slideIndex > 2) slideIndex = 0

      setTimeout(showSlides, 5000)
    }

    showSlides()
  }
}
