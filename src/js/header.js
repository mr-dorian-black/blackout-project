import _ from 'lodash';

let header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', _.throttle(() => {
     let isHeaderHidden = header.classList.contains('header-hidden');
     let scrollTop = window.scrollY || document.documentElement.scrollTop;

     if (scrollTop < lastScrollTop) {
          if (isHeaderHidden) {
               header.classList.remove('header-hidden');
          }
     }
     else {
          if (scrollTop >= 300 && !isHeaderHidden) {
               header.classList.add('header-hidden');
          }
     }

     lastScrollTop = scrollTop;

}, 200));