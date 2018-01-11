
// //Header
// var menu = document.querySelector('.showMenu');
// function showMenu (){
// 	menu.classList.add(showmenu)
// }
//
// $('.carousel').carousel();
//
// //Menu
// var show = document.querySelector('.burger');
// var list = document.querySelector('.dropdown-list');
// function showMenu (){
// 	 list.classList.toggle('show');
// 	//  setTimeout(function(){list.classList.toggle('showOpacity')},2000);
// 	if (list.classList.contains('show')){
// 		list.style.opacity = 1;
// 	} else {
// 		list.style.opacity = 0;
// 	}
// }
// show.addEventListener('click', showMenu);
//
// //Desplegables FAQ
// var showFaq = document.querySelectorAll('.questions-listed button');
//
// var listFaq = document.querySelector('.questions-listed-answer');
//
// function showAnswer(event){
// 	listFaq.classList.toggle('show')event.currentTarget.innerHTML);
// }
//
// show.addEventListener('click', showAnswer);
//
//
//
//
//
//
//
// function showFaq (){
// 	 list.classList.toggle('show');
// }
// show.addEventListener('click', showFaq);
//
//

// TOP-5

var selectFlipper = document.querySelectorAll('.flipper');

function flipTop5(event) {
	if (event.currentTarget.classList.contains('active')) {
		event.currentTarget.classList.remove('active');
	}else {
		for (var i = 0; i < selectFlipper.length; i++) {
			selectFlipper[i].classList.remove('active');
		}
		event.currentTarget.classList.add('active');
	}
}

for (var i = 0; i < selectFlipper.length; i++) {
	selectFlipper[i].addEventListener('click', flipTop5);
}

// DESPLEGAR news

var cardNews = document.querySelectorAll('.card');
function showNew(event) {
	if (event.currentTarget.classList.contains('show-card')) {
		event.currentTarget.classList.remove('show-card');
	}else {
		for (var i = 0; i < cardNews.length; i++) {
			cardNews[i].classList.remove('show-card');
		}
		event.currentTarget.classList.toggle('show-card');
	}
}
for (var i = 0; i < cardNews.length; i++) {
	cardNews[i].addEventListener('click', showNew);
}
