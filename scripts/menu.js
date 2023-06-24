const menuOpen = document.getElementById('btn-menu');
const menu = document.getElementById('menu');
const menuClose = document.querySelector('.btn-close');


menuOpen.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.add('menu-open');

});

menuClose.addEventListener('click', (e) => {
    e.preventDefault();
    menu.classList.remove('menu-open');
})

