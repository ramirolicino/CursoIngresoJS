/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
    var productoUno;
    var productoDos;
    var productoTres;
    var resultado;
    var promedio;
    var precioFinalIVA;
    var IVA;


function Sumar () 
{

    productoUno = document.getElementById("PrecioUno").value;
    productoDos = document.getElementById("PrecioDos").value;
    productoTres = document.getElementById("PrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);
    
    resultado = productoUno + productoDos + productoTres;

    console.log("Suma: "+resultado);

}

function Promedio () 
{

    productoUno = document.getElementById("PrecioUno").value;
    productoDos = document.getElementById("PrecioDos").value;
    productoTres = document.getElementById("PrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    resultado = productoUno + productoDos + productoTres;

    promedio = resultado / 3;

    console.log("Promedio es: " +promedio);


}

function PrecioFinal () 
{

    productoUno = document.getElementById("PrecioUno").value;
    productoDos = document.getElementById("PrecioDos").value;
    productoTres = document.getElementById("PrecioTres").value;

    productoUno = parseInt(productoUno);
    productoDos = parseInt(productoDos);
    productoTres = parseInt(productoTres);

    resultado = productoUno + productoDos + productoTres;

    IVA = 1000* 0.21
    
    precioFinalIVA = resultado + IVA;

    console.log("Precio final + IVA es: " +precioFinalIVA)

}