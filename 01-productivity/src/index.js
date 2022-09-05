import './styles/main.scss'
import Hamburger from './scripts/hamburger'
import FaqQuestion from './scripts/faq-question'

window.onload = (e) => {
  e.preventDefault()

  const hamburger = new Hamburger()
  hamburger.init()

  const faqQuestionArray = document.getElementsByClassName('faq-question')

  for (let i = 0; i < faqQuestionArray.length; i++) {
    const element = new FaqQuestion(faqQuestionArray[i])
    element.init()
  }
}
