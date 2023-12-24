// navbar bar 
const bar = document.querySelector('.navbar__bars');
const menu = document.querySelector('.navbar__menu');
bar.addEventListener('click',() => {
    menu.classList.toggle('active')
})