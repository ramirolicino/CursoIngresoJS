function mostrar()
{
	/*
	var numero;
	var respuesta = true;
	var sumaNumeros = 0;
	var multiNumeros = 1;


	while(respuesta) {
		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);

		}while(isNaN(numero));

		if(numero > 0) {
			sumaNumeros += numero;
		}

		if(numero < 0){
			multiNumeros *= numero;
		}

		console.log(numero);

		respuesta = confirm("Desea continuar?");
	}

	console.log(sumaNumeros);
	console.log(".");
	console.log(multiNumeros);
	*/
	//Inicio
	var numero;
	var sumaNumero = 0;
	var multiNumero = 1;
	var respuesta = true;

	while(respuesta){

		do{
			numero = prompt("Ingrese un numero");
			numero = parseInt(numero);
		}while(isNaN(numero));

		if(numero > 0){
			sumaNumero += numero;
		}

		if(numero < 0){
			multiNumero *= numero;
		}

		console.log(numero);
		
		respuesta = confirm("Desea continuar?");


	}

	document.getElementById("suma").value = sumaNumero;
	document.getElementById("producto").value = multiNumero;





}//FIN DE LA FUNCIÓN