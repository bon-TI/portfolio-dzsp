let menuItems = document.querySelectorAll('nav ul li a')
const menuButton = document.querySelector('.menu-button')

menuButton.addEventListener('click', () => {
  document.querySelector('nav').classList.toggle('show')
})

menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector('nav').classList.remove('show')
    })
})