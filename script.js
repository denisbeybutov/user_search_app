document.querySelector('.header__theme-switcher').addEventListener('click', function() {
    const themeBody = document.querySelector('body')
    themeBody.classList.toggle('white-color-theme')

    document.querySelector('.search').classList.toggle('box-shadow')
    document.querySelector('.card').classList.toggle('box-shadow')
})
