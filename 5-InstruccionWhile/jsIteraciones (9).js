function mostrar()
{

	var contador=0;
	var respuesta='si';
	var numero;
	var maximo;
	var minimo;
	var primeraVez;


	while(respuesta!='no')
	{
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);
		
			while (isNaN(numero)){
				numero = prompt("Error!!! Ingrese un numero");
				numero = parseInt(numero);
			}
		if(primeraVez){
			primeraVez = false;
			maximo = numero;
			minimo = numero;
		}	
			
		if (numero > maximo){
			maximo = numero;
		}
		if (numero < minimo){
			minimo = numero;
		}
			
		respuesta = prompt("Desea continuar?");
	}


document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;

}//FIN DE LA FUNCIÓN