
//Header
var menu = document.querySelector('.showMenu');
function showMenu (){
	menu.classList.add(showmenu)
}

$('.carousel').carousel();

var show = document.querySelector('.burger');
var list = document.querySelector('.dropdown-list');
function showMenu (){
	 list.classList.toggle('show');
}
show.addEventListener('click', showMenu);
