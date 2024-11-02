//  ***********************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  ***************  
//  **********  /seccion20-barra-verificacion-politica-cookies/js/politica-cookies.js  ************  
//  ***********************************************************************************************  


//  ----------  Referencias al HTML  ----------
const $cookies1 = $("#galletas1");
const $cookies2 = $("#galletas2");
const $btnAceptar = $("#aceptar");


$(document).ready(inicio);


function inicio() {

    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');

    if (localStorage.controlcookie > 0) $cookies1.css({ bottom: '-50px' });

    $btnAceptar.click(function () {
        localStorage.controlcookie = (localStorage.controlcookie || 0);
        localStorage.controlcookie++;
        $cookies1.animate({ bottom: '-50px' }, 500);
    });

    $cookies2.on('mouseenter', function () {
        $cookies1.css({ bottom: '0px' });
    });
}