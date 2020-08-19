function mostrar()
{
	/*
	var numero = prompt("ingrese un número entre 0 y 10.");
	
	while(numero < 0 || numero > 9 || isNaN(numero)) {
		
		numero = prompt("Ingrese numero valido");
		numero = parseInt(numero);
	} 

	document.getElementById("Numero").value = numero +" numero correcto"
	*/
	//Inicio
	var numero = prompt("Ingresa un numero entre 0 y 10");

	do{
		numero = prompt("Ingresa un numero entre 0 y 10");
		numero = parseInt(numero);
	}while(isNaN(numero) || numero < 0 || numero > 10);

	document.getElementById("Numero").value = numero +" numero correcto"
	
}//FIN DE LA FUNCIÓN