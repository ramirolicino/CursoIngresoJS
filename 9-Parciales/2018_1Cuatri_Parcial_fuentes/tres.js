function mostrar()
{
    var precio;
    var descuento;
    var resultado;
    var precioFinal;

    precio = parseInt(precio);
    descuento = parseInt(descuento);
 
    while(isNaN(precio) && isNaN(descuento)){

        precio = prompt("Ingresa el precio");
        descuento = prompt("Ingresa el descuento");

        resultado = (descuento * precio) / 100
        
        precioFinal = precio - resultado;
    }

    document.getElementById("elPrecioFinal").value = precioFinal

}
