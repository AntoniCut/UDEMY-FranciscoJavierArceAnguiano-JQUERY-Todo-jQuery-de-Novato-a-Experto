//  *************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  *****************
//  **********  /seccion12-juego-drag-and-drop/49-juego-drag-and-drop/js/drag-and-drop.js  **********  
//  *************************************************************************************************  



$(document).ready(function () {


    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');

    //  -----  Referencias al HTML  -----
    const $btnVerifica = $("#verifica");
    const $btnJugar = $("#jugar");
    const $foto = $(".foto");
    const $marco = $(".marco");

    let $item;


    //  -----  Variables Arreglos -----
    const marcosArray = [
        { img: "Cabayo de Troya", num: 1 },
        { img: "Sátiro", num: 2 },
        { img: "Basilisco", num: 3 },
        { img: "Centauro", num: 4 },
        { img: "Ave Fénix", num: 5 },
        { img: "Pegaso", num: 6 }
    ];

    const fotosArray = [
        { img: "caballo.jpg", num: 1 },
        { img: "satiro.jpg", num: 2 },
        { img: "basilisco.jpg", num: 3 },
        { img: "centauro.jpg", num: 4 },
        { img: "fenix.jpg", num: 5 },
        { img: "pegaso.jpg", num: 6 }
    ];


    //  -----  Ocultar y Mostrar Botones  -----
    $btnVerifica.show();
    $btnJugar.hide();


    //  -----  Para mover las fotos  -----
    $foto.draggable({ cursor: "move" });

    //  -----  Donde van a aterrizar o soltamos las fotos  -----
    $marco.droppable({
        hoverClass: "ui-state-active",
        drop: function (e, ui) {
            $(this).addClass('ui-state-highlight');
        }
    });


    //  -----  Llenamos la sección de fotos con las imagenes  -----
    $foto.each(function () {

        //  -----  Longitud del array de fotos  -----
        const longArrFotos = fotosArray.length;

        //  -----  numero aleatorio que sera la posicion del array
        const posArr = Math.floor(Math.random() * longArrFotos);
        console.log(posArr);

        //  -----  añadimos al html la imagen por la posicion del array  -----
        $(this).html(`<img src='animales/${fotosArray[posArr].img}' width='120px' height='120px' />`);


        //  -----  asignamos el atributo data-num la posicion del array  -----
        $(this).attr('data-num', fotosArray[posArr].num);
        fotosArray.splice(posArr, 1);

    });


    //  -----  Llenamos la seccion de marcos donde van a aterrizar las fotos  -----
    $marco.each(function () {

        //  -----  Longitud del array de marcos  -----
        const longArrMarcos = marcosArray.length;

        //  -----  numero aleatorio que sera la posicion del array
        const posArr = Math.floor(Math.random() * longArrMarcos);
        console.log(posArr);

        //  -----  añadimos al html la imagen aterrizada  -----
        $(this).html(`<p> ${marcosArray[posArr].img} </p>`);

        //  -----  asignamos el atributo data-num la posicion del array  -----
        $(this).attr('data-num', marcosArray[posArr].num);
        marcosArray.splice(posArr, 1);

    });


    //  ----------  EVENTOS  ----------


    //  -----  botón verifica  -----
    $btnVerifica.on('click', function () {

        //  -----  Ocultar y Mostrar Botones  -----
        $btnVerifica.hide();
        $btnJugar.show();

        //  -----  Llenamos la seccion de marcos donde van a aterrizar las fotos  -----
        $marco.each(function (index) {

            const dataNum = $(this).attr('data-num');
            const dataCuadro = $(this).attr('data-cuadro');

            if (dataNum === dataCuadro) $("#res" + index).html("<p class='verde'> Correcto </p>");
            else $("#res" + index).html("<p class='rojo'> Incorrecto </p>");

        });

    });


    //  -----  botón volver a jugar  -----
    $btnJugar.on('click', function () {

        location.reload();
    });


    //  -----  pulsar botón del ratón  -----
    $foto.on('mousedown', function () {

        $item = $(this);
        $item.css('z-index', '1');

    });


    //  -----  soltar botón del ratón  -----
    $foto.on('mouseup', function () {


    });


    //  -----  soltar elemento  -----
    $marco.on('drop', function () {

        $(this).attr('data-cuadro', $item.attr('data-num'));
        //alert( 'data-num: ' + $(this).attr('data-num') + ' - data-cuadro: ' + $(this).attr('data-cuadro') );

    });



});
