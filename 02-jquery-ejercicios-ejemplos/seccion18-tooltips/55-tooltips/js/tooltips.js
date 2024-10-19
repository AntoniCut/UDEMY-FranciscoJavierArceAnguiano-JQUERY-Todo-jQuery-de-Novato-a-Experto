//  ******************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  **********  
//  **********  /seccion18-tooltips/55-tooltips/js/tooltips.js  ******************************  
//  ******************************************************************************************  


$(document).ready(inicio);


function inicio() {

    console.warn('----------  Documento Cargado!!!  ----- ', 'CDN Google - jQuery version:', $.fn.jquery, ' ----------', '\n');

    //  ----------  Referencias al HTML  ----------
    $cuadro = $("#cuadro");
    $foto = $(".foto");


    // Usamos 'mouseenter' en lugar de 'mouseover'
    $foto.on('mouseenter', function () {
        const nombre = $(this).attr("data-nombre");
        mostrarContenido(nombre);
    });


    // Usamos 'mouseleave' en lugar de 'mouseout'
    $foto.on('mouseleave', function () {
        // Al salir de la imagen, ocultamos el cuadro
        $cuadro.stop().animate({ opacity: 0 }, 100, function () {
            $cuadro.css({ display: 'none' });
        });
    });


    // Evento 'mousemove' para mover el cuadro con el ratón
    $foto.on('mousemove', function (e) {
        const x = e.pageX - 150;
        const y = e.pageY + 20;

        $cuadro.css({
            left: x + "px",
            top: y + "px",
        });
    });
}



function mostrarContenido(nombre) {

    const data = {
        zeus: "<img src='imagenes/zeus.jpg' height='95px'><b>Zeus</b> es el «padre de los dioses y los hombres», que gobernaba a los dioses del monte Olimpo como un padre a una familia.",
        rea: "<img src='imagenes/rea.png' height='95px'>La titánide <b>Rea</b> era hija de Urano y Gea...",
        crono: "<img src='imagenes/crono.jpg' height='95px'><b>Crono</b> o <b>Cronos</b> era el principal de los Titanes...",
        hestia: "<img src='imagenes/hestia.jpg' height='95px'><b>Hestia</b> es la diosa de la cocina, la arquitectura, el hogar, o, más apropiadamente, del fuego que da calor y vida a los hogares.",
        demeter: "<img src='imagenes/demeter.jpg' height='95px'><b>Deméter</b>  es la diosa griega de la agricultura, nutricia pura de la tierra verde y joven, ciclo vivificador de la vida y la muerte, y protectora del matrimonio y la ley sagrada.",
        hera: "<img src='imagenes/hera.jpg' height='95px'><b>Hera</b> legítima esposa de Zeus y una de las tres hermanas de Zeus en el panteón olímpico de la mitología griega clásica. Además, ocupaba el cargo de Reina de los Dioses.",
        hades: "<img src='imagenes/hades.jpg' height='95px'><b>Hades</b> alude tanto al antiguo inframundo griego como al dios de éste. La palabra hacía referencia en Homero solo al dios.",
        poseidon: "<img src='imagenes/poseidon.jpg' height='95px'><b>Poseidón</b> es el dios del mar, las tormentas y, como «Agitador de la Tierra», de los terremotos en la mitología griega.",
        gea: "<img src='imagenes/gea.jpg' height='95px'><b>Gea</b> literalmente: «Tierra» es la diosa primigenia que personifica la Tierra en la mitología griega. Es una deidad primordial, considerada la Tierra Madre.",
        urano: "<img src='imagenes/urano.jpg' height='95px'><b>Urano</b> es un dios primordial personificador del cielo. Urano era hijo y esposo de Gea, la Madre Tierra, que, según cuenta Hesíodo en la Teogonía."
    };

    $cuadro.html(data[nombre] || "");
    $cuadro.css({ display: 'block', opacity: 0 }).animate({ opacity: 1 }, 300);
}
