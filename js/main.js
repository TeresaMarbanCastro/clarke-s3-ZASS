
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
	//  setTimeout(function(){list.classList.toggle('showOpacity')},2000);
	if (list.classList.contains('show')){
		list.style.opacity = 1;
	} else {
		list.style.opacity = 0;
	}
}
show.addEventListener('click', showMenu);

//Desplegables FAQ
var showFaq = document.querySelectorAll('.questions-listed');
var listFaq = document.querySelector('.questions-listed-answer');
function showFaq (){
	 list.classList.toggle('show');
}
show.addEventListener('click', showFaq);
