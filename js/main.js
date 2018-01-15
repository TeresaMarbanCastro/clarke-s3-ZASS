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

//CARRUSEL
$('.carousel').carousel();

//ESTADÍSTICAS

var progress2=document.getElementById("progress2");
var progress3=document.getElementById("progress3");
var progress4=document.getElementById("progress4");
var progress6=document.getElementById("progress6");
//Cuando hacemos scroll se ejecuta esta función
window.addEventListener ("scroll",function (event) {
	//Definimos la variable top para saber la distancia a la que ejecutarla
	var top=this.scrollY;
	// encontrar la posicion del objeto
	var elemento = document.getElementById('containerStats');
	var posicion = elemento.getBoundingClientRect();
	//Cuando la distancia del scroll sea mayor o igual que la distacia a la que está el objeto, ejecutar la animación
	if (top>=posicion.top)
	//Y añadimos las clases que contienen la animación
	{
		progress2.classList.add("animacion1")
		progress3.classList.add("animacion3")
		progress4.classList.add("animacion2")
		progress6.classList.add("animacion4")
	}
})

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

//button up
document.querySelector('.up-button').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.total-slider').scrollIntoView({ behavior: 'smooth' });
});
