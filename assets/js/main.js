document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-btn')
  const headerMenu = document.querySelector('.header__menu')
  const headerButton = document.querySelector('.header__top--btn')

  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active')
    headerMenu.classList.toggle('active')
    headerButton.classList.toggle('active')
  })

  const opportunityColumn = document.querySelectorAll('.opportunity__column')
  const opportunityLine = document.querySelector('.opportunity__line')
  const opportunityRow = document.querySelector('.opportunity__row')
  console.log(opportunityColumn.length)
  if (opportunityColumn.length < 3) {
    opportunityLine.style.width = '0'
    opportunityRow.style.justifyContent = 'space-around'
  }
  if (opportunityColumn.length == 4 || opportunityColumn.length == 7) {
    opportunityRow.style.justifyContent = 'flex-start'
  }
})
