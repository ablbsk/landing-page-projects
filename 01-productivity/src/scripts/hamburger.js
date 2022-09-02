export default class Hamburger {
  constructor() {
    this.shadow = document.getElementById('shadow')
    this.hamburger = document.getElementById('hamburger')
    this.menu = document.getElementById('menu')
    this.navigationList = document.getElementById('navigationList')
    this.socials = document.getElementById('socialList')
    this.navigationLinks = document.querySelectorAll('.link')
  }

  init() {
    const arr = [
      { element: document.body, style: 'body--locked' },
      { element: this.shadow, style: 'shadow--active' },
      { element: this.menu, style: 'header__content--opened' },
      { element: this.navigationList, style: 'navigation__list--in-menu' },
      { element: this.socials, style: 'social--in-menu' },
      { element: this.hamburger, style: 'hamburger--opened' }
    ]

    const toggleClass = (item) => item.element.classList.toggle(item.style)

    this.hamburger.addEventListener('click', () => {
      arr.map((item) => toggleClass(item))
    })

    this.shadow.addEventListener('click', () => {
      arr.map((item) => toggleClass(item))
    })

    this.navigationLinks.forEach((element) => {
      element.addEventListener('click', () => {
        arr.map((item) => toggleClass(item))
      })
    })
  }
}
