//  *************************************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  *****************************************
//  **********  /seccion13-mosaico-fotos-efecto-flip/50-mosaico-fotos-efecto-flip/js/mosaico-fotos-efecto-flip.js  **********  
//  *************************************************************************************************************************  


$(document).ready(function () {

    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');

    //  -----  controlamos la foto actual  -----
    let fotoActual;

    //  -----  Referencias al HTML  -----
    const $foto = $(".foto");

    //  -----  Definición de los Arreglos  -----
    const fotosFrenteArray = [
        'caballo.jpg',
        'satiro.jpg',
        'basilisco.jpg',
        'centauro.jpg',
        'fenix.jpg',
        'unicornio.jpg',
        'pegaso.jpg',
        'hidra.gif',
        'arpia.jpg',
        'grifo.png',
        'quimera.jpg',
        'kraken.jpg',
        'minotauro.jpg',
        'medusa.jpg',
        'sirenas.jpg'
    ];

    const fotosAtrasArray = [
        'caballo.png',
        'satiro.png',
        'basilisco.png',
        'centauro.png',
        'fenix.png',
        'unicornio.png',
        'pegaso.png',
        'hidra.png',
        'arpia.png',
        'grifo.png',
        'quimera.png',
        'kraken.png',
        'minotauro.png',
        'medusa.png',
        'sirenas.png'
    ];


    //  -----  Crear imagenes y almacenar valores dinámicamente  -----
    $foto.each(function (index) {

        //  -----  numero de elementos del array  -----
        const numFotos = fotosFrenteArray.length;

        //  -----  Generar numero aleatorio  del 0 a la longitud del arreglo-----
        const numAleat = Math.floor(Math.random() * numFotos);

        //  -----  Añadimos imagen frente al html  -----
        $(this).html(`<img src='animales/frente/${fotosFrenteArray[numAleat]}' width='160px' height='160px' />`);

        //  -----  Almacenamos los valores en los atributos data-frente y data-atras de los 2 arreglos  -----
        $(this).attr('data-frente', fotosFrenteArray[numAleat]);
        $(this).attr('data-atras', fotosAtrasArray[numAleat]);

        //  -----  Elimina o corta elementos duplicados de los 2 arreglos  -----
        fotosFrenteArray.splice(numAleat, 1);
        fotosAtrasArray.splice(numAleat, 1);

        //  -----  Asignamos un ID dinámico a cada imagen para luego referenciarlo -----
        $(this).attr('id', `banner${index + 1}`);

    });


    //  -----  Iniciamos llamando a voltea() la primera vez  -----
    voltea();


    //  -----  función que le da la vuelta a la foto  -----
    function voltea() {

        //  -----  Nos aseguramos de que accede a los banners que sí existen  -----
        fotoActual = Math.floor(Math.random() * $foto.length) + 1;

        console.log("fotoActual = ", fotoActual);

        //  -----  Recuparamos el valor de la foto de detrás  -----
        const $banner = $("#banner" + fotoActual);
        const atras = $banner.attr('data-atras');

        //  -----  Iniciamos el flip  -----
        $banner.flip({
            direction: "lr",
            //color: "#ffffff",
            onEnd: function () {
                //  -----  Añadimos imagen atrás al html  -----
                $banner.html(`<img src='animales/atras/${atras}' width='160px' height='160px' />`);
            }

        });

        setTimeout(regresa, 3000);  // Esperar 3 segundos antes de volver
    }


    //  -----  función que devuelve la foto a su posición original  -----
    function regresa() {

        // -----  Recuperar la imagen de frente  -----
        const $banner = $("#banner" + fotoActual);
        const frente = $banner.attr("data-frente");

        //  -----  Iniciar el segundo flip para regresar la imagen de frente  -----
        $banner.flip({
            direction: "rl",
            //color: "#ffffff",
            onEnd: function () {
                // Cargar la imagen de frente
                $banner.html(`<img src='animales/frente/${frente}' width='160px' height='160px' />`);
            }
        });

        setTimeout(voltea, 3000);  // Reiniciar el ciclo después de otros 3 segundos
    }

});
