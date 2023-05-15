const menu = document.getElementById('icon')
const list = document.getElementById('list')

menu.addEventListener('click', () => {
    list.classList.toggle('block')
})