let openBtn = document.querySelectorAll('.burger-icon');
let menu = document.querySelector('.burger-block');
let menuList = document.querySelector('.burger-menu-list');
let logo = document.querySelector('.header-svg-logo');

let htmlTag = document.querySelector('html');
let bodyTag = document.querySelector('body');

openBtn.forEach(btn => btn.addEventListener('click', toggleMenu));
menuList.addEventListener('click', e => {
     if (e.target.nodeName == 'A') toggleMenu();
})

function toggleMenu() {
     menu.classList.toggle('is-open');
     if (menu.classList.contains('is-open')) {
          // htmlTag.style.overflow = 'hidden';
          // bodyTag.style.overflow = 'hidden';
          bodyTag.classList.add('menu-open');
          menu.style.overflow = 'hidden';
          // disableScroll();
     }
     else {
          // htmlTag.style.overflow = 'auto';
          // bodyTag.style.overflow = 'auto';
          bodyTag.classList.remove('menu-open');
          menu.style.overflow = 'auto';
          // enableScroll();
     }
};


window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
     if (!e.matches) return;
     menu.classList.remove('is-open');
});


// Заблокировать скроллинг страницы
function disableScroll() {
     // Получить текущее положение прокрутки страницы
     const scrollY = window.scrollY;
     // Сохранить текущее положение прокрутки в стиле страницы
     document.body.style.position = 'fixed';
     document.body.style.top = `-${scrollY}px`;
}

// Разблокировать скроллинг страницы
function enableScroll() {
     const scrollY = parseInt(document.body.style.top || '0');
     // Удалить стили блокировки прокрутки
     document.body.style.position = '';
     document.body.style.top = '';
     // Восстановить положение прокрутки
     window.scrollTo(0, scrollY);
}

// Для блокировки скроллинга вызовите функцию disableScroll()
// Для разблокировки скроллинга вызовите функцию enableScroll()