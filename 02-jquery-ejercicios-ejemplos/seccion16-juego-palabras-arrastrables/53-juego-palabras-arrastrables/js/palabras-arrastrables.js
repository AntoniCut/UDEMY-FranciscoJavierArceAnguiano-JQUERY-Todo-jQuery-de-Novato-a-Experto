//  *************************************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  *****************************************  
//  **********  /seccion16-juego-palabras-arrastrables/53-juego-palabras-arrastrables/js/palabras-arrastrables.js  **********  
//  *************************************************************************************************************************  


//  ----------  ELEMENTOS GLOBALES  ----------

//  -----  Variables, arreglos  -----
const seccionesAarray = [
    { a: "Dioses", n: 1 },
    { a: "Diosas", n: 2 },
    { a: "Semidioses", n: 3 },
    { a: "Animales", n: 4 },
    { a: "Ciudades", n: 5 }
];

const diosesArray = [
    { a: "Zeus", n: 1 },
    { a: "Poseidón", n: 1 },
    { a: "Ares", n: 1 },
    { a: "Ades", n: 1 },
    { a: "Hermes", n: 1 }
];

const diosasArray = [
    { a: "Atenea", n: 2 },
    { a: "Afrodita", n: 2 },
    { a: "Caliope", n: 2 },
    { a: "Hera", n: 2 },
    { a: "Artemisa", n: 2 }
];

const semiDiosesArray = [
    { a: "Perseo", n: 3 },
    { a: "Heracles", n: 3 },
    { a: "Aquiles", n: 3 },
    { a: "Ajax", n: 3 },
    { a: "Teseo", n: 3 }
];

const animalesArray = [
    { a: "Pegaso", n: 4 },
    { a: "Unicornio", n: 4 },
    { a: "Fénix", n: 4 },
    { a: "Hidra", n: 4 },
    { a: "Arpía", n: 4 }
];

const ciudadesArray = [
    { a: "Atenas", n: 5 },
    { a: "Argos", n: 5 },
    { a: "Troya", n: 5 },
    { a: "Esparta", n: 5 },
    { a: "Maratón", n: 5 }
];


//  -----  Array con todos los elementos o arrays  -----
const palabrasArray = diosesArray.concat(diosasArray, semiDiosesArray, animalesArray, ciudadesArray);
//alert(todosLosArrays.length);


//  -----  variables  -----
const numSecciones = 5;
let draggable;


//  -----  Referencias al HTML  -----
const $btnEvaluar = $("#evaluar");
const $btnReiniciar = $("#reiniciar");
const $area = $(".area");


//  ----------  AL CARGAR EL DOCUMENTO  ----------
$(document).ready(inicio);


//  ----------  INICIO  ----------
function inicio() {

    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');

    //  -----  mostrar / ocultar botones  -----
    $btnEvaluar.show();
    $btnReiniciar.hide();

    //  -----  click para evaluar los resultados  -----
    $btnEvaluar.click(evaluar);

    //  ----------  Añadimos el Título de las Secciones Dinamicamente  -----
    añadirTitulosSecciones();

    //  ----------  Añadimos las Palabras Dinamicamente  ----------
    añadirPalabras();

    //  ----------  Hacer las palabras arrastrables  ----------
    arrastrarPalabras();

    //  ----------  Area donde soltamos las palabras  ----------
    soltarPalabras();

}


//  ----------  Añadimos el Título de las Secciones Dinamicamente  -----
function añadirTitulosSecciones() {

    for (let i = 0; i < numSecciones; i++) {

        let seccion = i + 1;

        //  -----  numero aleatorio  -----
        const numAleat = Math.floor(Math.random() * seccionesAarray.length);  // Recalcula longitud

        //  -----  añadimos al html el nombre del título -----
        $("#titulo" + seccion).html('<h2>' + seccionesAarray[numAleat].a + '</h2>');

        //  -----  obtenemos el número de sección  -----
        $("#area" + seccion).attr('data-sec', seccionesAarray[numAleat].n);

        //  -----  borramos el número aleatorio -----
        seccionesAarray.splice(numAleat, 1);  // Elimina el elemento seleccionado
    }
}



//  ----------  Añadimos las Palabras Dinamicamente / Desplegamos palabras  ----------
function añadirPalabras() {


    let numPalabras = palabrasArray.length;      // Obtenemos la cantidad total de palabras inicialmente.
    let seccion = 0;

    for (let i = 0; i < numPalabras; i++) {

        seccion++;
        if (seccion > numSecciones) seccion = 1;

        //  -----  numero aleatorio  -----
        const numAleat = Math.floor(Math.random() * palabrasArray.length);  // Recalcula longitud.

        //  -----  añadimos al html el nombre de la palabra -----
        $("#palabra" + seccion).append("<div class='palabra' data-sec='" + palabrasArray[numAleat].n + "'>" + palabrasArray[numAleat].a + "</div>");

        //  -----  borramos el número aleatorio -----
        palabrasArray.splice(numAleat, 1);  // Elimina el elemento seleccionado para evitar que se repita.
    }
}



//  ----------  Hacer las palabras arrastrables  ----------
function arrastrarPalabras() {

    //  -----  referencia al elemento de clase palabra creada dinamicamente  -----
    $palabra = $(".palabra");

    $palabra.draggable({
        revert: "invalid",
        drag: function () {
            draggable = $(this);
        }
    });
}



//  ----------  Area donde soltamos las palabras  ----------
//  ----------  Area donde soltamos las palabras  ----------
function soltarPalabras() {

    $area.droppable({
        accept: ".palabra",
        tolerance: "pointer",
        drop: function () {

            //  ----- Contamos cuántas palabras hay en el área  -----
            const numPalabrasEnArea = $(this).children(".palabra").length;

            //  ----- Si ya hay 5 palabras, no dejamos añadir más  -----
            if (numPalabrasEnArea >= 5) {
                alert("Este área ya tiene 5 palabras.");
                return; // No hacemos nada más, evita agregar la palabra
            }

            //  -----  sección correspondiente a la palabra  -----
            const valor = draggable.html();
            const dataSec = draggable.attr("data-sec");

            //  -----  sección correspondiente al área  -----
            const area = $(this).attr("data-sec");

            //  Es correcto
            if (dataSec === area) $(this).append("<div class='palabra' data-res='1'>" + valor + "</div>");

            //  Es incorrecto
            else $(this).append("<div class='palabra' data-res='0'>" + valor + "</div>");

            //  -----  eliminamos la palabra arrastrable original -----
            draggable.remove();
        }
    });
}



//  ----------  Evaluar los resultados  -----
function evaluar() {

    let buenas = 0;
    let malas = 0;

    //  -----  referencia al elemento de clase palabra creada dinamicamente  -----
    $palabra = $(".palabra");

    //  -----  iteramos todas las palabras  -----
    $palabra.each(function () {

        //  -----  obtenemos el resultado  -----
        const resultado = $(this).attr("data-res");

        if (resultado == 1) {
            $(this).css("background-color", "#6e9");
            buenas++;
        } else {
            $(this).css("background-color", "#930");
            malas++;
        }

        //  -----  matamos el draggable  -----
        $(this).off();
    });


    alert("Tuviste " + buenas + " palabras acertadas y " + malas + " palabras incorrectas");

    //  -----  mostrar / ocultar botones  -----
    $btnEvaluar.hide();
    $btnReiniciar.show();

    //  -----  Reiniciamos el juego  -----
    $btnReiniciar.click(reiniciar);
}



//  ----------  Reiniciamos el juego  ----------
function reiniciar() {
    location.reload();
}