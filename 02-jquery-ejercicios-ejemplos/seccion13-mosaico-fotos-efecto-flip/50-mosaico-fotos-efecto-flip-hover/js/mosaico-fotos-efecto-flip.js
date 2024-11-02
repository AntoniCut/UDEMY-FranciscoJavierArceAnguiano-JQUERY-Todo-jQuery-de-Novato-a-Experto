//  *************************************************************************************************************************  
//  **********  /01-todo-jquery-de-novato-a-experto/02-jquery-ejercicios-ejemplos/  *****************************************
//  **********  /seccion13-mosaico-fotos-efecto-flip/50-mosaico-fotos-efecto-flip/js/mosaico-fotos-efecto-flip.js  **********  
//  *************************************************************************************************************************  



$(document).ready(function () {
    console.warn('---------- Documento Cargado!!! ----------\n');

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

    const asignadas = [];  // Para controlar las imágenes ya asignadas

    // Crear imágenes y asignar valores dinámicamente
    $(".foto").each(function (index) {
        let numAleat;

        // Generar un número aleatorio que no esté en las imágenes ya asignadas
        do {
            numAleat = Math.floor(Math.random() * fotosFrenteArray.length);
        } while (asignadas.includes(numAleat));

        asignadas.push(numAleat);  // Marcar la imagen como asignada

        $(this).html(`<img src='animales/frente/${fotosFrenteArray[numAleat]}' width='160px' height='160px' />`);
        $(this).attr('data-frente', fotosFrenteArray[numAleat]);
        $(this).attr('data-atras', fotosAtrasArray[numAleat]);
        $(this).attr('id', `banner${index + 1}`);

        // Inicializar el valor 'giraEnCurso' en false
        $(this).data('giraEnCurso', false);
    });

    // Manejar el evento 'mouseenter' para girar la imagen
    $(".foto").on('mouseenter', function () {
        const $banner = $(this);

        // Verificar si ya está girando
        if ($banner.data('giraEnCurso')) return;

        const atras = $banner.attr('data-atras');
        $banner.data('giraEnCurso', true); // Marcar que está girando

        // Iniciar la animación para girar
        $banner.flip({
            direction: "lr",
            onEnd: function () {
                $banner.html(`<img src='animales/atras/${atras}' width='160px' height='160px' />`);
            }
        });
    });

    // Manejar el evento 'mouseleave' para regresar la imagen a su posición original
    $(".foto").on('mouseleave', function () {
        const $banner = $(this);

        // Verificar si ya está girando
        if (!$banner.data('giraEnCurso')) return; // Solo regresar si ya ha girado

        const frente = $banner.attr('data-frente');
        
        // Iniciar la animación para regresar
        $banner.flip({
            direction: "rl",
            onEnd: function () {
                $banner.html(`<img src='animales/frente/${frente}' width='160px' height='160px' />`);
                $banner.data('giraEnCurso', false); // Marcar como no girando al finalizar
            }
        });
    });
});



// $(document).ready(function () {
//     console.warn('---------- Documento Cargado!!! ----------\n');

//     const fotosFrenteArray = [
//         'caballo.jpg',
//         'satiro.jpg',
//         'basilisco.jpg',
//         'centauro.jpg',
//         'fenix.jpg',
//         'unicornio.jpg',
//         'pegaso.jpg',
//         'hidra.gif',
//         'arpia.jpg',
//         'grifo.png',
//         'quimera.jpg',
//         'kraken.jpg',
//         'minotauro.jpg',
//         'medusa.jpg',
//         'sirenas.jpg'
//     ];

//     const fotosAtrasArray = [
//         'caballo.png',
//         'satiro.png',
//         'basilisco.png',
//         'centauro.png',
//         'fenix.png',
//         'unicornio.png',
//         'pegaso.png',
//         'hidra.png',
//         'arpia.png',
//         'grifo.png',
//         'quimera.png',
//         'kraken.png',
//         'minotauro.png',
//         'medusa.png',
//         'sirenas.png'
//     ];

//     const asignadas = [];  // Para controlar las imágenes ya asignadas

//     // Crear imágenes y asignar valores dinámicamente
//     $(".foto").each(function (index) {
        
//         let numAleat;

//         // Generar un número aleatorio que no esté en las imágenes ya asignadas
//         do {
//             numAleat = Math.floor(Math.random() * fotosFrenteArray.length);
//         } while (asignadas.includes(numAleat));

//         asignadas.push(numAleat);  // Marcar la imagen como asignada

//         $(this).html(`<img src='animales/frente/${fotosFrenteArray[numAleat]}' width='160px' height='160px' />`);
//         $(this).attr('data-frente', fotosFrenteArray[numAleat]);
//         $(this).attr('data-atras', fotosAtrasArray[numAleat]);
//         $(this).attr('id', `banner${index + 1}`);

//         // Inicializar el valor 'giraEnCurso' en false
//         $(this).data('giraEnCurso', false);
//     });

//     // Manejar el evento 'mouseenter' para girar la imagen
//     $(".foto").on('mouseenter', function () {
//         const $banner = $(this);

//         // Verificar si ya está girando
//         if ($banner.data('giraEnCurso')) return;

//         const atras = $banner.attr('data-atras');
//         $banner.data('giraEnCurso', true); // Marcar que está girando

//         // Iniciar la animación para girar
//         $banner.flip({
//             direction: "lr",
//             onEnd: function () {
//                 $banner.html(`<img src='animales/atras/${atras}' width='160px' height='160px' />`);
//                 $banner.data('giraEnCurso', false); // Marcar como no girando al finalizar
//             }
//         });
//     });

//     // Manejar el evento 'mouseleave' para regresar la imagen a su posición original
//     $(".foto").on('mouseleave', function () {
//         const $banner = $(this);

//         // Verificar si ya está girando
//         if ($banner.data('giraEnCurso')) return;

//         const frente = $banner.attr('data-frente');
//         $banner.data('giraEnCurso', true); // Marcar que está girando

//         // Iniciar la animación para regresar
//         $banner.flip({
//             direction: "rl",
//             onEnd: function () {
//                 $banner.html(`<img src='animales/frente/${frente}' width='160px' height='160px' />`);
//                 $banner.data('giraEnCurso', false); // Marcar como no girando al finalizar
//             }
//         });
        
//     });
// });














