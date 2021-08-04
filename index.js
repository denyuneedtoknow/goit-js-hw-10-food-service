import menuItemTpl from './templates/menu.hbs'
import menuItems from './menu.json'

const menuList = document.querySelector('.menu')


function menuMaker(menuItems) {
    return menuItems.map(menuItemTpl).join('')
}

menuList.insertAdjacentHTML(
    "beforeEnd",
    `${menuMaker(menuItems)}`
)

