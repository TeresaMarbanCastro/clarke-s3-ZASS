'use strict';
//Header
var menu = document.querySelector('.showMenu');
function showMenu (){
	menu.classList.add(showmenu)
}

//Menu
var showBtn = document.querySelector('.burger');
// var body = document.querySelector('body');
var showMenu = document.querySelector('.navigation')
var hideMenu = document.querySelector('.menu-close');
var links = document.querySelectorAll('.dropdown-item');

function openMenu(){
	showMenu.classList.add('show');
}
showBtn.addEventListener('click', openMenu);

//Hide Menu
function closeMenu(){
	showMenu.classList.remove('show');
}
hideMenu.addEventListener('click', closeMenu);

//CARRUSEL
$('.carousel').carousel();


// ROTAR TOP-5 AL HACER CLICK

var selectFlipper = document.querySelectorAll('.flipper');

function flipTop5() {
	if (this.classList.contains('active')) {
		this.classList.remove('active');
	} else {
		for (var i = 0; i < selectFlipper.length; i++) {
			selectFlipper[i].classList.remove('active');
		}
		this.classList.add('active');
	}
}
for (var i = 0; i < selectFlipper.length; i++) {
	selectFlipper[i].addEventListener('click', flipTop5);
}
//button up
document.querySelector('.up-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.up').scrollIntoView({ behavior: 'smooth' });
});
