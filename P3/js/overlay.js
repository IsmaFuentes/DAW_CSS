window.onload = function(){
	//eventos que se cargan nada más abrir la página
	document.getElementById("contact").onclick = function(){overlay();};
	document.getElementById("contactar").onclick = function(){overlay();};
	document.getElementById("close").onclick = function(){close();};
	document.getElementById("icon").onclick = function(){desplegar();};

}

//muestra la pantalla de contacto
function overlay(){
	document.getElementById("overlay").style.width = "100%";
}

//esconde la pantalla de contacto
function close() {
 	document.getElementById("overlay").style.width = "0%";
}


//desplegar - esconder menu responsive
var boolean = true;

function desplegar() {

	if(boolean){
		boolean = false;
		document.getElementById("cntdesp").style.display = "block";
	}

	else{
		boolean = true;
		document.getElementById("cntdesp").style.display = "none";
	}
}