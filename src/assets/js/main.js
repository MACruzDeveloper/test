import '../scss/main.scss'

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


// toggle menu mobile
const menu = document.querySelector('.header_nav')
const btnMenu = document.querySelector('.btn_nav')

btnMenu.addEventListener('click', (e) => {
  e.preventDefault()

  if (window.getComputedStyle(menu).display === 'none') {
    menu.classList.add('header_nav--open')
    btnMenu.classList.add('btn_nav--open')
  } else  {
    menu.classList.remove('header_nav--open')
    btnMenu.classList.remove('btn_nav--open')
  }
})

// open/hide filters mobile & tablet
const divFilters = document.querySelector('.adventure_filters-content')
const btnFilters = document.querySelector('.btn_filters')
const btnCloseFilters = document.querySelector('#btnCloseFilters')
const body = document.querySelector('body')

btnFilters.addEventListener('click', (e) => {
  e.preventDefault()

  if (window.getComputedStyle(divFilters).display === 'none') {
    divFilters.classList.add('adventure_filters-content--open')
    body.classList.add('body--open')
  }
})

btnCloseFilters.addEventListener('click', (e) => {
  e.preventDefault()

  if (window.getComputedStyle(divFilters).display === 'block') {
    divFilters.classList.remove('adventure_filters-content--open')
    body.classList.remove('body--open')
  }
})
