const switcher = document.querySelector('#theme-switch-toggle')
const siteTheme = document.querySelector('body')


const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};
function themeLoader() {
    if (localStorage.getItem('currentTheme') === Theme.DARK) {
        siteTheme.classList.add(Theme.DARK)
        switcher.checked = true
    } else {
        siteTheme.classList.add(Theme.LIGHT)
    }
}

themeLoader()

function themeSwitcher(e) {
    e.preventDefault()
    if (siteTheme.classList.contains(Theme.LIGHT)) {
        siteTheme.classList.remove(Theme.LIGHT)
        siteTheme.classList.add(Theme.DARK)

    } else {
        siteTheme.classList.remove(Theme.DARK)
        siteTheme.classList.add(Theme.LIGHT)

    }
    const currentTheme = JSON.stringify(siteTheme.classList.value);
    console.log(currentTheme);
    localStorage.setItem('currentTheme', siteTheme.classList.value)

}

switcher.addEventListener('change', themeSwitcher)



