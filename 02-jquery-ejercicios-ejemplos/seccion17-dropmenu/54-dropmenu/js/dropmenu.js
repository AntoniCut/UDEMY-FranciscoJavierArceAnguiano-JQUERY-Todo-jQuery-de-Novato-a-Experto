//  ******************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  **********  
//  **********  /seccion17-dropmenu/54-dropmenu/js/dropmenu.js  ******************************  
//  ******************************************************************************************  


$(document).ready(function () {
    
    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');
    
    $(".nav_menu > ul").dropmenu({
        effect: "slide",
        speed: 250,
        timeout: 0,
        nbsp: false
    });

});