
const icon = document.querySelector('.icon-menu');
icon.addEventListener('click', function () {
	document.documentElement.classList.toggle('menu-open');
});

let buttonUp = document.querySelector('.button-up');
let isScrolling;

window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        buttonUp.style.opacity = 1;
    } else {
        buttonUp.style.opacity = 0;
    }

    clearTimeout(isScrolling);

    isScrolling = setTimeout(function() {
        buttonUp.style.opacity = 0;
    }, 3000);
});