import './styles/main.scss'
import Hamburger from './scripts/hamburger'

window.onload = (e) => {
  e.preventDefault()

  const hamburger = new Hamburger()
  hamburger.init()
}
