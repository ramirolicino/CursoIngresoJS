/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var porcentaje;
    var resultado;

    sueldo = document.getElementById("sueldo").value;

    porcentaje = sueldo * 10; //NO ES ASI !!!

    resultado = porcentaje;

    document.getElementById("resultado").value = resultado;


}
