export default class ClickSlider {
  constructor(container, dots) {
    this.list = [...container.children]
    this.dots = [...dots.children]
  }

  init() {
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        const activeSlide = document.getElementsByClassName('quote--active')[0]
        const activeDot = document.getElementsByClassName('dot--active')[1]

        activeSlide.classList.remove('quote--active')
        activeDot.classList.remove('dot--active')

        this.list[i].classList.add('quote--active')
        this.dots[i].classList.add('dot--active')
      })
    })
  }
}
