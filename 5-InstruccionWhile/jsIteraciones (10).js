function mostrar()
{

	var contador=0;
	//declarar contadores y variables 
	
	var respuesta="si";
	var numero;
	var positivo = 0;
	var negativo = 1;
	var cantidadCero;
	var numerosPares;
	var promedio;
	var diferencia;

	while(respuesta!="no")
	{
		do{
			numero = prompt("Ingresa un numero");
			numero = parseInt(numero);

		} while(isNaN(numero));


		contador++;

		if(numero >=0){
			positivo += numero;
		} else {
			negativo += numero;
		}

		console.log("La suma esP "+positivo);
		console.log("La suma esN "+negativo);
		console.log(numero);
		

		

		respuesta = prompt("Desea continuar??");	
	}




}//FIN DE LA FUNCIÓN