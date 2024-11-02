//  ************************************************************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/seccion09-crea-galeria-jquery/46-galeria/js/galeria.js  **********  
//  ************************************************************************************************************************************************  


$(document).ready(function () {

    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');

    //  -----  Declaración de Variables  -----
    let fotoActual = 1;
    const numFotos = 6;
    let timer;

    //  -----  Referencias al HTML  -----
    const $foto = $("#foto");
    const $izq = $("#izq");
    const $der = $("#der");
    const $texto = $("#texto");

    //  -----  Títulos de las Fotos  -----
    const textos = [
        "1. Partenón",
        "2. Partenón de día",
        "3. Villa Atenience",
        "4. Partenón de noche",
        "5. Atardecer en el mediterráneo",
        "6. Constelación de Andrómeda"
    ];

    //  -----  Cargar Foto, Bola Naranja y Texto de la Imagen la Primera Vez  -----
    timer = setTimeout(cargaFoto, 3000);
    $("#foto1").html("<img src='fondos/bolaNaranja.fw.png'>");
    $texto.text(textos[fotoActual-1]);

    //  -----  Atenuar las Flechas la Primera Vez  -----
    $izq.fadeTo(1000, 0.2);
    $der.fadeTo(1000, 0.2);

    //  -----  hacer click en una de las bolas  -----
    $("#foto1, #foto2, #foto3, #foto4, #foto5, #foto6").click(function () {

        //  -----  Detener el Timeout  -----
        clearTimeout(timer);

        //  -----  Saber que botón fue pulsado  -----
        fotoActual = $(this).attr("alt");
        fotoActual--;

        cargaFoto(10);
    });


    //  -----  hacer click en la flecha Izquierda  -----
    $izq.click(function () {

        //  -----  Detener el Timeout  -----
        clearTimeout(timer);

        fotoActual -= 2;
        if (fotoActual < 0) fotoActual = numFotos - 1;

        cargaFoto(10);

    });


    //  -----  hacer click en la flecha Derecha  -----
    $der.click(function () {

        //  -----  Detener el Timeout  -----
        clearTimeout(timer);

        cargaFoto(10);

    });

    //  -----  Hover de las Flechas  -----
    $("#izq, #der").mouseenter(function () { 
        $(this).fadeTo(500, 1);
    });

    $("#izq, #der").mouseleave(function () { 
        $(this).fadeTo(500, 0.2);
    });


    //  ----------  Declaracion de Funciones  ----------

    function cargaFoto(retardo) {

        fotoActual++;
        if (fotoActual > numFotos) fotoActual = 1;

        $foto.fadeOut(retardo, cambiaFoto);

    }

    function cambiaFoto() {

        //  -----  Pintamos todas las bolitas a Gris  -----
        for (let i = 1; i <= numFotos; i++) {
            $("#foto" + i).html("<img src='fondos/bolaGris.fw.png'>");
        }

        //  -----  cambia la bola gris que toca a Naranja  -----
        $("#foto" + fotoActual).html("<img src='fondos/bolaNaranja.fw.png'>");

        //  -----  Cambiamos la Foto de la Galeria  -----
        $foto.attr("src", `fondos/fondo${fotoActual}.jpg`);
        $foto.fadeIn(1000);

        //  -----  Cambia el Texto de la Foto  -----
        $texto.text(textos[fotoActual-1]);


        timer = setTimeout(cargaFoto, 3000);
    }

});








