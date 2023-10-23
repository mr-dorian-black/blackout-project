import _ from 'lodash';

let header = document.querySelector('.header');
let lastScrollTop = 0;

window.addEventListener('scroll', _.throttle(() => {
     let isHeaderHidden = header.classList.contains('header-hidden');
     let isHeaderScroll = header.classList.contains('header-scroll');
     let scrollTop = window.scrollY || document.documentElement.scrollTop;

     let tempScroll = scrollTop - lastScrollTop;

     console.log(tempScroll)
     let tempUp = -100;
     let tempDown = 50;

     if (scrollTop < lastScrollTop) { // scroll up
          if (isHeaderHidden && tempScroll < tempUp) {
               header.classList.remove('header-hidden');
          }

          if (scrollTop < 50 && isHeaderScroll) {
               header.classList.remove('header-scroll');
          }
     }
     else { // scroll down

          if (scrollTop >= 50 && !isHeaderScroll) {
               header.classList.add('header-scroll');
          }

          if (scrollTop >= 300 && !isHeaderHidden && tempScroll > tempDown) {
               header.classList.add('header-hidden');
          }
     }

     lastScrollTop = scrollTop;

}, 200));