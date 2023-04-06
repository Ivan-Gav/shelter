const body = document.body
const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

const activateBurgerMenu = () => {
  
    burger.addEventListener('click', toggleBurgerMenu)
    document.addEventListener('click', (event) => {
        if (((event.target.tagName === 'A') 
            || (event.target.className === 'overlay active'))
            && (burger.className == 'burger active')) {
            hideBurgerMenu()
        }
    })
}

const toggleBurgerMenu = () => {
    addOverlay(menu).classList.toggle('active')
    burger.classList.toggle('active')
    menu.classList.toggle('active')
    body.classList.toggle('disable-scroll')
}

const addOverlay = (element) => {
    element.insertAdjacentHTML('beforebegin', '<div class="overlay">')
    element.insertAdjacentHTML('afterend', '<div>')
    return document.querySelector('.overlay')
}

const hideBurgerMenu = () => {
    document.querySelector('.overlay').classList.remove('active')
    burger.classList.remove('active')
    menu.classList.remove('active')
    body.classList.remove('disable-scroll')
}

    activateBurgerMenu()