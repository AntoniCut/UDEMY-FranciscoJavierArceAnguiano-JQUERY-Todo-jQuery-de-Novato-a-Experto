//  ***************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  *******************  
//  **********  /seccion19-rollover-imagenes/56-rollover-imagenes/js/rollover-imagenes.js  ************  
//  ***************************************************************************************************  


//  ----------  Referencias al HTML  ----------
$caja = $(".caja");
$foto = $("#foto");

//  ----------  Variables Globales  ----------
const altura = $caja.height();
let fotoActual = 1;
let timer;
let bandera = false;




$(document).ready(inicio);


function inicio() {

    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');



    $caja.hover(

        //  -----  over  -----
        function () {

            $(this)
                .children(".tooltip")
                .animate({ top: (altura - 50) }, 1000)
        },

        //  -----  out  ------
        function () {

            $(this)
                .children(".tooltip")
                .animate({ top: (altura + 1) }, 1000)
        }
    );


    $foto.mouseenter(function () {

        if (!bandera) {
            bandera = true;
            timer = setTimeout(cambiaFoto, 1500);
        }
    });


    $foto.mouseleave(function () {

        if (bandera) {
            bandera = false;
            clearTimeout(timer);
        }
    });
}



function cambiaFoto() {

    if (bandera) {

        fotoActual++;
        if (fotoActual > 6) fotoActual = 1;

        $foto.html("<img src='imagenes/fondos/fondo" + fotoActual + ".jpg' width='400px' height='300px'>");
        timer = setTimeout(cambiaFoto, 1500);
    }
}