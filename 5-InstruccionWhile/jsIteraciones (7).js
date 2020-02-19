function mostrar()
{
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

}//FIN DE LA FUNCIÓN