import './styles/main.scss'

function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) change.target.classList.add('_animate-show')
  })
}

const options = { rootMargin: '0%', threshold: [0, 0.5] }
const observer = new IntersectionObserver(onEntry, options)
const elements = document.querySelectorAll('._animate')

elements.forEach((item) => observer.observe(item))
