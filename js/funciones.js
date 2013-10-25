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
	document.getElementById("ganaste").style.display="none";
	document.getElementById("terminarBoton").style.display="none";
	if(nivel == 1){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION1").style.display="block"; }
	if(nivel == 2){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION2").style.display="block"; }
	if(nivel == 3){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION3").style.display="block"; }
	if(nivel == 4){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION4").style.display="block"; }
	if(nivel == 5){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION5").style.display="block"; }
	if(nivel == 6){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION6").style.display="block"; }
	if(nivel == 7){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION7").style.display="block"; }
	if(nivel > 7){ window.location.reload(); }
	//alert(nivel);
	botonesError();
}

function puntuacion(){
	puntuacionInicial = 0;
	PuntajeTotal = 700;
	/*-------------------*/
}

function cintas(){
    $( "#negraIn" ).click(function() { toco="negra"; opciones();  });
    $( "#verdeIn" ).click(function() { toco="verde"; opciones();  });
    $( "#naranjaIn" ).click(function() { toco="naranja"; opciones();  });
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
	//alert(nivel);
	if (nivel == 1 || nivel == 2 || nivel == 3){
		if (toco == 'negra'){ 
			if(nivel == 1){
			document.getElementById("optTouch1").style.display="block";
			$("#optTouch1").bind('touchstart', function(event){ GANASTE(); return false;});
			 //document.getElementById("optTouch1").addEventListener('touchmove', preventDefaultScroll, false);
			//GANASTE();
			}
			if(nivel == 2){
			document.getElementById("optTouch2").style.display="block";
			//$("#grupTouch").on('touchstart', function(event){ GANASTE();});
			GANASTE();
			}
			if(nivel == 3){
			document.getElementById("optTouch3").style.display="block";
			//$("#grupTouch").on('touchstart', function(event){ GANASTE();});
			GANASTE();
			}
		}
		if (toco == 'verde'){ 
			document.getElementById("verdeIn").style.display="none";
			document.getElementById("verdeOff").style.display="block";
			PERDISTE();
		}
		if (toco == 'naranja'){ 
			document.getElementById("naranjaIn").style.display="none";
			document.getElementById("naranjaOff").style.display="block";
			PERDISTE();
		}
	}

	if (nivel == 4 || nivel == 5 || nivel == 6){
		if (toco == 'negra'){ 
			document.getElementById("negroIn").style.display="none";
			document.getElementById("negroOff").style.display="block";
			PERDISTE();
		}
		if (toco == 'verde'){ 
			if(nivel == 4){
			document.getElementById("optTouch4").style.display="block";
			//$("#grupTouch").on('touchstart', function(event){ GANASTE();});
			GANASTE();
			}
			if(nivel == 5){
			document.getElementById("optTouch5").style.display="block";
			//$("#grupTouch").on('touchstart', function(event){ GANASTE();});
			GANASTE();
			}
			if(nivel == 6){
			document.getElementById("optTouch6").style.display="block";
			//$("#grupTouch").on('touchstart', function(event){ GANASTE();});
			GANASTE();
			}
		}
		if (toco == 'naranja'){ 
			document.getElementById("naranjaIn").style.display="none";
			document.getElementById("naranjaOff").style.display="block";
			PERDISTE();
		}
	}

	if (nivel == 7 ){
		if (toco == 'negra'){ 
			document.getElementById("negroIn").style.display="none";
			document.getElementById("negroOff").style.display="block";
			PERDISTE();
		}
		if (toco == 'verde'){ 
			document.getElementById("verdeIn").style.display="none";
			document.getElementById("verdeOff").style.display="block";
			PERDISTE();
		}
		if (toco == 'naranja'){ 
			document.getElementById("optTouch7").style.display="block";
			//$("#grupTouch").on('touchstart', function(event){ GANASTE();});
			GANASTE();
		}
	}

}

function botonesError(){
	document.getElementById("negraOff").style.display = 'none';
	document.getElementById("verdeOff").style.display = 'none';
	document.getElementById("naranjaOff").style.display = 'none';
}



function GANASTE(){
	document.getElementById("ganaste").style.display="block";
	document.getElementById("terminarBoton").style.display="block";
	if (nivel == 1){
		document.getElementById("sinA").style.display="none";
		document.getElementById("conA").style.display="block";
	}
	if (nivel == 2){
		document.getElementById("sinB").style.display="none";
		document.getElementById("conB").style.display="block";
	}
	if (nivel == 3){
		document.getElementById("sinC").style.display="none";
		document.getElementById("conC").style.display="block";
	}
	if (nivel == 4){
		document.getElementById("sinD").style.display="none";
		document.getElementById("conD").style.display="block";
	}
	if (nivel == 5){
		document.getElementById("sinE").style.display="none";
		document.getElementById("conE").style.display="block";
	}
	if (nivel == 6){
		document.getElementById("sinF").style.display="none";
		document.getElementById("conF").style.display="block";
	}
	if (nivel == 7){
		document.getElementById("sinG").style.display="none";
		document.getElementById("conG").style.display="block";
	}
}
function PERDISTE(){
	document.getElementById("perdiste").style.display="block";
	setInterval(function(){
		window.location.reload();
	},5000);
	
}
/*
---------------------------------------------------------------------------------------------------
ANIMACION
---------------------------------------------------------------------------------------------------
*/
