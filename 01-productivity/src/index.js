import './styles/main.scss'

window.onload = (e) => {
  e.preventDefault()

  const shadow = document.getElementById('shadow')
  const hamburger = document.getElementsByClassName('hamburger')[0]
  const menu = document.getElementsByClassName('header__content')[0]
  const navigationList = document.getElementsByClassName('navigation__list')[0]
  const socials = document.getElementsByClassName('socials')[0]
  const navigationLinks = document.querySelectorAll('.link')

  const arr = [
    { element: document.body, style: 'body--locked' },
    { element: shadow, style: 'shadow--active' },
    { element: menu, style: 'header__content--opened' },
    { element: navigationList, style: 'navigation__list--in-menu' },
    { element: socials, style: 'social--in-menu' },
    { element: hamburger, style: 'hamburger--opened' }
  ]

  hamburger.addEventListener('click', () => {
    arr.map((item) => item.element.classList.toggle(item.style))
  })

  shadow.addEventListener('click', () => {
    arr.map((item) => item.element.classList.remove(item.style))
  })

  navigationLinks.forEach((element) => {
    element.addEventListener('click', () => {
      arr.map((item) => item.element.classList.remove(item.style))
    })
  })
}
