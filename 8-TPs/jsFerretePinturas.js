/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/

    

function FahrenheitCentigrados () 
{
    var tempF = document.getElementById("Temperatura").value;
    var resultado;

    resultado = ((tempF - 32) * 5) / 9;

    console.log("f -> c "+resultado);

}

function CentigradosFahrenheit () 
{
	var tempC = document.getElementById("Temperatura").value;
    var resultado;

    resultado = ((tempC * 9) / 5)  + 32;

    console.log("c -> f "+resultado);
}
