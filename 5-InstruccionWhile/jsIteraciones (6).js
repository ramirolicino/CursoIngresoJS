function mostrar()
{
	/*
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
	*/
	//Inicio
	var numero;
	var contador = 0;
	var acumulador = 0;
	var promedio;

	while(contador < 5){
		contador++;
		
		do{
			numero = prompt("Ingrese el numero");
			numero = parseInt(numero);
		}while(isNaN(numero));

		acumulador += numero;
	}

	promedio = acumulador / 5;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;
	
}//FIN DE LA FUNCIÓN