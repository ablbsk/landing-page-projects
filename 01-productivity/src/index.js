import './styles/main.scss'
import Hamburger from './scripts/hamburger'
import FaqQuestion from './scripts/faq-question'
import PeriodSlider from './scripts/periodSlider'
import ClickSlider from './scripts/clickSlider'

window.onload = (e) => {
  e.preventDefault()

  const hamburger = new Hamburger()
  hamburger.init()

  const promoContainer = document.getElementById('promoList')
  const promoDotsList = document.getElementById('promoDots')
  const promoSlider = new PeriodSlider(promoContainer, promoDotsList)
  promoSlider.start()

  const quotesContainer = document.getElementById('quotesContainer')
  const quoteDotsList = document.getElementById('quotesDots')
  const quotesSlider = new ClickSlider(quotesContainer, quoteDotsList)
  quotesSlider.init()

  const faqQuestionArray = document.getElementsByClassName('faq-question')
  for (let i = 0; i < faqQuestionArray.length; i++) {
    const element = new FaqQuestion(faqQuestionArray[i])
    element.init()
  }
}
