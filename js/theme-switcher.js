

import { refs } from './variables.js'


function themeLoader() {
    if (localStorage.getItem('currentTheme') === refs.Theme.DARK) {
        refs.siteTheme.classList.add(refs.Theme.DARK)
        refs.switcher.checked = true
    } else {
        refs.siteTheme.classList.add(refs.Theme.LIGHT)
    }
}

themeLoader()

function themeSwitcher(e) {
    e.preventDefault()
    if (refs.siteTheme.classList.contains(refs.Theme.LIGHT)) {
        refs.siteTheme.classList.remove(refs.Theme.LIGHT)
        refs.siteTheme.classList.add(refs.Theme.DARK)

    } else {
        refs.siteTheme.classList.remove(refs.Theme.DARK)
        refs.siteTheme.classList.add(refs.Theme.LIGHT)

    }
    localStorage.setItem('currentTheme', refs.siteTheme.classList.value)

}

refs.switcher.addEventListener('change', themeSwitcher)




