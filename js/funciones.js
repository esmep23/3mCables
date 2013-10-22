/*
Maruri 2013
Estefania Pulgar
*/
function avanzoJuego(e){
	nivel = 1;
	
	document.getElementById("page2").style.display="block";
	document.getElementById("page1").style.display="none";
}

function avanzoNivel(){
	nivel++;
	if(nivel == 1){ nivelesNone(); document.getElementById("OPCION1").style.display="block"; }
	if(nivel == 2){ nivelesNone(); document.getElementById("OPCION2").style.display="block"; }
	if(nivel == 3){ nivelesNone(); document.getElementById("OPCION3").style.display="block"; }
	if(nivel == 4){ nivelesNone(); document.getElementById("OPCION4").style.display="block"; }
	if(nivel == 5){ nivelesNone(); document.getElementById("OPCION5").style.display="block"; }
	if(nivel == 6){ nivelesNone(); document.getElementById("OPCION6").style.display="block"; }
	if(nivel == 7){ nivelesNone(); document.getElementById("OPCION7").style.display="block"; }
	if(nivel > 7){ window.location.reload(); }
	alert(nivel);
	
}

function puntuacion(){
	puntuacionInicial = 0;
	PuntajeTotal = 700;
	/*-------------------*/
}

function cintas(){
    $( "#cintaNegra" ).click(function() { opciones();  });
    $( "#cintaVerde" ).click(function() { opciones();  });
    $( "#cintaNaranja" ).click(function() { opciones();  });
}

function ganaste(){
	alert('ganaste');
	puntaje = puntaje+1;
}

function perdiste(){
	alert('perdiste');
}

function nivelesNone(){
	document.getElementById("OPCION1").style.display="none";
	document.getElementById("OPCION2").style.display="none";
	document.getElementById("OPCION3").style.display="none";
	document.getElementById("OPCION4").style.display="none";
	document.getElementById("OPCION5").style.display="none";
	document.getElementById("OPCION6").style.display="none";
	document.getElementById("OPCION7").style.display="none";
}

function con(){
	document.getElementById("conA").style.display="none";
	document.getElementById("conB").style.display="none";
	document.getElementById("conC").style.display="none";
	document.getElementById("conD").style.display="none";
	document.getElementById("conE").style.display="none";
	document.getElementById("conF").style.display="none";
	document.getElementById("conG").style.display="none";
}

/*
---------------------------------------------------------------------------------------------------
SELECCION
---------------------------------------------------------------------------------------------------
*/
function opciones(){
	alert(nivel);

}

/*
---------------------------------------------------------------------------------------------------
ANIMACION
---------------------------------------------------------------------------------------------------
*/
