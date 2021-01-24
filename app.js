const menu = document.querySelector('#mobile-menu'); //a #-el a mobile-menu id-ra hivatkozunk
const menuLinks = document.querySelector(".nav-menu");

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');//a toggle true or false-ra utal
    menuLinks.classList.toggle('active');
})  