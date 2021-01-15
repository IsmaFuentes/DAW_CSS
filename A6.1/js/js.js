$(document).ready(function() {

	//scroll to bottom al hacer click en "registrar"
	$("#boton-collapse").click(function() {
	     $('html, body').animate({
	         scrollTop: $("#bottom").offset().top
	     }, 1500);
	 });

	//lláma a la función cargarNoticia al pulsar el botón "Más noticias"
	$("#vernoticias").click(function(){cargarNoticia()});

	//llama a la funcion topFunction
	$("#floatingBtn").click(function(){topFunction()});

});

$(document).scroll(function() {
	//muestra el botón de scroll up de la página principal
	scrollFunction()
});

var limite = 1;
//carga 2 noticias
function cargarNoticia(){
	if(limite < 2){
		addNoticia();
		limite++;
	}
	else if(limite == 2){
		$('#vernoticias').text('no hay más noticias');
	}
}

//añade dos noticias a lo guarro (ideal cogerlas desde un JSON)
function addNoticia(){
	$("#append").append(	
		//noticia 1
		'<div class="col-lg-6 mb-5">'+
		'<h5 class="card-title font-weight-light text-center">Campeonato del mundo</h5><hr>'+
		'<a href="#"><img src="img/kayak2.jpg" class="card-img-top mb-2 gray"></a>'+
		'<p class="text-justify">Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on.</p>'+
		'<span class="badge badge-pill badge-primary">#Piragüismo</span>'+
		'</div>'+
		//noticia 2
		'<div class="col-lg-6 mb-5">'+
		'<h5 class="card-title font-weight-light text-center">La FINA libera a los nadadores</h5><hr>'+
		'<a href="#"><img src="img/bike2.jpg" class="card-img-top mb-2 gray"></a>'+
		'<p class="text-justify">Tiled say decay spoil now walls meant house. My mr interest thoughts screened of outweigh removing. Evening society musical besides inhabit ye my. Lose hill well up will he over on.</p>'+
		'<span class="badge badge-pill badge-primary">#Natación</span>'+
		'</div>'
	);
}

//cuando se realice scroll aparecerá un botón para regresar al tope de la página
function scrollFunction() {
	if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	    $("#floatingBtn").show();
	} else {
	    $("#floatingBtn").hide();
	}
}

//nos situa de nuevo en la parte principal de la página
function topFunction() {
  	$('html,body').animate({scrollTop : 0},1000);
}