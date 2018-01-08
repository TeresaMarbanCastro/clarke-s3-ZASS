
//Header
var menu = document.querySelector('.showMenu');
function showMenu (){
	menu.classList.add(showmenu)
}

$('.carousel').carousel();

//Menu
var show = document.querySelector('.burger');
var list = document.querySelector('.dropdown-list');
function showMenu (){
	 list.classList.toggle('show');
}
show.addEventListener('click', showMenu);

//Desplegables FAQ
var showFaq = document.querySelectorAll('.questions-listed');
var listFaq = document.querySelector('.questions-listed-answer');
function showFaq (){
	 list.classList.toggle('show');
}
show.addEventListener('click', showFaq);
