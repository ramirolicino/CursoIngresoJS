function mostrar()
{

	var contador=0;
	var acumulador=0;
	var numero;
	
	while (contador < 5){
		contador++;
		numero = prompt("Ingrese un numero");

		numero = parseInt(numero);

		while (isNaN(numero)){
			numero = prompt("Error!!! Ingrese un numero");
			numero = parseInt(numero);
		}
		
		acumulador += numero;
	}

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN