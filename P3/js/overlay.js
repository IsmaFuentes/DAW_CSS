window.onload = function(){
	//eventos que se cargan nada más abrir la página
	document.getElementById("contact").onclick = function(){overlay();};
	document.getElementById("contactar").onclick = function(){overlay();};
	document.getElementById("close").onclick = function(){close();};
	document.getElementById("icon").onclick = function(){desplegar();};
	document.getElementById("prac").onclick = function(){submenu1();};
	document.getElementById("lawr").onclick = function(){submenu2();};
	//solución al menú desplegable, ahora al dejarlo abierto en movil y volver a pc
	//este se cierra
	window.addEventListener("resize", function(){
		if(window.matchMedia("(min-width: 600px)").matches){
			document.getElementById("cntdesp").style.display = "none";
			boolean = true;
		}
	});
}

//muestra la pantalla de contacto
function overlay(){
	document.getElementById("overlay").style.width = "100%";
}

//esconde la pantalla de contacto
function close() {
 	document.getElementById("overlay").style.width = "0%";
}

//mostrar y esconder menu responsive
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

//mostrar y esconder submenú 1
var practices = true;
function submenu1() {

	if(practices){
		practices = false;
		document.getElementById("cont1").style.display = "block";
	}
	else{
		practices = true;
		document.getElementById("cont1").style.display = "none";
	}
}

//mostrar y esconder submenú 2
var lawyers = true;
function submenu2() {

	if(practices){
		practices = false;
		document.getElementById("cont2").style.display = "block";
	}
	else{
		practices = true;
		document.getElementById("cont2").style.display = "none";
	}
}

//alternativa al event listener
/*
setInterval(contador, 100);
function contador(){
	if(window.innerWidth > 600){
		document.getElementById("cntdesp").style.display = "none";
	}	
}*/