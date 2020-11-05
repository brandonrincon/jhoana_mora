var currentBackground = 0;
var segundosEspera=5
//Lista de fondos
var backgrounds = [];
backgrounds[0] = 'Imagenes/galeri/gal2.jpg';
backgrounds[1] = 'Imagenes/galeri/gal2.jpg';
backgrounds[2] = 'Imagenes/galeri/gal3.jpg';
backgrounds[3] = 'Imagenes/galeri/gal4.jpg';
backgrounds[4] = 'Imagenes/galeri/gal5.jpg';
backgrounds[5] = 'Imagenes/galeri/gal6.jpg';
//Cambio de fondo
function changeBackground() {
    currentBackground++;
    //Reset indice 
    if(currentBackground > 5) currentBackground = 0;
    var elem = $('#img-carrousel');
    //Efecto de transicion
    elem.fadeOut(500,function() {
            elem.attr("src",backgrounds[currentBackground]);
            elem.fadeIn(500);
        });
    setTimeout(changeBackground, segundosEspera*1000);
}
// Invocar funcion
$(document).ready(function() {
        changeBackground();
});