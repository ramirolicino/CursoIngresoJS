function mostrar()
{
    var numero;
    var suma; 
    var descuento;
    var resultado

    do{
        numero = prompt("Ingrese numero");
        numero = parseInt(numero);

    }while(isNaN(numero));

    do{
        descuento = prompt("Ingrese descuento");
        descuento = parseInt(descuento);

    }while(isNaN(descuento));

    resultado = (numero * descuento) / 100;

    precioFinal = numero - resultado;

    document.getElementById("elPrecioFinal").value = precioFinal
    
}
