const slideNav = document.querySelector('.slide-out-nav');
const menu = document.querySelector('.menu-icon');

slideNav.addEventListener('click', () => {
    menu.classList.toggle('active');
    slideNav.classList.toggle('active');
});

console.log(slideNav)
console.log(menu)