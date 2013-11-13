/*
Maruri 2013
Estefania Pulgar
*/
function avanzoJuego(){
	nivel = 1;
	document.getElementById("page2").style.display="block";
	document.getElementById("page1").style.display="none";
	cintas();
	
}

function avanzoNivel(){ 
	nivel++
	document.getElementById("ganaste").style.display="none";
	document.getElementById("siguiente").style.display="none";
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
	if(nivel == 8){ nivelesNone(); botonesError(); 
		document.getElementById("OPCION8").style.display="block"; 
		document.getElementById("opciones").style.display="none"; 
		var myEnd = setInterval(function(){
		window.location.reload();
		clearInterval(myEnd);
	},2000);
	}
	if(nivel > 8){ window.location.reload(); }
}


function cintas(e){ 
    $("#negraIn").on("touchstart",function() { toco="negra";  opciones();  });
    $("#verdeIn").on("touchstart",function() { toco="verde";  opciones();  });
    $("#naranjaIn").on("touchstart",function() { toco="naranja";  opciones();  });
}

function nivelesNone(){
	document.getElementById("OPCION1").style.display="none";
	document.getElementById("OPCION2").style.display="none";
	document.getElementById("OPCION3").style.display="none";
	document.getElementById("OPCION4").style.display="none";
	document.getElementById("OPCION5").style.display="none";
	document.getElementById("OPCION6").style.display="none";
	document.getElementById("OPCION7").style.display="none";
	document.getElementById("OPCION8").style.display="none";
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
	if (nivel == 1 || nivel == 2 || nivel == 3){
		if (toco == 'negra'){ 
			if(nivel == 1){
			document.getElementById("optTouch1").style.display="block";
			//$("#optTouch1").on('touchmove', function(event){ GANASTE(); return false;});
			GANASTE();
			}
			if(nivel == 2){
			document.getElementById("optTouch2").style.display="block";
			//$("#optTouch2").on('touchmove', function(event){ GANASTE(); return false;});
			GANASTE();
			}
			if(nivel == 3){
			document.getElementById("optTouch3").style.display="block";
			//$("#optTouch3").on('touchmove', function(event){ GANASTE(); return false; });
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
			//$("#optTouch4").on('touchmove', function(event){ GANASTE(); return false; });
			GANASTE();
			}
			if(nivel == 5){
			document.getElementById("optTouch5").style.display="block";
			//$("#optTouch5").on('touchmove', function(event){ GANASTE(); return false; });
			GANASTE();
			}
			if(nivel == 6){
			document.getElementById("optTouch6").style.display="block";
			//$("#optTouch6").on('touchmove', function(event){ GANASTE(); return false; });
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
			//$("#optTouch7").on('touchmove', function(event){ GANASTE(); return false; });
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
	document.getElementById("siguiente").style.display="block";
	
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
	document.getElementById("siguiente").style.display = 'none';
	var myInterval = setInterval(function(){
		//window.location.reload();
		nivel--;
		botonesError();
		document.getElementById("negraIn").style.display = 'block';
		document.getElementById("verdeIn").style.display = 'block';
		document.getElementById("naranjaIn").style.display = 'block';
		document.getElementById("perdiste").style.display="none";
		avanzoNivel();
		clearInterval(myInterval);
		document.getElementById("siguiente").style.display = 'block';
	},2000);
	
}
/*
---------------------------------------------------------------------------------------------------
ANIMACION
---------------------------------------------------------------------------------------------------
*/
function animacion(){
	setInterval(function(){
	$("#llama1").animate({opacity:'0'});
    $("#llama1roll").animate({opacity:'1'});
    $("#llama1roll").animate({opacity:'0'});
    $("#llama1").animate({opacity:'1'});
	},300);

	setInterval(function(){
	$("#llama2").animate({opacity:'0'});
    $("#llama2roll").animate({opacity:'1'});
    $("#llama2roll").animate({opacity:'0'});
    $("#llama2").animate({opacity:'1'});
	},300);

	setInterval(function(){
	$("#cinta1").animate({opacity:'1'});
	},300);
	setInterval(function(){
	$("#cinta2").animate({opacity:'1'});
	},600);
	setInterval(function(){
	$("#cinta3").animate({opacity:'1'});
	},900);
	
}