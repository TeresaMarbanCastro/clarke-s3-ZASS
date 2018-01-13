

//CARRUSEL
$('.carousel').carousel();

//ESTADÍSTICAS

var progress1=document.getElementById("progress1");
var progress2=document.getElementById("progress2");

//Cuando hacemos scroll se ejecuta esta función
window.addEventListener ("scroll",function (event) {
	//Definimos la variable top para saber la distancia a la que ejecutarla
	var top=this.scrollY;
	console.log(top);
	// encontrar la posicion del objeto
	var elemento = document.getElementById('containerStats');
	var posicion = elemento.getBoundingClientRect();
	console.log(posicion.top)
	//Cuando la distancia del scroll sea mayor o igual que la distancia vertical del objeto, ejecutar la animación
	if (top>=posicion.top)
	//Y añadimos las clases que contienen la animación
	{
		progress1.classList.add("animacion1")
		progress2.classList.add("animacion2")

	}
})

// TOP-5

var selectFlipper = document.querySelectorAll('.flipper');

function flipTop5(event) {
	event.currentTarget.classList.toggle('active');
}

for (var i = 0; i < selectFlipper.length; i++) {
	selectFlipper[i].addEventListener('click', flipTop5);
}
