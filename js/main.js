//Header
var menu = document.querySelector('.showMenu');
function showMenu (){
	menu.classList.add(showmenu)
}

$('.carousel').carousel();



//Menu
var showBtn = document.querySelector('.burger');
// var body = document.querySelector('body');
var showMenu = document.querySelector('.navigation')
var hideMenu = document.querySelector('.menu-close');
var links = document.querySelectorAll('.dropdown-item');

for (var i = 0; i < links.length; i++) {
	links[i].addEventListener('click', closeMenu);
}
function openMenu(){
	showMenu.classList.add('show');
}
showBtn.addEventListener('click', openMenu);

//Hide Menu
function closeMenu(){
	showMenu.classList.remove('show');
}
hideMenu.addEventListener('click', closeMenu);


// //Desplegables FAQ
// var showFaq = document.querySelectorAll('.questions-listed button');
//
// var listFaq = document.querySelectorAll('.questions-listed-answer span');
//
// function showAnswer(){
// 	listFaq.classList.toggle('show');
// 	showFaq.event.currentTarget.innerHTML;
// }
//
// showFaq.addEventListener('click', showAnswer);



// TOP-5

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

// DESPLEGAR NEWS

var cardNews = document.querySelectorAll('.card-news');
function showNew() {
	if (this.classList.contains('show-card')) {
		this.classList.remove('show-card');
	} else {
		for (var i = 0; i < cardNews.length; i++) {
			cardNews[i].classList.remove('show-card');
		}
		this.classList.toggle('show-card');
	}
}
for (var i = 0; i < cardNews.length; i++) {
	cardNews[i].addEventListener('click', showNew);
}
