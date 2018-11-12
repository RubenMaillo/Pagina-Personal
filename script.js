var imagenes = ["cliente", "servidor", "diseño", "despliegue"];
var imPos = 0;
var iReloj = 0;

document.getElementById("izq").addEventListener("click", AnteriorImagen);
document.getElementById("der").addEventListener("click", SiguienteImagen);

iReloj = setInterval(SiguienteImagen, 10000);

function AnteriorImagen(){

	clearInterval(iReloj);

	imPos--;

	if(imPos < 0){ 
		imPos = imagenes.length-1;
	}

	document.getElementById("imSlider").src = "imagenes/" + imagenes[imPos] + ".jpg";

	iReloj = setInterval(SiguienteImagen, 10000);

}

function SiguienteImagen(){

	clearInterval(iReloj);
			
	imPos++;

	if(imPos > imagenes.length-1){	
		imPos = 0;
	}

	document.getElementById("imSlider").src = "imagenes/" + imagenes[imPos] + ".jpg";

	iReloj = setInterval(SiguienteImagen, 20000);

}


	