let openBtn = document.querySelector('.burger-icon');

openBtn.addEventListener('click', burger);

function burger() {
     openBtn.classList.toggle('is-open')
}