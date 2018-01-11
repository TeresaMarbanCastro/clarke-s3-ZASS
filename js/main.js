
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
