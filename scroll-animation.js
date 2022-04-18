const scrollAnima = document.querySelector('[data-anima="scroll"]')

const metadeWindow = window.innerHeight * 8.0

console.log(metadeWindow)

function animarScroll() {
  const topoItem = scrollAnima.getBoundingClientRect().top

  const itemVisivel = topoItem - metadeWindow < 0

  if (itemVisivel) {
    scrollAnima.classList.add('show-bottom')
  } else {
    scrollAnima.classList.remove('show-bottom')
  }
}

window.addEventListener('scroll', animarScroll)
