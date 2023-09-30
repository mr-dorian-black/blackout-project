let openBtn = document.querySelectorAll('.burger-icon');
let menu = document.querySelector('.burger-block');
let menuList = document.querySelector('.burger-menu-list');
let logo = document.querySelector('.header-svg-logo');

let htmlTag = document.querySelector('html');

openBtn.forEach(btn => btn.addEventListener('click', toggleMenu));
menuList.addEventListener('click', e => {
     if (e.target.nodeName == 'A') toggleMenu();
})

function toggleMenu() {
     menu.classList.toggle('is-open');
     if (menu.classList.contains('is-open')) {
          htmlTag.style.overflow = 'hidden';
          // document.body.classList.add('menu-open');
          // menu.style.overflow = 'hidden';
     }
     else {
          htmlTag.style.overflow = 'auto';
          // document.body.classList.remove('menu-open');
          // menu.style.overflow = 'auto';
     }
};


window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
     if (!e.matches) return;
     menu.classList.remove('is-open');
});