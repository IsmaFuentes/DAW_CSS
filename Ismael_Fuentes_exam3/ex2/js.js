window.onload = function(){
	document.getElementById("iconmenu-open").onclick = function(){desplegar();};
	document.getElementById("iconmenu-close").onclick = function(){esconder();};
	document.getElementById("princ").onclick = function(){desplegar1();};
	document.getElementById("news").onclick = function(){desplegar2();};
	document.getElementById("ser").onclick = function(){desplegar3();};
}

//variables
var boolean1 = true;
var boolean2 = true;
var boolean3 = true;

//secciones desplegables
function desplegar(){
	document.getElementById("desplegable").style.display = "block";
	document.getElementById("iconmenu-open").style.display = "none";
	document.getElementById("iconmenu-close").style.display = "block";
}

function esconder(){
	document.getElementById("desplegable").style.display = "none";
	document.getElementById("iconmenu-close").style.display = "none";
	document.getElementById("iconmenu-open").style.display = "block";
	document.getElementById("subsection1").style.display = "none";
	document.getElementById("subsection2").style.display = "none";
	document.getElementById("subsection3").style.display = "none";
}

function desplegar1(){
	if(boolean1){
		document.getElementById("subsection1").style.display = "block";
		boolean1 = false;
	}else{
		document.getElementById("subsection1").style.display = "none";
		boolean1 = true;
	}
}

function desplegar2(){
	if(boolean2){
		document.getElementById("subsection2").style.display = "block";
		boolean2 = false;
	}else{
		document.getElementById("subsection2").style.display = "none";
		boolean2 = true;
	}
}

function desplegar3(){
	if(boolean3){
		document.getElementById("subsection3").style.display = "block";
		boolean3 = false;
	}else{
		document.getElementById("subsection3").style.display = "none";
		boolean3 = true;
	}
}