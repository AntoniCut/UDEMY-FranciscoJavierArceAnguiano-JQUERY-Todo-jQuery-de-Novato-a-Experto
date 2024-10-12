//  ******************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  **********
//  **********  /seccion15-carrusel-3d/52-carrusel-3d/js/carrusel-3d.js  *********************  
//  ****************************************************************************************** 


//  ----------  ELEMENTOS GLOBALES  ----------

//  -----  Variables, arreglos  -----
let htmlFotos = [];

//  -----  Referencias al HTML  -----
const $datosItem = $("#datos .item");
const $carrusel = $("#carrusel");
const $description = $('#descripcion');
const $fotoDescription = $('#datos .item .foto');
const $textoDescription = $('#datos .item .texto');


//  ----------  AL CARGAR EL DOCUMENTO  ----------
$(document).ready(inicio);


//  ----------  INICIO  ----------
function inicio() {

    console.warn('----------  Documento Cargado!!!  ----- ', 'jQuery version:', $.fn.jquery, ' ----------', '\n');

    
    //  -----  Recorremos los items y los guardamos en un arreglo  -----
    $datosItem.each(function () {
        htmlFotos += $(this).find(".foto").html();  // Concatenamos el HTML de cada elemento.
    });

    //  -----  Añadimos al carrusel  -----
    $carrusel.append(htmlFotos);

    crearCarrusel();
    despliegaTexto();

}


//  ----------  Crear Carrusel  ----------
function crearCarrusel() {

    $carrusel.roundabout({
        startingChild: window.startingItem,
        childSelector: 'img',
        tilt: -4.5,
        minOpacity: .75,
        minScale: .75,
        duration: 1200,
        clickToFocus: true,
        clickToFocusCallback: despliegaTexto
    });

}


//  ----------  Desplegar los textos  ----------
function despliegaTexto() {

    //  -----  obtenemos el indice del elemento seleccionado  -----
    const indexElemSelec =  $carrusel.data('roundabout').childInFocus;
    
    //  -----  obtenemos la imagen  -----
    const imgElem = $fotoDescription.eq(indexElemSelec).html();
    
    //  -----  obtenemos el texto  -----
    const textoElem = $textoDescription.eq(indexElemSelec).html();
	
    //  -----  añadimos al html  -----
    $description.html(imgElem + textoElem);
}
