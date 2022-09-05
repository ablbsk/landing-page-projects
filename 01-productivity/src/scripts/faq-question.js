export default class FaqQuestion {
  constructor(questionDOM) {
    this.questionTitle = questionDOM.getElementsByClassName('faq-question__title')
    this.questionDescription = questionDOM.getElementsByClassName('faq-question__description')
    this.icon = questionDOM.getElementsByClassName('icon--vector')
  }

  init() {
    this.questionTitle[0].addEventListener('click', () => {
      this.questionDescription[0].classList.toggle('faq-question__description--opened')
      this.icon[0].classList.toggle('icon--vector-opened')
    })
  }
}
