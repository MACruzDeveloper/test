import '../scss/main.scss'

var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)


// toggle menu mobile
const menu = document.querySelector('.header_nav');
const btnMenu = document.querySelector('.btn_nav');

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
