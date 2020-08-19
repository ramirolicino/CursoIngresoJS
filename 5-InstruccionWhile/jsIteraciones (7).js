function mostrar()
{
	/*
	var contador=0;
	var acumulador=0;
	var numero;
	var interaccion;

	interaccion = prompt("Cuantos numeros desea agregar?");
	interaccion = parseInt(interaccion);

	while (isNaN(interaccion)){
		interaccion = prompt("Cuantos numeros desea agregar?");
		interaccion = parseInt(interaccion);
	}
	
	while (contador < interaccion){
		
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
	document.getElementById('promedio').value=acumulador/contador;
	*/
	//Inicio
	var numero;
	var acumulador = 0;
	var contador = 0;
	var promedio;
	
	while(confirm("Desea continuar?")){
		contador++;

		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}while(isNaN(numero));

		acumulador += numero;

	}

	promedio = acumulador / contador;

	document.getElementById('suma').value = acumulador;
	document.getElementById('promedio').value = promedio;


	
}//FIN DE LA FUNCIÓN