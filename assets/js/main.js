document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn')
  const headerMenu = document.querySelector('.header__menu')
  const headerButton = document.querySelector('.header__top--btn')

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
    headerButton.classList.toggle('active')
  })
})
