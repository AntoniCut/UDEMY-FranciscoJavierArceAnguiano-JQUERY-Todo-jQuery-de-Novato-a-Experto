//  ******************************************************************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/seccion11-juego-memoria/48-juego-memoria/js/juego-memoria.js  **********  
//  ******************************************************************************************************************************************************  


//  -----  Definición de Variables Globales  -----
const numCartas = 10;
let carta1 = '';
let carta2 = '';
let score = 0;

//  -----  Referencias al HTML  -----
const $carta = $('.carta');
const $tiempo = $('#tiempo');
const $score = $("#puntos");



$(document).ready(function () {


    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');


    inicio();      //  -----  INICIO DEL JUEGO  -----


    //  -----------------------------------------------
    //  ----------  Definición de Funciones  ----------
    //  -----------------------------------------------


    //  -----  Inicio del Juego  -----
    function inicio() {

        cargaCartas();                  //  -----  Renderiza las Cartas en el Tablero  -----
        tiempo(1);                      //  -----  Inicia el Tiempo del Juego  -----
        $carta.on('click', voltear);    //  -----  Generar los clicks de todas las cartas  -----

    }


    //  -----  Renderiza las Cartas en el Tablero  -----
    function cargaCartas() {

        const numerosArray = [];

        //  -----  Llenamos el arreglo 2 veces = 20 elementos  -----
        for (let i = 1; i <= numCartas; i++)  numerosArray.push(i, i);


        //  -----  Iteramos todas las cartas para guardar información  -----
        $carta.each(function (i) {

            //  -----  generamos un numero aleatorio en cada iteración  -----
            const numeroAleatorio = Math.floor(Math.random() * numerosArray.length)

            //  -----  Colocar numeroAleatorio en una Carta  -----
            $(this).html(`<p> ${numerosArray[numeroAleatorio]} </p>`);
            $(this).attr('data-num', numerosArray[numeroAleatorio]);

            //  -----  eliminamos numeros duplicados 3 o más veces  -----
            numerosArray.splice(numeroAleatorio, 1);

        });
    }


    //  -----  Despliegue o visualiza el número en la carta  -----
    function voltear() {

        $(this).children().css('display', 'block');

        //  -----  Primera Carta  -----
        if (carta1 === "") carta1 = $(this);
        else {
            carta2 = $(this);

            //  -----  apagamos todos los listener y asi no se voltea una tercera carta  -----
            $carta.off();
            setTimeout(verificar, 1000);
        }
    }


    //  -----  Verificar si las 2 Cartas son Iguales  -----
    function verificar() {

        //  -----  Si las 2 cartas són iguales  -----
        //  -----  Eliminamos y desaparecemos las 2 cartas  -----
        if (carta1.attr('data-num') === carta2.attr('data-num')) eliminarCartasAcertadas();

        //  -----  Si no son iguales, vaciamos el contenido de las cartas
        else vaciarCartas();


        //  -----  Si se Han Acertado Todas las Cartas  -----
        if (score === numCartas) {

            alert('Has Ganado 😊');
            if (confirm('¿Quieres jugar otra Partida?')) location.reload();
            else terminarJuego();
        }

        carta1 = '';
        $carta.on('click', voltear);

    }


    //  -----  Eliminar Cartas Acertadas  -----
    function eliminarCartasAcertadas() {

        carta1.removeClass('carta').addClass('desaparece');
        carta1.children().css('display', 'none');

        carta2.removeClass('carta').addClass('desaparece');
        carta2.children().css('display', 'none');

        carta1 === carta2 === '';

        //  -----  Aumentamos el score  -----
        score++;
        $score.html(`Score: ${score}`);

    }


    //  -----  VaciarCartas  -----
    function vaciarCartas() {

        carta1.children().css('display', 'none');
        carta2.children().css('display', 'none');

    }


    //  -----  Duración del juego  -----
    function tiempo(limite) {

        let min = limite - 1;
        let seg = 59;
        const timer = setInterval(function () {

            $tiempo.html('');

            if (seg < 10) $tiempo.append(`00:0${min}:0${seg}`);
            else $tiempo.append(`00:0${min}:${seg}`);

            seg--;
            if (seg < 0) {
                seg = 59;
                min--;
            }

            
            if (min < 0) {
                //min--;
                //  -----  Juego Terminado  -----
                clearInterval(timer);
                $carta.off();
                $carta.removeClass('carta').addClass('desaparece');
                alert('Tiempo Terminado - Has Perdido 😊');

                if (confirm('¿Quieres jugar otra Partida?')) location.reload();
                //else terminarJuego();
                else $("#tablero").slideUp(3000);
            }

        }, 1000);
    }


    function terminarJuego() {
        $carta.off();
        $carta.removeClass('carta').addClass('desaparece');
        carta1.children().css('display', 'none');
        carta2.children().css('display', 'none');
        $score.html('Score: 0');
        $("#tablero").slideUp(3000);

        //if (confirm('¿Quieres jugar otra Partida?')) location.reload();
        //else $("#tablero").slideUp(3000);
        
    }

});
