'use strict';

const user = document.querySelectorAll('.flex');

function animation() {
	let scrollTop = document.documentElement.scrollTop;
	for (let i = 0; i < user.length; i++) {
		let heightUser = user[i].offsetTop;

		if (heightUser < scrollTop && i % 2 == 1) {
			user[i].classList.add('userOdd');
			user[i].style.opacity = 1;
		}
		if (heightUser < scrollTop && i % 2 == 0) {
			user[i].classList.add('userEven');
			user[i].style.opacity = 1;
		}
	}
}
window.addEventListener('scroll', animation);
