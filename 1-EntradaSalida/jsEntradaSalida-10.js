/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
    var importe;
    var resultado;
    var precioFinal;

    importe = document.getElementById("importe").value;
    importe = parseInt(importe);

    resultado = importe * 0.25;

    precioFinal = importe - resultado;

    document.getElementById("resultado").value = precioFinal;


}
