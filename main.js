const menuIcon = document.querySelector('.menu-icon');
const headerNav = document.querySelector('.header__nav');
const body = document.body;

document.querySelector('.menu-icon-wrapper').addEventListener('click', () => {
    menuIcon.classList.toggle('menu-icon-active');
    headerNav.classList.toggle('mobile__menu');
    body.classList.toggle('no-scroll');
});