'use strict'

var progress2=document.getElementById("progress2");
var progress3=document.getElementById("progress3");
var progress4=document.getElementById("progress4");
var progress6=document.getElementById("progress6");
//Cuando hacemos scroll se ejecuta esta función
window.addEventListener ("scroll",function (event) {
	//Definimos la variable top para saber la distancia a la que ejecutarla
	var top=this.scrollY;
	// Encontramos la posicion del objeto
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
