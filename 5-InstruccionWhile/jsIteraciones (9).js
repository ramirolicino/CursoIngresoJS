function mostrar()
{
	var numero;
	var respuesta = true;
	var primeraVez = true;
	var numeroMax;
	var numeroMin;

	while(respuesta){
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);

		}while(isNaN(numero));
		
		if(primeraVez){
			primeraVez = false;
			numeroMax = numero;
			numeroMin = numero;

		}

		if(numero > numeroMax){
			numeroMax = numero;
		}else if (numero < numeroMin){
			numeroMin = numero;
		}

		console.log(numero);

		respuesta = confirm("Desea continuar?");
	}

	document.getElementById("maximo").value = numeroMax;
	document.getElementById("minimo").value = numeroMin;


}//FIN DE LA FUNCIÓN