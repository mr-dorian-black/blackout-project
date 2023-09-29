import _ from 'lodash'
// Add event listener
document.addEventListener("mousemove", _.throttle(parallax, 10));
const drone = document.querySelector('.hero-img');
// Magic happens here

function parallax(e) {
     let _w = window.innerWidth / 2;
     let _h = window.innerHeight / 2;
     let _mouseX = e.clientX;
     let _mouseY = e.clientY;
     let _depth1 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
     let _depth2 = `${50 - (_mouseY - _h) * 0.005}% ${50 - (_mouseX - _w) * 0.005}%`;
     let _depth3 = `${50 - (_mouseX - _w) * 0.01}% ${50 - (_mouseY - _h) * 0.01}%`;
     drone.style.backgroundPosition = _depth3;
}