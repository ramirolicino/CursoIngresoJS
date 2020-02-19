function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	/*
	var interaccion;
	
	interaccion = prompt("Cuantos numeros desea agregar?");
	interaccion = parseInt(interaccion);
	
	while (isNaN(interaccion)){
		interaccion = prompt("Cuantos numeros desea agregar?");
		interaccion = parseInt(interaccion);
	}
	*/	
	while (confirm("Desea continuar??")){

		contador++;
		/*
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		while(isNaN(numero)){
			numero = prompt("Error!!! Ingrese un numero");
			numero = parseInt(numero);
		}*/
		do {
			numero = prompt("Error!!! Ingrese un numero");
			numero = parseInt(numero);

		}while(isNaN(numero));

		if(numero >=0){
			positivo += numero;
		} else {
			negativo *= numero;
		}
	}

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN