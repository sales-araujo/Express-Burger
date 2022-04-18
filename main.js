const menuLinks = document.querySelector('#menu-links')
const btnMenuBurger = document.querySelector('#btn-burger')
const btnMenuBurgerImg = document.querySelectorAll('#btn-burger i')

console.log(btnMenuBurgerImg)

btnMenuBurger.addEventListener('click', openCloseMenuBurger)

function openCloseMenuBurger() {
  menuLinks.classList.toggle('active')
  btnMenuBurgerImg.forEach(image => {
    image.classList.toggle('active')
  })
}
