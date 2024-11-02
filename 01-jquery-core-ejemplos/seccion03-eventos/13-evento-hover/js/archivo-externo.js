//  *********************************************************************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/01-jquery-core-ejemplos/seccion01-descargas-instalaciones/01-hola-mundo/js/archivo-externo.js  **********  
//  *********************************************************************************************************************************************************

$(document).ready(function () {

    console.warn('----------  Documento Cargado!!!  ----- ', ' Libreria - jQuery version:', $.fn.jquery, ' ----------', '\n');
    console.log("\n");

    $("#foto").click(function () {
        $("#foto").hide();
    });
});