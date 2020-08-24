'use strict';

console.log('Hola');

const user = document.querySelectorAll('.flex');
const html = document.getElementsByTagName('html');


function animation() {
    let scrollTop = html.scrollTop;
    console.log(scrollTop);
	for (let i = 0; i < user.length; i++) {
		let heightUser = user[i].offsetTop;

		if (heightUser < scrollTop) {
			user[i].style.opacity = 1;
		}
		if (heightUser -300 < scrollTop) {
			user[i].classList.add('flex:nth-of-type(2)');
		}
		if (heightUser -300 < scrollTop) {
			user[i].classList.add('flex:nth-of-type(3)');
		}
		if (heightUser -300 < scrollTop) {
			user[i].classList.add('flex:nth-of-type(4)');
		}
	}
}
window.addEventListener('scroll', animation);
