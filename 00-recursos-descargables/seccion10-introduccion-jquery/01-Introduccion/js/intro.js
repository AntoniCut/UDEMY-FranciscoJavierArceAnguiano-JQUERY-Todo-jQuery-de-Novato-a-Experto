$(document).ready(inicio);
function inicio(){
	$("#menu, #lamparaLarga, #cojinColores, #jarron, #perro, #mesa, #cojinBlanco, #lamparaCorta, #responsive, #diseno, #desarrollo, #marqueting, #decoracion, #impresion, #frase").hide();
	$("#linea, #home, #somos, #fotografia, #complementos, #menuAbajo").hide();	
	$("#arriba").delay(1500).slideUp(3000, apareceObjetosArriba);
	$("#abajo").delay(1500).animate({top:"1200px"},5000);
	$("#frase").fadeIn(1000);
}
function apareceObjetosArriba(){
	$("#menu, #lamparaLarga, #cojinColores, #jarron, #perro, #mesa, #cojinBlanco, #lamparaCorta, #responsive, #diseno, #desarrollo, #marqueting, #decoracion, #impresion").show(1500, apareceMenu);
	$("#arriba, #abajo, #frase").hide(500);
	
}
function apareceMenu(){
	$("#linea, #home, #somos, #fotografia, #complementos, #menuAbajo").show(1500);
	termina();
}
